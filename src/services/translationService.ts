import { TranslationResult } from '@/types/translation';

// Enhanced translation datasets for more comprehensive translation
const translationDatasets: Record<string, Record<string, Record<string, string>>> = {
  en: {
    es: {
      'hello': 'hola',
      'goodbye': 'adiós',
      'how are you': 'cómo estás',
      'thank you': 'gracias',
      'yes': 'sí',
      'no': 'no',
      'please': 'por favor',
      'excuse me': 'disculpe',
      'i love you': 'te quiero',
      'what is your name': 'cuál es tu nombre',
      'my name is': 'mi nombre es',
      'where is': 'dónde está',
      'i don\'t understand': 'no entiendo',
      'help': 'ayuda',
      'sorry': 'lo siento',
      'good morning': 'buenos días',
      'good afternoon': 'buenas tardes',
      'good evening': 'buenas noches',
      'how much is this': 'cuánto cuesta esto',
      'do you speak english': 'hablas inglés',
      'what': 'qué',
      'are': 'estás',
      'you': 'tú',
      'doing': 'haciendo',
      'what are you doing': 'qué estás haciendo',
      'hello what are you doing': 'hola qué estás haciendo',
    },
    fr: {
      'hello': 'bonjour',
      'goodbye': 'au revoir',
      'how are you': 'comment ça va',
      'thank you': 'merci',
      'yes': 'oui',
      'no': 'non',
      'please': 's\'il vous plaît',
      'excuse me': 'excusez-moi',
      'i love you': 'je t\'aime',
      'what is your name': 'comment t\'appelles-tu',
      'my name is': 'je m\'appelle',
      'where is': 'où est',
      'i don\'t understand': 'je ne comprends pas',
      'help': 'aidez-moi',
      'sorry': 'désolé',
      'good morning': 'bonjour',
      'good afternoon': 'bon après-midi',
      'good evening': 'bonsoir',
      'how much is this': 'combien ça coûte',
      'do you speak english': 'parlez-vous anglais',
      'what': 'quoi',
      'are': 'êtes',
      'you': 'vous',
      'faisant': 'faisant',
      'qu\'est-ce que vous faites': 'qu\'est-ce que vous faites',
    },
    // ... other language pairs can be added here
  },
  es: {
    en: {
      'hola': 'hello',
      'adiós': 'goodbye',
      'cómo estás': 'how are you',
      'gracias': 'thank you',
      'sí': 'yes',
      'no': 'no',
      'por favor': 'please',
      'disculpe': 'excuse me',
      'te quiero': 'i love you',
      'cuál es tu nombre': 'what is your name',
      'mi nombre es': 'my name is',
      'dónde está': 'where is',
      'no entiendo': 'i don\'t understand',
      'ayuda': 'help',
      'lo siento': 'sorry',
      'buenos días': 'good morning',
      'buenas tardes': 'good afternoon',
      'buenas noches': 'good evening',
      'cuánto cuesta esto': 'how much is this',
      'hablas inglés': 'do you speak english',
      'qué': 'what',
      'estás': 'are',
      'tú': 'you',
      'haciendo': 'doing',
      'qué estás haciendo': 'what are you doing',
      'hola qué estás haciendo': 'hello what are you doing',
    },
    // ... other language pairs
  },
  fr: {
    en: {
      'bonjour': 'hello',
      'au revoir': 'goodbye',
      'comment ça va': 'how are you',
      'merci': 'thank you',
      'oui': 'yes',
      'non': 'no',
      's\'il vous plaît': 'please',
      'excusez-moi': 'excuse me',
      'je t\'aime': 'i love you',
      'comment t\'appelles-tu': 'what is your name',
      'je m\'appelle': 'my name is',
      'où est': 'where is',
      'je ne comprends pas': 'i don\'t understand',
      'aidez-moi': 'help',
      'désolé': 'sorry',
      'bon après-midi': 'good afternoon',
      'bonsoir': 'good evening',
      'combien ça coûte': 'how much is this',
      'parlez-vous anglais': 'do you speak english',
      'quoi': 'what',
      'êtes': 'are',
      'vous': 'you',
      'faisant': 'faisant',
      'qu\'est-ce que vous faites': 'what are you doing',
    },
    // ... other language pairs
  },
  // Add more source languages as needed
};

