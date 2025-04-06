import { TranslationResult } from '@/types/translation';

// Simulated offline translation data
// In a real implementation, this would use a machine learning model loaded locally
const translationPairs: Record<string, Record<string, Record<string, string>>> = {
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
    },
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
    },
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
    },
  },
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

// Simulate language detection with improved pattern matching
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
  
  const lowerText = text.toLowerCase();
  
  // Check if this exact text has a translation
  if (translationPairs[sourceLanguage]?.[targetLanguage]?.[lowerText]) {
    return {
      translatedText: translationPairs[sourceLanguage][targetLanguage][lowerText],
    };
  }
  
  // For demonstration purposes: fall back to a simple character replacement
  // This is not real translation, just a demo of the concept
  let translatedText = text;
  const detectedLanguage = sourceLanguage === 'auto' ? detectLanguage(text) : undefined;
  const actualSourceLanguage = detectedLanguage || sourceLanguage;
  
  // If languages are the same, don't translate
  if (actualSourceLanguage === targetLanguage) {
    return { translatedText, detectedLanguage };
  }
  
  // Basic word-by-word "translation" for demonstration
  const words = text.split(' ');
  const translatedWords = words.map(word => {
    const lowerWord = word.toLowerCase();
    
    // Try to find this word in our dictionary
    if (translationPairs[actualSourceLanguage]?.[targetLanguage]?.[lowerWord]) {
      // Preserve original capitalization
      if (word[0] === word[0].toUpperCase()) {
        return translationPairs[actualSourceLanguage][targetLanguage][lowerWord].charAt(0).toUpperCase() + 
               translationPairs[actualSourceLanguage][targetLanguage][lowerWord].slice(1);
      }
      return translationPairs[actualSourceLanguage][targetLanguage][lowerWord];
    }
    
    // Very simple character replacements as fallback
    if (targetLanguage === 'es' && actualSourceLanguage === 'en') {
      return word
        .replace(/th/g, 't')
        .replace(/the/g, 'el')
        .replace(/is/g, 'es')
        .replace(/and/g, 'y');
    } else if (targetLanguage === 'fr' && actualSourceLanguage === 'en') {
      return word
        .replace(/th/g, 't')
        .replace(/the/g, 'le')
        .replace(/is/g, 'est')
        .replace(/and/g, 'et');
    }
    
    // If no replacement found, keep original word
    return word;
  });
  
  translatedText = translatedWords.join(' ');
  
  // Ensure we're not just returning the original text
  if (translatedText === text && actualSourceLanguage !== targetLanguage) {
    // Apply some more obvious changes to show translation is happening
    if (targetLanguage === 'es') {
      translatedText += ' ¿comprende?';
    } else if (targetLanguage === 'fr') {
      translatedText += ' n\'est-ce pas?';
    } else if (targetLanguage === 'de') {
      translatedText += ' verstehen?';
    } else if (targetLanguage === 'zh') {
      translatedText += ' 明白了吗？';
    }
  }
  
  return { 
    translatedText,
    detectedLanguage
  };
};

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
