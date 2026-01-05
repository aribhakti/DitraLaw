import React, { useEffect, useState } from 'react';
import { CONTACT_INFO } from '../constants';
import { Mail, Phone, MapPin, Send, Check, Loader2, ExternalLink } from 'lucide-react';
import { useLang, useToast } from '../providers';
import SEO from '../components/SEO';

const Contact: React.FC = () => {
  const { t } = useLang();
  const { addToast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      addToast('success', t.contact.form.sent);
    }, 1500);
  };

  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Jakarta+Mori+Tower";

  return (
    <div className="bg-white dark:bg-primary min-h-screen pt-20 transition-colors duration-300">
      <SEO 
        title={t.nav.contact}
        description="Contact DITRA Law Partnership for legal inquiries and support."
      />

      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-5rem)]">
        
        {/* Left Content - Form */}
        <div className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center bg-white dark:bg-[#1c1917] order-2 lg:order-1 transition-colors duration-300">
          <div className="max-w-lg w-full mx-auto">
             <h4 className="text-xs font-bold tracking-widest text-secondary uppercase mb-4">{t.contact.getInTouch}</h4>
             <h1 className="text-4xl md:text-5xl font-serif text-primary dark:text-white mb-10">{t.contact.title}</h1>
             
             <form className="space-y-6" onSubmit={handleSubmit}>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="group">
                   <label className="block text-xs font-bold uppercase tracking-widest text-gray-700 dark:text-stone-400 mb-2 group-focus-within:text-secondary transition-colors">{t.contact.form.name}</label>
                   <input 
                    type="text" 
                    required
                    disabled={isSubmitting}
                    className="w-full border-b border-gray-300 dark:border-stone-700 py-2 text-primary dark:text-white bg-transparent focus:outline-none focus:border-secondary input-glow transition-all duration-300 disabled:opacity-50 text-sm" 
                    placeholder="John Doe"
                   />
                 </div>
                 <div className="group">
                   <label className="block text-xs font-bold uppercase tracking-widest text-gray-700 dark:text-stone-400 mb-2 group-focus-within:text-secondary transition-colors">{t.contact.form.email}</label>
                   <input 
                    type="email" 
                    required
                    disabled={isSubmitting}
                    className="w-full border-b border-gray-300 dark:border-stone-700 py-2 text-primary dark:text-white bg-transparent focus:outline-none focus:border-secondary input-glow transition-all duration-300 disabled:opacity-50 text-sm" 
                    placeholder="john@example.com"
                   />
                 </div>
               </div>
               
               <div className="group">
                 <label className="block text-xs font-bold uppercase tracking-widest text-gray-700 dark:text-stone-400 mb-2 group-focus-within:text-secondary transition-colors">{t.contact.form.subject}</label>
                 <select disabled={isSubmitting} className="w-full border-b border-gray-300 dark:border-stone-700 py-2 text-primary dark:text-white bg-transparent focus:outline-none focus:border-secondary input-glow transition-all duration-300 disabled:opacity-50 text-sm">
                    <option>General Inquiry</option>
                    <option>Corporate M&A</option>
                    <option>Employment</option>
                    <option>Other</option>
                 </select>
               </div>

               <div className="group">
                 <label className="block text-xs font-bold uppercase tracking-widest text-gray-700 dark:text-stone-400 mb-2 group-focus-within:text-secondary transition-colors">{t.contact.form.message}</label>
                 <textarea 
                  rows={4} 
                  required
                  disabled={isSubmitting}
                  className="w-full border-b border-gray-300 dark:border-stone-700 py-2 text-primary dark:text-white bg-transparent focus:outline-none focus:border-secondary input-glow transition-all duration-300 resize-none disabled:opacity-50 text-sm" 
                  placeholder="How can we help you?"
                 ></textarea>
               </div>

               <button 
                type="submit"
                disabled={isSubmitting}
                className={`group mt-8 flex items-center gap-4 px-8 py-3 font-bold tracking-widest uppercase text-xs transition-all duration-300 w-full md:w-auto justify-center bg-primary dark:bg-secondary text-white hover:bg-secondary dark:hover:bg-white dark:hover:text-primary`}
               >
                 {isSubmitting ? (
                   <>{t.contact.form.sending} <Loader2 size={16} className="animate-spin" /></>
                 ) : (
                   <>{t.contact.form.send} <Send size={16} className="group-hover:translate-x-1 transition-transform" /></>
                 )}
               </button>
             </form>
          </div>
        </div>

        {/* Right Info/Map - Dark Theme (Always Dark-ish for aesthetic, but adapted) */}
        <div className="lg:w-1/2 bg-[#1c1917] text-white p-8 lg:p-16 flex flex-col justify-center relative overflow-hidden order-1 lg:order-2 group">
          
          {/* Linked Background Map Image */}
          <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="absolute inset-0 cursor-pointer">
             <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
               <img 
                 src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
                 alt="Jakarta Map" 
                 className="w-full h-full object-cover grayscale"
               />
             </div>
             <div className="absolute inset-0 bg-gradient-to-b from-[#1c1917] via-transparent to-[#1c1917] pointer-events-none"></div>
          </a>

          <div className="relative z-10 max-w-lg mx-auto w-full pointer-events-none">
             <div className="mb-10">
               <h3 className="text-3xl font-serif mb-8 text-white">{t.contact.office.title}</h3>
               <div className="space-y-8">
                 <div className="flex gap-6 group/item pointer-events-auto">
                    <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-secondary group-hover/item:scale-110 transition-transform">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-1">{t.contact.office.address}</p>
                      <div className="text-stone-300 font-light leading-relaxed text-sm">
                        {CONTACT_INFO.address.map((line, i) => (
                          <p key={i}>{line}</p>
                        ))}
                      </div>
                      <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-secondary text-xs mt-2 hover:underline">
                         {t.contact.office.viewMap} <ExternalLink size={12} />
                      </a>
                    </div>
                 </div>

                 <div className="flex gap-6 group/item pointer-events-auto">
                    <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-secondary group-hover/item:scale-110 transition-transform">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-1">{t.contact.office.email}</p>
                      <a href={`mailto:${CONTACT_INFO.email}`} className="text-stone-300 font-light hover:text-white transition-colors border-b border-stone-700 hover:border-white pb-0.5 text-sm">
                        {CONTACT_INFO.email}
                      </a>
                    </div>
                 </div>

                 <div className="flex gap-6 group/item pointer-events-auto">
                    <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-secondary group-hover/item:scale-110 transition-transform">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-1">{t.contact.office.phone}</p>
                      <div className="text-stone-300 font-light text-sm">
                        <p>{CONTACT_INFO.phone}</p>
                        <p>{CONTACT_INFO.fax} (Fax)</p>
                      </div>
                    </div>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;