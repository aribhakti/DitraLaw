import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, ChevronRight, Scale, Users, Globe2, Award } from 'lucide-react';
import { useLang } from '../providers';
import SEO from '../components/SEO';
import Image from '../components/Image';

const Home: React.FC = () => {
  const { t } = useLang();
  const featuredPractices = t.practicesList.slice(0, 6);
  const [scrollY, setScrollY] = useState(0);
  const [hoveredPracticeIndex, setHoveredPracticeIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-surface dark:bg-primary overflow-x-hidden transition-colors duration-300">
      <SEO 
        title={t.nav.home} 
        description="DITRA Law Partnership is a Jakarta-based law firm specializing in Corporate, M&A, and Commercial Transactions." 
      />

      {/* Hero Section - Reduced min-height for better initial view */}
      <section className="relative h-screen min-h-[600px] flex items-center bg-[#0c0a09] text-white overflow-hidden">
        {/* Optimized LCP Image */}
        <div className="absolute inset-0 select-none">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            alt="Jakarta City Skyline at Night"
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
            {...({ fetchPriority: "high" } as any)}
            decoding="async"
          />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09] via-[#0c0a09]/70 to-primary/30 pointer-events-none"></div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 pt-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 px-3 py-1 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm text-[10px] font-bold uppercase tracking-[0.2em] mb-6 animate-fade-in-up">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
              Jakarta Based, Globally Connected
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium leading-[1.05] mb-6 tracking-tight text-white/95 text-balance">
              <span className="block animate-fade-in-up" style={{ animationDelay: '0.1s' }}>{t.hero.title1}</span>
              <span className="block animate-fade-in-up" style={{ animationDelay: '0.2s' }}>{t.hero.title2}</span>
              <span className="block text-secondary opacity-90 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>{t.hero.title3}</span>
            </h1>
            
            <p className="text-sm md:text-lg text-stone-300 max-w-xl font-light leading-relaxed mb-8 animate-fade-in-up text-balance" style={{ animationDelay: '0.4s' }}>
              {t.hero.subtitle}
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <Link 
                to="/contact" 
                className="group px-6 py-3 bg-primary text-white hover:bg-white hover:text-primary transition-all duration-300 font-bold uppercase tracking-[0.2em] text-[10px] flex items-center gap-3 border border-primary hover:border-white shadow-lg shadow-primary/20"
              >
                {t.hero.cta1} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/practices" 
                className="group px-6 py-3 border border-white/20 hover:border-white hover:bg-white/5 transition-all duration-300 text-white font-bold uppercase tracking-[0.2em] text-[10px]"
              >
                {t.hero.cta2}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Credibility Section - Reduced Padding */}
      <section className="bg-surface-alt dark:bg-[#151413] border-b border-gray-200 dark:border-white/5 py-12 md:py-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center md:text-left divide-x divide-gray-200 dark:divide-white/5">
            <div className="px-4 first:pl-0">
              <div className="text-3xl md:text-4xl font-serif text-secondary mb-2">20+</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 dark:text-stone-400">Years Experience</div>
            </div>
            <div className="px-4">
              <div className="text-3xl md:text-4xl font-serif text-primary dark:text-white mb-2">100+</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 dark:text-stone-400">Corporate Clients</div>
            </div>
            <div className="px-4">
              <div className="text-3xl md:text-4xl font-serif text-primary dark:text-white mb-2">$5B+</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 dark:text-stone-400">Transactions Advised</div>
            </div>
            <div className="px-4">
              <div className="text-3xl md:text-4xl font-serif text-primary dark:text-white mb-2">12</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 dark:text-stone-400">Practice Areas</div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction - Tightened spacing */}
      <section className="py-20 md:py-28 bg-white dark:bg-[#0c0a09]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row gap-12 items-start">
             <div className="md:w-1/3 sticky top-32">
               <h4 className="text-[10px] font-bold tracking-[0.2em] text-secondary uppercase mb-6 flex items-center gap-3">
                 <span className="w-6 h-[1px] bg-secondary"></span> {t.home.firmTitle}
               </h4>
               <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary dark:text-white leading-tight mb-8 text-balance">
                 {t.home.firmSubtitle}
               </h2>
               <Link to="/people" className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] border-b border-primary dark:border-white pb-1 hover:text-secondary hover:border-secondary transition-colors text-primary dark:text-white group">
                  {t.home.meetTeam} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
               </Link>
             </div>
             
             <div className="md:w-2/3">
               <div className="prose prose-lg prose-gray dark:prose-invert max-w-none">
                 <p className="font-light leading-relaxed text-gray-600 dark:text-stone-300 mb-8">
                   {t.home.firmDesc}
                 </p>
               </div>
               
               {/* Values Grid */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 pt-12 border-t border-gray-100 dark:border-white/5">
                  <div className="group">
                    <Scale className="w-6 h-6 text-secondary mb-4 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                    <h3 className="text-lg font-serif text-primary dark:text-white mb-2">Regulatory Precision</h3>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400 leading-relaxed">Deep understanding of Indonesia's evolving legal framework, ensuring compliance without compromising speed.</p>
                  </div>
                  <div className="group">
                    <Award className="w-6 h-6 text-secondary mb-4 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                    <h3 className="text-lg font-serif text-primary dark:text-white mb-2">Commercial Focus</h3>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400 leading-relaxed">Solutions designed to drive business growth. We view legal challenges through a commercial lens.</p>
                  </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Grid Layout Practices - Reduced Padding */}
      <section className="py-20 md:py-28 bg-surface-alt dark:bg-[#151413]">
        <div className="container mx-auto px-6 md:px-12">
           <div className="flex justify-between items-end mb-12">
              <div>
                <h4 className="text-[10px] font-bold tracking-[0.2em] text-secondary uppercase mb-4">{t.home.expertiseTitle}</h4>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary dark:text-white">{t.home.expertiseSubtitle}</h2>
              </div>
              <Link to="/practices" className="hidden md:flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-primary dark:text-white hover:text-secondary transition-colors group">
                {t.home.viewAll} <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </Link>
           </div>

           {/* Architectural Grid with Spotlight */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-gray-200 dark:border-white/5" onMouseLeave={() => setHoveredPracticeIndex(null)}>
              {featuredPractices.map((practice, idx) => (
                <Link 
                  key={practice.id}
                  to={`/practices#${practice.id}`}
                  onMouseEnter={() => setHoveredPracticeIndex(idx)}
                  className={`group relative border-r border-b border-gray-200 dark:border-white/5 p-8 transition-all duration-500 ${
                     hoveredPracticeIndex !== null && hoveredPracticeIndex !== idx ? 'opacity-40 blur-[1px]' : 'opacity-100 hover:bg-white dark:hover:bg-[#0c0a09]'
                  }`}
                >
                  <div className="h-full flex flex-col justify-between min-h-[220px]">
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <span className="text-xs font-bold text-gray-300 dark:text-stone-600">{(idx + 1).toString().padStart(2, '0')}</span>
                        <ArrowUpRight className="w-4 h-4 text-gray-300 dark:text-stone-600 group-hover:text-secondary transition-colors" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-serif text-primary dark:text-white mb-3 group-hover:translate-x-1 transition-transform duration-300">
                        {practice.title}
                      </h3>
                      <p className="text-sm font-light text-gray-500 dark:text-stone-400 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
                        {practice.shortDescription}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
           </div>
        </div>
      </section>

      {/* Featured Insight - Tighter Card Layout */}
      <section className="py-20 md:py-28 bg-white dark:bg-[#0c0a09]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex justify-between items-center mb-12">
             <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary dark:text-white">{t.home.insightsSubtitle}</h2>
             <Link to="/insights" className="text-[10px] font-bold uppercase tracking-[0.2em] border-b border-transparent hover:border-secondary transition-all text-primary dark:text-white">
                View Archive
             </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-gray-200 dark:border-white/5">
             {/* Feature 1 */}
             <Link to="/insights" className="group relative aspect-[4/3] lg:aspect-auto overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop" 
                  alt="M&A" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  containerClassName="w-full h-full"
                />
                <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/20 transition-colors"></div>
                <div className="absolute bottom-0 left-0 p-8 md:p-10 w-full bg-gradient-to-t from-black/80 to-transparent">
                   <span className="text-secondary text-[10px] font-bold uppercase tracking-[0.2em] mb-2 block">Corporate</span>
                   <h3 className="text-2xl md:text-3xl font-serif text-white mb-4 leading-tight">The Evolution of M&A in Southeast Asia</h3>
                   <span className="inline-flex items-center gap-2 text-white text-[10px] font-bold uppercase tracking-[0.2em] border-b border-white pb-1 group-hover:text-secondary group-hover:border-secondary transition-colors">Read Article <ArrowRight size={14} /></span>
                </div>
             </Link>

             {/* Stacked Features */}
             <div className="grid grid-rows-2 divide-y divide-gray-200 dark:divide-white/5">
                <Link to="/insights" className="group relative p-8 md:p-10 hover:bg-surface-alt dark:hover:bg-white/5 transition-colors">
                   <div className="flex flex-col h-full justify-between">
                      <div>
                        <span className="text-secondary text-[10px] font-bold uppercase tracking-[0.2em] mb-3 block">Sustainability</span>
                        <h3 className="text-lg md:text-xl font-serif text-primary dark:text-white mb-3 group-hover:translate-x-1 transition-transform">Carbon Trading Regulations in Indonesia</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 font-light line-clamp-2 leading-relaxed">New compliance frameworks are emerging for environmental assets. Understanding the impact on industrial sectors.</p>
                      </div>
                      <div className="mt-6 flex justify-end">
                         <ArrowRight className="text-gray-300 group-hover:text-secondary transition-colors" size={20} />
                      </div>
                   </div>
                </Link>
                <Link to="/insights" className="group relative p-8 md:p-10 hover:bg-surface-alt dark:hover:bg-white/5 transition-colors">
                   <div className="flex flex-col h-full justify-between">
                      <div>
                        <span className="text-secondary text-[10px] font-bold uppercase tracking-[0.2em] mb-3 block">Employment</span>
                        <h3 className="text-lg md:text-xl font-serif text-primary dark:text-white mb-3 group-hover:translate-x-1 transition-transform">Employment Law Changes for Remote Work</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 font-light line-clamp-2 leading-relaxed">Navigating the omnibus law amendments regarding flexible work arrangements and cross-border teams.</p>
                      </div>
                      <div className="mt-6 flex justify-end">
                         <ArrowRight className="text-gray-300 group-hover:text-secondary transition-colors" size={20} />
                      </div>
                   </div>
                </Link>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;