import React, { useEffect, useState } from 'react';
import { LAWYERS } from '../constants';
import { Mail, Phone, X, GraduationCap, Scale, Languages, Award, ArrowRight } from 'lucide-react';
import { useLang } from '../providers';
import SEO from '../components/SEO';
import { Lawyer } from '../types';
import Image from '../components/Image';

const People: React.FC = () => {
  const { t } = useLang();
  const [selectedLawyer, setSelectedLawyer] = useState<Lawyer | null>(null);
  // Persist the lawyer data for the exit animation to avoid empty drawer glitch
  const [displayedLawyer, setDisplayedLawyer] = useState<Lawyer | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen transition-colors duration-300">
      <SEO 
        title={t.nav.people}
        description="Meet our team of seasoned lawyers dedicated to delivering innovative, client-focused solutions."
      />

      {/* Header - Increased Vertical Spacing for Grandeur */}
      <div className="bg-surface-alt pt-36 pb-20 md:pt-48 md:pb-32 border-b border-gray-200 relative overflow-hidden transition-colors duration-300">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-stone-100/50 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <h4 className="text-xs font-bold tracking-[0.25em] text-primary uppercase mb-8 flex items-center gap-3">
             <span className="w-6 h-[1px] bg-secondary"></span> {t.people.team}
          </h4>
          <h1 className="text-6xl md:text-8xl font-serif text-primary mb-8 animate-fade-in-up tracking-tight">{t.people.title}</h1>
          <p className="text-stone-600 max-w-2xl text-lg md:text-xl font-light leading-relaxed animate-fade-in-up text-balance" style={{ animationDelay: '0.2s' }}>
            {t.people.subtitle}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="flex flex-col gap-32">
          
          {/* Partners & Of Counsel */}
          <div className="grid grid-cols-1 gap-24">
            {LAWYERS.filter(l => l.role !== 'Legal Team').map((lawyer, index) => (
              <div 
                key={index} 
                className="group cursor-pointer flex flex-col md:flex-row gap-12 md:gap-20 items-center pb-24 border-b border-gray-100 last:border-0 last:pb-0"
                onClick={() => {
                  setDisplayedLawyer(lawyer);
                  setSelectedLawyer(lawyer);
                }}
              >
                {/* Landscape Image Container - Cinematic 3:2 Ratio */}
                <div className="w-full md:w-5/12 aspect-[3/2] overflow-hidden bg-gray-100 rounded-sm shadow-lg transition-all duration-700 relative group-hover:shadow-2xl">
                   {/* Gradient Overlay - Improved Visibility */}
                   <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 z-10 transition-opacity duration-500"></div>
                   
                   {/* "View Profile" Label - Spaced further from edge */}
                   <div className="absolute bottom-8 left-8 z-20 flex items-center gap-4 text-white">
                      <span className="text-xs font-bold uppercase tracking-[0.25em] border-b border-white/60 pb-1 group-hover:border-secondary group-hover:text-secondary transition-all duration-300">
                        {t.people.readBio}
                      </span>
                      <div className="p-1.5 rounded-full bg-white/10 group-hover:bg-secondary/20 transition-colors backdrop-blur-sm">
                        <ArrowRight size={14} className="text-white group-hover:text-secondary group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                   </div>

                   <Image 
                     src={lawyer.image} 
                     alt={lawyer.name} 
                     loading="lazy"
                     sizes="(max-width: 768px) 100vw, 40vw"
                     className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] transform group-hover:scale-105"
                     containerClassName="w-full h-full"
                   />
                </div>
                
                <div className="w-full md:w-7/12 flex flex-col pt-4">
                  <h2 className="text-5xl md:text-7xl font-serif text-primary mb-6 group-hover:text-secondary transition-colors duration-500 leading-none">{lawyer.name}</h2>
                  <p className="text-stone-500 text-sm font-bold uppercase tracking-[0.3em] flex items-center gap-4">
                    <span className="w-12 h-[1px] bg-secondary"></span>
                    {lawyer.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Associates Section */}
          <div className="pt-12 border-t border-gray-100">
            <h3 className="text-4xl font-serif text-primary mb-16">{t.people.associates}</h3>
            {LAWYERS.filter(l => l.role === 'Legal Team').map((associate, index) => (
               <div key={index} className="flex flex-col md:flex-row gap-12 items-start bg-stone-50/50 p-10 md:p-16 rounded-sm border border-stone-100 hover:border-stone-200 transition-colors duration-500">
                  <div className="w-full md:w-1/3 aspect-[3/2] bg-gray-200 overflow-hidden relative rounded-sm shadow-md">
                    <Image 
                      src={associate.image} 
                      alt="Associates" 
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="w-full h-full object-cover grayscale opacity-90 hover:opacity-100 transition-opacity duration-500" 
                    />
                  </div>
                  <div className="w-full md:w-2/3 pt-2">
                    <h4 className="text-3xl font-serif text-primary mb-6">Our Associates</h4>
                    <p className="text-stone-600 font-light text-xl leading-relaxed max-w-2xl">
                      {associate.bio}
                    </p>
                  </div>
               </div>
            ))}
          </div>

        </div>
      </div>

      {/* Slide-over Drawer */}
      <div className={`fixed inset-0 z-[150] transition-opacity duration-500 ${selectedLawyer ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div 
          className="absolute inset-0 bg-primary/95 backdrop-blur-md transition-opacity duration-500"
          onClick={() => setSelectedLawyer(null)}
        ></div>

        <div className={`absolute right-0 top-0 h-[100dvh] w-full md:w-[700px] lg:w-[850px] bg-white shadow-2xl overflow-y-auto transform transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${selectedLawyer ? 'translate-x-0' : 'translate-x-full'}`}>
           {displayedLawyer && (
             <div className="min-h-full flex flex-col relative">
               <div className="absolute top-8 right-8 z-30">
                 <button 
                   onClick={() => setSelectedLawyer(null)}
                   className="p-3 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full text-white transition-all duration-300 hover:rotate-90 hover:scale-110"
                   aria-label="Close Profile"
                 >
                   <X size={24} />
                 </button>
               </div>

               {/* Banner Image - Full Color */}
               <div className="h-80 md:h-[450px] w-full relative flex-shrink-0">
                 <Image 
                   src={displayedLawyer.image} 
                   alt={displayedLawyer.name} 
                   sizes="100vw"
                   className="w-full h-full object-cover"
                   containerClassName="w-full h-full"
                 />
                 {/* Top gradient for close button visibility */}
                 <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent opacity-70"></div>
                 {/* Bottom gradient for text blend */}
                 <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent"></div>
               </div>

               {/* Content Container */}
               <div className="px-6 md:px-20 pb-24 -mt-32 relative z-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                 <div className="bg-white p-10 md:p-14 shadow-2xl rounded-sm border-t-4 border-secondary">
                   <h2 className="text-4xl md:text-6xl font-serif text-primary mb-5 leading-tight">{displayedLawyer.name}</h2>
                   <p className="text-secondary text-xs font-bold uppercase tracking-[0.3em] mb-12 flex items-center gap-3">
                     {displayedLawyer.role}
                   </p>

                   {/* Contact */}
                   <div className="flex flex-wrap gap-8 mb-14 pb-14 border-b border-gray-100">
                     {displayedLawyer.email && (
                        <a href={`mailto:${displayedLawyer.email}`} className="flex items-center gap-4 text-stone-600 hover:text-primary transition-colors group">
                           <div className="p-3 bg-stone-50 rounded-full group-hover:bg-primary group-hover:text-white transition-colors"><Mail size={18}/></div>
                           <span className="text-base font-medium tracking-wide border-b border-transparent group-hover:border-primary transition-all duration-300">{displayedLawyer.email}</span>
                        </a>
                     )}
                     {displayedLawyer.phone && (
                        <a href={`tel:${displayedLawyer.phone.replace(/\s/g, '')}`} className="flex items-center gap-4 text-stone-600 hover:text-primary transition-colors group">
                           <div className="p-3 bg-stone-50 rounded-full group-hover:bg-primary group-hover:text-white transition-colors"><Phone size={18}/></div>
                           <span className="text-base font-medium tracking-wide border-b border-transparent group-hover:border-primary transition-all duration-300">{displayedLawyer.phone}</span>
                        </a>
                     )}
                   </div>

                   {/* Bio Content */}
                   <div className="space-y-16">
                     <div>
                       <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-primary mb-8 flex items-center gap-2">
                          Overview
                       </h3>
                       <div className="prose prose-lg prose-stone text-stone-600 font-light leading-relaxed whitespace-pre-line">
                         {displayedLawyer.bio || "Bio coming soon."}
                       </div>
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                        {displayedLawyer.education && displayedLawyer.education.length > 0 && (
                          <div>
                            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-primary mb-6 flex items-center gap-3">
                              <GraduationCap size={18} className="text-secondary" /> {t.people.bio.education}
                            </h3>
                            <ul className="space-y-4">
                              {displayedLawyer.education.map((edu, i) => (
                                <li key={i} className="text-stone-600 font-light text-base border-l-2 border-secondary/30 pl-6 py-1">
                                  {edu}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {displayedLawyer.qualifications && displayedLawyer.qualifications.length > 0 && (
                          <div>
                            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 flex items-center gap-3">
                              <Scale size={18} className="text-secondary" /> {t.people.bio.qualifications}
                            </h3>
                            <ul className="space-y-4">
                              {displayedLawyer.qualifications.map((adm, i) => (
                                <li key={i} className="text-stone-600 font-light text-base border-l-2 border-secondary/30 pl-6 py-1">
                                  {adm}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                        {displayedLawyer.memberships && displayedLawyer.memberships.length > 0 && (
                          <div>
                            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 flex items-center gap-3">
                              <Award size={18} className="text-secondary" /> {t.people.bio.memberships}
                            </h3>
                            <ul className="space-y-4">
                              {displayedLawyer.memberships.map((mem, i) => (
                                <li key={i} className="text-stone-600 font-light text-base border-l-2 border-secondary/30 pl-6 py-1">
                                  {mem}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {displayedLawyer.languages && displayedLawyer.languages.length > 0 && (
                          <div>
                            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 flex items-center gap-3">
                              <Languages size={18} className="text-secondary" /> {t.people.bio.languages}
                            </h3>
                            <div className="flex gap-3 flex-wrap">
                              {displayedLawyer.languages.map((lang, i) => (
                                <span key={i} className="px-5 py-2 bg-stone-50 text-stone-600 border border-stone-200 text-xs font-bold uppercase tracking-widest rounded-sm">
                                  {lang}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           )}
        </div>
      </div>
    </div>
  );
};

export default People;