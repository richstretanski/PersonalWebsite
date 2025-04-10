import miprWinter2024 from '../../images/melee/MIPR/Winter2024.png'; // Import image

const MIPRWinter2024 = ({ handleImageClick }) => {
  return (
    <div id="ppcontent">
      <span className="papers">MIPR Winter 2024</span>
      <br />
      <br />
      <ul className="personal">
        <li>
          <a
            href="https://x.com/MichiganMelee/status/1787637001002397778"
            target="_blank"
            rel="noopener noreferrer"
          >
            Announcement Tweet
          </a>
        </li>
        <li>
          <a
            href="https://docs.google.com/spreadsheets/d/142svK4Nfn5WU4uQ2RHT4UpAD3qmoS3XWzOesRejgqV8/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ballot Results
          </a>
        </li>
      </ul>
      <div className="pr">
        <img id="pr" src={miprWinter2024} alt="MIPR Winter 2024" onClick={() => handleImageClick(miprWinter2024)} />
      </div>
      <hr />
    </div>
  );
};

export default MIPRWinter2024;