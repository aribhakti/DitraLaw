import React, { useState, useEffect } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { useLang } from '../providers';
import SEO from '../components/SEO';
import Image from '../components/Image';
import { Link } from 'react-router-dom';
import { INSIGHTS } from '../constants';

const Insights: React.FC = () => {
  const { t } = useLang();
  const [activeCategory, setActiveCategory] = useState('All');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = ['All', ...Array.from(new Set(INSIGHTS.map(i => i.category)))];
  const filteredInsights = activeCategory === 'All' 
    ? INSIGHTS 
    : INSIGHTS.filter(i => i.category === activeCategory);

  return (
    <div className="bg-white dark:bg-primary min-h-screen transition-colors duration-300">
      <SEO 
        title={t.nav.insights}
        description="Latest legal insights, market analysis, and firm news from DITRA Law Partnership."
      />

      {/* Header - Optimized Padding */}
      <div className="bg-surface dark:bg-[#111625] pt-32 pb-16 md:pt-40 md:pb-24 border-b border-gray-100 dark:border-white/5 transition-colors duration-300">
        <div className="container mx-auto px-6 md:px-12">
          <h4 className="text-[10px] font-bold tracking-[0.2em] text-secondary uppercase mb-6 animate-fade-in">{t.nav.insights}</h4>
          <h1 className="text-4xl md:text-6xl font-serif text-primary dark:text-white mb-6 animate-fade-in-up">{t.insights.title}</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl text-lg font-light leading-relaxed animate-fade-in-up text-balance" style={{ animationDelay: '0.2s' }}>
             {t.insights.subtitle}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 py-20">
        {/* Filter */}
        <div className="flex flex-wrap gap-3 mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
                activeCategory === cat 
                  ? 'bg-primary dark:bg-white text-white dark:text-primary shadow-lg scale-105' 
                  : 'bg-gray-100 dark:bg-white/5 text-gray-500 hover:bg-gray-200 dark:hover:bg-white/10'
              }`}
            >
              {cat === 'All' ? t.insights.filterAll : cat}
            </button>
          ))}
        </div>

        {/* Grid - Reduced Gap */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {filteredInsights.map((item, index) => (
            <Link 
              key={item.id}
              to={`/insights/${item.id}`}
              className="group cursor-pointer flex flex-col h-full animate-fade-in-up"
              style={{ animationDelay: `${0.4 + (index * 0.1)}s` }}
            >
               <div className="overflow-hidden mb-6 rounded-sm relative aspect-[3/2]">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    loading="lazy"
                    // Performance: Tell browser image takes 33% width on large screens, 50% on medium, 100% on small
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transform group-hover:scale-105 transition-all duration-1000"
                    containerClassName="w-full h-full"
                  />
                  <div className="absolute top-4 left-4 z-20 bg-white/90 dark:bg-primary/90 backdrop-blur text-primary dark:text-white px-3 py-1 text-[9px] font-bold uppercase tracking-[0.2em]">
                    {item.category}
                  </div>
               </div>
               
               <div className="flex items-center gap-2 text-[10px] text-gray-400 mb-3 uppercase tracking-[0.2em]">
                  <Calendar size={12} /> {item.date}
               </div>
               
               <h3 className="text-xl md:text-2xl font-serif text-primary dark:text-white mb-3 leading-tight group-hover:text-secondary transition-colors">
                  {item.title}
               </h3>
               
               <p className="text-gray-500 dark:text-gray-400 font-light text-sm mb-6 line-clamp-3 flex-grow leading-relaxed">
                 {item.excerpt}
               </p>

               <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-primary dark:text-white group-hover:gap-3 transition-all mt-auto pt-4 border-t border-gray-100 dark:border-white/5">
                  {t.home.readMore} <ArrowRight size={12} className="text-secondary" />
               </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Insights;