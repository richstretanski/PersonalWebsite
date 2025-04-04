import React from 'react';
import { background } from '../scripts/script'; // Import the background function

const Footer = () => {
  return (
    <div id="toolbar">
      <div className="toolbar-start-menu">
        <button onClick={background} value="NO" id="start-button" className="start-button">
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
