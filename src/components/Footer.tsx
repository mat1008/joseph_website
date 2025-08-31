import React from 'react';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

// Temporary type shim for React 19 compatibility with react-icons
const InstagramIcon = FaInstagram as unknown as React.FC<React.SVGProps<SVGSVGElement>>;
const TwitterIcon = FaTwitter as unknown as React.FC<React.SVGProps<SVGSVGElement>>;
const LinkedinIcon = FaLinkedin as unknown as React.FC<React.SVGProps<SVGSVGElement>>;

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-bg text-white pt-8 pb-12 border-t-[0.5px] border-white/90">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Contact Information */}
        <div className="mb-6 text-white" style={{ fontFamily: 'Montserrat' }}>
          <p>330 route du plagnolet | 74400 Chamonix | France</p>
          <p>+33 6 95 84 65 29</p>
        </div>

        {/* Social Media */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.instagram.com/josephmestrallet/"
            className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <InstagramIcon className="w-5 h-5 text-black" />
          </a>
          <a
            href="https://twitter.com/EndurawData"
            className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <TwitterIcon className="w-4 h-4 text-black" />
          </a>
          <a
            href="https://www.linkedin.com/in/joseph-mestrallet-770279a7"
            className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4 text-black" />
          </a>
        </div>

        {/* Copyright at bottom */}
        <div className="mt-6">
          <p className="text-xs text-white/90" style={{ fontFamily: 'Montserrat' }}>
            © Joseph Mestrallet 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
