"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa'; 

const Navbar = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/artifacts', label: 'Artifacts' },
    { href: '/reflections', label: 'Reflections' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      aria-label="Main navigation"
      className="w-full py-6 border-b border-gray-200 relative"
    >
      <div className="container flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-2xl font-bold text-text hover:text-primary transition-colors"
          onClick={() => setIsOpen(false)} 
        >
          MATTHEW
        </Link>

        {/* DESKTOP Navigation Links (Hidden on mobile) */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-sans text-lg hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/*  MOBILE Hamburger Button (Hidden on desktop) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl text-text hover:text-primary"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-20">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-gray-100">
                <Link
                  href={link.href}
                  className="block font-sans text-lg hover:text-primary transition-colors py-4 px-6"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;