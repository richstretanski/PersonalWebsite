import React, { useState } from 'react';
import Head from '../components/Head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Titlebar from '../components/Titlebar';
import Sidebar from '../components/Sidebar';
import Banner from '../components/Banner';
import { handleImageClick } from '../scripts/script';
import HomelabOverview from './homelab/HomelabOverview';
import Nas from './homelab/Nas';
import PiHole from './homelab/PiHole';
import Roadmap from './homelab/Roadmap';
import '../styles/homelab.css';

// Sidebar order doubles as the reading order. Adding a page only takes a new
// entry here, since the selected component is looked up from this list.
const homelabPages = [
  { label: 'Overview', contentKey: 'overview', Page: HomelabOverview },
  { label: 'NAS', contentKey: 'nas', Page: Nas },
  { label: 'Pi-hole', contentKey: 'pihole', Page: PiHole },
  { label: 'Roadmap', contentKey: 'roadmap', Page: Roadmap },
];

const Homelab = () => {
  const [selectedContent, setSelectedContent] = useState('overview');
  const [popoutImage, setPopoutImage] = useState(null);
  const { Page } = homelabPages.find((page) => page.contentKey === selectedContent);

  return (
    <div id="desktop">
      <Head />
      <Navbar />
      <div className="academic">
        <Titlebar title="Homelab" />
        <Banner title="Homelab" />
        <div className="content">
          <Sidebar items={homelabPages} setSelectedContent={setSelectedContent} />
          <Page handleImageClick={(imageSrc) => handleImageClick(imageSrc, setPopoutImage, popoutImage)} />
        </div>
      </div>
      {popoutImage && (
        <div className="popout-overlay" onClick={() => setPopoutImage(null)}>
          <img className="popout-image" src={popoutImage} alt="Enlarged view" />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Homelab;
