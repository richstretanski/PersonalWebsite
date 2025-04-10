import miprSummer2018 from '../../images/melee/MIPR/2018summer.jpg'; // Import image

const MIPRSummer2018 = ({ handleImageClick }) => {
  return (
    <div id="ppcontent">
      <span id="3" className="papers">MIPR Summer 2018</span>
      <br />
      <br />
      <div className="pr">
        <img id="pr" src={miprSummer2018} alt="MIPR Summer 2018" onClick={() => handleImageClick(miprSummer2018)} />
      </div>
      <hr />
    </div>
  );
};

export default MIPRSummer2018;
