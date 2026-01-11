import React, { useEffect, useState } from 'react';
import { LAWYERS } from '../constants';
import { Mail, Phone, ArrowRight, X, GraduationCap, Scale, Languages, Award } from 'lucide-react';
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
    <div className="bg-white min-h-screen transition-colors duration-300">
      <SEO 
        title={t.nav.people}
        description="Meet our team of seasoned lawyers dedicated to delivering innovative, client-focused solutions."
      />

      {/* Header */}
      <div className="bg-surface-alt pt-32 pb-16 md:pt-40 md:pb-24 border-b border-gray-200 relative overflow-hidden transition-colors duration-300">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-stone-100 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          {/* Changed text-secondary to text-primary */}
          <h4 className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase mb-6 flex items-center gap-2">
             <span className="w-4 h-[1px] bg-secondary"></span> {t.people.team}
          </h4>
          <h1 className="text-4xl md:text-6xl font-serif text-primary mb-6 animate-fade-in-up">{t.people.title}</h1>
          <p className="text-gray-700 max-w-3xl text-lg font-light leading-relaxed animate-fade-in-up text-balance" style={{ animationDelay: '0.2s' }}>
            {t.people.subtitle}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="flex flex-col gap-16">
          
          {/* Partners & Of Counsel */}
          <div className="grid grid-cols-1 gap-12">
            {LAWYERS.filter(l => l.role !== 'Legal Team').map((lawyer, index) => (
              <div 
                key={index} 
                className="group cursor-pointer flex flex-col md:flex-row gap-8 items-start pb-12 border-b border-gray-100"
                onClick={() => setSelectedLawyer(lawyer)}
              >
                {/* Landscape Image Container - Changed to 3/2 aspect ratio for better proportion */}
                <div className="w-full md:w-5/12 aspect-[3/2] overflow-hidden bg-gray-100 rounded-sm shadow-sm transition-all duration-700 relative">
                   <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent z-10 transition-colors duration-500"></div>
                   <Image 
                     src={lawyer.image} 
                     alt={lawyer.name} 
                     loading="lazy"
                     sizes="(max-width: 768px) 100vw, 40vw"
                     className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out transform group-hover:scale-105"
                     containerClassName="w-full h-full"
                   />
                </div>
                
                <div className="w-full md:w-7/12 flex flex-col pt-2">
                  <h2 className="text-3xl md:text-4xl font-serif text-primary mb-2 group-hover:text-secondary transition-colors">{lawyer.name}</h2>
                  <p className="text-gray-600 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">{lawyer.role}</p>
                  <p className="text-gray-500 font-light line-clamp-3 md:line-clamp-4 mb-8 leading-relaxed text-base">{lawyer.bio}</p>
                  
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-secondary group-hover:translate-x-2 transition-transform mt-auto">
                     {t.people.readBio} <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Associates Section */}
          <div>
            <h3 className="text-2xl font-serif text-primary mb-8 border-b border-gray-200 pb-4">{t.people.associates}</h3>
            {LAWYERS.filter(l => l.role === 'Legal Team').map((associate, index) => (
               <div key={index} className="flex flex-col md:flex-row gap-8 items-center bg-gray-50 p-8 rounded-sm border border-gray-100">
                  <div className="w-full md:w-1/3 aspect-[3/2] bg-gray-200 overflow-hidden relative rounded-sm">
                    <Image 
                      src={associate.image} 
                      alt="Associates" 
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="w-full h-full object-cover grayscale opacity-90" 
                    />
                  </div>
                  <div className="w-full md:w-2/3">
                    <h4 className="text-xl font-serif text-primary mb-2">Our Associates</h4>
                    <p className="text-gray-600 font-light text-lg leading-relaxed">
                      {associate.bio}
                    </p>
                  </div>
               </div>
            ))}
          </div>

        </div>
      </div>

      {/* Slide-over Drawer for Lawyer Details - Mobile Optimized & Increased Z-Index */}
      <div className={`fixed inset-0 z-[110] transition-opacity duration-500 ${selectedLawyer ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-primary/90 backdrop-blur-sm"
          onClick={() => setSelectedLawyer(null)}
        ></div>

        {/* Panel */}
        <div className={`absolute right-0 top-0 h-full w-full md:w-[600px] lg:w-[700px] bg-white shadow-2xl overflow-y-auto transform transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${selectedLawyer ? 'translate-x-0' : 'translate-x-full'}`}>
           {selectedLawyer && (
             <div className="min-h-full flex flex-col">
               {/* Close Button - Sticky for Mobile */}
               <div className="absolute top-4 right-4 z-20 md:top-8 md:right-8">
                 <button 
                   onClick={() => setSelectedLawyer(null)}
                   className="p-3 bg-white/20 backdrop-blur rounded-full hover:bg-secondary hover:text-white transition-colors text-white shadow-lg"
                 >
                   <X size={24} />
                 </button>
               </div>

               {/* Banner Image */}
               <div className="h-64 md:h-80 w-full relative flex-shrink-0">
                 <Image 
                   src={selectedLawyer.image} 
                   alt={selectedLawyer.name} 
                   sizes="100vw"
                   className="w-full h-full object-cover grayscale"
                   containerClassName="w-full h-full"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
               </div>

               {/* Content */}
               <div className="px-6 md:px-14 pb-14 -mt-16 md:-mt-24 relative z-10 flex-grow">
                 <h2 className="text-3xl md:text-5xl font-serif text-primary mb-3 leading-tight">{selectedLawyer.name}</h2>
                 <p className="text-secondary text-[10px] font-bold uppercase tracking-[0.2em] mb-10">{selectedLawyer.role}</p>

                 {/* Contact Actions */}
                 <div className="flex flex-col gap-4 mb-12 border-b border-gray-200 pb-12">
                   <a 
                     href={`mailto:${selectedLawyer.email}`} 
                     className="flex items-center gap-4 text-gray-700 hover:text-secondary transition-colors group"
                   >
                     <div className="p-3 bg-gray-100 rounded-full group-hover:bg-secondary group-hover:text-white transition-colors"><Mail size={18}/></div>
                     <span className="text-sm font-medium tracking-wide break-all">{selectedLawyer.email}</span>
                   </a>
                   <a 
                     href={`tel:${selectedLawyer.phone}`}
                     className="flex items-center gap-4 text-gray-700 hover:text-secondary transition-colors group"
                   >
                     <div className="p-3 bg-gray-100 rounded-full group-hover:bg-secondary group-hover:text-white transition-colors"><Phone size={18}/></div>
                     <span className="text-sm font-medium tracking-wide">{selectedLawyer.phone}</span>
                   </a>
                 </div>

                 {/* Bio Sections */}
                 <div className="space-y-10">
                   <div>
                     <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-4">{t.people.bio.overview}</h3>
                     <p className="text-gray-700 font-light leading-loose whitespace-pre-line text-base">
                       {selectedLawyer.bio || "Bio coming soon."}
                     </p>
                   </div>

                   {selectedLawyer.education && (
                     <div>
                       <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-4 flex items-center gap-2">
                         <GraduationCap size={14} className="text-secondary" /> {t.people.bio.education}
                       </h3>
                       <ul className="space-y-3">
                         {selectedLawyer.education.map((edu, i) => (
                           <li key={i} className="text-gray-700 font-light border-l-2 border-secondary/50 pl-5 text-sm md:text-base">
                             {edu}
                           </li>
                         ))}
                       </ul>
                     </div>
                   )}

                   {selectedLawyer.qualifications && (
                     <div>
                       <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-4 flex items-center gap-2">
                         <Scale size={14} className="text-secondary" /> {t.people.bio.qualifications}
                       </h3>
                       <ul className="space-y-3">
                         {selectedLawyer.qualifications.map((adm, i) => (
                           <li key={i} className="text-gray-700 font-light border-l-2 border-secondary/50 pl-5 text-sm md:text-base">
                             {adm}
                           </li>
                         ))}
                       </ul>
                     </div>
                   )}

                   {selectedLawyer.memberships && (
                     <div>
                       <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-4 flex items-center gap-2">
                         <Award size={14} className="text-secondary" /> {t.people.bio.memberships}
                       </h3>
                       <ul className="space-y-3">
                         {selectedLawyer.memberships.map((mem, i) => (
                           <li key={i} className="text-gray-700 font-light border-l-2 border-secondary/50 pl-5 text-sm md:text-base">
                             {mem}
                           </li>
                         ))}
                       </ul>
                     </div>
                   )}

                    {selectedLawyer.languages && (
                     <div>
                       <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-4 flex items-center gap-2">
                         <Languages size={14} className="text-secondary" /> {t.people.bio.languages}
                       </h3>
                       <div className="flex gap-3 flex-wrap">
                         {selectedLawyer.languages.map((lang, i) => (
                           <span key={i} className="px-4 py-1.5 bg-gray-100 text-gray-700 text-xs font-bold uppercase tracking-wider rounded-full">
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