import miprFall2018 from '../../images/melee/MIPR/2018fall.jpg'; // Import image
import MIPRAbout from './MIPRAbout'; 

const MIPRFall2018 = ({ handleImageClick }) => {
  return (
    <div id="ppcontent">
      <span id="4" className="papers">MIPR Fall 2018</span>
      <br />
      <br />\
      <MIPRAbout /> {/* Ensure this component is correctly imported */}
      <div className="pr">
        <img id="pr" src={miprFall2018} alt="MIPR Fall 2018" onClick={() => handleImageClick(miprFall2018)} />
      </div>
      <hr />
    </div>
  );
};

export default MIPRFall2018;
