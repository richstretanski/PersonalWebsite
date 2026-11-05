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

  const isHomePage = location.pathname === '/';

  return (
    <div id="desktop">
      <Head /> {/* Add Head */}
      {/* Render Navbar on the home page */}
      {isHomePage && <Navbar />}
      <Routes>
        <Route path="/" element={null} /> {/* Home page is just the Navbar above */}
        <Route path="/about" element={<About />} />
        <Route path="/academic-projects" element={<AcademicProjects />} />
        <Route path="/personal-projects" element={<PersonalProjects />} />
        <Route path="/resume" element={<Resume />} />

        {/* Add routes for personal project pages */}
        <Route path="/tourneystats" element={<TourneyStats />} /> {/* Add TourneyStats route */}
        <Route path="/miprdle" element={<MIPRDLE />} />

        {/* Send unknown URLs home instead of showing an empty desktop */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
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