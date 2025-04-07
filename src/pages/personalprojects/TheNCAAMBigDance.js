import React from 'react';
import Head from '../../components/Head'; // Import Head
import Navbar from '../../components/Navbar'; // Import Navbar
import Footer from '../../components/Footer'; // Import Footer
import Sidebar from '../../components/Sidebar'; // Import Sidebar
import Titlebar from '../../components/Titlebar'; // Import Titlebar

const TheNCAAMBigDance = () => {
  return (
    <div id="desktop">
      <Head /> {/* Add Head */}
      <Navbar /> {/* Add Navbar */}
      <div className="academic">
        <Titlebar title="The NCAAM Big Dance" /> {/* Add Titlebar */}
        <div className="pbanner">
          <h2>The NCAAM Big Dance</h2>
        </div>
        <div className="content">
          <Sidebar /> {/* Use Sidebar component */}
          <div className="main-content" style={{ paddingRight: '5%', paddingBottom: '10%' }}>
            <span id="9" className="papers">
              <a href="https://medium.com/@rich.text/the-ncaam-big-dance-why-you-should-have-two-11-seed-upsets-in-your-bracket-b48354ae7dd7" target="_blank" rel="noopener noreferrer">
                The NCAAM Big Dance: Why You Should Have Two 11 Seed Upsets in Your Bracket
              </a>
            </span>
            <br />
            <br />
            <p>
              This article explores why you should include two 11-seed upsets in your NCAA tournament bracket. Click the link above to read the full article on Medium.
            </p>
            <hr />
          </div>
        </div>
      </div>
      <Footer /> {/* Add Footer */}
    </div>
  );
};

export default TheNCAAMBigDance;
