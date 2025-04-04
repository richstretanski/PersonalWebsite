import React from 'react';
import Head from '../../components/Head'; // Import Head
import Navbar from '../../components/Navbar'; // Import Navbar
import Footer from '../../components/Footer'; // Import Footer
import Sidebar from '../../components/Sidebar'; // Import Sidebar
import miprFall2021Winter2022 from '../../images/melee/MIPR/2021Fall2022Winter.jpg'; // Import image

const MIPRFall21Winter22 = () => {
  return (
    <div id="desktop">
      <Head /> {/* Add Head */}
      <Navbar /> {/* Add Navbar */}
      <div className="academic">
        <div className="pbanner">
          <h2>MIPR Fall '21/Winter '22</h2>
        </div>
        <div className="content">
          <Sidebar /> {/* Use Sidebar component */}
          <div className="main-content" style={{ paddingRight: '5%', paddingBottom: '10%' }}>
            <span id="8" className="papers">MIPR Fall '21/Winter '22</span>
            <br />
            <br />
            <ul className="personal">
              <li>
                <a href="https://x.com/MichiganMelee/status/1501756586666119171?s=20" target="_blank">
                  Announcement Tweet
                </a>
              </li>
              <li>
                <a href="https://docs.google.com/spreadsheets/d/1NftVQJO3Hdp5aZl3vsIU8Yuy7nP2c9VZ33-qjUygZlA" target="_blank">
                  Ballot Results
                </a>
              </li>
            </ul>
            <div className="pr">
              <img id="pr" src={miprFall2021Winter2022} alt="MIPR Fall '21/Winter '22" />
            </div>
            <hr />
          </div>
        </div>
      </div>
      <Footer /> {/* Add Footer */}
    </div>
  );
};

export default MIPRFall21Winter22;
