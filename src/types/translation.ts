
export interface Language {
  code: string;
  name: string;
}

export interface TranslationHistory {
  id: string;
  sourceText: string;
  translatedText: string;
  sourceLanguage: string;
  targetLanguage: string;
  timestamp: number;
}

export interface TranslationResult {
  translatedText: string;
  phonetic?: string;  // Added phonetic translation for non-Latin script languages
  detectedLanguage?: string;
}

