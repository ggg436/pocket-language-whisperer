import React, { createContext, useContext, useState, useEffect } from 'react';
import { TranslationHistory } from '@/types/translation';

interface TranslationContextType {
  sourceLanguage: string;
  targetLanguage: string;
  setSourceLanguage: (lang: string) => void;
  setTargetLanguage: (lang: string) => void;
  swapLanguages: () => void;
  history: TranslationHistory[];
  addToHistory: (translation: TranslationHistory) => void;
  clearHistory: () => void;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};

export const TranslationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sourceLanguage, setSourceLanguage] = useState('en');
  const [targetLanguage, setTargetLanguage] = useState('es');
  const [history, setHistory] = useState<TranslationHistory[]>([]);

  // Load history from localStorage on initial load
  useEffect(() => {
    const savedHistory = localStorage.getItem('translationHistory');
    if (savedHistory) {
      try {
        setHistory(JSON.parse(savedHistory));
      } catch (error) {
        console.error('Failed to parse translation history:', error);
      }
    }
  }, []);

  // Save history to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('translationHistory', JSON.stringify(history));
  }, [history]);

  const swapLanguages = () => {
    setSourceLanguage(targetLanguage);
    setTargetLanguage(sourceLanguage);
  };

  const addToHistory = (translation: TranslationHistory) => {
    setHistory(prevHistory => {
      // Only add if it's not a duplicate
      if (!prevHistory.some(item => 
        item.sourceText === translation.sourceText && 
        item.sourceLanguage === translation.sourceLanguage &&
        item.targetLanguage === translation.targetLanguage
      )) {
        // Keep the most recent 20 translations
        return [translation, ...prevHistory].slice(0, 20);
      }
      return prevHistory;
    });
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem('translationHistory');
  };

  return (
    <TranslationContext.Provider
      value={{
        sourceLanguage,
        targetLanguage,
        setSourceLanguage,
        setTargetLanguage,
        swapLanguages,
        history,
        addToHistory,
        clearHistory,
      }}
    >
      {children}
    </TranslationContext.Provider>
  );
};
