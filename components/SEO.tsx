import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';

interface SEOProps {
  title: string;
  description?: string;
  image?: string;
  type?: 'website' | 'article' | 'profile';
  keywords?: string[];
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description = "DITRA Law Partnership - Jakarta-based law firm specializing in Corporate, M&A, and Commercial Transactions.",
  image = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop", 
  type = 'website',
  keywords = ["Law Firm Jakarta", "Corporate Law Indonesia", "M&A Lawyer Jakarta", "DITRA Law", "Commercial Litigation"]
}) => {
  const location = useLocation();
  const siteUrl = 'https://ditralaw.com'; 
  const canonicalUrl = `${siteUrl}${location.pathname === '/' ? '' : location.pathname}`;
  const fullTitle = `${title} | DITRA Law Partnership`;

  useEffect(() => {
    // 1. Update Document Title
    document.title = fullTitle;

    // 2. Helper to manage meta tags
    const setMeta = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    const setOg = (property: string, content: string) => {
      let element = document.querySelector(`meta[property="${property}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 3. Standard SEO Meta
    setMeta('description', description);
    setMeta('keywords', keywords.join(', '));
    setMeta('author', 'DITRA Law Partnership');
    setMeta('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    // 4. Open Graph (Facebook, LinkedIn, WhatsApp)
    setOg('og:locale', 'en_US');
    setOg('og:type', type);
    setOg('og:title', fullTitle);
    setOg('og:description', description);
    setOg('og:url', canonicalUrl);
    setOg('og:site_name', 'DITRA Law Partnership');
    setOg('og:image', image);
    setOg('og:image:width', '1200');
    setOg('og:image:height', '630');
    setOg('og:image:alt', title);

    // 5. Twitter Cards
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', description);
    setMeta('twitter:image', image);
    setMeta('twitter:creator', '@ditralaw');

    // 6. Canonical URL
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', canonicalUrl);

    // 7. JSON-LD Structured Data
    // We add BreadcrumbList in addition to LocalBusiness for better search result snippets
    let script = document.getElementById('json-ld');
    if (!script) {
      script = document.createElement('script');
      script.id = 'json-ld';
      script.setAttribute('type', 'application/ld+json');
      document.head.appendChild(script);
    }

    const breadcrumbData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": siteUrl
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": title,
          "item": canonicalUrl
        }
      ]
    };

    const businessData = {
      "@context": "https://schema.org",
      "@type": "LegalService",
      "name": "DITRA Law Partnership",
      "url": siteUrl,
      "logo": "https://ditralaw.com/logo.png",
      "image": image,
      "description": description,
      "telephone": CONTACT_INFO.phone,
      "email": CONTACT_INFO.email,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": CONTACT_INFO.address[0] + ', ' + CONTACT_INFO.address[1],
        "addressLocality": "Jakarta",
        "postalCode": "10210",
        "addressCountry": "ID"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "-6.2154", 
        "longitude": "106.8166"
      },
      "priceRange": "$$$",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:30",
          "closes": "17:30"
        }
      ],
      "sameAs": [
        "https://www.linkedin.com/company/ditralaw"
      ]
    };

    // Combine schemas
    script.textContent = JSON.stringify([businessData, breadcrumbData]);

  }, [title, description, image, type, canonicalUrl, fullTitle, keywords]);

  return null;
};

export default SEO;