import React from 'react';
import { useTitlebarFunctions } from '../scripts/Titlebarscripts'; // Import Titlebar functions
import '../styles/titlebar.css'; // Import a CSS file for styling

const Titlebar = ({ title }) => {
  const { handleClose, handleMinimize, handleMaximize } = useTitlebarFunctions(); // Destructure functions

  return (
    <div className="titlebar">
      <div className="titlebar-left">
        <span className="titlebar-text">{title}</span>
      </div>
      <div className="titlebar-buttons">
        <button className="titlebar-button custom-titlebar-button" title="Minimize" onClick={() => handleMinimize()}>
          _
        </button>
        <button className="titlebar-button custom-titlebar-button" title="Maximize" onClick={() => handleMaximize()}>
          □
        </button>
        <button className="titlebar-button custom-titlebar-button" title="Close" onClick={() => handleClose()}>
          X
        </button>
      </div>
    </div>
  );
};

export default Titlebar;