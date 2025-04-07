import React from 'react';
import Head from '../../components/Head'; // Import Head
import Navbar from '../../components/Navbar'; // Import Navbar
import Footer from '../../components/Footer'; // Import Footer
import Sidebar from '../../components/Sidebar'; // Import Sidebar
import miprSummer2023 from '../../images/melee/MIPR/2023SummerFull.png'; // Import image
import Titlebar from '../../components/Titlebar'; // Import Titlebar

const MIPRSummer2023 = () => {
  return (
    <div id="desktop">
      <Head /> {/* Add Head */}
      <Navbar /> {/* Add Navbar */}
      <div className="academic">
        <Titlebar title="MIPR Summer 2023" /> {/* Add Titlebar */}
        <div className="pbanner">
          <h2>MIPR Summer 2023</h2>
        </div>
        <div className="content">
          <Sidebar /> {/* Use Sidebar component */}
          <div className="main-content" style={{ paddingRight: '5%', paddingBottom: '10%' }}>
            <span id="13" className="papers">MIPR Summer 2023</span>
            <br />
            <br />
            <p>
              I am part of a small team that organizes a larger panel of about 15 people (which I am also in), tasked to
              evaluate the tournament results of all the players in Michigan to come up with an official state-wide
              ranking...
            </p>
            <ul className="personal">
              <li>
                <a href="https://x.com/MichiganMelee/status/1715161077229760950?s=20" target="_blank">
                  Announcement Video
                </a>
              </li>
              <li>
                <a
                  href="https://docs.google.com/spreadsheets/d/1OlOG5f7Nd1XVDMvNdkwKrvLQXhVoEbjSP3Z2VsEoM8s/edit?usp=sharing"
                  target="_blank"
                >
                  Ballot Results
                </a>
              </li>
              <li>
                <a href="https://lookerstudio.google.com/s/mNI367Dq58c" target="_blank">
                  Data Visualization (Looker)
                </a>
              </li>
            </ul>
            <div className="pr">
              <img id="pr" src={miprSummer2023} alt="MIPR Summer 2023" />
            </div>
            <hr />
          </div>
        </div>
      </div>
      <Footer /> {/* Add Footer */}
    </div>
  );
};

export default MIPRSummer2023;
