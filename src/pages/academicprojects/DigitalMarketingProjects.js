import React from 'react';
import Head from '../../components/Head'; // Import Head
import Navbar from '../../components/Navbar'; // Import Navbar
import Footer from '../../components/Footer'; // Import Footer

const DigitalMarketingProjects = () => {
  return (
    <div id="desktop">
      <Head /> {/* Add Head */}
      <Navbar /> {/* Add Navbar */}
      <div className="academic">
        <div className="mbanner">
          <h2>Digital Marketing Projects</h2>
        </div>
        <div className="content" style={{ paddingRight: '5%', paddingBottom: '10%' }}>
          <span className="papers">Warby Parker Marketing Strategy</span> (with K. Domke, J. Jodoin, and J. Rostkowski)
          <br />
          <br />
          <p>A marketing strategy presentation for Warby Parker (2015).</p>
          <hr />
          <span className="papers">AT&T Integrated Marketing Communications Advertising Plan</span> (with L. McGann, J. Basmajian, T. Bowman, U. Overstreet)
          <br />
          <br />
          <p>A full advertising plan for AT&T right before the merger with DirecTV (2014).</p>
          <hr />
          <span className="papers">Cottage Inn Social Media Strategy</span> (with F. Adamczyk, K. Domke, and J. Turner)
          <br />
          <br />
          <p>A social media strategy for the pizza chain, Cottage Inn (2015).</p>
          <hr />
          <p>Related Courses:</p>
          <ul className="courses">
            <li>Communication Strategy & New Media Advertising</li>
            <li>Digital Analytics & Content Management</li>
            <li>Digital Consumer Search & Marketing</li>
            <li>E-Tailing & Retailing</li>
            <li>Marketing Principles & Policies</li>
            <li>Marketing Research</li>
          </ul>
          <br />
          <p>Misc. Business Courses:</p>
          <ul className="courses">
            <li>Behavior in Organizations</li>
            <li>Corporate Finance</li>
            <li>Corporate Responsibility</li>
            <li>Critical Thinking</li>
            <li>Intro to Operations Management</li>
            <li>Managerial Communications</li>
            <li>Managerial Economics & Business Strategy</li>
            <li>Project Management & Leadership Skills</li>
            <li>Quantitative Model & Analysis</li>
            <li>Strategic Management</li>
            <li>The Legal Environment of Business</li>
          </ul>
        </div>
      </div>
      <Footer /> {/* Add Footer */}
    </div>
  );
};

export default DigitalMarketingProjects;
