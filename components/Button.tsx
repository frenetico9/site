
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  target?: string;
  rel?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  target,
  rel,
  ...props
}) => {
  const baseStyles = "font-bold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300 ease-in-out transform hover:scale-105";
  
  const sizeStyles = {
    sm: "py-2 px-3 text-sm",
    md: "py-2.5 px-5 text-base",
    lg: "py-3 px-6 text-lg",
  };

  const variantStyles = {
    primary: "bg-yellow-400 hover:bg-yellow-500 text-gray-800 focus:ring-yellow-500",
    secondary: "bg-gray-700 hover:bg-gray-800 text-white focus:ring-gray-500",
    outline: "bg-transparent hover:bg-yellow-400 border-2 border-yellow-400 text-yellow-400 hover:text-gray-800 focus:ring-yellow-400",
  };

  const combinedClassName = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={combinedClassName}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={combinedClassName}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
