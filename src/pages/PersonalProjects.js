import React, { useState } from 'react';
import Head from '../components/Head'; // Import Head
import Navbar from '../components/Navbar'; // Import Navbar
import Footer from '../components/Footer'; // Import Footer
import Titlebar from '../components/Titlebar'; // Import Titlebar
import Sidebar from '../components/Sidebar'; // Import Sidebar
import MIPRHallOfRecords from './personalprojects/MIPRHallOfRecords';
import MIPRSummer2023 from './personalprojects/MIPRSummer2023';
import MeleeTournamentStats from './personalprojects/MeleeTournamentStats';
import MIPRWinter2023 from './personalprojects/MIPRWinter2023';
import MIPRSummer2022 from './personalprojects/MIPRSummer2022';
import TheNCAAMBigDance from './personalprojects/TheNCAAMBigDance';
import MIPRFall21Winter22 from './personalprojects/MIPRFall21Winter22';
import MIPRWinter2020 from './personalprojects/MIPRWinter2020';
import MIPRSummerFall2019 from './personalprojects/MIPRSummerFall2019';
import MIPRWinter2019 from './personalprojects/MIPRWinter2019';
import MIPRFall2018 from './personalprojects/MIPRFall2018';
import MIPRSummer2018 from './personalprojects/MIPRSummer2018';
import MIPRSpring2018 from './personalprojects/MIPRSpring2018';
import MIPRDLEProject from './personalprojects/MIPRDLEProject'; // Import MIPRDLEProject
import { handleImageClick } from '../scripts/script';
import MIPRWinter2024 from './personalprojects/MIPRWinter2024';
import MIPRSummer2024 from './personalprojects/MIPRSummer2024';
import PersonalAbout from './personalprojects/PersonalAbout'; // Import PersonalAbout
import ThisWebsite from './personalprojects/ThisWebsite';

const PersonalProjects = () => {
  const [selectedContent, setSelectedContent] = useState('PersonalAbout'); // Default to PersonalAbout
  const [popoutImage, setPopoutImage] = useState(null); // State to manage the popout image

  const renderContent = () => {
    switch (selectedContent) {
      case 'PersonalAbout':
        return <PersonalAbout />;
      case 'MIPRHallOfRecords':
        return <MIPRHallOfRecords handleImageClick={handleImageClickWrapper} />;
      case 'MIPRSummer2023':
        return <MIPRSummer2023 handleImageClick={handleImageClickWrapper} />;
      case 'MeleeTournamentStats':
        return <MeleeTournamentStats handleImageClick={handleImageClickWrapper} />;
      case 'MIPRWinter2023':
        return <MIPRWinter2023 handleImageClick={handleImageClickWrapper} />;
      case 'MIPRSummer2022':
        return <MIPRSummer2022 handleImageClick={handleImageClickWrapper} />;
      case 'TheNCAAMBigDance':
        return <TheNCAAMBigDance handleImageClick={handleImageClickWrapper} />;
      case 'MIPRFall21Winter22':
        return <MIPRFall21Winter22 handleImageClick={handleImageClickWrapper} />;
      case 'MIPRWinter2020':
        return <MIPRWinter2020 handleImageClick={handleImageClickWrapper} />;
      case 'MIPRSummerFall2019':
        return <MIPRSummerFall2019 handleImageClick={handleImageClickWrapper} />;
      case 'MIPRWinter2019':
        return <MIPRWinter2019 handleImageClick={handleImageClickWrapper} />;
      case 'MIPRFall2018':
        return <MIPRFall2018 handleImageClick={handleImageClickWrapper} />;
      case 'MIPRSummer2018':
        return <MIPRSummer2018 handleImageClick={handleImageClickWrapper} />;
      case 'MIPRSpring2018':
        return <MIPRSpring2018 handleImageClick={handleImageClickWrapper} />;
      case 'MIPRDLEProject':
        return <MIPRDLEProject handleImageClick={handleImageClickWrapper}/>;
      case 'MIPRWinter2024':
        return <MIPRWinter2024 handleImageClick={handleImageClickWrapper}/>; 
      case 'MIPRSummer2024':
        return <MIPRSummer2024 handleImageClick={handleImageClickWrapper}/>; 
      case 'ThisWebsite':
        return <ThisWebsite handleImageClick={handleImageClickWrapper}/>; 
      default:
        return <p>Select a project from the sidebar to view details.</p>;
    }
  };

  const handleImageClickWrapper = (imageSrc) => {
    handleImageClick(imageSrc, setPopoutImage, popoutImage);
  };

  return (
    <div id="desktop">
      <Head /> {/* Add Head */}
      <Navbar /> {/* Add Navbar */}
      <div className="academic">
        <Titlebar title="Personal Projects" /> {/* Add Titlebar */}
        <div className="pbanner">
          <h2>Personal Projects</h2>
        </div>
        <div className="content">
          <Sidebar setSelectedContent={setSelectedContent} /> {/* Pass setSelectedContent */}
          {renderContent()} {/* Render the selected content */}
        </div>
      </div>
      {popoutImage && (
        <div className="popout-overlay" onClick={() => setPopoutImage(null)}>
          <img className="popout-image" src={popoutImage} alt="Popout" />
        </div>
      )}
      <Footer /> {/* Add Footer */}
    </div>
  );
};

export default PersonalProjects;
