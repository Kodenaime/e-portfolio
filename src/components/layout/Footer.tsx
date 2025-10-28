import React from 'react';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Instagram',
      icon: FaInstagram,
      url: 'https://www.instagram.com/matthewogieva?igsh=Z3RqaXFpams3MmJm', 
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://www.linkedin/in/matthew-ogieva', 
    },
    {
      name: 'Twitter',
      icon: FaTwitter,
      url: 'https://x.com/OgievaMatthew?t=mPNXmOhUYtkPi5SD9f8zlA&s=09', 
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
          © {currentYear} Matthew Ogieva. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;