import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { Translations, ToastMessage } from './types';
import { EN } from './locales';
import { ToastContainer } from './components/Toast';

// --- Toast Context ---
interface ToastContextType {
  addToast: (type: ToastMessage['type'], message: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = useCallback((type: ToastMessage['type'], message: string) => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts((prev) => [...prev, { id, type, message }]);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 5000);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error('useToast must be used within ToastProvider');
  return context;
};


// --- Theme Context ---
// Forced to Light mode
type Theme = 'light';
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const theme = 'light';
  
  // Ensure dark mode class is removed
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    // No-op
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};

// --- Language Context ---
// Forced to English
type Lang = 'en';
interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const lang = 'en';
  const t = EN;

  const toggleLang = () => {
    // No-op
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLang must be used within LanguageProvider');
  return context;
};