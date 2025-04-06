
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { translateText, speakText, startSpeechRecognition } from '@/services/translationService';
import { useTranslation } from '@/context/TranslationContext';
import { Mic, MicOff, Volume, Loader2 } from 'lucide-react';

const VoiceConversation: React.FC = () => {
  const [isListening, setIsListening] = useState(false);
  const [isTranslating, setIsTranslating] = useState(false);
  const [sourceText, setSourceText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const stopRecognitionRef = useRef<(() => void) | null>(null);
  const { sourceLanguage, targetLanguage, addToHistory } = useTranslation();
  const { toast } = useToast();
  
  // Clean up recognition on unmount
  useEffect(() => {
    return () => {
      if (stopRecognitionRef.current) {
        stopRecognitionRef.current();
      }
    };
  }, []);

  // Translate when source text changes
  useEffect(() => {
    const translateSourceText = async () => {
      if (!sourceText) return;
      
      setIsTranslating(true);
      try {
        const result = await translateText(sourceText, sourceLanguage, targetLanguage);
        setTranslatedText(result.translatedText);
        
        // Automatically speak the translation
        if (result.translatedText) {
          speakText(result.translatedText, targetLanguage);
          
          // Add to history
          addToHistory({
            id: Date.now().toString(),
            sourceText,
            translatedText: result.translatedText,
            sourceLanguage,
            targetLanguage,
            timestamp: Date.now(),
          });
        }
      } catch (error) {
        console.error('Translation error:', error);
        toast({
          title: "Translation failed",
          description: "There was an error translating your speech.",
          variant: "destructive",
        });
      } finally {
        setIsTranslating(false);
      }
    };
    
    if (sourceText) {
      translateSourceText();
    }
  }, [sourceText, sourceLanguage, targetLanguage, addToHistory, toast]);

  const toggleListening = () => {
    if (isListening && stopRecognitionRef.current) {
      stopRecognitionRef.current();
      stopRecognitionRef.current = null;
      setIsListening(false);
      return;
    }
    
    setIsListening(true);
    setSourceText('');
    setTranslatedText('');
    
    // Request microphone permission
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(() => {
        toast({
          title: "Listening",
          description: `Speak in ${sourceLanguage} and I'll translate to ${targetLanguage}`,
        });
        
        stopRecognitionRef.current = startSpeechRecognition(
          sourceLanguage,
          (text) => {
            setSourceText(text);
          },
          () => {
            setIsListening(false);
          }
        );
      })
      .catch((error) => {
        console.error('Microphone permission denied:', error);
        toast({
          title: "Microphone access denied",
          description: "Please allow access to your microphone to use voice translation.",
          variant: "destructive",
        });
        setIsListening(false);
      });
  };

  return (
    <div className="mt-6 mb-4">
      <h2 className="text-center text-lg font-medium mb-4">Voice Conversation</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 w-full">
        {/* Source Speech */}
        <Card className="relative p-4 bg-white shadow-sm">
          <div className="min-h-[100px] mb-2">
            {sourceText ? (
              <p>{sourceText}</p>
            ) : (
              <p className="text-gray-400">
                {isListening 
                  ? "Listening..." 
                  : "Tap the microphone button and speak"}
              </p>
            )}
          </div>
          <div className="flex justify-between items-center">
            <Button
              variant="outline"
              size="sm"
              onClick={() => speakText(sourceText, sourceLanguage)}
              disabled={!sourceText}
              className="text-gray-500"
            >
              <Volume className="h-4 w-4 mr-1" />
              <span className="text-xs">Listen</span>
            </Button>
            <Button
              variant={isListening ? "destructive" : "default"}
              onClick={toggleListening}
              className="rounded-full w-12 h-12 p-0 flex items-center justify-center"
            >
              {isListening ? (
                <MicOff className="h-6 w-6" />
              ) : (
                <Mic className="h-6 w-6" />
              )}
            </Button>
          </div>
        </Card>

        {/* Translated Speech */}
        <Card className="relative p-4 bg-card-bg shadow-sm">
          <div className="min-h-[100px] mb-2">
            {isTranslating ? (
              <div className="flex items-center justify-center h-full">
                <Loader2 className="h-5 w-5 animate-spin text-google-blue mr-2" />
                <span className="text-gray-400">Translating...</span>
              </div>
            ) : translatedText ? (
              <p>{translatedText}</p>
            ) : (
              <p className="text-gray-400">Translation will appear here</p>
            )}
          </div>
          <div className="flex justify-end">
            <Button
              variant="outline"
              size="sm"
              onClick={() => speakText(translatedText, targetLanguage)}
              disabled={!translatedText}
              className="text-gray-500"
            >
              <Volume className="h-4 w-4 mr-1" />
              <span className="text-xs">Listen</span>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default VoiceConversation;
