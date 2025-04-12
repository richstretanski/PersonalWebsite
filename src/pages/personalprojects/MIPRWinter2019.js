import miprWinter2019 from '../../images/melee/MIPR/2019winter.jpg'; // Import image
import MIPRAbout from './MIPRAbout'; 
const MIPRWinter2019 = ({ handleImageClick }) => {
  return (
    <div id="ppcontent">
      <span id="5" className="papers">MIPR Winter 2019</span>
      <br />
      <br />
      <MIPRAbout /> {/* Ensure this component is correctly imported */}
      <ul className="personal">
        <li>
          <a
            href="https://docs.google.com/spreadsheets/d/1rOKFwvAqvp1tTj8GpoEbSDt75uFJA9ewBIweTE2OSD0/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ballot Results
          </a>
        </li>
      </ul>
      <div className="pr">
        <img id="pr" src={miprWinter2019} alt="MIPR Winter 2019" onClick={() => handleImageClick(miprWinter2019)} />
      </div>
      <hr />
    </div>
  );
};

export default MIPRWinter2019;
