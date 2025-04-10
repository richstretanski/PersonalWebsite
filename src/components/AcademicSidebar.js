import React from 'react';
import FolderIcon from '../images/icons/directory_closed-1.png'; // Import the folder icon image

const AcademicSidebar = ({ setSelectedContent }) => {
  return (
    <aside>
      <nav className="nav3">
        <ul className="treewhole">
          <li>
            <span className="tree"></span>
            <img src={FolderIcon} alt="Folder Icon" className="folder-icon" />
            <button onClick={() => setSelectedContent('InfosecProjects')}>
              InfoSec Projects
            </button>
          </li>
          <li>
            <span className="tree"></span>
            <img src={FolderIcon} alt="Folder Icon" className="folder-icon" />
            <button onClick={() => setSelectedContent('ItProjects')}>
              IT Projects
            </button>
          </li>
          <li>
            <span className="tree"></span>
            <img src={FolderIcon} alt="Folder Icon" className="folder-icon" />
            <button onClick={() => setSelectedContent('DigitalMarketingProjects')}>
              Digital Marketing Projects
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default AcademicSidebar;
