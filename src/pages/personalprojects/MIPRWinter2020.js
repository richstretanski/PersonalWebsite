import miprWinter2020 from '../../images/melee/MIPR/2020-Winter.jpg'; // Import image
import MIPRAbout from './MIPRAbout'; 
const MIPRWinter2020 = ({ handleImageClick }) => {
  return (
    <div id="ppcontent">
      <span id="7" className="papers">MIPR Winter 2020</span>
      <br />
      <br />
      <MIPRAbout /> {/* Ensure this component is correctly imported */}
      <ul className="personal">
        <li>
          <a
            href="https://x.com/MichiganMelee/status/1248737535976714240?s=20"
            target="_blank"
            rel="noopener noreferrer"
          >
            Announcement Tweet
          </a>
        </li>
        <li>
          <a
            href="https://docs.google.com/spreadsheets/d/1wa2ht5ziyS0wLZ-QZNSjdcMFs4p0_HLpykPU5QudTgc/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ballot Results
          </a>
        </li>
      </ul>
      <div className="pr">
        <img id="pr" src={miprWinter2020} alt="MIPR Winter 2020" onClick={() => handleImageClick(miprWinter2020)} />
      </div>
      <hr />
    </div>
  );
};

export default MIPRWinter2020;
