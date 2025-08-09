import React, { useState } from 'react';
import {  Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleNavClick = (section) => {
    setActiveSection(section.toLowerCase());
    closeMenu();
  };
  
 
  const navItems = ['Home', 'About', 'Project', 'Contact'];

  return (
    <div className="bg-transparent">
      <nav className="fixed top-0 w-full z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex justify-center gap-8">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">SP</span>
              </div>
              <p className="text-2xl text-white font-bold transition-colors duration-300 cursor-pointer">
                Sandeep Parmar
              </p>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative group ${
                      activeSection === item.toLowerCase()
                        ? 'text-blue-400 bg-white/10'
                        : 'text-white hover:text-blue-300 hover:bg-white/5'
                    }`}
                    onClick={() => handleNavClick(item) }
                  >
                    {item}
                    {/* Active indicator */}
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 transform transition-transform duration-300 ${
                      activeSection === item.toLowerCase() ? 'scale-x-100' : 'scale-x-0'
                    }`}></span>
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-md transition-colors duration-300 text-white"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900/95 backdrop-blur-md">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                  activeSection === item.toLowerCase()
                    ? 'text-blue-400 bg-white/10'
                    : 'text-gray-300 hover:text-blue-300 hover:bg-white/5'
                }`}
                onClick={() => handleNavClick(item)}
              >
                {item}
                {/* Mobile active indicator */}
                {activeSection === item.toLowerCase() && (
                  <span className="ml-2 w-2 h-2 bg-blue-400 rounded-full inline-block"></span>
                )}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;