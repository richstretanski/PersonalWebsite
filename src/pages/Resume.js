import React from 'react';
import Head from '../components/Head'; // Import Head
import Navbar from '../components/Navbar'; // Import Navbar
import Footer from '../components/Footer';

const Resume = () => {
  return (
    <div id="desktop">
      <Head /> {/* Add Head */}
      <Navbar /> {/* Add Navbar */}
      <div className="academic">
        <div className="mbanner">
          <h2>Resume Request Form</h2>
        </div>
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
