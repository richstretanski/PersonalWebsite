import React from 'react';
import Head from '../../components/Head'; // Import Head
import Navbar from '../../components/Navbar'; // Import Navbar
import Footer from '../../components/Footer'; // Import Footer
import Sidebar from '../../components/Sidebar'; // Import Sidebar
import miprWinter2020 from '../../images/melee/MIPR/2020-Winter.jpg'; // Import image
import Titlebar from '../../components/Titlebar'; // Import Titlebar

const MIPRWinter2020 = () => {
  return (
    <div id="desktop">
      <Head /> {/* Add Head */}
      <Navbar /> {/* Add Navbar */}
      <div className="academic">
        <Titlebar title="MIPR Winter 2020" /> {/* Add Titlebar */}
        <div className="pbanner">
          <h2>MIPR Winter 2020</h2>
        </div>
        <div className="content">
          <Sidebar /> {/* Use Sidebar component */}
          <div className="main-content" style={{ paddingRight: '5%', paddingBottom: '10%' }}>
            <span id="7" className="papers">MIPR Winter 2020</span>
            <br />
            <br />
            <ul className="personal">
              <li>
                <a href="https://x.com/MichiganMelee/status/1248737535976714240?s=20" target="_blank">
                  Announcement Tweet
                </a>
              </li>
              <li>
                <a href="https://docs.google.com/spreadsheets/d/1wa2ht5ziyS0wLZ-QZNSjdcMFs4p0_HLpykPU5QudTgc/edit?usp=sharing" target="_blank">
                  Ballot Results
                </a>
              </li>
            </ul>
            <div className="pr">
              <img id="pr" src={miprWinter2020} alt="MIPR Winter 2020" />
            </div>
            <hr />
          </div>
        </div>
      </div>
      <Footer /> {/* Add Footer */}
    </div>
  );
};

export default MIPRWinter2020;
