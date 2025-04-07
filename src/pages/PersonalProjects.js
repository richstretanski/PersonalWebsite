import React from 'react';
import Head from '../components/Head'; // Import Head
import Navbar from '../components/Navbar'; // Import Navbar
import Footer from '../components/Footer'; // Import Footer
import Titlebar from '../components/Titlebar'; // Import Titlebar
import Sidebar from '../components/Sidebar'; // Import Sidebar

const PersonalProjects = () => {
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
          <Sidebar /> {/* Use Sidebar component */}
          <div className="main-content" style={{ paddingRight: '5%', paddingBottom: '10%' }}>
            <p>
              My personal projects showcase my passion for data visualization, competitive gaming, and creative problem-solving. 
              From analyzing tournament results and creating dynamic visualizations to exploring unique statistical insights, 
              these projects reflect my ability to combine technical skills with personal interests. 
              Each project represents a milestone in my journey of learning and growth.
            </p>
          </div>
        </div>
      </div>
      <Footer /> {/* Add Footer */}
    </div>
  );
};

export default PersonalProjects;
