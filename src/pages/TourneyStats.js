import React from 'react';
import Head from '../components/Head'; // Import Head
import Navbar from '../components/Navbar'; // Import Navbar
import Footer from '../components/Footer'; // Import Footer
import Titlebar from '../components/Titlebar'; // Import Titlebar

const TourneyStats = () => {
  console.log('TourneyStats page rendered'); // Debug log to ensure the page is rendering correctly

  return (
    <div id="desktop">
      <Head /> {/* Add Head */}
      <Navbar /> {/* Add Navbar */}
      <div className="academic">
        <Titlebar title="TourneyStats" /> {/* Add Titlebar */}
        <div className="pbanner">
          <h2>Personal Projects</h2>
        </div>
          <embed
            src="https://richtheinvincible.github.io/TourneyStats/"
          ></embed>
      </div>
      <Footer /> {/* Add Footer */}
    </div>
  );
};

export default TourneyStats;
