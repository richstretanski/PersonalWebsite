import React from 'react';
import Head from '../components/Head'; // Import Head
import Navbar from '../components/Navbar'; // Import Navbar
import Footer from '../components/Footer'; // Import Footer
import Titlebar from '../components/Titlebar'; // Import Titlebar
import Banner from '../components/Banner'; // Import Banner component

const Resume = () => {
  return (
    <div id="desktop">
      <Head /> {/* Add Head */}
      <Navbar /> {/* Add Navbar */}
      <div className="academic">
        <Titlebar title="Resume" /> {/* Add Titlebar */}
        <Banner title="Resume Request Form" backgroundImage={require('../images/M.png')} /> {/* Pass imported image */}
        <embed
          src="https://docs.google.com/forms/d/e/1FAIpQLSebJC9_rm08S60IZ8Ac2mOpleS5OJFDhsERwyrnRuyRZD152Q/viewform"
          style={{ width: '100%', height: '100%' }}
        ></embed>
      </div>
      <Footer />
    </div>
  );
};

export default Resume;
