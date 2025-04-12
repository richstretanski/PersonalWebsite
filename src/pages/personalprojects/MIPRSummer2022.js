import MIPRAbout from './MIPRAbout'; 
const MIPRSummer2022 = () => {
  return (
    <div id="ppcontent">
            <span id="10" className="papers">MIPR Summer 2022</span>
            <br />
            <br />
            <MIPRAbout /> {/* Ensure this component is correctly imported */}
            <ul className="personal">
              <li>
                <a href="https://x.com/MichiganMelee/status/1575962460565417984?s=20" target="_blank" rel="noopener noreferrer">
                  Announcement Video
                </a>
              </li>
              <li>
                <a href="https://docs.google.com/spreadsheets/d/13mTAqqlB1HpSsytNM4SYijYUSaZh1w6YnMtx9zyqxG0/edit#gid=0" target="_blank" rel="noopener noreferrer">
                  Ballot Results
                </a>
              </li>
            </ul>
            <hr />
    </div>
  );
};

export default MIPRSummer2022;