// Language detection patterns
const languagePatterns: Record<string, RegExp> = {
  en: /\b(the|is|are|am|was|were|have|has|had|this|that|these|those)\b/i,
  es: /[áéíóúüñ¿¡]|(\b(el|la|los|las|es|son|está|están|tengo|tiene|tienen|este|esta|estos|estas)\b)/i,
  fr: /[àâçéèêëîïôùûüÿœæ]|(\b(le|la|les|est|sont|avoir|avez|cette|ces|cette|ces)\b)/i,
  de: /[äöüß]|(\b(das|der|die|ist|sind|haben|hat|diese|dieser|dieses)\b)/i,
  it: /[àèéìíîòóùú]|(\b(il|lo|la|i|gli|le|è|sono|ha|hanno|questo|questa|questi|queste)\b)/i,
  pt: /[áàâãéêíóôõúç]|(\b(o|a|os|as|é|são|tem|têm|este|esta|estes|estas)\b)/i,
  nl: /[ĳ]|(\b(de|het|is|zijn|hebben|heeft|deze|dit|die|dat)\b)/i,
  ru: /[абвгдеёжзийклмнопрстуфхцчшщъыьэюя]/i,
  ar: /[\u0600-\u06FF]/,
  hi: /[\u0900-\u097F]/,
  zh: /[\u4E00-\u9FFF]/,
  ja: /[\u3040-\u309F\u30A0-\u30FF]/,
  ko: /[\uAC00-\uD7AF\u1100-\u11FF]/,
};

/**
 * Improved language detection function
 */
export const detectLanguage = (text: string): string => {
  if (!text.trim()) return 'en';
  
  // Check against language patterns
  for (const [langCode, pattern] of Object.entries(languagePatterns)) {
    if (pattern.test(text)) {
      return langCode;
    }
  }
  
  // Default to English if no pattern matches
  return 'en';
};

/**
 * Improved translation function that attempts to translate entire phrases first
 * and then falls back to word-by-word translation if necessary
 */
export const translateText = async (
  text: string, 
  sourceLanguage: string, 
  targetLanguage: string
): Promise<TranslationResult> => {
  // Return early if source and target languages are the same
  if (sourceLanguage === targetLanguage) {
    return { translatedText: text };
  }
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  // Handle auto-detection
  const detectedLanguage = sourceLanguage === 'auto' ? detectLanguage(text) : undefined;
  const actualSourceLanguage = detectedLanguage || sourceLanguage;
  
  // If languages are the same after detection, don't translate
  if (actualSourceLanguage === targetLanguage) {
    return { translatedText: text, detectedLanguage };
  }
  
  const lowerText = text.toLowerCase().trim();
  
  // First try to translate the entire text as a single phrase
  if (translationDatasets[actualSourceLanguage]?.[targetLanguage]?.[lowerText]) {
    return {
      translatedText: translationDatasets[actualSourceLanguage][targetLanguage][lowerText],
      detectedLanguage
    };
  }
  
  // Next, try to translate sentence by sentence
  const sentences = lowerText.split(/[.!?]+/).filter(s => s.trim().length > 0);
  if (sentences.length > 1) {
    const translatedSentences = sentences.map(sentence => {
      const trimmedSentence = sentence.trim();
      if (translationDatasets[actualSourceLanguage]?.[targetLanguage]?.[trimmedSentence]) {
        return translationDatasets[actualSourceLanguage][targetLanguage][trimmedSentence];
      }
      return translatePhrase(trimmedSentence, actualSourceLanguage, targetLanguage);
    });
    
    return {
      translatedText: translatedSentences.join('. '),
      detectedLanguage
    };
  }
  
  // Otherwise translate the input as a single phrase
  return {
    translatedText: translatePhrase(lowerText, actualSourceLanguage, targetLanguage),
    detectedLanguage
  };
};

/**
 * Helper function to translate a phrase by attempting to match common patterns
 * and falling back to word-by-word translation
 */
function translatePhrase(phrase: string, sourceLanguage: string, targetLanguage: string): string {
  // Check if common phrases exist in our dataset
  for (const [key, value] of Object.entries(translationDatasets[sourceLanguage]?.[targetLanguage] || {})) {
    if (phrase.includes(key)) {
      // Replace the known phrase
      phrase = phrase.replace(new RegExp('\\b' + key + '\\b', 'gi'), value);
    }
  }
  
  // If the phrase couldn't be completely translated by pattern matching,
  // fall back to word-by-word translation
  if (containsUntranslatedWords(phrase, sourceLanguage)) {
    const words = phrase.split(' ');
    const translatedWords = words.map(word => {
      const lowerWord = word.toLowerCase();
      
      // Try to find this word in our dictionary
      if (translationDatasets[sourceLanguage]?.[targetLanguage]?.[lowerWord]) {
        // Preserve original capitalization
        if (word[0] === word[0].toUpperCase()) {
          return translationDatasets[sourceLanguage][targetLanguage][lowerWord].charAt(0).toUpperCase() + 
                translationDatasets[sourceLanguage][targetLanguage][lowerWord].slice(1);
        }
        return translationDatasets[sourceLanguage][targetLanguage][lowerWord];
      }
      
      // If no translation found, apply simple transformations based on language
      return applySimpleTransformation(word, sourceLanguage, targetLanguage);
    });
    
    return translatedWords.join(' ');
  }
  
  return phrase;
}

