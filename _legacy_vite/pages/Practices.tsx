import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useLang } from '../providers';
import SEO from '../components/SEO';
import Image from '../components/Image';

const Practices: React.FC = () => {
  const { t } = useLang();
  const location = useLocation();
  const activeSectionRef = useRef<string>('');
  const [activeSection, setActiveSection] = useState<string>('');
  const observer = useRef<IntersectionObserver | null>(null);

  // Combine lists for observation logic
  const allSections = [...t.practiceAreas, ...t.expertise];

  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      setActiveSection(id);
    }
  };

  useEffect(() => {
    // Handle hash scrolling on mount or location change
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => scrollToId(id), 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  useEffect(() => {
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
        rootMargin: '-15% 0px -60% 0px',
        threshold: 0
      }
    );

    allSections.forEach((practice) => {
      const element = document.getElementById(practice.id);
      if (element) observer.current?.observe(element);
    });

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement> | React.ChangeEvent<HTMLSelectElement>, id: string) => {
    if ('preventDefault' in e) e.preventDefault();
    scrollToId(id);
    window.history.pushState(null, '', `#${id}`);
  };

  return (
    <div className="bg-white min-h-screen transition-colors duration-300">
      <SEO 
        title={t.nav.services}
        description={t.services.subtitle}
      />

      {/* Header - Aligned spacing with People.tsx */}
      <div className="bg-surface-alt pt-36 pb-20 md:pt-48 md:pb-32 border-b border-gray-200 transition-colors duration-300">
        <div className="container mx-auto px-6 md:px-12">
          <h4 className="text-xs font-bold tracking-[0.25em] text-primary uppercase mb-8 animate-fade-in">{t.services.title}</h4>
          <h1 className="text-6xl md:text-8xl font-serif text-primary mb-8 animate-fade-in-up tracking-tight">{t.services.mainTitle}</h1>
          <p className="text-stone-600 max-w-3xl text-lg md:text-xl font-light leading-relaxed animate-fade-in-up text-balance" style={{ animationDelay: '0.2s' }}>
             {t.services.subtitle}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative">
          
          {/* Mobile Sticky Nav */}
          <div className="lg:hidden sticky top-24 z-30 mb-8 bg-white/95 backdrop-blur shadow-sm p-4 -mx-6 px-6 border-b border-gray-100">
            <label htmlFor="mobile-nav" className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2 block">Jump to section</label>
            <div className="relative">
              <select 
                id="mobile-nav"
                className="w-full appearance-none bg-gray-50 border border-gray-200 text-primary py-3 px-4 pr-8 rounded-sm focus:outline-none focus:border-secondary text-sm font-serif"
                onChange={(e) => handleNavClick(e, e.target.value)}
                value={activeSection}
              >
                <optgroup label={t.services.practiceAreasHeader}>
                  {t.practiceAreas.map(p => <option key={p.id} value={p.id}>{p.title}</option>)}
                </optgroup>
                <optgroup label={t.services.expertiseHeader}>
                  {t.expertise.map(p => <option key={p.id} value={p.id}>{p.title}</option>)}
                </optgroup>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
            </div>
          </div>

          {/* Desktop Navigation Sidebar */}
          <div className="lg:col-span-3 hidden lg:block self-start sticky top-36">
              <h3 className="font-bold text-[10px] uppercase tracking-[0.2em] text-primary mb-8 border-b border-primary pb-4">{t.services.index}</h3>
              
              <div className="max-h-[calc(100vh-250px)] overflow-y-auto pr-4 scrollbar-thin pb-10">
                {/* Practice Areas List */}
                <div className="mb-10">
                  <h4 className="text-[10px] font-bold text-gray-400 uppercase mb-6 tracking-wider">{t.services.practiceAreasHeader}</h4>
                  <ul className="space-y-2 relative border-l border-gray-100">
                    {t.practiceAreas.map((practice) => (
                      <li key={practice.id}>
                        <a 
                          href={`#${practice.id}`} 
                          onClick={(e) => handleNavClick(e, practice.id)}
                          className={`flex items-center justify-between transition-all duration-300 text-xs py-2 pl-4 border-l-2 -ml-[1px] leading-relaxed ${
                            activeSection === practice.id 
                              ? 'text-primary font-bold border-secondary bg-surface-alt' 
                              : 'text-stone-500 hover:text-primary font-medium border-transparent hover:border-gray-300'
                          }`}
                        >
                          <span>{practice.title}</span>
                          {activeSection === practice.id && <ArrowRight size={10} />}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Expertise List */}
                <div>
                  <h4 className="text-[10px] font-bold text-gray-400 uppercase mb-6 tracking-wider">{t.services.expertiseHeader}</h4>
                  <ul className="space-y-2 relative border-l border-gray-100">
                    {t.expertise.map((exp) => (
                      <li key={exp.id}>
                        <a 
                          href={`#${exp.id}`} 
                          onClick={(e) => handleNavClick(e, exp.id)}
                          className={`flex items-center justify-between transition-all duration-300 text-xs py-2 pl-4 border-l-2 -ml-[1px] leading-relaxed ${
                            activeSection === exp.id 
                              ? 'text-primary font-bold border-secondary bg-surface-alt' 
                              : 'text-stone-500 hover:text-primary font-medium border-transparent hover:border-gray-300'
                          }`}
                        >
                          <span>{exp.title}</span>
                          {activeSection === exp.id && <ArrowRight size={10} />}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
          </div>

          {/* Content - Increased spacing between items */}
          <div className="lg:col-span-9 space-y-32">
            
            {/* Practice Areas Section */}
            <div>
              <h2 className="text-3xl md:text-5xl font-serif text-primary mb-16 border-b border-gray-200 pb-8">{t.services.practiceAreasHeader}</h2>
              <div className="flex flex-col gap-24">
                {t.practiceAreas.map((practice) => (
                  <div 
                    key={practice.id} 
                    id={practice.id} 
                    className="scroll-mt-40 border-b border-gray-100 pb-24 last:border-0 last:pb-0" 
                  >
                    <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-start group">
                      {/* Image Side */}
                      <div className="w-full md:w-4/12 flex-shrink-0">
                         <div className="aspect-[3/2] md:aspect-square overflow-hidden rounded-sm bg-gray-100 relative shadow-md">
                            <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                            <Image 
                              src={practice.image} 
                              alt={practice.title}
                              sizes="(max-width: 768px) 100vw, 33vw"
                              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                            />
                         </div>
                      </div>

                      {/* Content Side */}
                      <div className="w-full md:w-8/12">
                        <h2 className="text-3xl md:text-4xl font-serif text-primary group-hover:text-secondary transition-colors mb-6 md:mt-0 leading-tight">
                          {practice.title}
                        </h2>
                        <div className="prose prose-lg prose-stone max-w-none font-light leading-relaxed text-stone-600 text-lg">
                          <p className="whitespace-pre-line">{practice.fullDescription}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Expertise Section */}
            <div>
              <h2 className="text-3xl md:text-5xl font-serif text-primary mb-16 border-b border-gray-200 pb-8">{t.services.expertiseHeader}</h2>
              <div className="flex flex-col gap-24">
                {t.expertise.map((exp) => (
                  <div 
                    key={exp.id} 
                    id={exp.id} 
                    className="scroll-mt-40 border-b border-gray-100 pb-24 last:border-0 last:pb-0"
                  >
                    <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-start group">
                      {/* Image Side */}
                      <div className="w-full md:w-4/12 flex-shrink-0">
                         <div className="aspect-[3/2] md:aspect-square overflow-hidden rounded-sm bg-gray-100 relative shadow-md">
                            <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                            <Image 
                              src={exp.image} 
                              alt={exp.title}
                              sizes="(max-width: 768px) 100vw, 33vw"
                              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                            />
                         </div>
                      </div>

                      {/* Content Side */}
                      <div className="w-full md:w-8/12">
                        <h2 className="text-3xl md:text-4xl font-serif text-primary group-hover:text-secondary transition-colors mb-6 md:mt-0 leading-tight">
                          {exp.title}
                        </h2>
                        <div className="prose prose-lg prose-stone max-w-none font-light leading-relaxed text-stone-600 text-lg">
                          <p className="whitespace-pre-line">{exp.fullDescription}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Practices;