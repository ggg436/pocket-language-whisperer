
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { translateText, speakText, detectLanguage } from '@/services/translationService';
import { getLanguageName } from '@/data/languages';
import { useTranslation } from '@/context/TranslationContext';
import { Volume, Loader2, Copy } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const TranslationInput: React.FC = () => {
  const [sourceText, setSourceText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [isTranslating, setIsTranslating] = useState(false);
  const { sourceLanguage, targetLanguage, addToHistory } = useTranslation();
  const { toast } = useToast();

  // Effect to handle translation when text, source, or target language changes
  useEffect(() => {
    const translateTextWithDelay = setTimeout(async () => {
      if (sourceText.trim()) {
        setIsTranslating(true);
        try {
          const result = await translateText(sourceText, sourceLanguage, targetLanguage);
          setTranslatedText(result.translatedText);
          
          // Add to history if translation is different from source
          if (result.translatedText && result.translatedText !== sourceText) {
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
            description: "There was an error translating your text.",
            variant: "destructive",
          });
        } finally {
          setIsTranslating(false);
        }
      } else {
        setTranslatedText('');
      }
    }, 500); // Debounce for 500ms

    return () => clearTimeout(translateTextWithDelay);
  }, [sourceText, sourceLanguage, targetLanguage, addToHistory, toast]);

  const handleSourceTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSourceText(e.target.value);
  };

  const handleClearText = () => {
    setSourceText('');
    setTranslatedText('');
  };

  const handleDetectLanguage = async () => {
    if (sourceText.trim()) {
      const detectedLang = detectLanguage(sourceText);
      toast({
        title: "Language detected",
        description: `Detected language: ${getLanguageName(detectedLang)}`,
      });
    }
  };

  const handleSpeak = (text: string, language: string) => {
    speakText(text, language);
  };

  const handleCopyText = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast({
        title: "Copied",
        description: "Text copied to clipboard",
      });
    });
  };

  return (
    <div className="flex flex-col w-full max-w-3xl mx-auto">
      <h2 className="text-center text-lg font-medium mb-4">Text Translation</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 w-full">
        {/* Source Text */}
        <Card className="relative p-4 bg-white shadow-sm">
          <Textarea
            value={sourceText}
            onChange={handleSourceTextChange}
            placeholder="Enter text to translate"
            className="min-h-[150px] resize-none border-0 bg-transparent focus-visible:ring-0 text-md p-0"
          />
          <div className="flex justify-between mt-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleSpeak(sourceText, sourceLanguage)}
              disabled={!sourceText}
              className="text-gray-500"
            >
              <Volume className="h-4 w-4 mr-1" />
              <span className="text-xs">Listen</span>
            </Button>
            <div className="flex space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleDetectLanguage}
                disabled={!sourceText}
                className="text-xs text-google-blue"
              >
                Detect
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleCopyText(sourceText)}
                disabled={!sourceText}
                className="text-xs text-gray-500"
              >
                <Copy className="h-3 w-3 mr-1" />
                Copy
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleClearText}
                disabled={!sourceText}
                className="text-xs text-google-red"
              >
                Clear
              </Button>
            </div>
          </div>
        </Card>

        {/* Translated Text */}
        <Card className="relative p-4 bg-card-bg shadow-sm">
          <div className="min-h-[150px]">
            {isTranslating ? (
              <div className="h-full flex items-center justify-center">
                <Loader2 className="h-5 w-5 animate-spin text-google-blue mr-2" />
                <span className="text-gray-400">Translating...</span>
              </div>
            ) : (
              <div className="text-md">
                {translatedText || (
                  <span className="text-gray-400">Translation will appear here</span>
                )}
              </div>
            )}
          </div>
          <div className="flex justify-between mt-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleSpeak(translatedText, targetLanguage)}
              disabled={!translatedText}
              className="text-gray-500"
            >
              <Volume className="h-4 w-4 mr-1" />
              <span className="text-xs">Listen</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleCopyText(translatedText)}
              disabled={!translatedText}
              className="text-gray-500"
            >
              <Copy className="h-3 w-3 mr-1" />
              <span className="text-xs">Copy</span>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default TranslationInput;
