import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Sidebar = () => {
  return (
    <aside>
      <nav>
        <div className="sidebar-title">Table of Contents</div>
        <ul className="nav3">
          <li><Link to="/personal-projects/mipr-hall-of-records">MIPR Hall of Records</Link></li>
          <li><Link to="/personal-projects/mipr-summer-2023">MIPR Summer 2023</Link></li>
          <li><Link to="/personal-projects/melee-tournament-stats">Melee Tournament Stats</Link></li>
          <li><Link to="/personal-projects/mipr-winter-2023">MIPR Winter 2023</Link></li>
          <li><Link to="/personal-projects/mipr-summer-2022">MIPR Summer 2022</Link></li>
          <li><Link to="/personal-projects/the-ncaam-big-dance">The NCAAM Big Dance</Link></li>
          <li><Link to="/personal-projects/mipr-fall-21-winter-22">MIPR Fall '21/Winter '22</Link></li>
          <li><Link to="/personal-projects/mipr-winter-2020">MIPR Winter 2020</Link></li>
          <li><Link to="/personal-projects/mipr-summer-fall-2019">MIPR Summer/Fall 2019</Link></li>
          <li><Link to="/personal-projects/mipr-winter-2019">MIPR Winter 2019</Link></li>
          <li><Link to="/personal-projects/mipr-fall-2018">MIPR Fall 2018</Link></li>
          <li><Link to="/personal-projects/mipr-summer-2018">MIPR Summer 2018</Link></li>
          <li><Link to="/personal-projects/mipr-spring-2018">MIPR Spring 2018</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
