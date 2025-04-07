import React from 'react';
import Head from '../components/Head'; // Import Head
import Navbar from '../components/Navbar'; // Import Navbar
import Footer from '../components/Footer';
import Titlebar from '../components/Titlebar'; // Import Titlebar
import AcademicSidebar from '../components/AcademicSidebar'; // Ensure AcademicSidebar is imported

const AcademicProjects = () => {
  return (
    <div id="desktop">
      <Head /> {/* Add Head */}
      <Navbar /> {/* Add Navbar */}
      <div className="academic">
        <Titlebar title="Academic Projects" /> {/* Add Titlebar */}
        <div className="mbanner">
          <h2>About Academic Projects</h2>
        </div>
        <div className="content" style={{ paddingRight: '5%', paddingBottom: '10%' }}>
          <AcademicSidebar /> {/* Ensure AcademicSidebar is rendered */}
          <p>
            This is an archive of some of my academic projects that I worked on while studying Digital Marketing (Undergraduate), Information Technology Management (Undergraduate), and Information Security (Graduate) at the University of Michigan-Dearborn. Many of my projects were team projects since the College of Business values being able to work well in a team setting. If a project was a team project, contributors were credited as such.
          </p>
          <br />
          <p>
            At some point, I may link the documents referenced, but for now, I'm going to leave them as project summaries.
          </p>
          <br />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AcademicProjects;