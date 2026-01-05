import React, { useState, useEffect } from 'react';
import { Calendar, ArrowRight, Filter } from 'lucide-react';
import { useLang } from '../providers';
import SEO from '../components/SEO';

// Dummy data generator since we don't have a backend
const ALL_INSIGHTS = [
  {
    id: 1,
    title: "The Evolution of M&A in Southeast Asia's Tech Sector",
    date: "Oct 12, 2024",
    category: "Corporate",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
    excerpt: "Analyzing the shift in deal structures and regulatory scrutiny for tech unicorns."
  },
  {
    id: 2,
    title: "Navigating New Carbon Trading Regulations in Indonesia",
    date: "Sep 28, 2024",
    category: "Sustainability",
    image: "https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?q=80&w=2669&auto=format&fit=crop",
    excerpt: "A comprehensive guide to the new carbon exchange and compliance requirements."
  },
  {
    id: 3,
    title: "Understanding Employment Law Changes for Remote Work",
    date: "Sep 15, 2024",
    category: "Employment",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop",
    excerpt: "How recent omnibus law amendments impact remote and hybrid working arrangements."
  },
  {
    id: 4,
    title: "Project Financing in Renewable Energy: A Legal Framework",
    date: "Aug 10, 2024",
    category: "Energy",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop",
    excerpt: "Key considerations for lenders and sponsors in green energy infrastructure projects."
  },
  {
    id: 5,
    title: "Data Privacy Compliance for Fintech Startups",
    date: "Jul 22, 2024",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    excerpt: "Ensuring compliance with the Personal Data Protection Law (PDP Law) in digital finance."
  }
];

const Insights: React.FC = () => {
  const { t } = useLang();
  const [activeCategory, setActiveCategory] = useState('All');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = ['All', ...Array.from(new Set(ALL_INSIGHTS.map(i => i.category)))];
  const filteredInsights = activeCategory === 'All' 
    ? ALL_INSIGHTS 
    : ALL_INSIGHTS.filter(i => i.category === activeCategory);

  return (
    <div className="bg-white dark:bg-primary min-h-screen pt-20 transition-colors duration-300">
      <SEO 
        title={t.nav.insights}
        description="Latest legal insights, market analysis, and firm news from DITRA Law Partnership."
      />

      {/* Header */}
      <div className="bg-surface dark:bg-[#111625] py-20 md:py-24 border-b border-gray-100 dark:border-white/5 transition-colors duration-300">
        <div className="container mx-auto px-6 md:px-12">
          <h4 className="text-[10px] font-bold tracking-widest text-secondary uppercase mb-6 animate-fade-in">{t.nav.insights}</h4>
          <h1 className="text-4xl md:text-6xl font-serif text-primary dark:text-white mb-6 animate-fade-in-up">{t.insights.title}</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl text-lg font-light leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
             {t.insights.subtitle}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 py-16">
        {/* Filter */}
        <div className="flex flex-wrap gap-3 mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${
                activeCategory === cat 
                  ? 'bg-primary dark:bg-white text-white dark:text-primary' 
                  : 'bg-gray-100 dark:bg-white/5 text-gray-500 hover:bg-gray-200 dark:hover:bg-white/10'
              }`}
            >
              {cat === 'All' ? t.insights.filterAll : cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {filteredInsights.map((item, index) => (
            <div 
              key={item.id} 
              className="group cursor-pointer flex flex-col h-full animate-fade-in-up"
              style={{ animationDelay: `${0.4 + (index * 0.1)}s` }}
            >
               <div className="overflow-hidden mb-5 rounded-sm relative aspect-[4/3]">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    loading="lazy"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute top-4 left-4 z-20 bg-white/90 dark:bg-primary/90 backdrop-blur text-primary dark:text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                    {item.category}
                  </div>
               </div>
               
               <div className="flex items-center gap-2 text-[10px] text-gray-400 mb-2 uppercase tracking-widest">
                  <Calendar size={10} /> {item.date}
               </div>
               
               <h3 className="text-xl md:text-2xl font-serif text-primary dark:text-white mb-3 leading-tight group-hover:text-secondary transition-colors">
                  {item.title}
               </h3>
               
               <p className="text-gray-500 dark:text-gray-400 font-light text-sm mb-5 line-clamp-3 flex-grow leading-relaxed">
                 {item.excerpt}
               </p>

               <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary dark:text-white group-hover:gap-3 transition-all mt-auto pt-4 border-t border-gray-100 dark:border-white/5">
                  {t.home.readMore} <ArrowRight size={12} className="text-secondary" />
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Insights;