import React from 'react';
import Head from '../../components/Head'; // Import Head
import Navbar from '../../components/Navbar'; // Import Navbar
import Footer from '../../components/Footer'; // Import Footer
import Titlebar from '../../components/Titlebar'; // Import Titlebar

const ItProjects = () => {
  return (
    <div id="desktop">
      <Head /> {/* Add Head */}
      <Navbar /> {/* Add Navbar */}
      <div className="academic">
        <Titlebar title="Information Technology Projects" /> {/* Add Titlebar */}
        <div className="mbanner">
          <h2>Information Technology Projects</h2>
        </div>
        <div className="content" style={{ paddingRight: '5%', paddingBottom: '10%' }}>
          <span className="papers">Active Measurements of Routes, Losses, and Delays (tracert)</span>
          <br />
          <br />
          <p>
            In this paper I analyze the connection between my local machine to the network locations of five different
            websites across the globe...
          </p>
          <hr />
          <span className="papers">Head to Head Database Web Application</span>
          <br />
          <br />
          <p>
            In this project, I make a web application to access Head to Head match data from a database...
          </p>
          <hr />
          <span className="papers">
            <a href="https://richtheinvincible.github.io/tictactoe/" target="_blank">Web TicTacToe</a>
          </span>
          <br />
          <br />
          <p>A webpage where a user can play a game of tic-tac-toe with either a second player or an AI.</p>
          <hr />
          <span className="papers">Calculator Web Service</span>
          <br />
          <br />
          <p>
            The purpose of this project was to set up a local WCF service using Internet Information Service(IIS)...
          </p>
          <hr />
          <span className="papers">Today In Film (an IMDB Dataset Application Project)</span>
          <br />
          <br />
          <p>
            I made an Excel application that uses the IMDB dataset to display all the films and shows that were released
            on today’s date in history.
          </p>
          <hr />
          <span className="papers">User Interface (UI/UX) Improvement Project</span>
          <br />
          <br />
          <p>
            In this project, I looked at a real world mobile app (Bracketor for Challonge), made prototype changes and
            ran qualitative and quantitative tests with real users...
          </p>
          <hr />
          <span className="papers">
            <a href="http://papers.richstretanski.com/SoftwareProjectManagementPlan.pdf" target="_blank">
              Software Project Management Plan
            </a>
          </span>{' '}
          (with S. Desai, K. Joseph, S. Masilamani, E. Rhodes)
          <br />
          <br />
          <p>
            We made a full software project management plan for a fictional office appliances and décor company...
          </p>
          <hr />
          <p>Related Courses:</p>
          <ul className="courses">
            <li>Computer Networks (Graduate)</li>
            <li>Data Structures & Algorithmic Analysis (Graduate)</li>
            <li>Database Systems (Graduate)</li>
            <li>Industrial & Manufacturing Systems Engineering (Graduate)</li>
            <li>User Interface Design & Analysis (Graduate)</li>
            <li>Web Technology (Graduate)</li>
            <li>Advanced Computer Applications</li>
            <li>Business Application Programming</li>
            <li>Database Systems I</li>
            <li>Database Systems II</li>
            <li>iCreate: Mobile Apps</li>
            <li>Info Systems Development</li>
            <li>Info Systems Management</li>
            <li>Networking & Collaborative Computing</li>
          </ul>
        </div>
      </div>
      <Footer /> {/* Add Footer */}
    </div>
  );
};

export default ItProjects;
