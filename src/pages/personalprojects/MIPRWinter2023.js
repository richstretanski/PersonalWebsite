import React from 'react';
import Head from '../../components/Head'; // Import Head
import Navbar from '../../components/Navbar'; // Import Navbar
import Footer from '../../components/Footer'; // Import Footer
import Sidebar from '../../components/Sidebar'; // Import Sidebar
import Titlebar from '../../components/Titlebar'; // Import Titlebar
import miprWinter2023 from '../../images/melee/MIPR/2023Winter.jpg'; // Import image

const MIPRWinter2023 = () => {
  return (
    <div id="desktop">
      <Head /> {/* Add Head */}
      <Navbar /> {/* Add Navbar */}
      <div className="academic">
        <Titlebar title="MIPR Winter 2023" /> {/* Add Titlebar */}
        <div className="pbanner">
          <h2>MIPR Winter 2023</h2>
        </div>
        <div className="content">
          <Sidebar /> {/* Use Sidebar component */}
          <div className="main-content" style={{ paddingRight: '5%', paddingBottom: '10%' }}>
            <span id="11" className="papers">MIPR Winter 2023</span>
            <br />
            <br />
            <ul className="personal">
              <li>
                <a href="https://x.com/MichiganMelee/status/1648876264961220608?s=20" target="_blank">
                  Announcement Tweet
                </a>
              </li>
              <li>
                <a href="https://lookerstudio.google.com/s/vd0Lx6s775o" target="_blank">
                  Data Visualization (Looker)
                </a>
              </li>
            </ul>
            <div className="pr">
              <img id="pr" src={miprWinter2023} alt="MIPR Winter 2023" />
            </div>
            <hr />
          </div>
        </div>
      </div>
      <Footer /> {/* Add Footer */}
    </div>
  );
};

export default MIPRWinter2023;
