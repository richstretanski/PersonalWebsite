import React from 'react';
import Head from '../../components/Head'; // Import Head
import Navbar from '../../components/Navbar'; // Import Navbar
import Footer from '../../components/Footer'; // Import Footer
import Sidebar from '../../components/Sidebar'; // Import Sidebar
import Titlebar from '../../components/Titlebar'; // Import Titlebar

const MeleeTournamentStats = () => {
  return (
    <div id="desktop">
      <Head /> {/* Add Head */}
      <Navbar /> {/* Add Navbar */}
      <div className="academic">
        <Titlebar title="Melee Tournament Stats" /> {/* Add Titlebar */}
        <div className="pbanner">
          <h2>Melee Tournament Stats</h2>
        </div>
        <div className="content">
          <Sidebar /> {/* Use Sidebar component */}
          <div className="main-content" style={{ paddingRight: '5%', paddingBottom: '10%' }}>
            <span id="12" className="papers">
              <a href="tourneystats.html" target="_blank">
                Melee Tournament Stats
              </a>
            </span>
            <br />
            <br />
            <p>
              The dynamically updating results, takeaways, and findings from my years competing in{' '}
              <a href="https://en.wikipedia.org/wiki/Super_Smash_Bros._in_esports" target="_blank">
                Super Smash Brothers Melee (2001)
              </a>
              ...
            </p>
            <hr />
          </div>
        </div>
      </div>
      <Footer /> {/* Add Footer */}
    </div>
  );
};

export default MeleeTournamentStats;
