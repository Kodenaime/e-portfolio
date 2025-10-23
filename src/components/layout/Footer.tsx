import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: '#', 
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: '#', 
    },
    {
      name: 'Twitter',
      icon: FaTwitter,
      url: '#', 
    },
  ];

  return (
    <footer className="w-full py-8 mt-16 border-t border-gray-200">
      <div className="container text-center">
        {/* Social Media Links */}
        <div className="flex justify-center gap-6 mb-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit my ${link.name} profile`}
              className="text-text hover:text-primary transition-colors"
            >
              <link.icon size={24} />
            </a>
          ))}
        </div>

        {/* Copyright Notice */}
        <p className="text-sm text-gray-600">
          © {currentYear} Your Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;