
import React from 'react';

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  title?: string;
  titleClassName?: string;
  subtitle?: string;
  subtitleClassName?: string;
  containerClassName?: string;
}

const Section: React.FC<SectionProps> = ({ 
  id, 
  children, 
  className = '', 
  title, 
  titleClassName = 'font-display text-4xl md:text-5xl font-bold text-gray-800 mb-4 text-center', 
  subtitle, 
  subtitleClassName = 'text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto',
  containerClassName = 'container mx-auto px-4 sm:px-6 lg:px-8'
}) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className={containerClassName}>
        {title && <h2 className={titleClassName}>{title}</h2>}
        {subtitle && <p className={subtitleClassName}>{subtitle}</p>}
        {children}
      </div>
    </section>
  );
};

export default Section;
