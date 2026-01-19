import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLang } from '../providers';
import { LAWYERS } from '../constants';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLang();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }

    // Lock body scroll when open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Aggregate services from practiceAreas and expertise
  const allServices = t.practiceAreas.flatMap(p => [p, ...(p.expertise || [])]);
  const results = allServices.filter(
    (p) => p.title.toLowerCase().includes(query.toLowerCase()) || (p.shortDescription && p.shortDescription.toLowerCase().includes(query.toLowerCase()))
  );


  const filteredLawyers = LAWYERS.filter(
    (l) => l.name.toLowerCase().includes(query.toLowerCase())
  );

  const hasResults = results.length > 0 || filteredLawyers.length > 0;

  return (
    <div className="fixed inset-0 z-[120] flex items-start justify-center pt-24 px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-primary/90 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative w-full max-w-3xl bg-white dark:bg-surface-dark rounded-lg shadow-2xl overflow-hidden animate-fade-in-up">
        {/* Header */}
        <div className="flex items-center border-b border-gray-100 dark:border-white/10 p-4">
          <Search className="text-gray-400 w-6 h-6 mr-4" />
          <input
            ref={inputRef}
            type="text"
            className="flex-grow bg-transparent text-xl text-primary dark:text-white placeholder-gray-400 focus:outline-none"
            placeholder={t.search.placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-white/5 rounded-full transition-colors text-primary dark:text-white">
            <X size={24} />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-8">
          {query.length > 0 ? (
            hasResults ? (
              <>
                {results.length > 0 && (
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-secondary mb-4">{t.search.services}</h3>
                    <div className="space-y-2">
                      {results.map((p) => (
                        <Link
                          key={p.id}
                          to={`/services#${p.id}`}
                          onClick={onClose}
                          className="block p-4 rounded bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors group"
                        >
                          <div className="flex justify-between items-center">
                            <span className="font-serif text-lg text-primary dark:text-white">{p.title}</span>
                            <ChevronRight size={16} className="text-gray-400 group-hover:text-secondary" />
                          </div>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-1">{p.shortDescription}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {filteredLawyers.length > 0 && (
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-secondary mb-4">{t.search.people}</h3>
                    <div className="space-y-2">
                      {filteredLawyers.map((l, i) => (
                        <Link
                          key={i}
                          to="/people"
                          onClick={onClose}
                          className="flex items-center p-4 rounded bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors group"
                        >
                          <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden mr-4 flex-shrink-0">
                            <img src={l.image} alt={l.name} className="w-full h-full object-cover" />
                          </div>
                          <div className="flex-grow">
                            <div className="font-serif text-lg text-primary dark:text-white">{l.name}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">{l.role}</div>
                          </div>
                          <ChevronRight size={16} className="text-gray-400 group-hover:text-secondary" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12 text-gray-500">
                {t.search.noResults}
              </div>
            )
          ) : (
            <div className="text-center py-12 text-gray-400 text-sm">
              Type to search across our practice areas and team.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;