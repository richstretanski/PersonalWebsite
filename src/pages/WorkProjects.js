import React from 'react';
import Head from '../components/Head'; // Import Head
import Navbar from '../components/Navbar'; // Import Navbar
import Footer from '../components/Footer';
import Titlebar from '../components/Titlebar'; // Import Titlebar

const WorkProjects = () => {
  return (
    <div id="desktop">
      <Head /> {/* Add Head */}
      <Navbar /> {/* Add Navbar */}
      <div className="academic">
        <Titlebar title="Work Projects" /> {/* Add Titlebar */}
        <div className="wbanner">
          <h2>Work Projects</h2>
        </div>
        <div className="content" style={{ paddingRight: '5%', paddingBottom: '10%' }}>
          <span className="papers">
            <a href="">Web Design & Maintenance: Emergent Systems</a>
          </span>
          <br />
          <br />
          <div className="work">
            {/* Add additional content here if needed */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WorkProjects;
