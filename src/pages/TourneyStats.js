import React from 'react';
import Head from '../components/Head'; // Import Head
import Navbar from '../components/Navbar'; // Import Navbar
import Footer from '../components/Footer'; // Import Footer

const TourneyStats = () => {
  return (
    <div id="desktop">
      <Head /> {/* Add Head */}
      <Navbar /> {/* Add Navbar */}
      <div className="academic">
        <div className="pbanner">
          <h2>Personal Projects</h2>
        </div>
        <embed
          src="https://richtheinvincible.github.io/TourneyStats/"
          style={{ width: '100%', height: '100%' }}
        ></embed>
      </div>
      <Footer /> {/* Add Footer */}
    </div>
  );
};

export default TourneyStats;
