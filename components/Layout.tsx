import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Linkedin, Send, ArrowUp, Search, Loader2 } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { useLang, useToast } from '../providers';
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
  const { t } = useLang();
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

    // Passive listener for performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen]);

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
    { name: t.nav.services, path: '/services' },
    { name: t.nav.people, path: '/people' },
    { name: t.nav.insights, path: '/insights' },
    { name: t.nav.contact, path: '/contact' },
  ];

  // Determine header style based on page
  const isHome = location.pathname === '/' || location.pathname === '';
  const isContactPage = location.pathname === '/contact' || location.pathname === '/contact/';

  // Check if we are on a light background (standard page, not scrolled, not home)
  // For Contact page, the left side (logo) is over white, but the right side (links) is over dark (map) on desktop
  const isLightBackground = !isHome && !isScrolled;

  return (
    <div className="flex flex-col min-h-screen bg-surface text-primary transition-colors duration-300">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[140] bg-white text-primary px-4 py-2 font-bold shadow-lg">Skip to content</a>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Reading Progress Bar with Glow Tip - z-105 to sit above header background but below drawers */}
      <div className="fixed top-0 left-0 h-[3px] bg-secondary z-[105] transition-all duration-100 ease-out" style={{ width: `${scrollProgress * 100}%` }}>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-24 h-[4px] bg-secondary blur-[4px] opacity-70" />
      </div>

      {/* Navigation - z-100 Base Level for Fixed Elements */}
      <nav
        className={`fixed w-full z-[100] transition-all duration-500 ease-in-out ${isScrolled
          ? 'bg-[#4a0f1c]/95 backdrop-blur-md py-4 shadow-2xl border-b border-white/5'
          : `bg-transparent py-6 md:py-8`
          }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center relative z-[101]">
          <Link
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`text-xl md:text-2xl font-serif font-bold tracking-tight flex items-center gap-1 group transition-colors duration-300 ${isMobileMenuOpen
              ? 'text-white' // Always white when menu is open
              : (isLightBackground ? 'text-primary' : 'text-white')
              }`}
          >
            <img
              src="https://fshhzvdr1jy25963.public.blob.vercel-storage.com/Logo%20Header.webp"
              alt="DITRA Law"
              className="h-10 md:h-12 w-auto object-contain" // Slightly larger to match visual weight
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;

              // On contact page desktop, links on the right overlap the dark map section
              let textColorClass = (isLightBackground && !isContactPage) ? 'text-primary dark:text-white' : 'text-white';
              let hoverClass = (isLightBackground && !isContactPage) ? 'hover:text-primary/70 dark:hover:text-secondary' : 'hover:text-secondary';
              let activeClass = (isLightBackground && !isContactPage) ? 'text-primary dark:text-secondary font-extrabold' : 'text-secondary';

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 relative group ${textColorClass} ${hoverClass} ${isActive ? activeClass : ''
                    }`}
                >
                  {link.name}
                  <div className={`absolute -bottom-2 w-0 h-[1px] bg-secondary transition-all duration-300 group-hover:w-full group-hover:left-0 ${isActive ? 'w-full left-0' : ''}`}></div>
                </Link>
              );
            })}

            <div className={`flex items-center gap-5 pl-8 border-l ${isLightBackground ? 'border-primary/20' : 'border-white/20'}`}>
              <button
                onClick={() => setIsSearchOpen(true)}
                className={`transition-colors group ${(isLightBackground && !isContactPage) ? 'text-primary dark:text-white hover:text-primary/70 dark:hover:text-secondary' : 'text-white hover:text-secondary'
                  }`}
                aria-label="Search"
              >
                <Search size={16} className="group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>

          {/* Mobile Menu Button - Z-Index 101 to stay above overlay */}
          <button
            className={`md:hidden p-2 -mr-2 transition-colors ${isMobileMenuOpen
              ? 'text-white'
              : (isLightBackground ? 'text-primary' : 'text-white')
              }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
          </button>
        </div>

        {/* Mobile Nav Overlay - Hardcoded Color to ensure opacity, h-[100dvh] for mobile browsers */}
        <div className={`fixed inset-0 bg-[#4a0f1c] z-[100] h-[100dvh] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {/* Noise texture for premium feel */}
          <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('data:image/svg+xml,%3Csvg%20viewBox=%220%200%20200%20200%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter%20id=%22noiseFilter%22%3E%3CfeTurbulence%20type=%22fractalNoise%22%20baseFrequency=%220.65%22%20numOctaves=%223%22%20stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect%20width=%22100%25%22%20height=%22100%25%22%20filter=%22url(%23noiseFilter)%22%20opacity=%221%22/%3E%3C/svg%3E')] mix-blend-overlay"></div>

          <div className="flex flex-col h-full px-8 pt-28 pb-8 overflow-y-auto relative z-10">
            <div className="flex flex-col space-y-6">
              {navLinks.map((link, idx) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-3xl font-serif transition-colors flex items-center justify-between group border-b border-white/5 pb-4 ${location.pathname === link.path ? 'text-secondary italic' : 'text-white hover:text-white/70'
                    }`}
                  style={{ transitionDelay: `${idx * 50}ms` }}
                >
                  <span>{link.name}</span>
                  {location.pathname === link.path && <ArrowUp className="rotate-45 text-secondary" size={20} />}
                </Link>
              ))}

            </div>

            <div className="mt-auto pt-8">
              {/* Mobile Search Button */}
              <button
                onClick={() => { setIsMobileMenuOpen(false); setIsSearchOpen(true); }}
                className="w-full text-left py-4 px-4 bg-white/5 rounded-sm text-xs font-bold uppercase tracking-widest flex items-center gap-4 text-white hover:bg-white/10 transition-colors mb-6"
              >
                <Search size={16} className="text-secondary" /> Search Website
              </button>

              {/* Office Info on Mobile Menu */}
              <div className="border-t border-white/10 pt-6">
                <p className="text-white/40 text-xxs uppercase tracking-widest font-bold mb-2">Jakarta Office</p>
                <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="text-white text-xl font-serif block hover:text-secondary transition-colors">{CONTACT_INFO.phone}</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content with Page Transition Key */}
      <main id="main-content" key={location.pathname} className="flex-grow animate-page-enter will-change-transform">
        {children}
      </main>

      {/* Scroll To Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-[90] bg-[#4a0f1c] text-white p-4 shadow-2xl rounded-full transition-all duration-500 border border-white/10 group ${showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform text-secondary" />
      </button>

      {/* Footer */}
      <footer className="bg-surface-dark text-white py-24 md:py-32 overflow-hidden border-t border-white/5 relative">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-start mb-20 gap-16">
            <div className="lg:w-1/3">
              <img
                src="https://fshhzvdr1jy25963.public.blob.vercel-storage.com/Logo%20Header.webp"
                alt="DITRA Law"
                className="h-12 md:h-16 w-auto object-contain mb-8 opacity-90"
              />
              <p className="text-stone-400 max-w-sm text-base font-light leading-relaxed mb-10 whitespace-pre-line text-balance">
                {t.footer.slogan}
              </p>

              <div className="flex gap-4">
                <a href="https://www.linkedin.com/company/ditralaw" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-stone-400 hover:text-white hover:border-secondary hover:bg-secondary/10 transition-all duration-300 hover:scale-110" aria-label="LinkedIn">
                  <Linkedin size={18} />
                </a>
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
                  <p><a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-secondary transition-colors">{CONTACT_INFO.email}</a></p>
                  <p><a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="hover:text-secondary transition-colors">{CONTACT_INFO.phone}</a></p>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold tracking-widest text-secondary uppercase mb-8">{t.footer.links}</h4>
                <ul className="space-y-4 font-light text-sm">
                  <li><Link to="/services" className="hover:text-secondary text-stone-400 transition-colors">{t.nav.services}</Link></li>
                  <li><Link to="/people" className="hover:text-secondary text-stone-400 transition-colors">{t.nav.people}</Link></li>
                  <li><Link to="/insights" className="hover:text-secondary text-stone-400 transition-colors">{t.nav.insights}</Link></li>
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
                    aria-label="Email for newsletter"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="absolute right-3 top-3 transition-colors p-1 text-stone-500 hover:text-secondary"
                    aria-label="Subscribe"
                  >
                    {isSubmitting ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center text-xxs text-stone-500 font-bold tracking-[0.2em] uppercase">
            <p>&copy; {new Date().getFullYear()} {t.footer.rights}</p>
            <p className="mt-4 md:mt-0 opacity-50">{t.footer.designed}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;