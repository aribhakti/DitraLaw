import React, { useEffect, useState } from 'react';
import { LAWYERS } from '../constants';
import { Mail, Phone, ArrowRight, X, GraduationCap, Scale, Languages } from 'lucide-react';
import { useLang } from '../providers';
import SEO from '../components/SEO';
import { Lawyer } from '../types';

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
    <div className="bg-white dark:bg-primary min-h-screen pt-20 transition-colors duration-300">
      <SEO 
        title={t.nav.people}
        description="Meet our team of seasoned lawyers dedicated to delivering innovative, client-focused solutions."
      />

      {/* Header */}
      <div className="bg-surface-alt dark:bg-[#1c1917] py-20 md:py-24 border-b border-gray-200 dark:border-white/5 relative overflow-hidden transition-colors duration-300">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-stone-100 dark:from-[#0c0a09] to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <h4 className="text-xs font-bold tracking-widest text-secondary uppercase mb-6 flex items-center gap-2">
             <span className="w-4 h-[1px] bg-secondary"></span> {t.people.team}
          </h4>
          <h1 className="text-4xl md:text-6xl font-serif text-primary dark:text-white mb-6 animate-fade-in-up">{t.people.title}</h1>
          <p className="text-gray-700 dark:text-stone-400 max-w-2xl text-lg font-light leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {t.people.subtitle}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {LAWYERS.map((lawyer, index) => (
            <div 
              key={index} 
              className="group cursor-pointer perspective-1000"
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => setSelectedLawyer(lawyer)}
            >
              {/* Card Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 dark:bg-[#1c1917] mb-6 rounded-sm shadow-sm transition-all duration-500 ease-out group-hover:shadow-2xl group-hover:scale-[1.02] group-hover:-translate-y-2">
                 <img 
                   src={lawyer.image} 
                   alt={lawyer.name} 
                   loading="lazy"
                   className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                 />
                 {/* Gradient Overlay on hover */}
                 <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                 
                 {/* Hover Text */}
                 <div className="absolute bottom-8 left-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <span className="text-white text-xs font-bold uppercase tracking-widest border-b border-secondary pb-1">{t.people.readBio}</span>
                 </div>
              </div>
              
              <div className="flex justify-between items-end border-b border-gray-200 dark:border-white/10 pb-4 group-hover:border-secondary transition-colors duration-500">
                <div>
                   <h2 className="text-2xl md:text-3xl font-serif text-primary dark:text-white mb-1 group-hover:text-secondary transition-colors">{lawyer.name}</h2>
                   <p className="text-gray-600 dark:text-stone-400 text-xs font-bold uppercase tracking-widest">{lawyer.role}</p>
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
          className="absolute inset-0 bg-primary/80 backdrop-blur-sm"
          onClick={() => setSelectedLawyer(null)}
        ></div>

        {/* Panel */}
        <div className={`absolute right-0 top-0 h-full w-full md:w-[500px] lg:w-[600px] bg-white dark:bg-[#0c0a09] shadow-2xl overflow-y-auto transform transition-transform duration-500 ease-in-out ${selectedLawyer ? 'translate-x-0' : 'translate-x-full'}`}>
           {selectedLawyer && (
             <div className="min-h-full flex flex-col">
               {/* Close Button */}
               <button 
                 onClick={() => setSelectedLawyer(null)}
                 className="absolute top-6 right-6 z-10 p-2 bg-gray-100 dark:bg-white/10 rounded-full hover:bg-secondary hover:text-white transition-colors text-primary dark:text-white"
               >
                 <X size={20} />
               </button>

               {/* Banner Image */}
               <div className="h-64 md:h-72 w-full relative">
                 <img 
                   src={selectedLawyer.image} 
                   alt={selectedLawyer.name} 
                   className="w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0c0a09] to-transparent"></div>
               </div>

               {/* Content */}
               <div className="px-8 md:px-10 pb-10 -mt-20 relative z-10 flex-grow">
                 <h2 className="text-3xl md:text-4xl font-serif text-primary dark:text-white mb-2">{selectedLawyer.name}</h2>
                 <p className="text-secondary text-xs font-bold uppercase tracking-widest mb-8">{selectedLawyer.role}</p>

                 {/* Contact Actions */}
                 <div className="flex flex-col md:flex-row gap-4 mb-10 border-b border-gray-200 dark:border-white/10 pb-10">
                   <a 
                     href={`mailto:${selectedLawyer.email}`} 
                     className="flex items-center gap-3 text-gray-700 dark:text-stone-300 hover:text-secondary transition-colors"
                   >
                     <div className="p-2 bg-gray-100 dark:bg-white/5 rounded-full"><Mail size={16}/></div>
                     <span className="text-sm font-medium">{selectedLawyer.email}</span>
                   </a>
                   <a 
                     href={`tel:${selectedLawyer.phone}`}
                     className="flex items-center gap-3 text-gray-700 dark:text-stone-300 hover:text-secondary transition-colors"
                   >
                     <div className="p-2 bg-gray-100 dark:bg-white/5 rounded-full"><Phone size={16}/></div>
                     <span className="text-sm font-medium">{selectedLawyer.phone}</span>
                   </a>
                 </div>

                 {/* Bio Sections */}
                 <div className="space-y-8">
                   <div>
                     <h3 className="text-xs font-bold uppercase tracking-widest text-primary dark:text-white mb-3">{t.people.bio.biography}</h3>
                     <p className="text-gray-700 dark:text-stone-400 font-light leading-loose whitespace-pre-line text-sm md:text-base">
                       {selectedLawyer.bio || "Bio coming soon."}
                     </p>
                   </div>

                   {selectedLawyer.education && (
                     <div>
                       <h3 className="text-xs font-bold uppercase tracking-widest text-primary dark:text-white mb-3 flex items-center gap-2">
                         <GraduationCap size={14} className="text-secondary" /> {t.people.bio.education}
                       </h3>
                       <ul className="space-y-2">
                         {selectedLawyer.education.map((edu, i) => (
                           <li key={i} className="text-gray-700 dark:text-stone-400 font-light border-l-2 border-gray-200 dark:border-white/10 pl-4 text-sm">
                             {edu}
                           </li>
                         ))}
                       </ul>
                     </div>
                   )}

                   {selectedLawyer.admissions && (
                     <div>
                       <h3 className="text-xs font-bold uppercase tracking-widest text-primary dark:text-white mb-3 flex items-center gap-2">
                         <Scale size={14} className="text-secondary" /> {t.people.bio.admissions}
                       </h3>
                       <ul className="space-y-2">
                         {selectedLawyer.admissions.map((adm, i) => (
                           <li key={i} className="text-gray-700 dark:text-stone-400 font-light border-l-2 border-gray-200 dark:border-white/10 pl-4 text-sm">
                             {adm}
                           </li>
                         ))}
                       </ul>
                     </div>
                   )}

                    {selectedLawyer.languages && (
                     <div>
                       <h3 className="text-xs font-bold uppercase tracking-widest text-primary dark:text-white mb-3 flex items-center gap-2">
                         <Languages size={14} className="text-secondary" /> {t.people.bio.languages}
                       </h3>
                       <div className="flex gap-2 flex-wrap">
                         {selectedLawyer.languages.map((lang, i) => (
                           <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-stone-400 text-xs rounded-full">
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