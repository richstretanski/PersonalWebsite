import React from 'react';
import { Link } from 'react-router-dom';
import computerIcon from '../images/icons/computer-4.png';
import joystickIcon from '../images/icons/joystick-5.png';
import notepadIcon from '../images/icons/notepad_file-2.png';
import recycleBinIcon from '../images/icons/recycle_bin_full-4.png';
import fd from '../images/icons/FD.png';
import dl from '../images/icons/DL.png';

const Navbar = () => {
  const handleClick = (e) => {
    console.log('Link clicked:', e.target); // Debug log
  };

  return (
    <div className="nav-container">
      <div className="nav">
        <ul>
          <li className="nav">
            <Link className="nav" to="/about" onClick={handleClick}>
              <img className="nav" src={recycleBinIcon} alt="About" />
              <br />About
            </Link>
          </li>
          <li className="nav">
            <Link className="nav" to="/academic-projects">
              <img className="nav" src={computerIcon} alt="Academic Projects" />
              <br />Academic Projects
            </Link>
          </li>
          <li className="nav">
            <Link className="nav" to="/personal-projects">
              <img className="nav" src={joystickIcon} alt="Personal Projects" />
              <br />Personal Projects
            </Link>
          </li>
          <li className="nav">
            <Link className="nav" to="/resume">
              <img className="nav" src={notepadIcon} alt="Resume" />
              <br />Resume
            </Link>
          </li>
        </ul>
      </div>
      <div className="nav-secondary">
        <ul>
          <li className="nav">
            <Link className="nav" to="/tourneystats">
              <img className="navFD" src={fd} alt="TourneyStats" />
              <br />TourneyStats
            </Link>
          </li>
          <li className="nav">
            <Link className="nav" to="/miprdle">
              <img className="navFD" src={dl} alt="MIPRDLE" />
              <br />MIPRDLE
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;