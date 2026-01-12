import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import { ThemeProvider, LanguageProvider, ToastProvider } from './providers';
import { Loader2 } from 'lucide-react';
import CookieConsent from './components/CookieConsent';

// Lazy load pages for performance
const Home = lazy(() => import('./pages/Home'));
// Reusing Practices.tsx file but conceptually it's the Services page now
const Services = lazy(() => import('./pages/Practices')); 
const People = lazy(() => import('./pages/People'));
const Contact = lazy(() => import('./pages/Contact'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Insights = lazy(() => import('./pages/Insights'));
const Careers = lazy(() => import('./pages/Careers'));
const NotFound = lazy(() => import('./pages/NotFound'));

const LoadingFallback = () => (
  <div className="min-h-[80vh] w-full flex flex-col items-center justify-center bg-surface transition-colors duration-500">
    <div className="relative flex flex-col items-center">
      <span className="font-serif text-4xl md:text-5xl font-bold text-primary tracking-widest mb-6 animate-pulse">DITRA.</span>
      <div className="w-24 h-[2px] bg-primary/10 overflow-hidden relative rounded-full">
         <div className="absolute inset-y-0 left-0 bg-secondary w-full origin-left animate-[progress_1.5s_ease-in-out_infinite]"></div>
      </div>
    </div>
    <style>{`
      @keyframes progress {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
      }
    `}</style>
  </div>
);

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <ToastProvider>
          <Router>
            <Layout>
              <Suspense fallback={<LoadingFallback />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/practices" element={<Navigate to="/services" replace />} />
                  <Route path="/people" element={<People />} />
                  <Route path="/insights" element={<Insights />} />
                  <Route path="/careers" element={<Careers />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/privacy" element={<Privacy />} />
                  
                  {/* Redirect generic 'about' to home or people depending on context */}
                  <Route path="/about" element={<Navigate to="/people" replace />} />
                  
                  {/* Custom 404 */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </Layout>
            {/* CookieConsent moved outside Layout to avoid transform context issues */}
            <CookieConsent />
          </Router>
        </ToastProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;