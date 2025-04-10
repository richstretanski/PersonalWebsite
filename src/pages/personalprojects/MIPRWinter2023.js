import miprWinter2023 from '../../images/melee/MIPR/2023Winter.jpg'; // Import image

const MIPRWinter2023 = ({ handleImageClick }) => {
  return (
    <div id="ppcontent">
      <span id="11" className="papers">MIPR Winter 2023</span>
      <br />
      <br />
      <ul className="personal">
        <li>
          <a
            href="https://x.com/MichiganMelee/status/1648876264961220608?s=20"
            target="_blank"
            rel="noopener noreferrer"
          >
            Announcement Tweet
          </a>
        </li>
        <li>
          <a
            href="https://lookerstudio.google.com/s/vd0Lx6s775o"
            target="_blank"
            rel="noopener noreferrer"
          >
            Data Visualization (Looker)
          </a>
        </li>
      </ul>
      <div className="pr">
        <img id="pr" src={miprWinter2023} alt="MIPR Winter 2023" onClick={() => handleImageClick(miprWinter2023)} />
      </div>
      <hr />
    </div>
  );
};

export default MIPRWinter2023;
