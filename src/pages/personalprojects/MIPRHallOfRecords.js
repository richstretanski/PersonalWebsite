import React from 'react';
import Head from '../../components/Head'; // Import Head
import Navbar from '../../components/Navbar'; // Import Navbar
import Footer from '../../components/Footer'; // Import Footer
import Sidebar from '../../components/Sidebar'; // Import Sidebar
import Titlebar from '../../components/Titlebar'; // Import Titlebar

const MIPRHallOfRecords = () => {
  return (
    <div id="desktop">
      <Head /> {/* Add Head */}
      <Navbar /> {/* Add Navbar */}
      <div className="academic">
        <Titlebar title="MIPR Hall of Records" /> {/* Add Titlebar */}
        <div className="pbanner">
          <h2>MIPR Hall of Records</h2>
        </div>
        <div className="content">
          <Sidebar /> {/* Use Sidebar component */}
          <div className="main-content" style={{ paddingRight: '5%', paddingBottom: '10%' }}>
            <span id="14" className="papers">MIPR Hall of Records</span>
            <br />
            <br />
            <p>A Looker data visualization of the history of Michigan Melee Power Rankings.</p>
            <iframe
              width="100%"
              height="500px"
              src="https://lookerstudio.google.com/embed/reporting/e82d1df3-f2da-4e00-8e5e-5bc6b851003a/page/p_nf98vqtc3c"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen
            ></iframe>
            <hr />
          </div>
        </div>
      </div>
      <Footer /> {/* Add Footer */}
    </div>
  );
};

export default MIPRHallOfRecords;
