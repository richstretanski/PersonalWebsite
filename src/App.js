import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'; // Import HelmetProvider
import Head from './components/Head'; // Import Head
import Navbar from './components/Navbar'; // Import Navbar
//pages
import About from './pages/About'; // Import About component
import AcademicProjects from './pages/AcademicProjects';
import PersonalProjects from './pages/PersonalProjects';
import Resume from './pages/Resume';
import TourneyStats from './pages/TourneyStats'; // Import TourneyStats
import MIPRDLE from './pages/MIPRDLE'; // Import MIPRDLE
import Footer from './components/Footer';

const AppContent = () => {
  const location = useLocation(); // Get the current location

  // Page components render their own Navbar and Footer. Only the empty
  // desktop needs them here; rendering them twice stacks two taskbars.
  const isEmptyDesktop = location.pathname === '/desktop';

  return (
    <div id="desktop">
      <Head /> {/* Add Head */}
      {isEmptyDesktop && <Navbar />}
      <Routes>
        {/* About is the landing page so visitors see who this site is about first */}
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        {/* Where a window's close button leads: the icons with no window open */}
        <Route path="/desktop" element={null} />
        <Route path="/academic-projects" element={<AcademicProjects />} />
        <Route path="/personal-projects" element={<PersonalProjects />} />
        <Route path="/resume" element={<Resume />} />

        {/* Add routes for personal project pages */}
        <Route path="/tourneystats" element={<TourneyStats />} /> {/* Add TourneyStats route */}
        <Route path="/miprdle" element={<MIPRDLE />} />

        {/* Send unknown URLs home instead of showing an empty desktop */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {isEmptyDesktop && <Footer />}
    </div>
  );
};

const App = () => {
  const basename = '/'; // Use root as the basename for the custom domain

  return (
    <HelmetProvider>
      
        <Router basename={basename}>
          <AppContent />
        </Router>
      
    </HelmetProvider>
  );
};

export default App;