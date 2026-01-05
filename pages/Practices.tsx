import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { useLang } from '../providers';
import SEO from '../components/SEO';

const Practices: React.FC = () => {
  const { t } = useLang();
  const activeSectionRef = useRef<string>('');
  const [activeSection, setActiveSection] = useState<string>('');
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Initialize Intersection Observer
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            activeSectionRef.current = entry.target.id;
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px', // Trigger when section is near top but allows for comfortable reading
        threshold: 0
      }
    );

    // Observe all practice sections
    t.practicesList.forEach((practice) => {
      const element = document.getElementById(practice.id);
      if (element) observer.current?.observe(element);
    });

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [t.practicesList]);

  return (
    <div className="bg-white dark:bg-primary min-h-screen pt-20 transition-colors duration-300">
      <SEO 
        title={t.nav.practices}
        description="Explore our comprehensive legal services including M&A, Capital Markets, Banking & Finance, and more."
      />

      {/* Minimal Header with Gradient Text */}
      <div className="bg-surface-alt dark:bg-[#1c1917] py-20 md:py-24 border-b border-gray-200 dark:border-white/5 transition-colors duration-300">
        <div className="container mx-auto px-6 md:px-12">
          <h4 className="text-xs font-bold tracking-widest text-secondary uppercase mb-6 animate-fade-in">{t.practices.capabilities}</h4>
          <h1 className="text-4xl md:text-6xl font-serif text-primary dark:text-white mb-6 animate-fade-in-up">{t.practices.title}</h1>
          <p className="text-gray-700 dark:text-stone-400 max-w-2xl text-lg font-light leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
             {t.practices.subtitle}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Navigation Sidebar Sticky with Tooltips */}
          <div className="lg:col-span-3 hidden lg:block">
            <div className="sticky top-32">
              <h3 className="font-bold text-xs uppercase tracking-widest text-primary dark:text-white mb-6 border-b border-primary dark:border-white/20 pb-4">{t.practices.index}</h3>
              <ul className="space-y-3">
                {t.practicesList.map((practice) => (
                  <li key={practice.id} className="relative group/item">
                    <a 
                      href={`#${practice.id}`} 
                      className={`group flex items-center justify-between transition-colors text-xs font-medium py-1 ${
                        activeSection === practice.id 
                          ? 'text-secondary translate-x-1' 
                          : 'text-gray-600 dark:text-stone-400 hover:text-secondary dark:hover:text-secondary'
                      }`}
                    >
                      <span>{practice.title}</span>
                      <span className={`transition-opacity transition-transform ${
                        activeSection === practice.id 
                          ? 'opacity-100 translate-x-0' 
                          : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
                      }`}>
                        <ArrowRight size={10} />
                      </span>
                    </a>
                    
                    {/* Tooltip */}
                    <div className="absolute left-full top-1/2 -translate-y-1/2 ml-4 w-60 p-4 bg-primary dark:bg-white text-white dark:text-primary text-xs font-light leading-relaxed rounded shadow-xl opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-300 z-50 pointer-events-none translate-x-2 group-hover/item:translate-x-0">
                      <div className="absolute left-0 top-1/2 -translate-x-[6px] -translate-y-1/2 tooltip-arrow border-r-primary dark:border-r-white"></div>
                      {practice.shortDescription}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-9 space-y-20">
            {t.practicesList.map((practice, index) => (
              <div key={practice.id} id={practice.id} className="scroll-mt-32 group transition-opacity duration-500">
                <div className="flex flex-col md:flex-row gap-8 md:gap-16 border-t border-gray-200 dark:border-white/10 pt-16 group-first:border-t-0 group-first:pt-0">
                  <div className="md:w-1/4">
                    <span className={`text-6xl md:text-7xl font-serif transition-colors duration-500 block leading-none select-none ${
                       activeSection === practice.id ? 'text-secondary/20' : 'text-stone-200 dark:text-stone-800 group-hover:text-stone-300 dark:group-hover:text-stone-700'
                    }`}>
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                  </div>
                  <div className="md:w-3/4">
                    <h2 className={`text-2xl md:text-3xl font-serif mb-4 transition-colors duration-300 ${
                       activeSection === practice.id ? 'text-secondary' : 'text-primary dark:text-white group-hover:text-primary dark:group-hover:text-white'
                    }`}>
                      {practice.title}
                    </h2>
                    <div className="prose prose-lg prose-gray dark:prose-invert max-w-none font-light leading-loose group-hover:text-gray-900 dark:group-hover:text-stone-200 transition-colors">
                      <p className="whitespace-pre-line text-gray-700 dark:text-stone-400 text-base md:text-lg">{practice.fullDescription}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Practices;