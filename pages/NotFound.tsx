import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../providers';
import { ArrowLeft } from 'lucide-react';

const NotFound: React.FC = () => {
  const { t } = useLang();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-surface dark:bg-primary flex items-center justify-center p-6 text-center">
      <div className="max-w-md">
        <h1 className="text-9xl font-serif text-secondary/20 mb-4 select-none">404</h1>
        <h2 className="text-3xl font-serif text-primary dark:text-white mb-4">{t.notFound.title}</h2>
        <p className="text-gray-600 dark:text-gray-400 font-light mb-8">
          {t.notFound.desc}
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary dark:bg-white text-white dark:text-primary font-bold tracking-widest uppercase text-sm hover:bg-secondary dark:hover:bg-gray-200 transition-colors"
        >
          <ArrowLeft size={16} /> {t.notFound.button}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;