
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'special'; // Added 'special' variant
  size?: 'sm' | 'md' | 'lg' | 'xl'; // Added 'xl' size
  href?: string;
  target?: string;
  rel?: string;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  target,
  rel,
  leadingIcon,
  trailingIcon,
  ...props
}) => {
  const baseStyles = "font-display rounded-lg focus:outline-none focus:ring-4 transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 active:shadow-md inline-flex items-center justify-center space-x-2";
  
  const sizeStyles = {
    sm: "py-2 px-4 text-sm",
    md: "py-2.5 px-6 text-base",
    lg: "py-3 px-8 text-lg",
    xl: "py-4 px-10 text-xl", // Larger size for main CTAs
  };

  const variantStyles = {
    primary: "bg-poopYellow-DEFAULT hover:bg-poopYellow-dark text-pigeon-dark focus:ring-poopYellow-light shadow-md hover:shadow-lg",
    secondary: "bg-pigeon-DEFAULT hover:bg-pigeon-dark text-white focus:ring-pigeon-light shadow-sm hover:shadow-md",
    outline: "bg-transparent hover:bg-poopYellow-light border-2 border-poopYellow-DEFAULT text-poopYellow-dark hover:text-pigeon-dark focus:ring-poopYellow-light font-semibold",
    special: "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white hover:from-pink-600 hover:via-red-600 hover:to-yellow-600 focus:ring-red-300 shadow-lg hover:shadow-xl" // Example special button
  };

  const combinedClassName = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {leadingIcon && <span className="mr-1">{leadingIcon}</span>}
      {children}
      {trailingIcon && <span className="ml-1">{trailingIcon}</span>}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel || (target === "_blank" ? "noopener noreferrer" : undefined)} // Add rel for target_blank
        className={combinedClassName}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={combinedClassName}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;