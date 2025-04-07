import React from 'react';
import Head from '../../components/Head'; // Import Head
import Navbar from '../../components/Navbar'; // Import Navbar
import Footer from '../../components/Footer'; // Import Footer
import Sidebar from '../../components/Sidebar'; // Import Sidebar
import miprSummerFall2018 from '../../images/melee/MIPR/2018summerfall.jpg'; // Import image
import Titlebar from '../../components/Titlebar'; // Import Titlebar

const MIPRSummerFall2018 = () => {
  return (
    <div id="desktop">
      <Head /> {/* Add Head */}
      <Navbar /> {/* Add Navbar */}
      <div className="academic">
        <Titlebar title="MIPR Summer - Fall 2018" /> {/* Add Titlebar */}
        <div className="pbanner">
          <h2>MIPR Summer/Fall 2018</h2>
        </div>
        <div className="content">
          <Sidebar /> {/* Use Sidebar component */}
          <div className="main-content" style={{ paddingRight: '5%', paddingBottom: '10%' }}>
            <span id="1" className="papers">MIPR Summer/Fall 2018</span>
            <br />
            <br />
            <div className="pr">
              <img id="pr" src={miprSummerFall2018} alt="MIPR Summer/Fall 2018" />
            </div>
            <hr />
          </div>
        </div>
      </div>
      <Footer /> {/* Add Footer */}
    </div>
  );
};

export default MIPRSummerFall2018;
