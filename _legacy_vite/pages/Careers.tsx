import React, { useEffect } from 'react';
import { Briefcase, ArrowRight } from 'lucide-react';
import { useLang } from '../providers';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const Careers: React.FC = () => {
  const { t } = useLang();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white dark:bg-primary min-h-screen transition-colors duration-300">
      <SEO 
        title={t.nav.careers}
        description="Join DITRA Law Partnership and be part of a dynamic, forward-thinking legal team."
      />

      {/* Header - Optimized Padding */}
      <div className="bg-surface dark:bg-[#111625] pt-32 pb-16 md:pt-40 md:pb-24 border-b border-gray-100 dark:border-white/5 transition-colors duration-300">
        <div className="container mx-auto px-6 md:px-12">
          <h4 className="text-[10px] font-bold tracking-[0.2em] text-secondary uppercase mb-6 animate-fade-in">{t.nav.careers}</h4>
          <h1 className="text-4xl md:text-6xl font-serif text-primary dark:text-white mb-6 animate-fade-in-up">{t.careers.title}</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl text-lg font-light leading-relaxed animate-fade-in-up text-balance" style={{ animationDelay: '0.2s' }}>
             {t.careers.subtitle}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Main Content */}
          <div className="lg:w-2/3">
             <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
               <h2 className="text-2xl md:text-3xl font-serif text-primary dark:text-white mb-6">{t.careers.cultureTitle}</h2>
               <div className="prose prose-lg prose-gray dark:prose-invert font-light leading-relaxed">
                 <p className="mb-6">{t.careers.cultureDesc}</p>
                 <p>We are a firm that values diversity, innovation, and integrity. Whether you are an experienced associate or a fresh graduate, we offer an environment where your skills are honed and your contributions are recognized.</p>
               </div>
             </div>

             <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
               <h2 className="text-2xl md:text-3xl font-serif text-primary dark:text-white mb-8">{t.careers.openingsTitle}</h2>
               
               {/* No openings placeholder - Reduced padding */}
               <div className="bg-gray-50 dark:bg-[#111625] border border-gray-100 dark:border-white/5 p-10 text-center rounded-sm">
                 <Briefcase className="w-10 h-10 text-gray-300 mx-auto mb-6" />
                 <p className="text-gray-500 dark:text-gray-400 font-light mb-8 text-base">
                   {t.careers.noOpenings}
                 </p>
                 <Link 
                   to="/contact" 
                   className="inline-flex items-center gap-3 px-6 py-3 bg-primary dark:bg-white text-white dark:text-primary font-bold tracking-[0.2em] uppercase text-[10px] hover:bg-secondary dark:hover:bg-gray-200 transition-colors shadow-lg"
                 >
                   {t.careers.apply} <ArrowRight size={14} />
                 </Link>
               </div>
             </div>
          </div>

          {/* Sidebar - Reduced Padding */}
          <div className="lg:w-1/3 space-y-12">
             <div className="bg-[#1c1917] text-white p-8 relative overflow-hidden border-t-4 border-primary">
               <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
               <h3 className="text-xl font-serif mb-4 relative z-10 text-white">Internship Program</h3>
               <p className="text-stone-300 font-light text-sm mb-6 relative z-10 leading-relaxed">
                 We accept internship applications year-round from top-tier law students looking to gain practical experience.
               </p>
               <Link to="/contact" className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary hover:text-white transition-colors relative z-10 flex items-center gap-3">
                 Contact HR <ArrowRight size={14}/>
               </Link>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Careers;