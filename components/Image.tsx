import React, { useState } from 'react';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  containerClassName?: string;
}

const Image: React.FC<ImageProps> = ({ 
  containerClassName, 
  className, 
  alt, 
  loading = "lazy", 
  sizes,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-gray-100 dark:bg-white/5 ${containerClassName || ''}`}>
      {/* Skeleton / Placeholder */}
      <div 
        className={`absolute inset-0 bg-gray-200 dark:bg-white/10 transition-opacity duration-700 ease-out ${
          isLoaded ? 'opacity-0' : 'opacity-100 animate-pulse'
        }`} 
        aria-hidden="true"
      />
      
      {/* Actual Image */}
      <img
        {...props}
        alt={alt}
        loading={loading}
        decoding="async"
        sizes={sizes}
        className={`${className || ''} transition-all duration-700 ease-out ${
          isLoaded ? 'opacity-100 blur-0 scale-100' : 'opacity-0 blur-sm scale-105'
        }`}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

export default Image;