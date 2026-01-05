import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, ChevronRight, Scale, Users, Globe2, Award } from 'lucide-react';
import { useLang } from '../providers';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  const { t } = useLang();
  const featuredPractices = t.practicesList.slice(0, 6);
  const [scrollY, setScrollY] = useState(0);

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

      {/* Hero Section - Updated to be less red, more architectural/dark */}
      <section className="relative h-screen min-h-[600px] flex items-center bg-[#0c0a09] text-white overflow-hidden">
        {/* Parallax Background */}
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        ></div>
        
        {/* Gradient Overlay - Subtle Primary Tint instead of solid fill */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09] via-[#0c0a09]/80 to-primary/20"></div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 pt-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm text-xs font-bold uppercase tracking-widest mb-6 animate-fade-in-up">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
              Jakarta Based, Globally Connected
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium leading-[1.1] mb-6 tracking-tight text-white/95">
              <span className="block animate-fade-in-up" style={{ animationDelay: '0.1s' }}>{t.hero.title1}</span>
              <span className="block animate-fade-in-up" style={{ animationDelay: '0.2s' }}>{t.hero.title2}</span>
              <span className="block text-secondary opacity-90 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>{t.hero.title3}</span>
            </h1>
            
            <p className="text-base md:text-lg text-stone-300 max-w-xl font-light leading-relaxed mb-10 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              {t.hero.subtitle}
            </p>
            
            <div className="flex flex-wrap gap-6 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <Link 
                to="/contact" 
                className="group px-6 py-3 bg-primary text-white hover:bg-white hover:text-primary transition-all duration-300 font-bold uppercase tracking-widest text-xs flex items-center gap-2 border border-primary hover:border-white"
              >
                {t.hero.cta1} <ArrowRight size={14} />
              </Link>
              <Link 
                to="/practices" 
                className="group px-6 py-3 border border-white/20 hover:border-white hover:bg-white/5 transition-all duration-300 text-white font-bold uppercase tracking-widest text-xs"
              >
                {t.hero.cta2}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Credibility Section */}
      <section className="bg-surface-alt dark:bg-[#151413] border-b border-gray-200 dark:border-white/5 py-12 md:py-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center md:text-left divide-x divide-gray-200 dark:divide-white/5">
            <div className="px-4 first:pl-0">
              <div className="text-3xl md:text-4xl font-serif text-secondary mb-2">20+</div>
              <div className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-stone-400">Years Experience</div>
            </div>
            <div className="px-4">
              <div className="text-3xl md:text-4xl font-serif text-primary dark:text-white mb-2">100+</div>
              <div className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-stone-400">Corporate Clients</div>
            </div>
            <div className="px-4">
              <div className="text-3xl md:text-4xl font-serif text-primary dark:text-white mb-2">$5B+</div>
              <div className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-stone-400">Transactions Advised</div>
            </div>
            <div className="px-4">
              <div className="text-3xl md:text-4xl font-serif text-primary dark:text-white mb-2">12</div>
              <div className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-stone-400">Practice Areas</div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 md:py-24 bg-white dark:bg-[#0c0a09]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row gap-12 items-start">
             <div className="md:w-1/3 sticky top-32">
               <h4 className="text-xs font-bold tracking-widest text-secondary uppercase mb-6 flex items-center gap-2">
                 <span className="w-8 h-[1px] bg-secondary"></span> {t.home.firmTitle}
               </h4>
               <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary dark:text-white leading-tight mb-8">
                 {t.home.firmSubtitle}
               </h2>
               <Link to="/people" className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest border-b border-primary dark:border-white pb-1 hover:text-secondary hover:border-secondary transition-colors text-primary dark:text-white">
                  {t.home.meetTeam} <ArrowRight size={14} />
               </Link>
             </div>
             
             <div className="md:w-2/3">
               <div className="prose prose-lg prose-gray dark:prose-invert max-w-none">
                 <p className="text-lg md:text-xl font-light leading-relaxed text-gray-600 dark:text-stone-300 mb-8">
                   {t.home.firmDesc}
                 </p>
               </div>
               
               {/* Values Grid */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 pt-12 border-t border-gray-100 dark:border-white/5">
                  <div className="group">
                    <Scale className="w-6 h-6 text-secondary mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-lg font-serif text-primary dark:text-white mb-2">Regulatory Precision</h3>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">Deep understanding of Indonesia's evolving legal framework.</p>
                  </div>
                  <div className="group">
                    <Award className="w-6 h-6 text-secondary mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-lg font-serif text-primary dark:text-white mb-2">Commercial Focus</h3>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">Solutions designed to drive business growth, not just compliance.</p>
                  </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Grid Layout Practices */}
      <section className="py-20 md:py-24 bg-surface-alt dark:bg-[#151413]">
        <div className="container mx-auto px-6 md:px-12">
           <div className="flex justify-between items-end mb-12">
              <div>
                <h4 className="text-xs font-bold tracking-widest text-secondary uppercase mb-4">{t.home.expertiseTitle}</h4>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary dark:text-white">{t.home.expertiseSubtitle}</h2>
              </div>
              <Link to="/practices" className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary dark:text-white hover:text-secondary transition-colors group">
                {t.home.viewAll} <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </Link>
           </div>

           {/* Architectural Grid */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-gray-200 dark:border-white/5">
              {featuredPractices.map((practice, idx) => (
                <Link 
                  key={practice.id}
                  to={`/practices#${practice.id}`}
                  className="group relative border-r border-b border-gray-200 dark:border-white/5 p-8 lg:p-10 hover:bg-white dark:hover:bg-[#0c0a09] transition-colors duration-500"
                >
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <span className="text-xs font-bold text-gray-300 dark:text-stone-600">{(idx + 1).toString().padStart(2, '0')}</span>
                        <ArrowUpRight className="w-4 h-4 text-gray-300 dark:text-stone-600 group-hover:text-secondary transition-colors" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-serif text-primary dark:text-white mb-3 group-hover:translate-x-1 transition-transform duration-300">
                        {practice.title}
                      </h3>
                      <p className="text-sm font-light text-gray-500 dark:text-stone-400 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {practice.shortDescription}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
           </div>
        </div>
      </section>

      {/* Featured Insight - Large Card Layout */}
      <section className="py-20 md:py-24 bg-white dark:bg-[#0c0a09]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex justify-between items-center mb-12">
             <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary dark:text-white">{t.home.insightsSubtitle}</h2>
             <Link to="/insights" className="text-xs font-bold uppercase tracking-widest border-b border-transparent hover:border-secondary transition-all text-primary dark:text-white">
                View Archive
             </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-gray-200 dark:border-white/5">
             {/* Feature 1 */}
             <Link to="/insights" className="group relative aspect-[4/3] lg:aspect-auto overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop" 
                  alt="M&A" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/20 transition-colors"></div>
                <div className="absolute bottom-0 left-0 p-8 md:p-10 w-full">
                   <span className="text-secondary text-xs font-bold uppercase tracking-widest mb-2 block">Corporate</span>
                   <h3 className="text-2xl md:text-3xl font-serif text-white mb-4 leading-tight">The Evolution of M&A in Southeast Asia</h3>
                   <span className="inline-flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest border-b border-white pb-1">Read Article <ArrowRight size={14} /></span>
                </div>
             </Link>

             {/* Stacked Features */}
             <div className="grid grid-rows-2">
                <Link to="/insights" className="group relative border-b border-gray-200 dark:border-white/5 p-8 md:p-10 hover:bg-surface-alt dark:hover:bg-white/5 transition-colors">
                   <div className="flex flex-col h-full justify-between">
                      <div>
                        <span className="text-secondary text-xs font-bold uppercase tracking-widest mb-3 block">Sustainability</span>
                        <h3 className="text-lg md:text-xl font-serif text-primary dark:text-white mb-3">Carbon Trading Regulations in Indonesia</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 font-light line-clamp-2">New compliance frameworks are emerging for environmental assets.</p>
                      </div>
                      <div className="mt-6 flex justify-end">
                         <ArrowRight className="text-gray-300 group-hover:text-secondary transition-colors" size={20} />
                      </div>
                   </div>
                </Link>
                <Link to="/insights" className="group relative p-8 md:p-10 hover:bg-surface-alt dark:hover:bg-white/5 transition-colors">
                   <div className="flex flex-col h-full justify-between">
                      <div>
                        <span className="text-secondary text-xs font-bold uppercase tracking-widest mb-3 block">Employment</span>
                        <h3 className="text-lg md:text-xl font-serif text-primary dark:text-white mb-3">Employment Law Changes for Remote Work</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 font-light line-clamp-2">Navigating the omnibus law amendments regarding flexible work arrangements.</p>
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