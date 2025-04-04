import React from 'react';
import Head from '../../components/Head'; // Import Head
import Navbar from '../../components/Navbar'; // Import Navbar
import Footer from '../../components/Footer'; // Import Footer
import Sidebar from '../../components/Sidebar'; // Import Sidebar
import miprSpring2018 from '../../images/melee/MIPR/2018Spring.jpg'; // Import image

const MIPRSpring2018 = () => {
  return (
    <div id="desktop">
      <Head /> {/* Add Head */}
      <Navbar /> {/* Add Navbar */}
      <div className="academic">
        <div className="pbanner">
          <h2>MIPR Spring 2018</h2>
        </div>
        <div className="content">
          <Sidebar /> {/* Use Sidebar component */}
          <div className="main-content" style={{ paddingRight: '5%', paddingBottom: '10%' }}>
            <span id="2" className="papers">MIPR Spring 2018</span>
            <br />
            <br />
            <div className="pr">
              <img id="pr" src={miprSpring2018} alt="MIPR Spring 2018" />
            </div>
            <hr />
          </div>
        </div>
      </div>
      <Footer /> {/* Add Footer */}
    </div>
  );
};

export default MIPRSpring2018;
