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
    ne: {
      'hello': 'नमस्ते',
      'how are you': 'तपाईं कस्तो हुनुहुन्छ',
      'hello how are you': 'नमस्ते तपाईं कस्तो हुनुहुन्छ',
      'goodbye': 'नमस्कार',
      'thank you': 'धन्यवाद',
      'yes': 'हो',
      'no': 'होइन',
      'please': 'कृपया',
      'excuse me': 'माफ गर्नुहोस्',
      'i love you': 'म तिमीलाई माया गर्छु',
      'what is your name': 'तिम्रो नाम के हो',
      'my name is': 'मेरो नाम हो',
      'where is': 'कहाँ छ',
      'i don\'t understand': 'मैले बुझिनँ',
      'help': 'मद्दत',
      'sorry': 'माफ गर्नुहोस्',
      'good morning': 'शुभ प्रभात',
      'good afternoon': 'शुभ दिउँसो',
      'good evening': 'शुभ साँझ',
      'how much is this': 'यो कति हो',
    },
    hi: {
      'hello': 'नमस्ते',
      'how are you': 'आप कैसे हैं',
      'hello how are you': 'नमस्ते आप कैसे हैं',
      'goodbye': 'अलविदा',
      'thank you': 'धन्यवाद',
      'yes': 'हां',
      'no': 'नहीं',
      'please': 'कृपया',
      'excuse me': 'क्षमा करें',
      'i love you': 'मैं तुमसे प्यार करता हूं',
      'what is your name': 'आपका नाम क्या है',
      'my name is': 'मेरा नाम है',
      'where is': 'कहां है',
      'i don\'t understand': 'मैं समझ नहीं पा रहा हूं',
      'help': 'मदद',
      'sorry': 'माफ़ करें',
      'good morning': 'सुप्रभात',
      'good afternoon': 'शुभ दोपहर',
      'good evening': 'शुभ संध्या',
      'how much is this': 'यह कितने का है',
    },
    ja: {
      'hello': 'こんにちは',
      'how are you': 'お元気ですか',
      'hello how are you': 'こんにちは、お元気ですか',
      'goodbye': 'さようなら',
      'thank you': 'ありがとう',
      'yes': 'はい',
      'no': 'いいえ',
      'please': 'お願いします',
      'excuse me': 'すみません',
      'i love you': '愛しています',
      'what is your name': 'お名前は何ですか',
      'my name is': '私の名前は',
      'where is': 'どこですか',
      'i don\'t understand': '理解できません',
      'help': '助けて',
      'sorry': 'ごめんなさい',
      'good morning': 'おはようございます',
      'good afternoon': 'こんにちは',
      'good evening': 'こんばんは',
      'how much is this': 'これはいくらですか',
    },
    zh: {
      'hello': '你好',
      'how are you': '你好吗',
      'hello how are you': '你好，你好吗',
      'goodbye': '再见',
      'thank you': '谢谢',
      'yes': '是的',
      'no': '不是',
      'please': '请',
      'excuse me': '对不起',
      'i love you': '我爱你',
      'what is your name': '你叫什么名字',
      'my name is': '我的名字是',
      'where is': '在哪里',
      'i don\'t understand': '我不明白',
      'help': '帮助',
      'sorry': '对不起',
      'good morning': '早上好',
      'good afternoon': '下午好',
      'good evening': '晚上好',
      'how much is this': '这个多少钱',
    },
    ar: {
      'hello': 'مرحبا',
      'how are you': 'كيف حالك',
      'hello how are you': 'مرحبا كيف حالك',
      'goodbye': 'وداعا',
      'thank you': 'شكرا لك',
      'yes': 'نعم',
      'no': 'لا',
      'please': 'من فضلك',
      'excuse me': 'عذرا',
      'i love you': 'أحبك',
      'what is your name': 'ما هو اسمك',
      'my name is': 'اسمي هو',
      'where is': 'أين هو',
      'i don\'t understand': 'أنا لا أفهم',
      'help': 'مساعدة',
      'sorry': 'آسف',
      'good morning': 'صباح الخير',
      'good afternoon': 'مساء الخير',
      'good evening': 'مساء الخير',
      'how much is this': 'كم هذا',
    },
    de: {
      'hello': 'hallo',
      'how are you': 'wie geht es dir',
      'hello how are you': 'hallo wie geht es dir',
      'goodbye': 'auf wiedersehen',
      'thank you': 'danke',
      'yes': 'ja',
      'no': 'nein',
      'please': 'bitte',
      'excuse me': 'entschuldigung',
      'i love you': 'ich liebe dich',
      'what is your name': 'wie heißt du',
      'my name is': 'mein name ist',
      'where is': 'wo ist',
      'i don\'t understand': 'ich verstehe nicht',
      'help': 'hilfe',
      'sorry': 'entschuldigung',
      'good morning': 'guten morgen',
      'good afternoon': 'guten tag',
      'good evening': 'guten abend',
      'how much is this': 'wie viel kostet das',
    },
    ru: {
      'hello': 'привет',
      'how are you': 'как дела',
      'hello how are you': 'привет как дела',
      'goodbye': 'до свидания',
      'thank you': 'спасибо',
      'yes': 'да',
      'no': 'нет',
      'please': 'пожалуйста',
      'excuse me': 'извините',
      'i love you': 'я люблю тебя',
      'what is your name': 'как тебя зовут',
      'my name is': 'меня зовут',
      'where is': 'где находится',
      'i don\'t understand': 'я не понимаю',
      'help': 'помогите',
      'sorry': 'извините',
      'good morning': 'доброе утро',
      'good afternoon': 'добрый день',
      'good evening': 'добрый вечер',
      'how much is this': 'сколько это стоит',
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
      'qué': 'what',
      'estás': 'are',
      'tú': 'you',
      'haciendo': 'doing',
      'qué estás haciendo': 'what are you doing',
      'hola qué estás haciendo': 'hello what are you doing',
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
      'quoi': 'what',
      'êtes': 'are',
      'vous': 'you',
      'faisant': 'faisant',
      'qu\'est-ce que vous faites': 'what are you doing',
    },
  },
  ne: {
    en: {
      'नमस्ते': 'hello',
      'तपाईं कस्तो हुनुहुन्छ': 'how are you',
      'नमस्ते तपाईं कस्तो हुनुहुन्छ': 'hello how are you',
      'नमस्कार': 'goodbye',
      'धन्यवाद': 'thank you',
      'हो': 'yes',
      'होइन': 'no',
      'कृपया': 'please',
      'माफ गर्नुहोस्': 'excuse me',
      'म तिमीलाई माया गर्छु': 'i love you',
      'तिम्रो नाम के हो': 'what is your name',
      'मेरो नाम हो': 'my name is',
      'कहाँ छ': 'where is',
      'मैले बुझिनँ': 'i don\'t understand',
      'मद्दत': 'help',
      'शुभ प्रभात': 'good morning',
      'शुभ दिउँसो': 'good afternoon',
      'शुभ साँझ': 'good evening',
      'यो कति हो': 'how much is this',
    }
  },
  hi: {
    en: {
      'नमस्ते': 'hello',
      'आप कैसे हैं': 'how are you',
      'नमस्ते आप कैसे हैं': 'hello how are you',
      'अलविदा': 'goodbye',
      'धन्यवाद': 'thank you',
      'हां': 'yes',
      'नहीं': 'no',
      'कृपया': 'please',
      'क्षमा करें': 'excuse me',
      'मैं तुमसे प्यार करता हूं': 'i love you',
      'आपका नाम क्या है': 'what is your name',
      'मेरा नाम है': 'my name is',
      'कहां है': 'where is',
      'मैं समझ नहीं पा रहा हूं': 'i don\'t understand',
      'मदद': 'help',
      'सुप्रभात': 'good morning',
      'शुभ दोपहर': 'good afternoon',
      'शुभ संध्या': 'good evening',
      'यह कितने का है': 'how much is this',
    }
  },
  ja: {
    en: {
      'こんにちは': 'hello',
      'お元気ですか': 'how are you',
      'こんにちは、お元気ですか': 'hello how are you',
      'さようなら': 'goodbye',
      'ありがとう': 'thank you',
      'はい': 'yes',
      'いいえ': 'no',
      'お願いします': 'please',
      'すみません': 'excuse me',
      '愛しています': 'i love you',
      'お名前は何ですか': 'what is your name',
      '私の名前は': 'my name is',
      'どこですか': 'where is',
      '理解できません': 'i don\'t understand',
      '助けて': 'help',
      'おはようございます': 'good morning',
      'こんにちは': 'good afternoon',
      'こんばんは': 'good evening',
      'これはいくらですか': 'how much is this',
    }
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
  ne: /[\u0900-\u097F]|(\b(छ|हो|मा|को|र|हुन्छ|गर्छु|हुनुहुन्छ)\b)/i,
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
    const translation = translationDatasets[actualSourceLanguage][targetLanguage][lowerText];
    
    // For languages like Nepali or Hindi that might need a phonetic translation
    if (targetLanguage === 'ne' || targetLanguage === 'hi' || targetLanguage === 'ja' || 
        targetLanguage === 'zh' || targetLanguage === 'ar' || targetLanguage === 'ru') {
      const phonetic = getPhoneticTranslation(translation, targetLanguage);
      return {
        translatedText: translation,
        phonetic,
        detectedLanguage
      };
    }
    
    return {
      translatedText: translation,
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
    
    const fullTranslation = translatedSentences.join('. ');
    
    // For languages that might need a phonetic translation
    if (targetLanguage === 'ne' || targetLanguage === 'hi' || targetLanguage === 'ja' || 
        targetLanguage === 'zh' || targetLanguage === 'ar' || targetLanguage === 'ru') {
      const phonetic = getPhoneticTranslation(fullTranslation, targetLanguage);
      return {
        translatedText: fullTranslation,
        phonetic,
        detectedLanguage
      };
    }
    
    return {
      translatedText: fullTranslation,
      detectedLanguage
    };
  }
  
  // Otherwise translate the input as a single phrase
  const phraseTranslation = translatePhrase(lowerText, actualSourceLanguage, targetLanguage);
  
  // For languages that might need a phonetic translation
  if (targetLanguage === 'ne' || targetLanguage === 'hi' || targetLanguage === 'ja' || 
      targetLanguage === 'zh' || targetLanguage === 'ar' || targetLanguage === 'ru') {
    const phonetic = getPhoneticTranslation(phraseTranslation, targetLanguage);
    return {
      translatedText: phraseTranslation,
      phonetic,
      detectedLanguage
    };
  }
  
  return {
    translatedText: phraseTranslation,
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
 * Get a phonetic translation for languages that use non-Latin scripts
 */
function getPhoneticTranslation(text: string, language: string): string | undefined {
  // This is a simplified version. In a real app, you would use a more sophisticated
  // transliteration system based on the target language.
  
  // Example phonetic mappings for Nepali
  if (language === 'ne' && text === 'नमस्ते तपाईं कस्तो हुनुहुन्छ') {
    return 'Namastē tapā'ī kasto hunuhuncha';
  } else if (language === 'ne' && text === 'नमस्ते') {
    return 'Namastē';
  } else if (language === 'ne' && text === 'तपाईं कस्तो हुनुहुन्छ') {
    return 'tapā'ī kasto hunuhuncha';
  }
  
  // For Hindi
  if (language === 'hi' && text === 'नमस्ते आप कैसे हैं') {
    return 'Namaste aap kaise hain';
  } else if (language === 'hi' && text === 'नमस्ते') {
    return 'Namaste';
  } else if (language === 'hi' && text === 'आप कैसे हैं') {
    return 'Aap kaise hain';
  }
  
  // For other languages you would add appropriate phonetic mappings
  return undefined;
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
    'ne': /\b(छ|हो|मा|को|र|हुन्छ|गर्छु|हुनुहुन्छ)\b/i,
    'hi': /\b(है|हूँ|था|थी|हो|मैं|तुम|आप|वह|यह|वे|क्या|कौन|कब|कहाँ|कैसे|क्यों)\b/i,
  };
  
  return patterns[sourceLanguage as keyof typeof patterns]?.test(phrase) || false;
}

/**
 * Apply simple character transformations as a fallback
 */
function applySimpleTransformation(word: string, sourceLanguage: string, targetLanguage: string): string {
  // For languages with different scripts, return a placeholder or the original
  if (['ne', 'hi', 'ja', 'zh', 'ar', 'ru'].includes(targetLanguage)) {
    // Return original word as fallback for unsupported words
    return word;
  }
  
  // Simple transformations for European languages
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
      'ne': 'ne-NP',
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
    'ne': 'ne-NP',
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
