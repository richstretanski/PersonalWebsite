import React from 'react';
import Head from '../../components/Head'; // Import Head
import Navbar from '../../components/Navbar'; // Import Navbar
import Footer from '../../components/Footer'; // Import Footer
import Sidebar from '../../components/Sidebar'; // Import Sidebar
import miprWinter2019 from '../../images/melee/MIPR/2019winter.jpg'; // Import image

const MIPRWinter2019 = () => {
  return (
    <div id="desktop">
      <Head /> {/* Add Head */}
      <Navbar /> {/* Add Navbar */}
      <div className="academic">
        <div className="pbanner">
          <h2>MIPR Winter 2019</h2>
        </div>
        <div className="content">
          <Sidebar /> {/* Use Sidebar component */}
          <div className="main-content" style={{ paddingRight: '5%', paddingBottom: '10%' }}>
            <span id="5" className="papers">MIPR Winter 2019</span>
            <br />
            <br />
            <ul className="personal">
              <li>
                <a href="https://docs.google.com/spreadsheets/d/1rOKFwvAqvp1tTj8GpoEbSDt75uFJA9ewBIweTE2OSD0/edit?usp=sharing" target="_blank">
                  Ballot Results
                </a>
              </li>
            </ul>
            <div className="pr">
              <img id="pr" src={miprWinter2019} alt="MIPR Winter 2019" />
            </div>
            <hr />
          </div>
        </div>
      </div>
      <Footer /> {/* Add Footer */}
    </div>
  );
};

export default MIPRWinter2019;
