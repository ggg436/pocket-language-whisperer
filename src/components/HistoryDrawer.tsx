
import React from 'react';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useTranslation } from '@/context/TranslationContext';
import { getLanguageName } from '@/data/languages';
import { Volume } from 'lucide-react';
import { speakText } from '@/services/translationService';
import { ScrollArea } from '@/components/ui/scroll-area';
import { formatDistanceToNow } from 'date-fns';

interface HistoryDrawerProps {
  children: React.ReactNode;
}

const HistoryDrawer: React.FC<HistoryDrawerProps> = ({ children }) => {
  const { history, clearHistory } = useTranslation();

  const handleSpeak = (text: string, language: string) => {
    speakText(text, language);
  };

  return (
    <Drawer>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent className="max-h-[85vh]">
        <DrawerHeader>
          <DrawerTitle>Translation History</DrawerTitle>
          <DrawerDescription>
            Your recent translations are saved locally on your device.
          </DrawerDescription>
        </DrawerHeader>
        <ScrollArea className="h-[50vh] px-4">
          {history.length === 0 ? (
            <div className="flex items-center justify-center h-40 text-gray-400">
              No translation history yet
            </div>
          ) : (
            <div className="space-y-4">
              {history.map((item) => (
                <div key={item.id} className="space-y-2">
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>
                      {getLanguageName(item.sourceLanguage)} → {getLanguageName(item.targetLanguage)}
                    </span>
                    <span>{formatDistanceToNow(item.timestamp, { addSuffix: true })}</span>
                  </div>
                  
                  <div className="bg-white p-3 rounded-md">
                    <div className="flex justify-between">
                      <p className="text-sm">{item.sourceText}</p>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleSpeak(item.sourceText, item.sourceLanguage)}
                        className="h-6 w-6 p-0"
                      >
                        <Volume className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="bg-card-bg p-3 rounded-md">
                    <div className="flex justify-between">
                      <p className="text-sm">{item.translatedText}</p>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleSpeak(item.translatedText, item.targetLanguage)}
                        className="h-6 w-6 p-0"
                      >
                        <Volume className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  
                  <Separator className="my-2" />
                </div>
              ))}
            </div>
          )}
        </ScrollArea>
        <DrawerFooter className="pt-2">
          <Button variant="outline" onClick={clearHistory} disabled={history.length === 0}>
            Clear History
          </Button>
          <DrawerClose asChild>
            <Button variant="ghost">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default HistoryDrawer;
