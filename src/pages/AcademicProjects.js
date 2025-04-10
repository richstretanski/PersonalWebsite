import React, { useState } from 'react';
import Head from '../components/Head'; // Import Head
import Navbar from '../components/Navbar'; // Import Navbar
import Footer from '../components/Footer';
import Titlebar from '../components/Titlebar'; // Import Titlebar
import AcademicSidebar from '../components/AcademicSidebar'; // Ensure AcademicSidebar is imported
import AcademicHome from './academicprojects/AcademicHome'; // Import AcademicHome
import DigitalMarketingProjects from './academicprojects/DigitalMarketingProjects';
import InfosecProjects from './academicprojects/InfosecProjects';
import ItProjects from './academicprojects/ItProjects';

const AcademicProjects = () => {
  const [selectedContent, setSelectedContent] = useState('AcademicHome'); // Default to AcademicHome

  const renderContent = () => {
    switch (selectedContent) {
      case 'DigitalMarketingProjects':
        return <DigitalMarketingProjects />;
      case 'InfosecProjects':
        return <InfosecProjects />;
      case 'ItProjects':
        return <ItProjects />;
      case 'AcademicHome':
      default:
        return <AcademicHome />;
    }
  };

  return (
    <div id="desktop">
      <Head /> {/* Add Head */}
      <Navbar /> {/* Add Navbar */}
      <div className="academic">
        <Titlebar title="Academic Projects" /> {/* Add Titlebar */}
        <div className="mbanner">
          <h2>About Academic Projects</h2>
        </div>
        <div className="content">
          <AcademicSidebar setSelectedContent={setSelectedContent} /> {/* Pass setSelectedContent */}  
          {renderContent()} {/* Render the selected content */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AcademicProjects;