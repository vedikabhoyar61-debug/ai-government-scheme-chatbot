import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserProfile, SavedSchemeItem, ChatMessage, Scheme } from '../types';
import { VERIFIED_SCHEMES } from '../data/schemes';
import { extractProfileFromText, matchSchemesForProfile, generateAssistantReply } from '../services/nlpEngine';
import { getTranslation, TranslationDict, LanguageCode } from '../data/translations';

interface AuthUser {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

interface ProfileContextType {
  profile: UserProfile;
  updateProfile: (newValues: Partial<UserProfile>) => void;
  resetProfile: () => void;
  savedSchemes: SavedSchemeItem[];
  toggleSaveScheme: (schemeId: string) => void;
  isSchemeSaved: (schemeId: string) => boolean;
  updateSchemeStatus: (schemeId: string, status: 'saved' | 'documents_ready' | 'applied_on_portal') => void;
  toggleDocumentCheck: (schemeId: string, docName: string) => void;
  chatMessages: ChatMessage[];
  sendMessage: (text: string) => Promise<void>;
  clearChat: () => void;
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: keyof TranslationDict) => string;
  user: AuthUser | null;
  loginUser: (email: string, name?: string) => void;
  logoutUser: () => void;
  selectedSchemeForModal: Scheme | null;
  openSchemeModal: (scheme: Scheme) => void;
  closeSchemeModal: () => void;
  isAiTyping: boolean;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

const INITIAL_PROFILE: UserProfile = {
  age: 21,
  state: 'Maharashtra',
  occupation: 'Student',
  annualFamilyIncome: 250000,
  category: 'OBC',
  gender: 'Female',
  isStudent: true,
};

const getWelcomeMessage = (lang: string): ChatMessage => ({
  id: 'msg-welcome',
  sender: 'assistant',
  text: getTranslation(lang, 'chat_welcome_msg'),
  timestamp: new Date(),
  suggestedFollowUps: [
    "Find schemes for me",
    "I'm a college student",
    "I'm a small farmer",
    "Show women empowerment schemes",
    "I need healthcare assistance",
    "Show small business loans"
  ]
});

export const ProfileProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<string>(() => {
    return localStorage.getItem('govassist_lang') || 'en';
  });

  const [profile, setProfile] = useState<UserProfile>(() => {
    try {
      const saved = localStorage.getItem('govassist_profile');
      return saved ? JSON.parse(saved) : INITIAL_PROFILE;
    } catch {
      return INITIAL_PROFILE;
    }
  });

  const [savedSchemes, setSavedSchemes] = useState<SavedSchemeItem[]>(() => {
    try {
      const saved = localStorage.getItem('govassist_saved_schemes');
      return saved ? JSON.parse(saved) : [
        { schemeId: 'nsp-post-matric-scholarship', savedAt: new Date().toISOString(), status: 'saved', completedDocuments: ['Aadhaar Card of Student'] },
        { schemeId: 'ayushman-bharat-pmjay', savedAt: new Date().toISOString(), status: 'documents_ready', completedDocuments: ['Aadhaar Card', 'Ration Card / NFSA Card'] }
      ];
    } catch {
      return [];
    }
  });

  const [chatMessages, setChatMessages] = useState<ChatMessage[]>(() => {
    try {
      const saved = localStorage.getItem('govassist_chat_msgs');
      if (saved) {
        const parsed = JSON.parse(saved);
        return parsed.map((m: any) => ({ ...m, timestamp: new Date(m.timestamp) }));
      }
      return [getWelcomeMessage(language)];
    } catch {
      return [getWelcomeMessage(language)];
    }
  });

  const [user, setUser] = useState<AuthUser | null>(() => {
    try {
      const saved = localStorage.getItem('govassist_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [selectedSchemeForModal, setSelectedSchemeForModal] = useState<Scheme | null>(null);
  const [isAiTyping, setIsAiTyping] = useState<boolean>(false);

  const t = (key: keyof TranslationDict): string => {
    return getTranslation(language, key);
  };

  const setLanguage = (newLang: string) => {
    setLanguageState(newLang);
    localStorage.setItem('govassist_lang', newLang);

    // If chat only has initial welcome message, refresh it in the new language
    if (chatMessages.length <= 1) {
      setChatMessages([getWelcomeMessage(newLang)]);
    }
  };

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('govassist_profile', JSON.stringify(profile));
    } catch (e) {
      console.error(e);
    }
  }, [profile]);

  useEffect(() => {
    try {
      localStorage.setItem('govassist_saved_schemes', JSON.stringify(savedSchemes));
    } catch (e) {
      console.error(e);
    }
  }, [savedSchemes]);

  useEffect(() => {
    try {
      localStorage.setItem('govassist_chat_msgs', JSON.stringify(chatMessages));
    } catch (e) {
      console.error(e);
    }
  }, [chatMessages]);

  const updateProfile = (newValues: Partial<UserProfile>) => {
    setProfile(prev => ({ ...prev, ...newValues }));
  };

  const resetProfile = () => {
    const empty: UserProfile = {};
    setProfile(empty);
  };

  const toggleSaveScheme = (schemeId: string) => {
    setSavedSchemes(prev => {
      const exists = prev.some(item => item.schemeId === schemeId);
      if (exists) {
        return prev.filter(item => item.schemeId !== schemeId);
      } else {
        return [
          ...prev,
          {
            schemeId,
            savedAt: new Date().toISOString(),
            status: 'saved',
            completedDocuments: []
          }
        ];
      }
    });
  };

  const isSchemeSaved = (schemeId: string) => {
    return savedSchemes.some(item => item.schemeId === schemeId);
  };

  const updateSchemeStatus = (schemeId: string, status: 'saved' | 'documents_ready' | 'applied_on_portal') => {
    setSavedSchemes(prev =>
      prev.map(item => (item.schemeId === schemeId ? { ...item, status } : item))
    );
  };

  const toggleDocumentCheck = (schemeId: string, docName: string) => {
    setSavedSchemes(prev =>
      prev.map(item => {
        if (item.schemeId !== schemeId) return item;
        const exists = item.completedDocuments.includes(docName);
        const completedDocuments = exists
          ? item.completedDocuments.filter(d => d !== docName)
          : [...item.completedDocuments, docName];
        return { ...item, completedDocuments };
      })
    );
  };

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    // 1. Add user message
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: text.trim(),
      timestamp: new Date()
    };

