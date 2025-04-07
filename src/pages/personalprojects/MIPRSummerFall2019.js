import React from 'react';
import Head from '../../components/Head'; // Import Head
import Navbar from '../../components/Navbar'; // Import Navbar
import Footer from '../../components/Footer'; // Import Footer
import Sidebar from '../../components/Sidebar'; // Import Sidebar
import miprSummerFall2019 from '../../images/melee/MIPR/2019summerfall.jpg'; // Import image
import Titlebar from '../../components/Titlebar'; // Import Titlebar

const MIPRSummerFall2019 = () => {
  return (
    <div id="desktop">
      <Head /> {/* Add Head */}
      <Navbar /> {/* Add Navbar */}
      <div className="academic">
        <Titlebar title="MIPR Summer - Fall 2019" /> {/* Add Titlebar */}
        <div className="pbanner">
          <h2>MIPR Summer/Fall 2019</h2>
        </div>
        <div className="content">
          <Sidebar /> {/* Use Sidebar component */}
          <div className="main-content" style={{ paddingRight: '5%', paddingBottom: '10%' }}>
            <span id="6" className="papers">MIPR Summer/Fall 2019</span>
            <br />
            <br />
            <ul className="personal">
              <li>
                <a href="https://x.com/MichiganMelee/status/1213305588614086656?s=20" target="_blank">
                  Announcement Tweet
                </a>
              </li>
              <li>
                <a href="https://docs.google.com/spreadsheets/d/1S8pwlMFYxy7jXP5Bkq60Xh0tP6vnZsnGnWZpN18rknE/edit?usp=sharing" target="_blank">
                  Ballot Results
                </a>
              </li>
            </ul>
            <div className="pr">
              <img id="pr" src={miprSummerFall2019} alt="MIPR Summer/Fall 2019" />
            </div>
            <hr />
          </div>
        </div>
      </div>
      <Footer /> {/* Add Footer */}
    </div>
  );
};

export default MIPRSummerFall2019;
