import React, { useState } from 'react';
import './Footer.css'; // Import styles for the footer and alert

const Footer = () => {
  const [showAlert, setShowAlert] = useState(false); // State to control alert visibility

  const handleStartButtonClick = () => {
    setShowAlert(true); // Show the custom alert
  };

  const handleCloseAlert = () => {
    setShowAlert(false); // Hide the custom alert
  };

  return (
    <div id="toolbar">
      <div className="toolbar-start-menu">
        <button onClick={handleStartButtonClick} className="start-button">
          Start
        </button>
      </div>
      <div className="toolbar-separator"></div>
      <div className="toolbar-right">
        <div className="time">Loading time...</div>
      </div>

      {/* Custom Windows 98-style alert */}
      {showAlert && (
        <div className="win98-alert">
          <div className="win98-alert-header">
            <span className="win98-alert-title">|Pistons 100| |Lakers 87| 4th :00</span>
            <button className="win98-alert-close" onClick={handleCloseAlert}>
              X
            </button>
          </div>
          <div className="win98-alert-body">
            |__&nbsp;&nbsp;o\<br />
            |&nbsp;W&nbsp;&nbsp;&nbsp;&nbsp;\O<br />
            |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|\_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|\<br />
            |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/-\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\O<br />
            |&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br />
            |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/|<br />
            |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;\<br />
          </div>
          <div className="win98-alert-footer">
            <button className="win98-alert-ok" onClick={handleCloseAlert}>
              OK
            </button>
            <button className="win98-alert-ok" onClick={handleCloseAlert}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