/**
 * Check if the phrase still contains words from the source language
 */
function containsUntranslatedWords(phrase: string, sourceLanguage: string): boolean {
  // Simplified check - this would need to be more sophisticated in a real app
  const patterns = {
    'en': /\b(the|is|are|am|was|were|have|has|had|do|does|did|can|could|what|where|when|how|who|why)\b/i,
    'es': /\b(el|la|los|las|es|son|está|están|tengo|tiene|tienen|hacer|hace|hizo|puede|qué|dónde|cuándo|cómo|quién|por qué)\b/i,
    'fr': /\b(le|la|les|est|sont|avoir|avez|fait|faire|peut|quoi|où|quand|comment|qui|pourquoi)\b/i,
  };
  
  return patterns[sourceLanguage as keyof typeof patterns]?.test(phrase) || false;
}

/**
 * Apply simple character transformations as a fallback
 */
function applySimpleTransformation(word: string, sourceLanguage: string, targetLanguage: string): string {
  // Very simple character replacements as fallback
  if (targetLanguage === 'es' && sourceLanguage === 'en') {
    return word
      .replace(/th/g, 't')
      .replace(/the/g, 'el')
      .replace(/is/g, 'es')
      .replace(/and/g, 'y')
      .replace(/ing\b/g, 'ando');
  } else if (targetLanguage === 'fr' && sourceLanguage === 'en') {
    return word
      .replace(/th/g, 't')
      .replace(/the/g, 'le')
      .replace(/is/g, 'est')
      .replace(/and/g, 'et')
      .replace(/ing\b/g, 'ant');
  } else if (targetLanguage === 'en' && (sourceLanguage === 'es' || sourceLanguage === 'fr')) {
    return word; // Keep original for now
  }
  
  // Default: return the original word
  return word;
}

// Text-to-speech service with improved language support
export const speakText = (text: string, language: string): void => {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Map language codes to BCP 47 language tags for better compatibility
    const languageMap: Record<string, string> = {
      'en': 'en-US',
      'es': 'es-ES',
      'fr': 'fr-FR',
      'de': 'de-DE',
      'it': 'it-IT',
      'pt': 'pt-BR',
      'nl': 'nl-NL',
      'ru': 'ru-RU',
      'ar': 'ar-SA',
      'hi': 'hi-IN',
      'zh': 'zh-CN',
      'ja': 'ja-JP',
      'ko': 'ko-KR',
    };
    
    utterance.lang = languageMap[language] || language;
    speechSynthesis.speak(utterance);
  } else {
    console.error('Text-to-speech is not supported in this browser');
  }
};

// Added for voice communication
export const startSpeechRecognition = (
  language: string, 
  onResult: (text: string) => void, 
  onEnd: () => void
): (() => void) => {
  if (!('webkitSpeechRecognition' in window)) {
    console.error('Speech recognition is not supported in this browser');
    onEnd();
    return () => {};
  }
  
  // TypeScript doesn't know about webkitSpeechRecognition, so we use any
  const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
  const recognition = new SpeechRecognition();
  
  // Map language codes to BCP 47 language tags for better compatibility
  const languageMap: Record<string, string> = {
    'en': 'en-US',
    'es': 'es-ES',
    'fr': 'fr-FR', 
    'de': 'de-DE',
    'it': 'it-IT',
    'pt': 'pt-BR',
    'nl': 'nl-NL',
    'ru': 'ru-RU',
    'ar': 'ar-SA',
    'hi': 'hi-IN',
    'zh': 'zh-CN',
    'ja': 'ja-JP',
    'ko': 'ko-KR',
  };
  
  recognition.lang = languageMap[language] || language;
  recognition.interimResults = true;
  recognition.continuous = true;
  
  recognition.onresult = (event: any) => {
    let interimTranscript = '';
    let finalTranscript = '';
    
    for (let i = event.resultIndex; i < event.results.length; i++) {
      const transcript = event.results[i][0].transcript;
      if (event.results[i].isFinal) {
        finalTranscript += transcript;
      } else {
        interimTranscript += transcript;
      }
    }
    
    // Use either the final transcript if available, or the interim if not
    const text = finalTranscript || interimTranscript;
    if (text) {
      onResult(text);
    }
  };
  
  recognition.onerror = (event: any) => {
    console.error('Speech recognition error', event.error);
    onEnd();
  };
  
  recognition.onend = () => {
    onEnd();
  };
  
  recognition.start();
  
  // Return a function to stop recognition
  return () => {
    recognition.stop();
  };
};
