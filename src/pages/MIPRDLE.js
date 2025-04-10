import React from 'react';
import Head from '../components/Head'; // Import Head
import Navbar from '../components/Navbar'; // Import Navbar
import Footer from '../components/Footer'; // Import Footer
import Titlebar from '../components/Titlebar'; // Import Titlebar

const MIPRDLE = () => {
  return (
    <div id="desktop">
      <Head /> {/* Add Head */}
      <Navbar /> {/* Add Navbar */}
      <div className="academic">
        <Titlebar title="MIPRDLE" /> {/* Add Titlebar */}
        <div className="pbanner">
          <h2>Personal Projects</h2>
        </div>
        <embed
          src="https://richtheinvincible.github.io/MIPRDLE/"
        ></embed>
      </div>
      <Footer /> {/* Add Footer */}
    </div>
  );
};

export default MIPRDLE;
