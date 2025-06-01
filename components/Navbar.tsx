import React, { useState } from 'react';
import { NAV_ITEMS, FunkyPigeonIcon, SITE_NAME } from '../constants'; // Using FunkyPigeonIcon

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-pigeon-dark text-white sticky top-0 z-50 shadow-xl"> {/* Z-index 50, darker pigeon color */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#hero" className="flex-shrink-0 flex items-center group transform hover:scale-105 transition-transform duration-300">
              <FunkyPigeonIcon className="h-10 w-10 text-poopYellow-DEFAULT group-hover:animate-pulse" /> {/* Slightly larger icon, main yellow */}
              <span className="ml-2 font-display text-xl font-bold text-poopYellow-DEFAULT group-hover:text-poopYellow-light transition-colors">
                {SITE_NAME.split('(')[0]} {/* Show only "PigeonPoopCoin" */}
              </span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1"> {/* Reduced space for tighter nav */}
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-300 hover:bg-pigeon-DEFAULT hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
                  onClick={() => document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' })} // Ensure smooth scroll
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-pigeon-dark inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-pigeon-DEFAULT focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-pigeon-dark focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-pigeon-dark"> {/* Match background */}
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => {
                  setIsOpen(false);
                  // Ensure smooth scroll for mobile menu items
                  const targetElement = document.querySelector(item.href);
                  if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-gray-300 hover:bg-pigeon-DEFAULT hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;