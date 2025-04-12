import miprSummer2023 from '../../images/melee/MIPR/2023SummerFull.png'; // Import image

const MIPRSummer2023 = ({ handleImageClick }) => {
  return (
    <div id="ppcontent">
      <span id="13" className="papers">MIPR Summer 2023</span>
      <br />
      <br />
      <p>
        I am part of a small team that organizes a larger panel of about 15 people (which I am also in), tasked to
        evaluate the tournament results of all the players in Michigan to come up with an official state-wide
        ranking...
      </p>
      <ul className="personal">
        <li>
          <a href="https://x.com/MichiganMelee/status/1715161077229760950?s=20" target="_blank" rel="noopener noreferrer">
            Announcement Video
          </a>
        </li>
        <li>
          <a
            href="https://docs.google.com/spreadsheets/d/1OlOG5f7Nd1XVDMvNdkwKrvLQXhVoEbjSP3Z2VsEoM8s/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ballot Results
          </a>
        </li>
        <li>
          <a href="https://lookerstudio.google.com/s/mNI367Dq58c" target="_blank" rel="noopener noreferrer">
            Data Visualization (Looker)
          </a>
        </li>
      </ul>
      <div className="pr">
        <img id="pr" src={miprSummer2023} alt="MIPR Summer 2023" onClick={() => handleImageClick(miprSummer2023)} />
      </div>
      <hr />
    </div>
  );
};

export default MIPRSummer2023;
