import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const AcademicSidebar = () => {
  return (
    <aside>
      <nav>
        <ul className="nav3">
          <li><Link to="/academicprojects/infosec-projects">InfoSec Projects</Link></li> {/* Ensure path matches App.js */}
          <li><Link to="/academicprojects/it-projects">Information Technology Projects</Link></li>
          <li><Link to="/academicprojects/digital-marketing-projects">Digital Marketing Projects</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default AcademicSidebar;
