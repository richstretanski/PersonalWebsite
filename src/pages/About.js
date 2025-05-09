import React from 'react';
import Head from '../components/Head'; // Import Head
import Navbar from '../components/Navbar'; // Import Navbar
import Titlebar from '../components/Titlebar';
import Footer from '../components/Footer'; // Import Footer
import profileImage from '../images/bwIMG_1708.jpeg'; // Import profile image
import Banner from '../components/Banner'; // Import Banner component
import bannerImage from '../images/M.png'; // Import the banner image
import { Link } from 'react-router-dom';


const About = () => {
  return (
    <div id="desktop">
      <Head /> {/* Add Head */}
      <Navbar /> {/* Add Navbar */}
      
      <div className="container">
        <Titlebar title="About" />
        <Banner title="Rich Stretanski" backgroundImage={bannerImage} /> {/* Pass imported image */}
        <div className="about1">
          <img className="photo" src={profileImage} alt="Rich Stretanski" />
        </div>
        <div className="about2">
          <ul>
            <li><div className="b">University of Michigan-Dearborn</div></li>
            <br />
            <li><div className="b">Masters of Science:</div> Information Systems & Technology</li>
            <br />
            <li><div className="b">BBA:</div> Digital Marketing, Information Technology Management</li>
            <br />
            <li><div className="b">ISC2</div> Cybersecurity Certification</li>
          </ul>
        </div>
        <div className="about4">
          <ul className="about4nav">
            <li className="about4navli">
              <Link to="/academic-projects">Academic Projects</Link>
            </li>
            <br />
            <li className="about4navli">
              <Link to="/personal-projects">Personal Projects</Link>
            </li>
            <br />
            <li className="about4navli">
              <Link to="">Resume.pdf</Link>
            </li>
            <br />
          </ul>
        </div>
        <div className="about3">
          <div className="b"><b>Welcome to My Website!</b></div>
          <p>
            I'm a recent graduate from the University of Michigan-Dearborn with a BBA in Information Technology Management and Digital Marketing from the College of Business. I also earned my master’s degree in Information Systems & Technology (Information Security concentration) from the College of Engineering & Computer Science.
          </p>
          <p>
            Beyond academics, I gained hands-on experience as an Applications Engineer at a small company, where I wore many hats—from setting up VPN infrastructure for overseas developers to creating custom knowledge system demos and managing Google AdWords campaigns.
          </p>
          <p>
            In my free time, I am a competitive Super Smash Bros. Melee player. I am ranked in the top 10 in Michigan and have competed in tournaments across the country. You will see that some of my projects are centered around melee and are for the benefit of the Michigan melee community.
          </p>
          <p>
            Feel free to explore my site to learn more about my projects, and interests!
            You can reach out to me at <a className="link" href="mailto:rstretan@umich.edu">rstretan@umich.edu</a>
          </p>
        </div>
      </div>
      <Footer /> {/* Add Footer */}
    </div>
  );
};

export default About;
