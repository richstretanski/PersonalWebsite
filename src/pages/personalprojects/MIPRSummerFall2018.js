import miprSummerFall2018 from '../../images/melee/MIPR/2018summerfall.jpg'; // Import image

const MIPRSummerFall2018 = ({ handleImageClick }) => {
  return (
    <div id="ppcontent">
      <span id="1" className="papers">MIPR Summer/Fall 2018</span>
      <br />
      <br />
      <div className="pr">
        <img id="pr" src={miprSummerFall2018} alt="MIPR Summer/Fall 2018" onClick={() => handleImageClick(miprSummerFall2018)} />
      </div>
      <hr />
    </div>
  );
};

export default MIPRSummerFall2018;
