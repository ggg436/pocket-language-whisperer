
import React from 'react';
import { Button } from '@/components/ui/button';
import LanguageSelector from '@/components/LanguageSelector';
import TranslationInput from '@/components/TranslationInput';
import VoiceConversation from '@/components/VoiceConversation';
import { TranslationProvider, useTranslation } from '@/context/TranslationContext';
import HistoryDrawer from '@/components/HistoryDrawer';
import { History, ArrowLeftRight, Globe } from 'lucide-react';
import { getLanguageName } from '@/data/languages';

const TranslatorApp: React.FC = () => {
  const { sourceLanguage, targetLanguage, setSourceLanguage, setTargetLanguage, swapLanguages } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col bg-app-bg">
      <header className="px-4 py-2 border-b border-gray-100 bg-white shadow-sm">
        <div className="flex items-center justify-between max-w-3xl mx-auto">
          <div className="flex items-center">
            <h1 className="text-lg font-medium text-google-blue">
              <span className="text-google-blue">P</span>
              <span className="text-google-red">o</span>
              <span className="text-google-yellow">c</span>
              <span className="text-google-blue">k</span>
              <span className="text-google-green">e</span>
              <span className="text-google-red">t</span>
              <span className="ml-2">Translate</span>
            </h1>
            <div className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
              Pro
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="text-gray-500 hidden md:flex items-center gap-1">
              <Globe className="h-4 w-4" />
              <span className="text-sm">Offline Mode</span>
            </Button>
            <HistoryDrawer>
              <Button variant="ghost" size="sm" className="text-gray-500 flex items-center gap-1">
                <History className="h-4 w-4" />
                <span className="hidden sm:inline text-sm">History</span>
              </Button>
            </HistoryDrawer>
          </div>
        </div>
      </header>

      <main className="flex-1 p-4 flex flex-col">
        <div className="max-w-3xl mx-auto w-full my-4">
          <div className="flex flex-wrap gap-2 items-center justify-center mb-4">
            <div className="flex-1 min-w-[150px]">
              <LanguageSelector
                value={sourceLanguage}
                onChange={setSourceLanguage}
                label="Translate from"
              />
            </div>
            
            <Button
              variant="ghost"
              onClick={swapLanguages}
              className="px-2 mx-0 sm:mx-2 hover:bg-gray-100"
              aria-label="Swap languages"
            >
              <ArrowLeftRight className="h-4 w-4" />
            </Button>
            
            <div className="flex-1 min-w-[150px]">
              <LanguageSelector
                value={targetLanguage}
                onChange={setTargetLanguage}
                label="Translate to"
              />
            </div>
          </div>

          <div className="text-center text-sm text-gray-500 mb-3">
            Translating from <span className="font-medium">{getLanguageName(sourceLanguage)}</span> to <span className="font-medium">{getLanguageName(targetLanguage)}</span>
          </div>

          <TranslationInput />
          <VoiceConversation />
        </div>
      </main>

      <footer className="py-3 text-center text-xs text-gray-500 border-t border-gray-100">
        <p>Works completely offline. No internet connection required.</p>
      </footer>
    </div>
  );
};

const Index: React.FC = () => {
  return (
    <TranslationProvider>
      <TranslatorApp />
    </TranslationProvider>
  );
};

export default Index;
