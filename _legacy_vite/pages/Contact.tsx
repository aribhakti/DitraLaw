import React, { useEffect, useState } from 'react';
import { CONTACT_INFO } from '../constants';
import { Mail, Phone, MapPin, Send, ExternalLink, Loader2 } from 'lucide-react';
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
    <div className="bg-white min-h-screen transition-colors duration-300">
      <SEO 
        title={t.nav.contact}
        description="Contact DITRA Law Partnership for legal inquiries and support."
      />

      <div className="flex flex-col lg:flex-row min-h-screen">
        
        {/* Contact Form Section */}
        {/* Mobile: Order 1 (Top), Desktop: Order 1 (Left) */}
        <div className="lg:w-1/2 pt-32 pb-16 px-6 md:px-16 lg:px-20 flex flex-col justify-center bg-white order-1 transition-colors duration-300">
          <div className="max-w-xl w-full mx-auto">
             {/* Changed text-secondary to text-primary */}
             <h4 className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase mb-6">{t.contact.getInTouch}</h4>
             <h1 className="text-4xl md:text-6xl font-serif text-primary mb-10">{t.contact.title}</h1>
             
             <form className="space-y-6" onSubmit={handleSubmit}>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="group">
                   <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-700 mb-2 group-focus-within:text-primary transition-colors">{t.contact.form.name}</label>
                   <input 
                    type="text" 
                    required
                    disabled={isSubmitting}
                    className="w-full border-b border-gray-300 py-3 text-primary bg-transparent focus:outline-none focus:border-secondary input-glow transition-all duration-300 disabled:opacity-50 text-sm appearance-none rounded-none" 
                    placeholder="John Doe"
                   />
                 </div>
                 <div className="group">
                   <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-700 mb-2 group-focus-within:text-primary transition-colors">{t.contact.form.email}</label>
                   <input 
                    type="email" 
                    required
                    disabled={isSubmitting}
                    className="w-full border-b border-gray-300 py-3 text-primary bg-transparent focus:outline-none focus:border-secondary input-glow transition-all duration-300 disabled:opacity-50 text-sm appearance-none rounded-none" 
                    placeholder="john@example.com"
                   />
                 </div>
               </div>
               
               <div className="group">
                 <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-700 mb-2 group-focus-within:text-primary transition-colors">{t.contact.form.subject}</label>
                 <input 
                    type="text"
                    required
                    disabled={isSubmitting}
                    className="w-full border-b border-gray-300 py-3 text-primary bg-transparent focus:outline-none focus:border-secondary input-glow transition-all duration-300 disabled:opacity-50 text-sm appearance-none rounded-none" 
                    placeholder="Subject of your inquiry"
                 />
               </div>

               <div className="group">
                 <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-700 mb-2 group-focus-within:text-primary transition-colors">{t.contact.form.message}</label>
                 <textarea 
                  rows={4} 
                  required
                  disabled={isSubmitting}
                  className="w-full border-b border-gray-300 py-3 text-primary bg-transparent focus:outline-none focus:border-secondary input-glow transition-all duration-300 resize-none disabled:opacity-50 text-sm appearance-none rounded-none" 
                  placeholder="How can we help you?"
                 ></textarea>
               </div>

               <button 
                type="submit"
                disabled={isSubmitting}
                className={`group mt-8 flex items-center gap-4 px-8 py-4 md:py-3 font-bold tracking-[0.2em] uppercase text-[10px] transition-all duration-300 w-full md:w-auto justify-center bg-primary text-white hover:bg-secondary shadow-lg`}
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

        {/* Map & Info Section */}
        {/* Mobile: Order 2 (Bottom), Desktop: Order 2 (Right) */}
        <div className="lg:w-1/2 bg-[#1c1917] text-white p-8 lg:p-16 flex flex-col justify-center relative overflow-hidden order-2 group min-h-[400px]">
          
          {/* Linked Background Map Image - Mori Tower feel */}
          <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="absolute inset-0 cursor-pointer">
             <div className="absolute inset-0 opacity-40 group-hover:opacity-50 transition-opacity duration-700">
               <img 
                 src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=2000&auto=format&fit=crop" 
                 alt="Jakarta Mori Tower Office" 
                 className="w-full h-full object-cover grayscale mix-blend-overlay"
               />
             </div>
             <div className="absolute inset-0 bg-gradient-to-b from-[#1c1917] via-transparent to-[#1c1917] pointer-events-none"></div>
          </a>

          <div className="relative z-10 max-w-lg mx-auto w-full pointer-events-none pt-8 lg:pt-0">
             <div className="mb-8">
               <h3 className="text-3xl font-serif mb-10 text-white">{t.contact.office.title}</h3>
               <div className="space-y-8">
                 <div className="flex gap-6 group/item pointer-events-auto">
                    <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-secondary group-hover/item:scale-110 transition-transform flex-shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 mb-1">{t.contact.office.address}</p>
                      <div className="text-stone-300 font-light leading-relaxed text-sm">
                        {CONTACT_INFO.address.map((line, i) => (
                          <p key={i}>{line}</p>
                        ))}
                      </div>
                      <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-secondary text-[10px] mt-2 hover:underline uppercase tracking-wider">
                         {t.contact.office.viewMap} <ExternalLink size={10} />
                      </a>
                    </div>
                 </div>

                 <div className="flex gap-6 group/item pointer-events-auto">
                    <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-secondary group-hover/item:scale-110 transition-transform flex-shrink-0">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 mb-1">{t.contact.office.email}</p>
                      <a href={`mailto:${CONTACT_INFO.email}`} className="text-stone-300 font-light hover:text-white transition-colors border-b border-stone-700 hover:border-white pb-0.5 text-sm">
                        {CONTACT_INFO.email}
                      </a>
                    </div>
                 </div>

                 <div className="flex gap-6 group/item pointer-events-auto">
                    <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-secondary group-hover/item:scale-110 transition-transform flex-shrink-0">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 mb-1">{t.contact.office.phone}</p>
                      <div className="text-stone-300 font-light text-sm">
                        <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors block">{CONTACT_INFO.phone}</a>
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