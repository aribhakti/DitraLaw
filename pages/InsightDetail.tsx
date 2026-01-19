import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Calendar, ArrowLeft, Download } from 'lucide-react';
import { ALL_INSIGHTS } from '../data/insights';
import SEO from '../components/SEO';
import Image from '../components/Image';
import { useLang } from '../providers';

const InsightDetail: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const { t } = useLang();

    const insight = ALL_INSIGHTS.find(i => i.slug === slug);

    useEffect(() => {
        if (!insight) {
            // redirect to insights if not found
            navigate('/insights', { replace: true });
        }
        window.scrollTo(0, 0);
    }, [insight, navigate]);

    if (!insight) return null;

    return (
        <div className="bg-white dark:bg-primary min-h-screen transition-colors duration-300">
            <SEO
                title={insight.title}
                description={insight.excerpt}
            />

            <div className="pt-32 pb-20 md:pt-40 md:pb-24">
                <div className="container mx-auto px-6 md:px-12 max-w-4xl">
                    {/* Back Button */}
                    <Link to="/insights" className="inline-flex items-center gap-2 text-xxs font-bold uppercase tracking-[0.2em] text-gray-500 hover:text-secondary mb-8 transition-colors">
                        <ArrowLeft size={14} /> {t.nav.insights}
                    </Link>

                    {/* Title & Date */}
                    <div className="mb-8">
                        <div className="flex items-center gap-3 text-xxs text-secondary font-bold uppercase tracking-[0.2em] mb-4">
                            <span>{insight.category}</span>
                            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                            <span className="flex items-center gap-2 text-gray-400 font-normal">
                                <Calendar size={12} /> {new Date(insight.date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                    weekday: 'long',
                                })}
                            </span>
                        </div>
                        <h1 className="text-3xl font-semibold md:text-5xl font-serif text-primary dark:text-white leading-tight mb-6">
                            {insight.title}
                        </h1>
                    </div>

                    {/* Image */}
                    <div className="aspect-[2/1] w-full overflow-hidden rounded-sm mb-12 shadow-lg">
                        <Image
                            src={insight.image}
                            alt={insight.title}
                            className="w-full h-full object-cover"
                            containerClassName="w-full h-full"
                        />
                    </div>

                    {/* Content Body */}
                    <div className="prose prose-lg dark:prose-invert max-w-none font-light leading-relaxed">
                        {/* Background Section */}
                        {insight.article_background && (
                            <div className="mb-12">
                                <h3 className="text-xl font-serif font-bold text-primary dark:text-white mb-4">Background</h3>
                                <div className="text-gray-700 dark:text-gray-300 whitespace-pre-line rich-text-content">
                                    <ReactMarkdown>
                                        {insight.article_background}
                                    </ReactMarkdown>
                                </div>
                            </div>
                        )}

                        {/* Key Updates / Content Section - Rich Text */}
                        {insight.article_content && (
                            <div className="mb-12">
                                <h3 className="text-xl font-serif font-bold text-primary dark:text-white mb-4">Key Updates & Changes</h3>
                                <div className="text-gray-700 dark:text-gray-300 rich-text-content">
                                    <ReactMarkdown>
                                        {insight.article_content}
                                    </ReactMarkdown>
                                </div>
                            </div>
                        )}

                        {/* Conclusion Section */}
                        {insight.article_conclusion && (
                            <div className="mb-12 border-t border-gray-100 dark:border-white/10 pt-8">
                                <h3 className="text-xl font-serif font-bold text-primary dark:text-white mb-4">Conclusion</h3>
                                <div className="text-gray-700 dark:text-gray-300 whitespace-pre-line rich-text-content">
                                    <ReactMarkdown>
                                        {insight.article_conclusion}
                                    </ReactMarkdown>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* PDF Download CTA */}
                    {insight.pdf_url && (
                        <div className="mt-12 md:mt-16 pt-8 border-t border-gray-200 dark:border-white/10">
                            <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 md:p-8 bg-gray-50 dark:bg-white/5 rounded-lg border border-gray-100 dark:border-white/10">
                                <div className="text-center md:text-left">
                                    <h3 className="text-lg font-serif font-bold text-primary dark:text-white mb-2">
                                        Download Full Insight
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm max-w-md">
                                        Access the complete legal update document for offline reading and reference.
                                    </p>
                                </div>
                                <a
                                    href={insight.pdf_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-white font-bold uppercase tracking-widest text-xs hover:bg-secondary/90 transition-all rounded shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                                >
                                    <Download size={16} />
                                    Download PDF
                                </a>
                            </div>
                        </div>
                    )}

                </div>
            </div>

            {/* Simple styles for the injected HTML content */}
            {/* Styles for markdown content if not fully covered by prose */}
            <style>{`
        .rich-text-content ul { list-style-type: disc; padding-left: 1.5rem; margin-bottom: 1rem; }
        .rich-text-content ol { list-style-type: decimal; padding-left: 1.5rem; margin-bottom: 1rem; }
        .rich-text-content li { margin-bottom: 0.5rem; }
        .rich-text-content p { margin-bottom: 1rem; }
        .rich-text-content strong { font-weight: bold; color: inherit; }
        .rich-text-content em { font-style: italic; }
        .rich-text-content h1, .rich-text-content h2, .rich-text-content h3 { color: inherit; font-weight: bold; margin-top: 1.5em; margin-bottom: 0.5em; }
      `}</style>
        </div>
    );
};

export default InsightDetail;
