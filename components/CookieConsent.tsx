import React, { useState, useEffect } from 'react';
import { useLang } from '../providers';

const CookieConsent: React.FC = () => {
  const { t } = useLang();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setTimeout(() => setShow(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 p-4 md:p-6 animate-fade-in-up">
      <div className="bg-[#1c1917] dark:bg-white text-white dark:text-primary p-6 md:p-8 rounded-lg shadow-2xl max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 border-l-4 border-primary">
        <p className="text-sm font-light leading-relaxed">
          {t.cookie.text}
        </p>
        <div className="flex gap-4">
           <button 
             onClick={handleAccept}
             className="px-6 py-3 bg-white/10 hover:bg-white/20 dark:bg-primary/10 dark:hover:bg-primary/20 text-white dark:text-primary text-xs font-bold uppercase tracking-widest transition-colors whitespace-nowrap"
           >
             {t.cookie.accept}
           </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;