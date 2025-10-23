import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav
      aria-label="Main navigation"
      className="w-full py-6 border-b border-gray-200"
    >
      <div className="container flex items-center justify-between">
        <Link
          href="/" 
          className="font-display text-2xl font-bold text-text hover:text-primary transition-colors"
        >
          My Portfolio
        </Link>

        {/* Navigation Links */}
        <ul className="flex items-center gap-6">
          
          <li>
            <Link
              href="/"
              className="font-sans text-lg hover:text-primary transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/artifacts"
              className="font-sans text-lg hover:text-primary transition-colors"
            >
              Artifacts
            </Link>
          </li>
          <li>
            <Link
              href="/reflections"
              className="font-sans text-lg hover:text-primary transition-colors"
            >
              Reflections
            </Link>
          </li>
          <li>
            <Link
              href="/gallery"
              className="font-sans text-lg hover:text-primary transition-colors"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="font-sans text-lg hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;