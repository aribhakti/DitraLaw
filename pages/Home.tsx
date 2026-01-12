import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Calendar } from 'lucide-react';
import { useLang } from '../providers';
import SEO from '../components/SEO';
import Image from '../components/Image';
import { INSIGHTS } from '../constants';

const Home: React.FC = () => {
  const { t } = useLang();
  
  // Specific list of 6 keys for home page as per requirement
  const homeServiceKeys = [
    "ma", "capital-markets", "corporate-commercial", "banking-finance", "vc-growth", "soes"
  ];
  
  const findService = (id: string) => {
    return t.practiceAreas.find(p => p.id === id) || t.expertise.find(e => e.id === id);
  };

  const featuredServices = homeServiceKeys.map(key => findService(key)).filter(Boolean);

  // Get latest 3 insights
  // INSIGHTS are assumed to be sorted by date descending in constants.ts
  const featuredInsights = INSIGHTS.slice(0, 3);
  const mainInsight = featuredInsights[0]; // Left (Newest)
  const sideInsights = featuredInsights.slice(1, 3); // Right Top (2nd newest), Right Bottom (3rd newest)

  const [scrollY, setScrollY] = useState(0);
  const [hoveredPracticeIndex, setHoveredPracticeIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    // Use passive listener for better scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-surface overflow-x-hidden transition-colors duration-300">
      <SEO 
        title={t.nav.home} 
        description="DITRA Law Partnership is a Jakarta-based law firm specializing in Corporate, M&A, and Commercial Transactions." 
      />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center bg-[#0c0a09] text-white overflow-hidden">
        {/* Optimized LCP Image - Mori Tower */}
        <div className="absolute inset-0 select-none">
          <img 
            src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=1200&auto=format&fit=crop"
            srcSet="
              https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=640&auto=format&fit=crop 640w,
              https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=1024&auto=format&fit=crop 1024w,
              https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=1600&auto=format&fit=crop 1600w,
              https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=2000&auto=format&fit=crop 2000w
            "
            sizes="100vw"
            alt="Jakarta Mori Tower Skyline"
            // Adjusted opacity to 0.5
            className="w-full h-full object-cover opacity-50 mix-blend-normal"
            style={{ transform: `translateY(${scrollY * 0.3}px)`, willChange: 'transform' }}
            {...({ fetchPriority: "high" } as any)}
            width="2000"
            height="1333"
            decoding="async"
          />
        </div>
        
        {/* Darker Gradient Overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/40 pointer-events-none"></div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 pt-20">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium leading-[1.05] mb-6 tracking-tight text-white/95 text-balance drop-shadow-lg">
              <span className="block animate-fade-in-up" style={{ animationDelay: '0.1s' }}>{t.hero.title1}</span>
              <span className="block animate-fade-in-up" style={{ animationDelay: '0.2s' }}>{t.hero.title2}</span>
            </h1>
            
            <p className="text-sm md:text-lg text-white/90 max-w-xl font-light leading-relaxed mb-8 animate-fade-in-up text-balance drop-shadow-md" style={{ animationDelay: '0.4s' }}>
              {t.hero.subtitle}
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <Link 
                to="/contact" 
                className="group px-6 py-3 bg-primary text-white hover:bg-white hover:text-primary transition-all duration-300 font-bold uppercase tracking-[0.2em] text-[10px] flex items-center gap-3 border border-primary hover:border-white shadow-lg shadow-primary/20"
                aria-label="Contact DITRA Law"
              >
                {t.hero.cta1} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/services" 
                className="group px-6 py-3 border border-white/40 hover:border-white hover:bg-white/10 transition-all duration-300 text-white font-bold uppercase tracking-[0.2em] text-[10px] backdrop-blur-sm"
              >
                {t.hero.cta2}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Firm Intro Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row gap-16 items-start">
             <div className="md:w-1/3 sticky top-32">
               {/* Fixed Color Contrast: Changed text-secondary to text-primary */}
               <h4 className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase mb-6 flex items-center gap-3">
                 <span className="w-6 h-[1px] bg-secondary"></span> {t.home.firmTitle}
               </h4>
               <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary leading-tight mb-8 text-balance">
                 {t.home.firmSubtitle}
               </h2>
               <Link to="/people" className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] border-b border-primary pb-1 hover:text-secondary hover:border-secondary transition-colors text-primary group">
                  {t.home.meetTeam} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
               </Link>
             </div>
             
             <div className="md:w-2/3">
               <div className="prose prose-lg prose-gray max-w-none">
                 <p className="font-light leading-relaxed text-gray-600 mb-8 whitespace-pre-line text-lg">
                   {t.home.firmDesc}
                 </p>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Client Services Grid */}
      <section className="py-24 md:py-32 bg-surface-alt">
        <div className="container mx-auto px-6 md:px-12">
           <div className="flex justify-between items-end mb-16">
              <div>
                {/* Fixed Color Contrast: Changed text-secondary to text-primary */}
                <h4 className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase mb-4">{t.home.clientServicesTitle}</h4>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary">{t.home.clientServicesSubtitle}</h2>
              </div>
              <Link to="/services" className="hidden md:flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-primary hover:text-secondary transition-colors group">
                {t.home.viewAll} <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </Link>
           </div>

           {/* Grid */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-gray-200" onMouseLeave={() => setHoveredPracticeIndex(null)}>
              {featuredServices.map((practice, idx) => (
                <Link 
                  key={practice?.id || idx}
                  to={`/services#${practice?.id}`}
                  onMouseEnter={() => setHoveredPracticeIndex(idx)}
                  className={`group relative border-r border-b border-gray-200 p-5 transition-all duration-500 hover:bg-white flex flex-col justify-between h-full min-h-[180px]`}
                >
                    <div className="flex justify-between items-start w-full mb-3">
                      {/* Fixed contrast for grid number: text-gray-300 to text-gray-400 */}
                      <span className="text-[10px] font-bold text-gray-400 transition-colors group-hover:text-primary">{(idx + 1).toString().padStart(2, '0')}</span>
                      <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-secondary transition-colors" />
                    </div>
                    
                    <div className="mt-auto">
                      <h3 className="text-lg md:text-xl font-serif text-primary mb-1 group-hover:-translate-y-4 transition-transform duration-500">
                        {practice?.title.split('&').map((part, i, arr) => (
                           <React.Fragment key={i}>
                             {part}
                             {/* Simplify the Ampersand by using sans-serif font */}
                             {i < arr.length - 1 && <span className="font-sans font-light text-[0.9em] px-0.5">&</span>}
                           </React.Fragment>
                        ))}
                      </h3>
                      
                      {/* Description: Hidden by default, reveals on hover in Gold */}
                      <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
                         <div className="overflow-hidden">
                            <p className="text-xs font-light text-secondary leading-relaxed pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                              {practice?.shortDescription}
                            </p>
                         </div>
                      </div>
                    </div>
                </Link>
              ))}
           </div>
        </div>
      </section>

      {/* News & Insights */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex justify-between items-center mb-16">
             <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary">{t.home.insightsSubtitle}</h2>
             <Link to="/insights" className="text-[10px] font-bold uppercase tracking-[0.2em] border-b border-transparent hover:border-secondary transition-all text-primary">
                View Archive
             </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-gray-200">
             {/* Feature 1 (Newest) */}
             {mainInsight && (
               <Link to={`/insights/${mainInsight.id}`} className="group relative aspect-[3/2] lg:aspect-auto overflow-hidden">
                  <Image 
                    src={mainInsight.image}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    alt={mainInsight.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    containerClassName="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/20 transition-colors"></div>
                  <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full bg-gradient-to-t from-black/80 to-transparent">
                     <div className="flex items-center gap-3 mb-3">
                        <span className="text-secondary text-[10px] font-bold uppercase tracking-[0.2em]">{mainInsight.category}</span>
                        <span className="w-px h-3 bg-white/40"></span>
                        <span className="text-white/80 text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2">
                           {mainInsight.date}
                        </span>
                     </div>
                     <h3 className="text-2xl md:text-3xl font-serif text-white mb-6 leading-tight">{mainInsight.title}</h3>
                     <span className="inline-flex items-center gap-2 text-white text-[10px] font-bold uppercase tracking-[0.2em] border-b border-white pb-1 group-hover:text-secondary group-hover:border-secondary transition-colors">{t.home.readMore} <ArrowRight size={14} /></span>
                  </div>
               </Link>
             )}

             {/* Stacked Features */}
             <div className="grid grid-rows-2 divide-y divide-gray-200">
                {/* 2nd Newest (Top) and 3rd Newest (Bottom) */}
                {sideInsights.map((item) => (
                  <Link key={item.id} to={`/insights/${item.id}`} className="group relative p-8 md:p-10 hover:bg-surface-alt transition-colors">
                     <div className="flex flex-col h-full justify-between">
                        <div>
                          <div className="flex items-center gap-3 mb-3">
                             <span className="text-stone-500 text-[10px] font-bold uppercase tracking-[0.2em]">{item.category}</span>
                             <span className="w-px h-3 bg-stone-300"></span>
                             <span className="text-stone-400 text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2">
                                <Calendar size={10} /> {item.date}
                             </span>
                          </div>
                          <h3 className="text-xl md:text-2xl font-serif text-primary mb-4 group-hover:translate-x-1 transition-transform">{item.title}</h3>
                          <p className="text-sm text-gray-500 font-light line-clamp-2 leading-relaxed">{item.excerpt}</p>
                        </div>
                        <div className="mt-6 flex justify-end">
                           <ArrowRight className="text-gray-300 group-hover:text-secondary transition-colors" size={24} />
                        </div>
                     </div>
                  </Link>
                ))}
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;