import React from 'react';
import Head from '../components/Head'; // Import Head
import Navbar from '../components/Navbar'; // Import Navbar
import Footer from '../components/Footer'; // Import Footer
import Titlebar from '../components/Titlebar'; // Import Titlebar
import Banner from '../components/Banner'; // Import Banner component

const Resume = () => {
  return (
    <div id="desktop">
      <Head /> {/* Add Head */}
      <Navbar /> {/* Add Navbar */}
      <div className="academic">
        <Titlebar title="Resume" /> {/* Add Titlebar */}
        <Banner title="Resume" backgroundImage={require('../images/M.png')} /> {/* Pass imported image */}
        {/* Hosted on Google Drive so the PDF stays out of this public repo */}
        <iframe
          src="https://drive.google.com/file/d/1zSgonRFf6TJB7fTDb91_gu9RzkLzJMKY/preview"
          title="Rich Stretanski's resume"
          style={{ width: '100%', flex: 1, border: 'none', backgroundColor: 'white' }}
        ></iframe>
      </div>
      <Footer />
    </div>
  );
};

export default Resume;
