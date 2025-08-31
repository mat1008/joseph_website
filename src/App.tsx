import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';
import ServicesPage from './pages/ServicesPage';
import StravaIntegrationPage from './pages/services/StravaIntegrationPage';
import PhysiologicalTestingPage from './pages/services/PhysiologicalTestingPage';
import RaceBriefingPage from './pages/services/RaceBriefingPage';

function App() {
  const [activeSection, setActiveSection] = useState<string>('');

  const handleScrollToSection = useCallback((sectionId: string) => {
    setActiveSection(sectionId);
    
    // Reset after scrolling is complete
    setTimeout(() => setActiveSection(''), 1000);
  }, []);

  return (
    <Router>
      <div className="App min-h-screen bg-dark-bg">
        <ScrollToTop />
        <Navigation onScrollToSection={handleScrollToSection} />
        <Routes>
          <Route 
            path="/" 
            element={<MainPage activeSection={activeSection} />} 
          />
          <Route 
            path="/services" 
            element={<ServicesPage activeSection={activeSection} />} 
          />
          <Route path="/services/strava-integration" element={<StravaIntegrationPage />} />
          <Route path="/services/physiological-testing" element={<PhysiologicalTestingPage />} />
          <Route path="/services/race-briefing" element={<RaceBriefingPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
