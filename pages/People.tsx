import React, { useEffect, useState } from 'react';
import { LAWYERS } from '../constants';
import { Mail, Phone, ArrowRight, X, GraduationCap, Scale, Languages } from 'lucide-react';
import { useLang } from '../providers';
import SEO from '../components/SEO';
import { Lawyer } from '../types';
import Image from '../components/Image';

const People: React.FC = () => {
  const { t } = useLang();
  const [selectedLawyer, setSelectedLawyer] = useState<Lawyer | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle body scroll locking when drawer is open
  useEffect(() => {
    if (selectedLawyer) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedLawyer]);

  return (
    <div className="bg-white dark:bg-primary min-h-screen transition-colors duration-300">
      <SEO 
        title={t.nav.people}
        description="Meet our team of seasoned lawyers dedicated to delivering innovative, client-focused solutions."
      />

      {/* Header - Reduced Top Padding */}
      <div className="bg-surface-alt dark:bg-[#1c1917] pt-32 pb-16 md:pt-40 md:pb-24 border-b border-gray-200 dark:border-white/5 relative overflow-hidden transition-colors duration-300">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-stone-100 dark:from-[#0c0a09] to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <h4 className="text-[10px] font-bold tracking-[0.2em] text-secondary uppercase mb-6 flex items-center gap-2">
             <span className="w-4 h-[1px] bg-secondary"></span> {t.people.team}
          </h4>
          <h1 className="text-4xl md:text-6xl font-serif text-primary dark:text-white mb-6 animate-fade-in-up">{t.people.title}</h1>
          <p className="text-gray-700 dark:text-stone-400 max-w-3xl text-lg font-light leading-relaxed animate-fade-in-up text-balance" style={{ animationDelay: '0.2s' }}>
            {t.people.subtitle}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-12">
          {LAWYERS.map((lawyer, index) => (
            <div 
              key={index} 
              className="group cursor-pointer perspective-1000"
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => setSelectedLawyer(lawyer)}
            >
              {/* Card Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 dark:bg-[#1c1917] mb-6 rounded-sm shadow-sm transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:shadow-xl group-hover:scale-[1.01] group-hover:-translate-y-1">
                 <Image 
                   src={lawyer.image} 
                   alt={lawyer.name} 
                   loading="lazy"
                   className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out"
                   containerClassName="w-full h-full"
                 />
                 {/* Gradient Overlay on hover */}
                 <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                 
                 {/* Hover Text */}
                 <div className="absolute bottom-8 left-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                    <span className="text-white text-[10px] font-bold uppercase tracking-[0.2em] border-b border-secondary pb-1">{t.people.readBio}</span>
                 </div>
              </div>
              
              <div className="flex justify-between items-end border-b border-gray-200 dark:border-white/10 pb-4 group-hover:border-secondary transition-colors duration-500">
                <div>
                   <h2 className="text-2xl md:text-3xl font-serif text-primary dark:text-white mb-1 group-hover:text-secondary transition-colors">{lawyer.name}</h2>
                   <p className="text-gray-600 dark:text-stone-400 text-[10px] font-bold uppercase tracking-[0.2em]">{lawyer.role}</p>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-[-10px] group-hover:translate-x-0">
                   <ArrowRight className="text-secondary" size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slide-over Drawer for Lawyer Details */}
      <div className={`fixed inset-0 z-[100] transition-opacity duration-500 ${selectedLawyer ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-primary/90 backdrop-blur-sm"
          onClick={() => setSelectedLawyer(null)}
        ></div>

        {/* Panel */}
        <div className={`absolute right-0 top-0 h-full w-full md:w-[600px] lg:w-[700px] bg-white dark:bg-[#0c0a09] shadow-2xl overflow-y-auto transform transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${selectedLawyer ? 'translate-x-0' : 'translate-x-full'}`}>
           {selectedLawyer && (
             <div className="min-h-full flex flex-col">
               {/* Close Button */}
               <button 
                 onClick={() => setSelectedLawyer(null)}
                 className="absolute top-8 right-8 z-10 p-3 bg-white/20 backdrop-blur rounded-full hover:bg-secondary hover:text-white transition-colors text-white"
               >
                 <X size={20} />
               </button>

               {/* Banner Image */}
               <div className="h-72 md:h-80 w-full relative">
                 <Image 
                   src={selectedLawyer.image} 
                   alt={selectedLawyer.name} 
                   className="w-full h-full object-cover grayscale"
                   containerClassName="w-full h-full"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0c0a09] to-transparent"></div>
               </div>

               {/* Content */}
               <div className="px-10 md:px-14 pb-14 -mt-24 relative z-10 flex-grow">
                 <h2 className="text-3xl md:text-5xl font-serif text-primary dark:text-white mb-3">{selectedLawyer.name}</h2>
                 <p className="text-secondary text-[10px] font-bold uppercase tracking-[0.2em] mb-10">{selectedLawyer.role}</p>

                 {/* Contact Actions */}
                 <div className="flex flex-col md:flex-row gap-6 mb-12 border-b border-gray-200 dark:border-white/10 pb-12">
                   <a 
                     href={`mailto:${selectedLawyer.email}`} 
                     className="flex items-center gap-4 text-gray-700 dark:text-stone-300 hover:text-secondary transition-colors group"
                   >
                     <div className="p-3 bg-gray-100 dark:bg-white/5 rounded-full group-hover:bg-secondary group-hover:text-white transition-colors"><Mail size={18}/></div>
                     <span className="text-sm font-medium tracking-wide">{selectedLawyer.email}</span>
                   </a>
                   <a 
                     href={`tel:${selectedLawyer.phone}`}
                     className="flex items-center gap-4 text-gray-700 dark:text-stone-300 hover:text-secondary transition-colors group"
                   >
                     <div className="p-3 bg-gray-100 dark:bg-white/5 rounded-full group-hover:bg-secondary group-hover:text-white transition-colors"><Phone size={18}/></div>
                     <span className="text-sm font-medium tracking-wide">{selectedLawyer.phone}</span>
                   </a>
                 </div>

                 {/* Bio Sections */}
                 <div className="space-y-10">
                   <div>
                     <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary dark:text-white mb-4">{t.people.bio.biography}</h3>
                     <p className="text-gray-700 dark:text-stone-400 font-light leading-loose whitespace-pre-line text-base">
                       {selectedLawyer.bio || "Bio coming soon."}
                     </p>
                   </div>

                   {selectedLawyer.education && (
                     <div>
                       <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary dark:text-white mb-4 flex items-center gap-2">
                         <GraduationCap size={14} className="text-secondary" /> {t.people.bio.education}
                       </h3>
                       <ul className="space-y-3">
                         {selectedLawyer.education.map((edu, i) => (
                           <li key={i} className="text-gray-700 dark:text-stone-400 font-light border-l-2 border-secondary/50 pl-5 text-sm md:text-base">
                             {edu}
                           </li>
                         ))}
                       </ul>
                     </div>
                   )}

                   {selectedLawyer.admissions && (
                     <div>
                       <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary dark:text-white mb-4 flex items-center gap-2">
                         <Scale size={14} className="text-secondary" /> {t.people.bio.admissions}
                       </h3>
                       <ul className="space-y-3">
                         {selectedLawyer.admissions.map((adm, i) => (
                           <li key={i} className="text-gray-700 dark:text-stone-400 font-light border-l-2 border-secondary/50 pl-5 text-sm md:text-base">
                             {adm}
                           </li>
                         ))}
                       </ul>
                     </div>
                   )}

                    {selectedLawyer.languages && (
                     <div>
                       <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary dark:text-white mb-4 flex items-center gap-2">
                         <Languages size={14} className="text-secondary" /> {t.people.bio.languages}
                       </h3>
                       <div className="flex gap-3 flex-wrap">
                         {selectedLawyer.languages.map((lang, i) => (
                           <span key={i} className="px-4 py-1.5 bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-stone-400 text-xs font-bold uppercase tracking-wider rounded-full">
                             {lang}
                           </span>
                         ))}
                       </div>
                     </div>
                   )}
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