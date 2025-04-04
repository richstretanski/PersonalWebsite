import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Head from './components/Head'; // Import Head
import Navbar from './components/Navbar'; // Import Navbar
//pages
import About from './pages/About'; // Import About component
import AcademicProjects from './pages/AcademicProjects';
import PersonalProjects from './pages/PersonalProjects';
import WorkProjects from './pages/WorkProjects';
import Resume from './pages/Resume';
import TourneyStats from './pages/TourneyStats'; // Import TourneyStats
import MIPRDLE from './pages/MIPRDLE'; // Import MIPRDLE
import Footer from './components/Footer';

//personal project pages
import MIPRHallOfRecords from './pages/personalprojects/MIPRHallOfRecords';
import MIPRSummer2023 from './pages/personalprojects/MIPRSummer2023';
import MeleeTournamentStats from './pages/personalprojects/MeleeTournamentStats';
import MIPRWinter2023 from './pages/personalprojects/MIPRWinter2023';
import MIPRSummer2022 from './pages/personalprojects/MIPRSummer2022';
import TheNCAAMBigDance from './pages/personalprojects/TheNCAAMBigDance';
import MIPRFall21Winter22 from './pages/personalprojects/MIPRFall21Winter22';
import MIPRWinter2020 from './pages/personalprojects/MIPRWinter2020';
import MIPRSummerFall2019 from './pages/personalprojects/MIPRSummerFall2019';
import MIPRWinter2019 from './pages/personalprojects/MIPRWinter2019';
import MIPRFall2018 from './pages/personalprojects/MIPRFall2018';
import MIPRSummer2018 from './pages/personalprojects/MIPRSummer2018';
import MIPRSpring2018 from './pages/personalprojects/MIPRSpring2018';
//academic project pages
import InfosecProjects from './pages/academicprojects/InfosecProjects'; // Import InfosecProjects component
import DigitalMarketingProjects from './pages/academicprojects/DigitalMarketingProjects'; // Import DigitalMarketingProjects
import ItProjects from './pages/academicprojects/ItProjects'; // Import ItProjects

const AppContent = () => {
  const location = useLocation(); // Get the current location

  // Defensive check for location
  if (!location) {
    console.error('Location is null or undefined');
    return null;
  }

  return (
    <div id="desktop">
      <Head /> {/* Add Head */}
      {/* Conditionally render Navbar only on the home page */}
      {location.pathname === '/' && <Navbar />}
      <Routes>
        <Route path="/about" element={<About />} /> {/* Add About route */}
        <Route path="/academic-projects" element={<AcademicProjects />} />
        <Route path="/academicprojects/infosec-projects" element={<InfosecProjects />} /> {/* Ensure InfosecProjects route */}
        <Route path="/academicprojects/digital-marketing-projects" element={<DigitalMarketingProjects />} />
        <Route path="/academicprojects/it-projects" element={<ItProjects />} />
        <Route path="/personal-projects" element={<PersonalProjects />} />
        <Route path="/work-projects" element={<WorkProjects />} />
        <Route path="/resume" element={<Resume />} />

        {/* Add routes for personal project pages */}
        <Route path="/personal-projects/mipr-hall-of-records" element={<MIPRHallOfRecords />} />
        <Route path="/personal-projects/mipr-summer-2023" element={<MIPRSummer2023 />} />
        <Route path="/personal-projects/melee-tournament-stats" element={<MeleeTournamentStats />} />
        <Route path="/personal-projects/mipr-winter-2023" element={<MIPRWinter2023 />} />
        <Route path="/personal-projects/mipr-summer-2022" element={<MIPRSummer2022 />} />
        <Route path="/personal-projects/the-ncaam-big-dance" element={<TheNCAAMBigDance />} />
        <Route path="/personal-projects/mipr-fall-21-winter-22" element={<MIPRFall21Winter22 />} />
        <Route path="/personal-projects/mipr-winter-2020" element={<MIPRWinter2020 />} />
        <Route path="/personal-projects/mipr-summer-fall-2019" element={<MIPRSummerFall2019 />} />
        <Route path="/personal-projects/mipr-winter-2019" element={<MIPRWinter2019 />} />
        <Route path="/personal-projects/mipr-fall-2018" element={<MIPRFall2018 />} />
        <Route path="/personal-projects/mipr-summer-2018" element={<MIPRSummer2018 />} />
        <Route path="/personal-projects/mipr-spring-2018" element={<MIPRSpring2018 />} />
        <Route path="/tourneystats" element={<TourneyStats />} /> {/* Add TourneyStats route */}
        <Route path="/miprdle" element={<MIPRDLE />} />
      </Routes>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Router basename="/PersonalWebsite/">
      <AppContent />
    </Router>
  );
};

export default App;