import React from 'react';
import Head from '../../components/Head'; // Import Head
import Navbar from '../../components/Navbar'; // Import Navbar
import Footer from '../../components/Footer'; // Import Footer
import Sidebar from '../../components/Sidebar'; // Import Sidebar

const MIPRSummer2022 = () => {
  return (
    <div id="desktop">
      <Head /> {/* Add Head */}
      <Navbar /> {/* Add Navbar */}
      <div className="academic">
        <div className="pbanner">
          <h2>MIPR Summer 2022</h2>
        </div>
        <div className="content">
          <Sidebar /> {/* Use Sidebar component */}
          <div className="main-content" style={{ paddingRight: '5%', paddingBottom: '10%' }}>
            <span id="10" className="papers">MIPR Summer 2022</span>
            <br />
            <br />
            <ul className="personal">
              <li>
                <a href="https://x.com/MichiganMelee/status/1575962460565417984?s=20" target="_blank">
                  Announcement Video
                </a>
              </li>
              <li>
                <a href="https://docs.google.com/spreadsheets/d/13mTAqqlB1HpSsytNM4SYijYUSaZh1w6YnMtx9zyqxG0/edit#gid=0" target="_blank">
                  Ballot Results
                </a>
              </li>
            </ul>
            <hr />
          </div>
        </div>
      </div>
      <Footer /> {/* Add Footer */}
    </div>
  );
};

export default MIPRSummer2022;
