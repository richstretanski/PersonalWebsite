import miprFall2021Winter2022 from '../../images/melee/MIPR/2021Fall2022Winter.jpg'; // Import image
import MIPRAbout from './MIPRAbout'; // Ensure the correct import path

const MIPRFall21Winter22 = ({ handleImageClick }) => {
  return (
    <div id="ppcontent">
      <span id="8" className="papers">MIPR Fall '21/Winter '22</span>
      <br />
      <br />
      <MIPRAbout /> {/* Ensure this component is correctly imported */}
      <ul className="personal">
        <li>
          <a
            href="https://x.com/MichiganMelee/status/1501756586666119171?s=20"
            target="_blank"
            rel="noopener noreferrer"
          >
            Announcement Tweet
          </a>
        </li>
        <li>
          <a
            href="https://docs.google.com/spreadsheets/d/1NftVQJO3Hdp5aZl3vsIU8Yuy7nP2c9VZ33-qjUygZlA"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ballot Results
          </a>
        </li>
      </ul>
      <div className="pr">
        <img id="pr" src={miprFall2021Winter2022} alt="MIPR Fall '21/Winter '22" onClick={() => handleImageClick(miprFall2021Winter2022)} />
      </div>
      <hr />
    </div>
  );
};

export default MIPRFall21Winter22;
