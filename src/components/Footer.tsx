import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-bg text-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top border line */}
        <div className="border-t border-white mb-12 mx-auto w-3/4"></div>

        {/* Main footer content */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-white" style={{ fontFamily: 'Montserrat' }}>
            Joseph Mestrallet<br />
            Performance Science
          </h2>
        </div>

        {/* Contact Information */}
        <div className="mb-8 text-white" style={{ fontFamily: 'Montserrat' }}>
          <p>330 route du plagnolet | 74400 Chamonix | France</p>
          <p>+33 6 95 84 65 29</p>
        </div>

        {/* Social Media - matching original structure */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.instagram.com/josephmestrallet/"
            className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988s11.987-5.367 11.987-11.988C24.014 5.367 18.647.001 12.017.001z" />
            </svg>
          </a>
          <a
            href="https://twitter.com/EndurawData"
            className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/joseph-mestrallet-770279a7"
            className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;