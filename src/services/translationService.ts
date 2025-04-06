
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
      'bonjour': 'good morning',
      'bon après-midi': 'good afternoon',
      'bonsoir': 'good evening',
      'combien ça coûte': 'how much is this',
      'parlez-vous anglais': 'do you speak english',
    },
  },
};

// Simulate language detection
export const detectLanguage = (text: string): string => {
  const lowerText = text.toLowerCase();
  
  // Simple language detection based on typical character patterns
  if (/[áéíóúüñ¿¡]/.test(lowerText)) {
    return 'es'; // Spanish
  } else if (/[àâçéèêëîïôùûüÿœæ]/.test(lowerText)) {
    return 'fr'; // French
  } else {
    return 'en'; // Default to English
  }
};

export const translateText = async (
  text: string, 
  sourceLanguage: string, 
  targetLanguage: string
): Promise<TranslationResult> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
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
  
  if (targetLanguage === 'es') {
    // Naive English to Spanish transformation
    translatedText = text
      .replace(/th/g, 't')
      .replace(/the/g, 'el')
      .replace(/is/g, 'es')
      .replace(/and/g, 'y')
      .replace(/I am/g, 'Yo soy')
      .replace(/hello/g, 'hola')
      .replace(/world/g, 'mundo');
  } else if (targetLanguage === 'fr') {
    // Naive English to French transformation
    translatedText = text
      .replace(/th/g, 't')
      .replace(/the/g, 'le')
      .replace(/is/g, 'est')
      .replace(/and/g, 'et')
      .replace(/I am/g, 'Je suis')
      .replace(/hello/g, 'bonjour')
      .replace(/world/g, 'monde');
  } else if (targetLanguage === 'en' && sourceLanguage === 'es') {
    // Naive Spanish to English transformation
    translatedText = text
      .replace(/el/g, 'the')
      .replace(/es/g, 'is')
      .replace(/y/g, 'and')
      .replace(/yo soy/g, 'I am')
      .replace(/hola/g, 'hello')
      .replace(/mundo/g, 'world');
  }
  
  return { 
    translatedText,
    detectedLanguage: sourceLanguage === 'auto' ? detectLanguage(text) : undefined
  };
};

// Text-to-speech service
export const speakText = (text: string, language: string): void => {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language;
    speechSynthesis.speak(utterance);
  } else {
    console.error('Text-to-speech is not supported in this browser');
  }
};
