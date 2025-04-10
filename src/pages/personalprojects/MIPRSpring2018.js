import miprSpring2018 from '../../images/melee/MIPR/2018Spring.jpg'; // Import image

const MIPRSpring2018 = ({ handleImageClick }) => {
  return (
    <div id="ppcontent">
      <span id="2" className="papers">MIPR Spring 2018</span>
      <br />
      <br />
      <div className="pr">
        <img id="pr" src={miprSpring2018} alt="MIPR Spring 2018" onClick={() => handleImageClick(miprSpring2018)} />
      </div>
      <hr />
    </div>
  );
};

export default MIPRSpring2018;
