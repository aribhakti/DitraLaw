import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Share2, Linkedin, Twitter } from 'lucide-react';
import { INSIGHTS } from '../constants';
import { useLang } from '../providers';
import SEO from '../components/SEO';
import Image from '../components/Image';

const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useLang();
  
  const article = INSIGHTS.find(i => i.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) {
    return <Navigate to="/404" replace />;
  }

  // Find related articles (same category, not current)
  const relatedArticles = INSIGHTS
    .filter(i => i.category === article.category && i.id !== article.id)
    .slice(0, 2);

  return (
    <div className="bg-white dark:bg-primary min-h-screen transition-colors duration-300">
      <SEO 
        title={article.title}
        description={article.excerpt}
        image={article.image}
        type="article"
      />

      {/* Hero Image */}
      <div className="relative h-[50vh] min-h-[400px] w-full">
         <Image 
           src={article.image} 
           alt={article.title}
           className="w-full h-full object-cover"
           containerClassName="w-full h-full"
           fetchPriority="high"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
         
         <div className="absolute top-32 left-0 w-full px-6 md:px-12">
            <Link to="/insights" className="inline-flex items-center gap-2 text-white/80 hover:text-secondary transition-colors text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
               <ArrowLeft size={14} /> Back to Insights
            </Link>
         </div>

         <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 md:pb-16 max-w-5xl">
            <div className="flex items-center gap-4 text-white/80 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
               <span className="bg-secondary text-white px-3 py-1">{article.category}</span>
               <span className="flex items-center gap-2"><Calendar size={12} /> {article.date}</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-4 text-balance">
              {article.title}
            </h1>
         </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 py-16 md:py-24">
         <div className="flex flex-col lg:flex-row gap-16">
            {/* Main Content */}
            <div className="lg:w-3/4">
               <div 
                 className="prose prose-lg prose-gray dark:prose-invert max-w-none font-serif leading-relaxed prose-headings:font-serif prose-headings:font-normal prose-a:text-secondary prose-a:no-underline hover:prose-a:underline prose-img:rounded-sm"
                 dangerouslySetInnerHTML={{ __html: article.content || `<p>${article.excerpt}</p>` }}
               >
               </div>
               
               {/* Share */}
               <div className="mt-16 pt-8 border-t border-gray-100 dark:border-white/10 flex items-center gap-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">Share this article</span>
                  <div className="flex gap-2">
                     <button className="w-8 h-8 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-secondary hover:text-white transition-colors">
                        <Linkedin size={14} />
                     </button>
                     <button className="w-8 h-8 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-secondary hover:text-white transition-colors">
                        <Twitter size={14} />
                     </button>
                     <button className="w-8 h-8 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-secondary hover:text-white transition-colors">
                        <Share2 size={14} />
                     </button>
                  </div>
               </div>
            </div>

            {/* Sidebar / Related */}
            <div className="lg:w-1/4">
               <h3 className="text-sm font-bold uppercase tracking-widest text-primary dark:text-white mb-8 border-b border-secondary pb-4 inline-block">Related News</h3>
               <div className="flex flex-col gap-8">
                  {relatedArticles.map(related => (
                     <Link key={related.id} to={`/insights/${related.id}`} className="group">
                        <div className="aspect-[3/2] overflow-hidden rounded-sm mb-4">
                           <Image src={related.image} alt={related.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                        </div>
                        <span className="text-[9px] font-bold uppercase tracking-wider text-secondary block mb-2">{related.category}</span>
                        <h4 className="text-lg font-serif text-primary dark:text-white leading-snug group-hover:text-secondary transition-colors line-clamp-3">{related.title}</h4>
                     </Link>
                  ))}
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default ArticleDetail;