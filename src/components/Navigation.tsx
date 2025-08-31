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
    { id: 'about', name: 'About me' },
    { id: 'enduraw', name: 'Enduraw' },
    { id: 'testimonials', name: 'Success Stories' },
    { id: 'media', name: 'Photos & Media' }
  ];

  const servicesSections = [
    { id: 'elite-athletes', name: 'Elite Athletes' },
    { id: 'for-all-athletes', name: 'All athletes' },
    { id: 'strava-integration', name: 'Strava Integration' },
    { id: 'race-briefing', name: 'Race Briefing' },
    { id: 'physiological-testing', name: 'Physiological Testing' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-dark-bg border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-20 2xl:px-28">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-white font-medium text-xl font-sans uppercase tracking-wide">
              Joseph Mestrallet
            </Link>
          </div>

          <div className="flex space-x-2">
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
              {/* Reserve space in navbar row so the absolute dropdown can sit over it (match trigger height ~48px) */}
              <div className="h-12" style={{ width: MENU_WIDTH }} />

              {/* Dropdown panel contains the trigger at top and unrolls below */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 z-20" style={{ width: MENU_WIDTH }}>
                <div className={`${showMainSections ? 'border-l-2 border-r-2' : ''} border-gray-500 bg-gray-800`}>
                  <Link
                    to="/"
                    className={`block w-full px-6 py-3 text-base font-bold text-gray-200 ${showMainSections ? 'bg-gray-800' : 'bg-black'} hover:bg-white hover:text-black text-center transition-colors ${location.pathname === '/' ? 'text-white' : ''}`}
                    onClick={() => setShowMainSections(false)}
                  >
                    Home
                  </Link>
                  <div className={`overflow-hidden transition-all duration-200 ease-out ${showMainSections ? 'max-h-[1000px] pt-2' : 'max-h-0'}`}>
                    {mainSections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => {
                          onScrollToSection?.(section.id);
                          if (location.pathname !== '/') navigate('/');
                          setShowMainSections(false);
                        }}
                        className="block w-full px-6 py-3 text-base font-medium text-gray-200 hover:bg-white hover:text-black text-center transition-colors"
                      >
                        {section.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Separator between Home and Services */}
            <div className="self-center h-6 w-px bg-white/30"></div>

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
              {/* Reserve space in navbar row so the absolute dropdown can sit over it (match trigger height ~48px) */}
              <div className="h-12" style={{ width: MENU_WIDTH }} />

              {/* Dropdown panel contains the trigger at top and unrolls below */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 z-20" style={{ width: MENU_WIDTH }}>
                <div className={`${showServicesSections ? 'border-l-2 border-r-2' : ''} border-gray-500 bg-gray-800`}>
                  <Link
                    to="/services"
                    className={`block w-full px-6 py-3 text-base font-bold text-gray-200 ${showServicesSections ? 'bg-gray-800' : 'bg-black'} hover:bg-white hover:text-black text-center transition-colors ${location.pathname === '/services' ? 'text-white' : ''}`}
                    onClick={() => setShowServicesSections(false)}
                  >
                    Services
                  </Link>
                  <div className={`overflow-hidden transition-all duration-200 ease-out ${showServicesSections ? 'max-h-[1000px] pt-2' : 'max-h-0'}`}>
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
                            className="block w-full px-6 py-3 text-base font-medium text-gray-200 hover:bg-white hover:text-black text-center transition-colors"
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
                          className="block w-full px-6 py-3 text-base font-medium text-gray-200 hover:bg-white hover:text-black text-center transition-colors"
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
      </div>

      {/* Fixed width, no measurement clones */}
    </nav>
  );
};

export default Navigation;
