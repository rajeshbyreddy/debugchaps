'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Brand */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-black dark:text-white font-montserrat">
                DebugChaps
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-200 font-inter font-normal">
                Home
              </Link>
              <div className="relative group">
                <button className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-200 font-inter font-normal flex items-center gap-1">
                  Services
                  <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-lg border border-gray-300 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-xl">
                  <div className="py-2">
                    <Link href="/web-development" className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors duration-200 font-inter font-normal text-sm">
                      Web Development
                    </Link>
                    <Link href="/mobile-development" className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors duration-200 font-inter font-normal text-sm">
                      Mobile Development
                    </Link>
                    <Link href="/ml-ai" className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors duration-200 font-inter font-normal text-sm">
                      ML/AI Solutions
                    </Link>
                    <Link href="/academic-projects" className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors duration-200 font-inter font-normal text-sm">
                      Academic Projects
                    </Link>
                    <Link href="/e-learning" className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors duration-200 font-inter font-normal text-sm">
                      E-Learning
                    </Link>
                  </div>
                </div>
              </div>
              <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-200 font-inter font-normal">
                Contact
              </a>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 font-inter font-normal">
                Request a Project
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white focus:outline-none focus:text-black dark:focus:text-white"
              >
                {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={closeMenu}></div>
          <div className="relative flex items-center justify-center min-h-screen">
            <div className="bg-white dark:bg-gray-900 rounded-lg p-8 w-80 max-w-full mx-4">
              <button
                onClick={closeMenu}
                className="absolute top-4 right-4 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
              >
                <HiX size={24} />
              </button>
              <div className="flex flex-col space-y-6 text-center">
                <Link href="/" onClick={closeMenu} className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white text-xl transition-colors duration-200 font-inter font-normal">
                  Home
                </Link>
                <div className="space-y-4">
                  <div className="text-gray-500 dark:text-gray-400 text-sm font-semibold uppercase tracking-wider mb-2">Services</div>
                  <Link href="/web-development" onClick={closeMenu} className="block text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white text-lg transition-colors duration-200 font-inter font-normal">
                    Web Development
                  </Link>
                  <Link href="/mobile-development" onClick={closeMenu} className="block text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white text-lg transition-colors duration-200 font-inter font-normal">
                    Mobile Development
                  </Link>
                  <Link href="/ml-ai" onClick={closeMenu} className="block text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white text-lg transition-colors duration-200 font-inter font-normal">
                    ML/AI Solutions
                  </Link>
                  <Link href="/academic-projects" onClick={closeMenu} className="block text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white text-lg transition-colors duration-200 font-inter font-normal">
                    Academic Projects
                  </Link>
                  <Link href="/e-learning" onClick={closeMenu} className="block text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white text-lg transition-colors duration-200 font-inter font-normal">
                    E-Learning
                  </Link>
                </div>
                <a href="#contact" onClick={closeMenu} className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white text-xl transition-colors duration-200 font-inter font-normal">
                  Contact
                </a>
                <button onClick={closeMenu} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 mt-4 font-inter font-normal">
                  Request a Project
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;