import React, { useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface NavigationProps {
  onScrollToSection?: (sectionId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ onScrollToSection }) => {
  const [showMainSections, setShowMainSections] = useState(false);
  const [showServicesSections, setShowServicesSections] = useState(false);
  const mainHideTimer = useRef<number | null>(null);
  const servicesHideTimer = useRef<number | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Fixed width for both dropdown triggers and menus
  const MENU_WIDTH = 220;

  const mainSections = [
    { id: 'hero', name: 'Joseph Mestrallet' },
    { id: 'about', name: 'About me' },
    { id: 'enduraw', name: 'Enduraw' },
    { id: 'testimonials', name: 'Success Stories' },
    { id: 'media', name: 'Photos & Media' }
  ];

  const servicesSections = [
    { id: 'overview', name: 'All Services' },
    { id: 'elite-athletes', name: 'Elite Athletes' },
    { id: 'strava-integration', name: 'Strava Integration' },
    { id: 'race-briefing', name: 'Race Briefing' },
    { id: 'physiological-testing', name: 'Physiological Testing' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-dark-bg/95 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-white font-bold text-xl">
              Joseph Mestrallet
            </Link>
          </div>

          <div className="flex space-x-8">
            {/* Main Page Navigation */}
            <div
              className="relative group"
              onMouseEnter={() => {
                if (mainHideTimer.current) window.clearTimeout(mainHideTimer.current);
                setShowMainSections(true);
              }}
              onMouseLeave={() => {
                if (mainHideTimer.current) window.clearTimeout(mainHideTimer.current);
                mainHideTimer.current = window.setTimeout(() => setShowMainSections(false), 120);
              }}
            >
              <Link
                to="/"
                className={`relative z-20 inline-flex justify-center text-gray-200 hover:text-white hover:bg-white/10 px-3 py-2 text-base font-semibold transition-colors ${location.pathname === '/' ? 'text-white' : ''
                  }`}
                style={{ width: MENU_WIDTH }}
              >
                Home
              </Link>

              {/* No overlay behind trigger; dropdown unrolls below */}

              {/* Dropdown items below trigger; square corners; borders are the white lines */}
              <div className="absolute left-1/2 -translate-x-1/2 top-full z-10" style={{ width: MENU_WIDTH }}>
                <div
                  className={`origin-top transform transition-transform duration-200 ${showMainSections ? 'scale-y-100 pointer-events-auto' : 'scale-y-0 pointer-events-none'
                    } border-l-2 border-r-2 border-b-2 border-white bg-dark-secondary/95 py-2`}
                >
                  {mainSections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => {
                        onScrollToSection?.(section.id);
                        if (location.pathname !== '/') navigate('/');
                        setShowMainSections(false);
                      }}
                      className="block w-full px-6 py-3 text-base font-semibold text-gray-200 hover:bg-white hover:text-black text-center transition-colors"
                    >
                      {section.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Services Page Navigation */}
            <div
              className="relative group"
              onMouseEnter={() => {
                if (servicesHideTimer.current) window.clearTimeout(servicesHideTimer.current);
                setShowServicesSections(true);
              }}
              onMouseLeave={() => {
                if (servicesHideTimer.current) window.clearTimeout(servicesHideTimer.current);
                servicesHideTimer.current = window.setTimeout(() => setShowServicesSections(false), 120);
              }}
            >
              <Link
                to="/services"
                className={`relative z-20 inline-flex justify-center text-gray-200 hover:text-white hover:bg-white/10 px-3 py-2 text-base font-semibold transition-colors ${location.pathname === '/services' ? 'text-white' : ''
                  }`}
                style={{ width: MENU_WIDTH }}
              >
                Services
              </Link>

              {/* No overlay behind trigger; dropdown unrolls below */}

              {/* Dropdown items below trigger; square corners; borders are the white lines */}
              <div className="absolute left-1/2 -translate-x-1/2 top-full z-10" style={{ width: MENU_WIDTH }}>
                <div
                  className={`origin-top transform transition-transform duration-200 ${showServicesSections ? 'scale-y-100 pointer-events-auto' : 'scale-y-0 pointer-events-none'
                    } border-l-2 border-r-2 border-b-2 border-white bg-dark-secondary/95 py-2`}
                >
                  {servicesSections.map((section) => {
                    const directLink =
                      section.id === 'strava-integration'
                        ? '/services/strava-integration'
                        : section.id === 'race-briefing'
                          ? '/services/race-briefing'
                          : section.id === 'physiological-testing'
                            ? '/services/physiological-testing'
                            : null;

                    if (directLink) {
                      return (
                        <Link
                          key={section.id}
                          to={directLink}
                          onClick={() => setShowServicesSections(false)}
                          className="block w-full px-6 py-3 text-base font-semibold text-gray-200 hover:bg-white hover:text-black text-center transition-colors"
                        >
                          {section.name}
                        </Link>
                      );
                    }

                    return (
                      <button
                        key={section.id}
                        onClick={() => {
                          onScrollToSection?.(section.id);
                          if (location.pathname !== '/services') navigate('/services');
                          setShowServicesSections(false);
                        }}
                        className="block w-full px-6 py-3 text-base font-semibold text-gray-200 hover:bg-white hover:text-black text-center transition-colors"
                      >
                        {section.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed width, no measurement clones */}
    </nav>
  );
};

export default Navigation;
