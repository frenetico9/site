
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
  // Changed title to be more prominent, using poopYellow-dark
  titleClassName = 'font-display text-4xl md:text-5xl lg:text-6xl font-bold text-poopYellow-dark mb-4 text-center drop-shadow-sm', 
  subtitle, 
  // Adjusted subtitle for better readability and emphasis
  subtitleClassName = 'text-lg md:text-xl text-pigeon-dark mb-10 md:mb-12 text-center max-w-3xl mx-auto font-medium',
  containerClassName = 'container mx-auto px-4 sm:px-6 lg:px-8',
}) => {
  return (
    // Added pt-16 to account for sticky navbar height, can be adjusted
    <section id={id} className={`py-16 md:py-24 relative ${className}`}>
      <div className={containerClassName}>
        {title && <h2 className={titleClassName}>{title}</h2>}
        {subtitle && <p className={subtitleClassName}>{subtitle}</p>}
        {children}
      </div>
    </section>
  );
};

export default Section;