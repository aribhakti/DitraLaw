import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Linkedin, Twitter, Facebook, Send, ArrowUp, Moon, Sun, Globe, Search, Loader2 } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { useTheme, useLang, useToast } from '../providers';
import SearchModal from './SearchModal';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang, t } = useLang();
  const { addToast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const winHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = scrollTop / winHeight;
      
      setScrollProgress(scrolled);
      setIsScrolled(scrollTop > 50);
      setShowScrollTop(scrollTop > 500);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  // Keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setNewsletterEmail('');
      addToast('success', t.footer.subscribed);
    }, 1500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.practices, path: '/practices' },
    { name: t.nav.people, path: '/people' },
    { name: t.nav.insights, path: '/insights' },
    { name: t.nav.contact, path: '/contact' },
  ];

  // Determine header style based on page
  const isHome = location.pathname === '/';

  return (
    <div className="flex flex-col min-h-screen bg-surface dark:bg-primary text-primary dark:text-gray-200 transition-colors duration-300">
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Reading Progress Bar with Glow Tip */}
      <div className="fixed top-0 left-0 h-[3px] bg-secondary z-[70] transition-all duration-100 ease-out" style={{ width: `${scrollProgress * 100}%` }}>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-24 h-[4px] bg-secondary blur-[4px] opacity-70" />
      </div>

      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-primary/95 backdrop-blur-md py-4 text-white shadow-2xl border-b border-white/5' 
            : `bg-transparent py-6 md:py-8 ${isHome ? 'text-white' : 'text-primary dark:text-white'}`
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link to="/" className="text-xl md:text-2xl font-serif font-bold tracking-tight flex items-center gap-1 z-50 group">
             DITRA<span className="text-secondary group-hover:scale-150 transition-transform duration-300 origin-bottom">.</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[11px] font-bold tracking-[0.2em] uppercase hover:text-secondary transition-all duration-300 relative group ${
                   location.pathname === link.path ? 'text-secondary' : ''
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-2 left-1/2 w-0 h-[1px] bg-secondary transition-all duration-300 group-hover:w-full group-hover:left-0 ${location.pathname === link.path ? 'w-full left-0' : ''}`}></span>
              </Link>
            ))}
            
            <div className={`flex items-center gap-5 pl-8 border-l ${isScrolled || isHome ? 'border-white/20' : 'border-primary/20 dark:border-white/20'}`}>
               {/* Search Trigger */}
               <button 
                 onClick={() => setIsSearchOpen(true)}
                 className="hover:text-secondary transition-colors group"
                 aria-label="Search"
               >
                 <Search size={16} className="group-hover:scale-110 transition-transform" />
               </button>

               {/* Language Switcher */}
               <button 
                 onClick={toggleLang}
                 className="hover:text-secondary transition-colors text-[10px] font-bold uppercase tracking-widest flex items-center gap-1"
                 aria-label="Toggle Language"
               >
                 {lang === 'en' ? 'ID' : 'EN'}
               </button>

               {/* Dark Mode Switcher */}
               <button 
                 onClick={toggleTheme}
                 className="hover:text-secondary transition-colors group"
                 aria-label="Toggle Dark Mode"
               >
                 {theme === 'dark' ? 
                   <Sun size={16} className="group-hover:rotate-90 transition-transform duration-500" /> : 
                   <Moon size={16} className="group-hover:-rotate-12 transition-transform duration-500" />
                 }
               </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden z-50 transition-colors p-2 -mr-2 ${isMobileMenuOpen ? 'text-primary dark:text-white' : (isScrolled || isHome ? 'text-white' : 'text-primary dark:text-white')}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <div className={`fixed inset-0 bg-white/98 dark:bg-[#0c0a09]/98 backdrop-blur-xl z-40 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col justify-center h-full px-8 space-y-8">
             {navLinks.map((link, idx) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-4xl font-serif text-primary dark:text-white hover:text-secondary transition-colors ${location.pathname === link.path ? 'text-secondary italic' : ''}`}
                  style={{ transitionDelay: `${idx * 50}ms` }}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/careers"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-4xl font-serif text-primary dark:text-white hover:text-secondary transition-colors ${location.pathname === '/careers' ? 'text-secondary italic' : ''}`}
              >
                {t.nav.careers}
              </Link>

              <div className="flex flex-col gap-6 mt-12 pt-12 border-t border-gray-100 dark:border-white/10">
                <button onClick={() => { setIsMobileMenuOpen(false); setIsSearchOpen(true); }} className="text-xs font-bold uppercase tracking-widest flex items-center gap-4 text-primary dark:text-white">
                  <Search size={18} /> Search
                </button>
                <button onClick={toggleLang} className="text-xs font-bold uppercase tracking-widest flex items-center gap-4 text-primary dark:text-white">
                  <Globe size={18} /> {lang === 'en' ? 'Bahasa Indonesia' : 'English'}
                </button>
                <button onClick={toggleTheme} className="text-xs font-bold uppercase tracking-widest flex items-center gap-4 text-primary dark:text-white">
                  {theme === 'dark' ? <><Sun size={18} /> Light Mode</> : <><Moon size={18} /> Dark Mode</>}
                </button>
              </div>
          </div>
        </div>
      </nav>

      {/* Main Content with Page Transition Key */}
      <main key={location.pathname} className="flex-grow animate-page-enter will-change-transform">
        {children}
      </main>

      {/* Scroll To Top Button */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-40 bg-white dark:bg-[#1c1917] text-primary dark:text-white p-4 shadow-2xl rounded-full transition-all duration-500 hover:bg-secondary hover:text-white border border-gray-100 dark:border-white/10 group ${
          showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
      </button>

      {/* Footer */}
      <footer className="bg-[#1c1917] text-white py-24 md:py-32 overflow-hidden border-t border-white/5 relative">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-start mb-20 gap-16">
            <div className="lg:w-1/3">
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 tracking-tight bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">DITRA.</h2>
              <p className="text-stone-400 max-w-sm text-base font-light leading-relaxed mb-10 whitespace-pre-line text-balance">
                {t.footer.slogan}
              </p>
              
              {/* Social Icons with Interaction */}
              <div className="flex gap-4">
                {[<Linkedin key="li"/>, <Twitter key="tw"/>, <Facebook key="fb"/>].map((icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-stone-400 hover:text-white hover:border-secondary hover:bg-secondary/10 transition-all duration-300 hover:scale-110">
                    {React.cloneElement(icon as React.ReactElement, { size: 18 })}
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
              <div>
                <h4 className="text-xs font-bold tracking-widest text-secondary uppercase mb-8">{t.footer.office}</h4>
                <div className="text-stone-400 space-y-2 font-light text-sm">
                  {CONTACT_INFO.address.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
                <div className="mt-8 text-stone-400 font-light text-sm space-y-2">
                  <p className="hover:text-secondary transition-colors cursor-pointer">{CONTACT_INFO.email}</p>
                  <p>{CONTACT_INFO.phone}</p>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold tracking-widest text-secondary uppercase mb-8">{t.footer.links}</h4>
                <ul className="space-y-4 font-light text-sm">
                  <li><Link to="/practices" className="hover:text-secondary text-stone-400 transition-colors">{t.nav.practices}</Link></li>
                  <li><Link to="/people" className="hover:text-secondary text-stone-400 transition-colors">{t.nav.people}</Link></li>
                  <li><Link to="/insights" className="hover:text-secondary text-stone-400 transition-colors">{t.nav.insights}</Link></li>
                  <li><Link to="/careers" className="hover:text-secondary text-stone-400 transition-colors">{t.nav.careers}</Link></li>
                  <li><Link to="/contact" className="hover:text-secondary text-stone-400 transition-colors">{t.nav.contact}</Link></li>
                  <li><Link to="/privacy" className="hover:text-secondary text-stone-400 transition-colors">{t.footer.privacy}</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold tracking-widest text-secondary uppercase mb-8">{t.footer.insights}</h4>
                <p className="text-stone-400 text-sm font-light mb-6">{t.footer.subscribe}</p>
                <form onSubmit={handleNewsletterSubmit} className="relative group">
                  <input 
                    type="email" 
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Email Address" 
                    disabled={isSubmitting}
                    className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-4 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-secondary input-glow transition-all duration-300"
                  />
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="absolute right-3 top-3 transition-colors p-1 text-stone-500 hover:text-secondary"
                  >
                    {isSubmitting ? <Loader2 size={16} className="animate-spin"/> : <Send size={16} />}
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center text-[10px] text-stone-500 font-bold tracking-[0.2em] uppercase">
            <p>&copy; {new Date().getFullYear()} {t.footer.rights}</p>
            <p className="mt-4 md:mt-0 opacity-50">{t.footer.designed}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;