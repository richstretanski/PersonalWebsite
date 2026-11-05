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
            <li><div className="b">Master of Science:</div> Information Systems & Technology (Information Security concentration)</li>
            <br />
            <li><div className="b">BBA:</div> Digital Marketing, Information Technology Management</li>
            <br />
            <li><div className="b">ISC2:</div> Certified in Cybersecurity (CC)</li>
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
              <Link to="/resume">Resume</Link>
            </li>
            <br />
          </ul>
        </div>
        <div className="about3">
          <div className="b"><b>Welcome to My Website!</b></div>
          <p>
            IT professional seeking an entry-level role. MS in Information Systems & Technology (Information Security concentration), ISC2 Certified in Cybersecurity (CC), with hands-on networking and home lab experience.
          </p>
          <p>
            As an Applications Engineer (Contract) at Emergent Systems, I built the networking infrastructure for a new office, including firewall deployment and an SSL VPN for overseas developers. I also built and maintained three company websites, created demos of a proprietary knowledge system, and provided software and hardware support. I currently work as a contract AI Writing Evaluator at Outlier AI.
          </p>
          <p>
            At home, I built a NAS server to digitize and preserve family media from VHS and 8mm, and I run a Raspberry Pi with Pi-hole for network-wide DNS filtering. See my <Link className="link" to="/homelab">Homelab</Link> for the full write-ups.
          </p>
          <p>
            In my free time, I am a competitive Super Smash Bros. Melee player. I am ranked in the top 10 in Michigan and have competed in tournaments across the country. Some of my personal projects are volunteer work for the Michigan Melee community.
          </p>
          <p>
            You can read my <Link className="link" to="/resume">resume</Link> or reach me at <a className="link" href="mailto:rstretan@umich.edu">rstretan@umich.edu</a>.
          </p>
        </div>
      </div>
      <Footer /> {/* Add Footer */}
    </div>
  );
};

export default About;
