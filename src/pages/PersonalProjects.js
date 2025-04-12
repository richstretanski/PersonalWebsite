//components
import React, { useState } from 'react';
import Head from '../components/Head'; // Import Head
import Navbar from '../components/Navbar'; // Import Navbar
import Footer from '../components/Footer'; // Import Footer
import Titlebar from '../components/Titlebar'; // Import Titlebar
import Sidebar from '../components/Sidebar'; // Import updated Sidebar
import Banner from '../components/Banner'; // Import Banner component
//scripts
import { handleImageClick } from '../scripts/script';
//pages
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
import MIPRWinter2024 from './personalprojects/MIPRWinter2024';
import MIPRSummer2024 from './personalprojects/MIPRSummer2024';
import PersonalAbout from './personalprojects/PersonalAbout'; // Import PersonalAbout
import ThisWebsite from './personalprojects/ThisWebsite';

const personalProjectItems = [
  { label: 'This Website', contentKey: 'ThisWebsite' },
  { label: 'MIPRDLE', contentKey: 'MIPRDLEProject' },
  {
    label: 'Michigan Melee Power Rankings',
    children: [
      { label: 'Summer 2024', contentKey: 'MIPRSummer2024' },
      { label: 'Winter 2024', contentKey: 'MIPRWinter2024' },
      { label: 'Summer 2023', contentKey: 'MIPRSummer2023' },
      { label: 'Winter 2023', contentKey: 'MIPRWinter2023' },
      { label: 'Summer 2022', contentKey: 'MIPRSummer2022' },
      { label: "Fall '21 Winter '22", contentKey: 'MIPRFall21Winter22' },
      { label: "Winter 2020", contentKey: 'MIPRWinter2020' },
      { label: "Summer/Fall 2019", contentKey: 'MIPRSummerFall2019' },
      { label: "Winter 2019", contentKey: 'MIPRWinter2019' },
      { label: "Fall 2018", contentKey: 'MIPRFall2018' },
      { label: "Summer 2018", contentKey: 'MIPRSummer2018' },
      { label: "Spring 2018", contentKey: 'MIPRSpring2018' }
    ],
  },
  { label: 'MIPR Hall of Records', contentKey: 'MIPRHallOfRecords' },
  { label: 'Melee Tournament Stats', contentKey: 'MeleeTournamentStats' },
  { label: 'The NCAAM Big Dance', contentKey: 'TheNCAAMBigDance' },
];

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
        <Banner title="Personal Projects" backgroundImage={require('../images/fd.png')} /> {/* Pass imported image */}
        <div className="content">
          <Sidebar items={personalProjectItems} setSelectedContent={setSelectedContent} /> {/* Pass items and setSelectedContent */}
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
