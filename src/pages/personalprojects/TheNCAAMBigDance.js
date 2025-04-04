import React from 'react';
import Head from '../../components/Head'; // Import Head
import Navbar from '../../components/Navbar'; // Import Navbar
import Footer from '../../components/Footer'; // Import Footer
import Sidebar from '../../components/Sidebar'; // Import Sidebar

const TheNCAAMBigDance = () => {
  return (
    <div id="desktop">
      <Head /> {/* Add Head */}
      <Navbar /> {/* Add Navbar */}
      <div className="academic">
        <div className="pbanner">
          <h2>The NCAAM Big Dance</h2>
        </div>
        <div className="content">
          <Sidebar /> {/* Use Sidebar component */}
          <div className="main-content" style={{ paddingRight: '5%', paddingBottom: '10%' }}>
            <span id="9" className="papers">
              <a href="https://medium.com/@rich.text/the-ncaam-big-dance-why-you-should-have-two-11-seed-upsets-in-your-bracket-b48354ae7dd7" target="_blank">
                The NCAAM Big Dance: Why You Should Have Two 11 Seed Upsets in Your Bracket
              </a>
            </span>
            <br />
            <br />
            <p>
              You may have heard that having a 5–12 seed upset is a staple of filling out your tournament bracket. As it
              is, the 12 seed has upset the 5 seed ~35% of the time historically, making it likely for at least one upset
              to happen every year. Fans have fun speculating which 5 seed will fall to a 12 seed every time the bracket
              gets released. The matchup that gets overlooked as a result, is the 6–11 matchup.
            </p>
            <hr />
          </div>
        </div>
      </div>
      <Footer /> {/* Add Footer */}
    </div>
  );
};

export default TheNCAAMBigDance;
