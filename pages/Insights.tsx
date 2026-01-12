import React, { useState, useEffect } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { useLang } from '../providers';
import SEO from '../components/SEO';
import Image from '../components/Image';

// Real data from 2025 Legal Updates with Curated Professional Imagery
const ALL_INSIGHTS = [
  {
    id: 1,
    title: "Indonesia Updates Stock Exchange Disclosure Framework Through IDX Regulation No. I-E of 2025",
    date: "Dec 29, 2025",
    category: "Capital Markets",
    // Image: Abstract glass building reflection (Corporate/Finance feel)
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop",
    excerpt: "On 12 December 2025, IDX issued a new Regulation No. I-E on Disclosure Obligations replacing the previous framework issued in 2022. The regulation aligns reporting mechanisms with OJK frameworks."
  },
  {
    id: 2,
    title: "New Implementation Guidelines for Mineral and Coal Mining Under MEMR Regulation No. 18 of 2025",
    date: "Dec 05, 2025",
    category: "Mining",
    // Image: Aerial texture of earth/mining (Industrial/Raw)
    image: "https://images.unsplash.com/photo-1579541579240-a33777555d8f?q=80&w=2000&auto=format&fit=crop", 
    excerpt: "The Minister of Energy and Mineral Resources enacted MR 18/2025 to implement regulatory frameworks set out under GR 39/2025, revising eligibility criteria for WIUP auctions."
  },
  {
    id: 3,
    title: "Indonesia Updates State-Owned Enterprises Legal Framework Through Law No. 16 of 2025",
    date: "Nov 10, 2025",
    category: "SOE",
    // Image: Abstract Batik or Indonesian texture (Cultural/State)
    image: "https://images.unsplash.com/photo-1628190201777-62f790299d9d?q=80&w=2000&auto=format&fit=crop", 
    excerpt: "The Indonesian Government enacted Law 16/2025, the fourth amendment to the SOE Law, enhancing governance, efficiency and competitiveness of SOEs."
  },
  {
    id: 4,
    title: "Indonesia’s New Mining Framework: Key Insights into GR No. 39 of 2025",
    date: "Oct 29, 2025",
    category: "Mining",
    // Image: Coal/Mineral texture (Dark/Serious)
    image: "https://images.unsplash.com/photo-1618388428806-3af443210b42?q=80&w=2000&auto=format&fit=crop", 
    excerpt: "Government Regulation 39/2025 aligns the mineral and coal mining framework with the latest Mining Law amendment, introducing detailed priority rights mechanisms."
  },
  {
    id: 5,
    title: "Indonesia's Latest Regime on Risk-Based Business Licensing System Under BKPM Regulation No. 5/2025",
    date: "Oct 22, 2025",
    category: "Corporate",
    // Image: Modern office architecture (Business/Licensing)
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2000&auto=format&fit=crop", 
    excerpt: "BKPM issued MR 5/2025 to clarify provisions on business licensing and investment under GR 28/2025, effectively replacing three previous BKPM regulations."
  },
  {
    id: 6,
    title: "Indonesia Introduces New Import Policy Regime Under Ministry of Trade Regulation No. 16 of 2025",
    date: "Aug 18, 2025",
    category: "Trade",
    // Image: Shipping containers/Logistics (Trade/Export)
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop", 
    excerpt: "MOTR 16/2025 becomes Indonesia’s new import regulatory framework, aimed at simplifying licensing procedures and strengthening compliance oversight."
  },
  {
    id: 7,
    title: "Indonesia’s New Risk Based-Licensing Regime (GR 28/2025)",
    date: "Jul 21, 2025",
    category: "Corporate",
    // Image: Abstract skyscraper looking up (Growth/Structure)
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2000&auto=format&fit=crop", 
    excerpt: "A comprehensive update to the risk-based business licensing framework, aiming to enhance legal certainty and streamline regulatory processes via the OSS system."
  },
  {
    id: 8,
    title: "Significant Amendments to Land Rights Regime Under Ministerial Regulation No. 5 of 2025",
    date: "Jun 22, 2025",
    category: "Real Estate",
    // Image: Architectural details/Building facade (Property/Land)
    image: "https://images.unsplash.com/photo-1516156008625-3a9d60da923c?q=80&w=2000&auto=format&fit=crop", 
    excerpt: "MR 5/2025 develops Indonesia’s land rights regime by refining key reforms, clarifying delegation of authority, and providing certainty on land right renewals."
  },
  {
    id: 9,
    title: "OJK Mandates Dematerialization of Physical Shares and Regulates Unclaimed Assets (POJK 9/2025)",
    date: "Jun 16, 2025",
    category: "Capital Markets",
    // Image: Digital data/Abstract tech (Modernization/Digital)
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop", 
    excerpt: "OJK's new regulation mandates full dematerialization of equity securities within 5 years and establishes a framework to manage unclaimed assets in the capital market."
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
    <div className="bg-white dark:bg-primary min-h-screen transition-colors duration-300">
      <SEO 
        title={t.nav.insights}
        description="Latest legal insights, market analysis, and firm news from DITRA Law Partnership."
      />

      {/* Header - Optimized Padding */}
      <div className="bg-surface dark:bg-surface-dark pt-32 pb-16 md:pt-40 md:pb-24 border-b border-gray-100 dark:border-white/5 transition-colors duration-300">
        <div className="container mx-auto px-6 md:px-12">
          <h4 className="text-xxs font-bold tracking-[0.2em] text-secondary uppercase mb-6 animate-fade-in">{t.nav.insights}</h4>
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
              className={`px-5 py-2 rounded-full text-xxs font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
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
            <div 
              key={item.id} 
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
                  <div className="absolute top-4 left-4 z-20 bg-white/90 dark:bg-primary/90 backdrop-blur text-primary dark:text-white px-3 py-1 text-xxs font-bold uppercase tracking-[0.2em]">
                    {item.category}
                  </div>
               </div>
               
               <div className="flex items-center gap-2 text-xxs text-gray-400 mb-3 uppercase tracking-[0.2em]">
                  <Calendar size={12} /> {item.date}
               </div>
               
               <h3 className="text-xl md:text-2xl font-serif text-primary dark:text-white mb-3 leading-tight group-hover:text-secondary transition-colors">
                  {item.title}
               </h3>
               
               <p className="text-gray-500 dark:text-gray-400 font-light text-sm mb-6 line-clamp-3 flex-grow leading-relaxed">
                 {item.excerpt}
               </p>

               <div className="flex items-center gap-2 text-xxs font-bold uppercase tracking-[0.2em] text-primary dark:text-white group-hover:gap-3 transition-all mt-auto pt-4 border-t border-gray-100 dark:border-white/5">
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