import MIPRAbout from './MIPRAbout'; 
import miprSummerFall2019 from '../../images/melee/MIPR/2019summerfall.jpg'; // Import image

const MIPRSummerFall2019 = ({ handleImageClick }) => {
  return (
    <div id="ppcontent">
      <span id="6" className="papers">MIPR Summer/Fall 2019</span>
      <br />
      <br />
      <MIPRAbout /> {/* Ensure this component is correctly imported */}
      <ul className="personal">
        <li>
          <a href="https://x.com/MichiganMelee/status/1213305588614086656?s=20" target="_blank" rel="noopener noreferrer">
            Announcement Tweet
          </a>
        </li>
        <li>
          <a href="https://docs.google.com/spreadsheets/d/1S8pwlMFYxy7jXP5Bkq60Xh0tP6vnZsnGnWZpN18rknE/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
            Ballot Results
          </a>
        </li>
      </ul>
      <div className="pr">
        <img id="pr" src={miprSummerFall2019} alt="MIPR Summer/Fall 2019" onClick={() => handleImageClick(miprSummerFall2019)} />
      </div>
      <hr />
    </div>
  );
};

export default MIPRSummerFall2019;
