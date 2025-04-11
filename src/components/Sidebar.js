import React, { useState } from 'react';
import FolderIcon from '../images/icons/directory_closed-1.png';

const Sidebar = ({ setSelectedContent }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to manage dropdown visibility

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown visibility
  };

  return (
    <aside>
      <nav className="nav3">
        <ul className="treewhole">
        <li>
                <span className="tree" />
                <img src={FolderIcon} alt="Folder Icon" className="folder-icon" />
                  <button className="sidebar-button" onClick={() => setSelectedContent('ThisWebsite')}>
                    This Website
                  </button>
          </li>
          <li>
                <span className="tree" />
                <img src={FolderIcon} alt="Folder Icon" className="folder-icon" />
                  <button className="sidebar-button" onClick={() => setSelectedContent('MIPRDLEProject')}>
                    MIPRDLE
                  </button>
          </li>
          <li>
          <span className="tree" />
          <img src={FolderIcon} alt="Folder Icon" className="folder-icon" />
            <button className="sidebar-button" onClick={toggleDropdown}>
              Michigan Melee Power Rankings
            </button>
            {isDropdownOpen && (
              <ul>
                <li>
                  <span className="tree2" />
                  <img src={FolderIcon} alt="Folder Icon" className="folder-icon" />
                  <button className="sidebar-button" onClick={() => setSelectedContent('MIPRSummer2024')}>
                    Summer 2024
                  </button>
                </li>
                <li>
                  <span className="tree2" />
                  <img src={FolderIcon} alt="Folder Icon" className="folder-icon" />
                  <button className="sidebar-button" onClick={() => setSelectedContent('MIPRWinter2024')}>
                    Winter 2024
                  </button>
                </li>
                <li>
                  <span className="tree2" />
                  <img src={FolderIcon} alt="Folder Icon" className="folder-icon" />
                  <button className="sidebar-button" onClick={() => setSelectedContent('MIPRSummer2023')}>
                    Summer 2023
                  </button>
                </li>
                <li>
                <span className="tree2" />
                <img src={FolderIcon} alt="Folder Icon" className="folder-icon" />
                  <button className="sidebar-button" onClick={() => setSelectedContent('MIPRSummer2022')}>
                    Summer 2022
                  </button>
                </li>
                <li>
                <span className="tree2" />
                <img src={FolderIcon} alt="Folder Icon" className="folder-icon" />
                  <button className="sidebar-button" onClick={() => setSelectedContent('MIPRFall21Winter22')}>
                    Fall '21/Winter '22
                  </button>
                </li>
                <li>
                <span className="tree2" />
                <img src={FolderIcon} alt="Folder Icon" className="folder-icon" />
                  <button className="sidebar-button" onClick={() => setSelectedContent('MIPRWinter2020')}>
                    Winter 2020
                  </button>
                </li>
                <li>
                <span className="tree2" />
                <img src={FolderIcon} alt="Folder Icon" className="folder-icon" />
                  <button className="sidebar-button" onClick={() => setSelectedContent('MIPRSummerFall2019')}>
                    Summer/Fall 2019
                  </button>
                </li>
                <li>
                <span className="tree2" />
                <img src={FolderIcon} alt="Folder Icon" className="folder-icon" />
                  <button className="sidebar-button" onClick={() => setSelectedContent('MIPRWinter2019')}>
                    Winter 2019
                  </button>
                </li>
                <li>
                <span className="tree2" />
                <img src={FolderIcon} alt="Folder Icon" className="folder-icon" />
                  <button className="sidebar-button" onClick={() => setSelectedContent('MIPRFall2018')}>
                    Fall 2018
                  </button>
                </li>
                <li>
                <span className="tree2" />
                <img src={FolderIcon} alt="Folder Icon" className="folder-icon" />
                  <button className="sidebar-button" onClick={() => setSelectedContent('MIPRSummer2018')}>
                    Summer 2018
                  </button>
                </li>
                <li>
                <span className="tree2" />
                <img src={FolderIcon} alt="Folder Icon" className="folder-icon" />
                  <button className="sidebar-button" onClick={() => setSelectedContent('MIPRSpring2018')}>
                    Spring 2018
                  </button>
                </li>
              </ul>
            )}
          </li>
          <li>
          <span className="tree" />
          <img src={FolderIcon} alt="Folder Icon" className="folder-icon" />
            <button className="sidebar-button" onClick={() => setSelectedContent('MIPRHallOfRecords')}>
              MIPR Hall of Records
            </button>
          </li>
          <li>
          <span className="tree" />
          <img src={FolderIcon} alt="Folder Icon" className="folder-icon" />
            <button className="sidebar-button" onClick={() => setSelectedContent('MeleeTournamentStats')}>
              Melee Tournament Stats
            </button>
          </li>
          <li>
          <span className="tree" />
          <img src={FolderIcon} alt="Folder Icon" className="folder-icon" />
            <button className="sidebar-button" onClick={() => setSelectedContent('TheNCAAMBigDance')}>
              The NCAAM Big Dance
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
