import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useLang } from '../providers';
import SEO from '../components/SEO';
import Image from '../components/Image';

const Practices: React.FC = () => {
  const { t } = useLang();
  const activeSectionRef = useRef<string>('');
  const [activeSection, setActiveSection] = useState<string>('');
  const observer = useRef<IntersectionObserver | null>(null);

  // Combine lists for observation logic
  const allSections = [...t.practiceAreas, ...t.expertise];

  useEffect(() => {
    // Only scroll to top on initial mount
    window.scrollTo(0, 0);

    // Initialize Intersection Observer with adjusted margins
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

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement> | React.ChangeEvent<HTMLSelectElement>, id: string) => {
    if ('preventDefault' in e) e.preventDefault();
    
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

  return (
    <div className="bg-white min-h-screen transition-colors duration-300">
      <SEO 
        title={t.nav.services}
        description={t.services.subtitle}
      />

      {/* Header */}
      <div className="bg-surface-alt pt-32 pb-12 md:pt-40 md:pb-24 border-b border-gray-200 transition-colors duration-300">
        <div className="container mx-auto px-6 md:px-12">
          {/* Changed text-secondary to text-primary for better readability */}
          <h4 className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase mb-6 animate-fade-in">{t.services.title}</h4>
          <h1 className="text-4xl md:text-6xl font-serif text-primary mb-6 animate-fade-in-up">{t.services.mainTitle}</h1>
          <p className="text-gray-700 max-w-3xl text-lg font-light leading-relaxed animate-fade-in-up text-balance" style={{ animationDelay: '0.2s' }}>
             {t.services.subtitle}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 py-12 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-24 relative">
          
          {/* Mobile Sticky Nav Dropdown */}
          <div className="lg:hidden sticky top-24 z-30 mb-8 bg-white/95 backdrop-blur shadow-sm p-4 -mx-6 px-6 border-b border-gray-100">
            <label htmlFor="mobile-nav" className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2 block">Jump to section</label>
            <div className="relative">
              <select 
                id="mobile-nav"
                className="w-full appearance-none bg-gray-50 border border-gray-200 text-primary py-3 px-4 pr-8 rounded-sm focus:outline-none focus:border-secondary text-sm font-serif"
                onChange={(e) => scrollToSection(e, e.target.value)}
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

          {/* Desktop Navigation Sidebar Sticky */}
          <div className="lg:col-span-3 hidden lg:block self-start sticky top-32">
              <h3 className="font-bold text-[10px] uppercase tracking-[0.2em] text-primary mb-6 border-b border-primary pb-4">{t.services.index}</h3>
              
              <div className="max-h-[calc(100vh-200px)] overflow-y-auto pr-2 scrollbar-thin pb-10">
                {/* Practice Areas List */}
                <div className="mb-8">
                  <h4 className="text-[10px] font-bold text-gray-400 uppercase mb-4 tracking-wider">{t.services.practiceAreasHeader}</h4>
                  <ul className="space-y-1 relative border-l border-gray-100">
                    {t.practiceAreas.map((practice) => (
                      <li key={practice.id}>
                        <a 
                          href={`#${practice.id}`} 
                          onClick={(e) => scrollToSection(e, practice.id)}
                          className={`flex items-center justify-between transition-all duration-300 text-xs py-2 pl-4 border-l-2 -ml-[1px] ${
                            activeSection === practice.id 
                              ? 'text-primary font-bold border-secondary bg-surface-alt' 
                              : 'text-gray-500 hover:text-primary font-medium border-transparent hover:border-gray-300'
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
                  <h4 className="text-[10px] font-bold text-gray-400 uppercase mb-4 tracking-wider">{t.services.expertiseHeader}</h4>
                  <ul className="space-y-1 relative border-l border-gray-100">
                    {t.expertise.map((exp) => (
                      <li key={exp.id}>
                        <a 
                          href={`#${exp.id}`} 
                          onClick={(e) => scrollToSection(e, exp.id)}
                          className={`flex items-center justify-between transition-all duration-300 text-xs py-2 pl-4 border-l-2 -ml-[1px] ${
                            activeSection === exp.id 
                              ? 'text-primary font-bold border-secondary bg-surface-alt' 
                              : 'text-gray-500 hover:text-primary font-medium border-transparent hover:border-gray-300'
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

          {/* Content */}
          <div className="lg:col-span-9 space-y-24">
            
            {/* Practice Areas Section */}
            <div>
              <h2 className="text-2xl md:text-3xl font-serif text-primary mb-12 border-b border-gray-200 pb-6">{t.services.practiceAreasHeader}</h2>
              <div className="flex flex-col gap-16">
                {t.practiceAreas.map((practice) => (
                  <div 
                    key={practice.id} 
                    id={practice.id} 
                    className="scroll-mt-32 border-b border-gray-100 pb-16 last:border-0 last:pb-0" 
                  >
                    <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start group">
                      {/* Image Side - Visible on Mobile now */}
                      <div className="w-full md:w-3/12 flex-shrink-0">
                         <div className="aspect-[3/2] md:aspect-square overflow-hidden rounded-sm bg-gray-100 relative shadow-sm">
                            <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                            <Image 
                              src={practice.image} 
                              alt={practice.title}
                              sizes="(max-width: 768px) 100vw, 25vw"
                              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                            />
                         </div>
                      </div>

                      {/* Content Side */}
                      <div className="w-full md:w-9/12">
                        <h2 className="text-2xl md:text-3xl font-serif text-primary group-hover:text-secondary transition-colors mb-4 md:mt-0">
                          {practice.title}
                        </h2>
                        <div className="prose prose-lg prose-gray max-w-none font-light leading-relaxed text-gray-600 text-base">
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
              <h2 className="text-2xl md:text-3xl font-serif text-primary mb-12 border-b border-gray-200 pb-6">{t.services.expertiseHeader}</h2>
              <div className="flex flex-col gap-16">
                {t.expertise.map((exp) => (
                  <div 
                    key={exp.id} 
                    id={exp.id} 
                    className="scroll-mt-32 border-b border-gray-100 pb-16 last:border-0 last:pb-0"
                  >
                    <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start group">
                      {/* Image Side - Visible on Mobile now */}
                      <div className="w-full md:w-3/12 flex-shrink-0">
                         <div className="aspect-[3/2] md:aspect-square overflow-hidden rounded-sm bg-gray-100 relative shadow-sm">
                            <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                            <Image 
                              src={exp.image} 
                              alt={exp.title}
                              sizes="(max-width: 768px) 100vw, 25vw"
                              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                            />
                         </div>
                      </div>

                      {/* Content Side */}
                      <div className="w-full md:w-9/12">
                        <h2 className="text-2xl md:text-3xl font-serif text-primary group-hover:text-secondary transition-colors mb-4 md:mt-0">
                          {exp.title}
                        </h2>
                        <div className="prose prose-lg prose-gray max-w-none font-light leading-relaxed text-gray-600 text-base">
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