    setChatMessages(prev => [...prev, userMsg]);
    setIsAiTyping(true);

    // 2. Extract profile entities from query
    const extracted = extractProfileFromText(text, profile);
    const mergedProfile: UserProfile = { ...profile, ...extracted };
    setProfile(mergedProfile);

    // 3. Match schemes
    const matches = matchSchemesForProfile(mergedProfile);
    const matchedSchemes = matches.map(m => m.scheme);

    // If query is specifically looking for a category
    let finalSchemes = matchedSchemes;
    const lower = text.toLowerCase();
    if (lower.includes('student') || lower.includes('scholarship') || lower.includes('education')) {
      const edu = VERIFIED_SCHEMES.filter(s => s.category === 'education');
      finalSchemes = Array.from(new Set([...finalSchemes, ...edu]));
    } else if (lower.includes('farmer') || lower.includes('kisan') || lower.includes('agriculture')) {
      const agri = VERIFIED_SCHEMES.filter(s => s.category === 'agriculture');
      finalSchemes = Array.from(new Set([...finalSchemes, ...agri]));
    } else if (lower.includes('women') || lower.includes('girl') || lower.includes('female')) {
      const wom = VERIFIED_SCHEMES.filter(s => s.category === 'women');
      finalSchemes = Array.from(new Set([...finalSchemes, ...wom]));
    } else if (lower.includes('health') || lower.includes('ayushman') || lower.includes('hospital') || lower.includes('medical')) {
      const health = VERIFIED_SCHEMES.filter(s => s.category === 'healthcare');
      finalSchemes = Array.from(new Set([...finalSchemes, ...health]));
    } else if (lower.includes('business') || lower.includes('mudra') || lower.includes('loan') || lower.includes('artisan') || lower.includes('shop')) {
      const biz = VERIFIED_SCHEMES.filter(s => s.category === 'business');
      finalSchemes = Array.from(new Set([...finalSchemes, ...biz]));
    }

    // 4. Generate AI response with realistic delay
    await new Promise(resolve => setTimeout(resolve, 750));

    const { replyText, suggestedFollowUps } = generateAssistantReply(text, mergedProfile, finalSchemes);

    const assistantMsg: ChatMessage = {
      id: `ai-${Date.now()}`,
      sender: 'assistant',
      text: replyText,
      timestamp: new Date(),
      matchedSchemes: finalSchemes.slice(0, 4),
      suggestedFollowUps,
      profileExtracted: extracted
    };

    setIsAiTyping(false);
    setChatMessages(prev => [...prev, assistantMsg]);
  };

  const clearChat = () => {
    setChatMessages([getWelcomeMessage(language)]);
  };

  const loginUser = (email: string, name: string = 'Rohan Sharma') => {
    const u: AuthUser = {
      id: 'usr-101',
      name: name || email.split('@')[0],
      email: email,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(name || email)}`
    };
    setUser(u);
    localStorage.setItem('govassist_user', JSON.stringify(u));
  };

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem('govassist_user');
  };

  const openSchemeModal = (scheme: Scheme) => {
    setSelectedSchemeForModal(scheme);
  };

  const closeSchemeModal = () => {
    setSelectedSchemeForModal(null);
  };

  return (
    <ProfileContext.Provider
      value={{
        profile,
        updateProfile,
        resetProfile,
        savedSchemes,
        toggleSaveScheme,
        isSchemeSaved,
        updateSchemeStatus,
        toggleDocumentCheck,
        chatMessages,
        sendMessage,
        clearChat,
        language,
        setLanguage,
        t,
        user,
        loginUser,
        logoutUser,
        selectedSchemeForModal,
        openSchemeModal,
        closeSchemeModal,
        isAiTyping
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
};
