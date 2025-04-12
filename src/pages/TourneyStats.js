import React from 'react';
import Head from '../components/Head'; // Import Head
import Navbar from '../components/Navbar'; // Import Navbar
import Footer from '../components/Footer'; // Import Footer
import Titlebar from '../components/Titlebar'; // Import Titlebar
import Banner from '../components/Banner'; // Import Banner component

const TourneyStats = () => {

  return (
    <div id="desktop">
      <Head /> {/* Add Head */}
      <Navbar /> {/* Add Navbar */}
      <div className="academic">
        <Titlebar title="TourneyStats" /> {/* Add Titlebar */}
        <Banner title="TourneyStats" backgroundImage={require('../images/fd.png')} /> {/* Pass imported image */}
          <embed
            src="https://richtheinvincible.github.io/TourneyStats/"
          ></embed>
      </div>
      <Footer /> {/* Add Footer */}
    </div>
  );
};

export default TourneyStats;
