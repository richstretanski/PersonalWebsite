import React, { useState } from 'react';
import Head from '../components/Head'; // Import Head
import Navbar from '../components/Navbar'; // Import Navbar
import Footer from '../components/Footer';
import Titlebar from '../components/Titlebar'; // Import Titlebar
import Sidebar from '../components/Sidebar'; // Import updated Sidebar
import AcademicHome from './academicprojects/AcademicHome'; // Import AcademicHome
import DigitalMarketingProjects from './academicprojects/DigitalMarketingProjects';
import InfosecProjects from './academicprojects/InfosecProjects';
import ItProjects from './academicprojects/ItProjects';
import Banner from '../components/Banner'; // Import Banner component

const academicProjectItems = [
  { label: 'InfoSec Projects', contentKey: 'InfosecProjects' },
  { label: 'IT Projects', contentKey: 'ItProjects' },
  { label: 'Digital Marketing Projects', contentKey: 'DigitalMarketingProjects' },
];

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
        <Banner title="Academic Projects" backgroundImage={require('../images/M.png')} /> {/* Pass imported image */}
        <div className="content">
          <Sidebar items={academicProjectItems} setSelectedContent={setSelectedContent} />
          {renderContent()} {/* Render the selected content */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AcademicProjects;