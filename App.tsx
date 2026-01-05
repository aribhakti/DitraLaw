import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import { ThemeProvider, LanguageProvider, ToastProvider } from './providers';
import { Loader2 } from 'lucide-react';
import CookieConsent from './components/CookieConsent';

// Lazy load pages for performance
const Home = lazy(() => import('./pages/Home'));
const Practices = lazy(() => import('./pages/Practices'));
const People = lazy(() => import('./pages/People'));
const Contact = lazy(() => import('./pages/Contact'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Insights = lazy(() => import('./pages/Insights'));
const Careers = lazy(() => import('./pages/Careers'));
const NotFound = lazy(() => import('./pages/NotFound'));

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-surface dark:bg-primary">
    <Loader2 size={40} className="animate-spin text-secondary" />
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
                  <Route path="/practices" element={<Practices />} />
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
              <CookieConsent />
            </Layout>
          </Router>
        </ToastProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;