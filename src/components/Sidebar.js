import React, { useState } from 'react';
import FolderIcon from '../images/icons/directory_closed-1.png';

const Sidebar = ({ items, setSelectedContent }) => {
  const [openDropdowns, setOpenDropdowns] = useState({}); // Manage multiple dropdowns

  const toggleDropdown = (key) => {
    setOpenDropdowns((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const renderItems = (items, level = 0) => {
    return items.map((item, index) => (
      <li key={index}>
        <span className={level === 0 ? 'tree' : 'tree2'} />
        <img src={FolderIcon} alt="Folder Icon" className="folder-icon" />
        {item.children ? (
          <>
            <button className="sidebar-button" onClick={() => toggleDropdown(index)}>
              {item.label}
            </button>
            {openDropdowns[index] && <ul>{renderItems(item.children, level + 1)}</ul>}
          </>
        ) : (
          <button className="sidebar-button" onClick={() => setSelectedContent(item.contentKey)}>
            {item.label}
          </button>
        )}
      </li>
    ));
  };

  return (
    <aside>
      <nav className="nav3">
        <ul className="treewhole">{renderItems(items)}</ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
