import React from 'react';
import { useBackground } from '../context/BackgroundContext'; // Import useBackground

const Footer = () => {
  const { toggleBackground } = useBackground(); // Use the global toggleBackground function

  const handleToggleBackground = () => {
    console.log('Start button clicked'); // Debug log
    toggleBackground(); // Call the toggleBackground function
  };

  return (
    <div id="toolbar">
      <div className="toolbar-start-menu">
        <button onClick={handleToggleBackground} className="start-button">
          Start
        </button>
      </div>
      <div className="toolbar-separator"></div>
      <div className="toolbar-right">
        <div className="time">
          <span className="hour"></span>:<span className="minutes"></span> AM
        </div>
      </div>
    </div>
  );
};

export default Footer;
