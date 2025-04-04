import React from 'react';
import Head from '../../components/Head'; // Import Head
import Navbar from '../../components/Navbar'; // Import Navbar
import Footer from '../../components/Footer'; // Import Footer

const InfosecProjects = () => {
  return (
    <div id="desktop">
      <Head /> {/* Add Head */}
      <Navbar /> {/* Add Navbar */}
      <div className="academic">
        <div className="mbanner">
          <h2>InfoSec Projects</h2>
        </div>
        <div className="content" style={{ paddingRight: '5%', paddingBottom: '10%' }}>
          <span className="papers">RansomedLSTM: Ransomware Detection using Recurrent Neural Networks</span>
          <p>(with M. Tayabb and J. Carlton)</p>
          <br />
          <p>
            In this paper we have proposed a novel idea for the detection and prevention of ransomwares leveraging the
            power of deep learning. We trained a Long Short Term Memory (LSTM) Neural Network, to detect the ransomware
            infection. We gathered the binaries infected with the real world ransomwares and the programs which perform
            the encryption and decryption legitimately. The trained LSTM is able to classify the ransom-wares
            accurately.
          </p>
          <hr />
          <span className="papers">Cross-Site Request Forgery Attack Project</span>
          <br />
          <br />
          <p>
            In this paper I succeed in a CSRF attack on a user that is part of a social networking site: Elgg, which is
            hosted locally on a VM. The goal is to have our user (Boby) become friends with the user (Alice) when Alice
            clicks on a link to a malicious website. It is assumed that Alice has an active session with Elgg, and that
            she received the URL to the malicious website via email or a posting on Elgg.
          </p>
          <hr />
          <span className="papers">A Code Injection Attack on HTML5 Based Mobile Apps</span>
          <br />
          <br />
          <p>
            In this paper I explain and demonstrate my code injection attack on an HTML5 based music player app on an
            Android device. A code injection attack is a type of attack used to manipulate a program or web server with
            the goal of changing the way it is executed. Code injections require a vulnerability in the program that
            allows the attacker to input code. This attack is similar to a cross-site scripting attack (a type of code
            injection), however it differs in one key area. A cross-site scripting attack exploits a vulnerability in a
            web application, which only has one channel for code injection, through the web server, while my attack on
            an HTML5 based app could use many different channels for code injection even though I will be focusing
            mostly on "Contacts". My attack solely takes place on an Android operating system.
          </p>
          <hr />
          <p>Related Courses:</p>
          <ul className="courses">
            <li>Computer & Network Security (Graduate)</li>
            <li>Security & Privacy in Cloud Computing (Graduate)</li>
            <li>Wireless Network Security & Privacy (Graduate)</li>
          </ul>
        </div>
      </div>
      <Footer /> {/* Add Footer */}
    </div>
  );
};

export default InfosecProjects;
