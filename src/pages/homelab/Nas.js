import omvDashboard from '../../images/projectimages/omv.PNG';

const specs = [
  ['OS', 'OpenMediaVault 8 (Debian 13), headless, managed by web UI and SSH'],
  ['Motherboard', 'ASRock H97 Anniversary'],
  ['CPU', 'Intel Core i5-4460 (4 cores, 3.2 GHz)'],
  ['RAM', '16 GB DDR3 (2x 8 GB, dual channel)'],
  ['Boot drive', '256 GB SATA SSD (replaced a USB flash drive)'],
  ['Data array', '4x 1 TB Hitachi Deskstar drives, Linux software RAID-6 (mdadm), ext4'],
  ['Capacity', 'About 1.8 TiB usable; survives any two drive failures'],
  ['Power', 'EVGA SuperNOVA 650 G3'],
  ['Network', 'Onboard gigabit Ethernet'],
  ['Services', 'SMB file sharing for Windows clients (recycle bin enabled), SMART monitoring'],
];

const Nas = ({ handleImageClick }) => {
  return (
    <div id="ppcontent">
      <span className="papers">OpenMediaVault NAS</span>

      <h3 className="homelab-heading">Purpose</h3>
      <p>
        This server is the central store for many years of family photos, videos, and documents, consolidated from old PCs, laptops, and shared drives.
      </p>
      <p>
        It also holds our family video archive. I digitized 182 8mm tapes, 128 VHS tapes, and 8 VHS-C tapes over the course of a summer, so the family can watch them whenever they like.
      </p>
      <p>
        I built it after retiring two WD My Book Live units. Those devices are end-of-life and have an unpatched remote factory-reset vulnerability (<a className="link" href="https://nvd.nist.gov/vuln/detail/CVE-2021-35941" target="_blank" rel="noopener noreferrer">CVE-2021-35941</a>) that let attackers wipe drives over the internet. Rather than trust another closed appliance, I built my own NAS on open software I can update and inspect. The old My Book Live drives never go back on a network; I read them only offline, over a direct connection.
      </p>
      <p>
        Once the data was in one place, I ran a multi-pass deduplication with Krokiet using BLAKE3 hashing (bit-for-bit matching, so no false positives), with a quarantine step before anything was deleted. That recovered about 150 GB, and with further cleanup the array went from roughly 89% full to about 370 GiB free. When Windows' 260-character path limit got in the way, I did the moves server-side within the same share.
      </p>

      <h3 className="homelab-heading">Specs</h3>
      <table className="homelab-specs">
        <tbody>
          {specs.map(([component, details]) => (
            <tr key={component}>
              <th scope="row">{component}</th>
              <td>{details}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <figure className="homelab-figure">
        <img
          src={omvDashboard}
          alt="OpenMediaVault dashboard showing storage use, disk temperatures, SMART status, and running services"
          onClick={() => handleImageClick(omvDashboard)}
        />
        <figcaption>
          OpenMediaVault dashboard. The yellow SMART status marks the drive with one reallocated sector, which I monitor against its baseline.
        </figcaption>
      </figure>

      <h3 className="homelab-heading">PSU Failure and Resolution</h3>
      <p>
        After sitting powered off during a vacation, the NAS would no longer start. After narrowing it down, I moved the server onto different hardware (ASRock H97 and i5-4460) and installed OpenMediaVault fresh on a new SSD. I kept the RAID drives disconnected during the install, then reconnected them, imported the existing RAID-6 array, and verified it before mounting. The server came back with all data intact.
      </p>
      <p>
        The old power supply turned out to be faulty and was retired, though it may not have been the only cause.
      </p>

      <h3 className="homelab-heading">Lessons Learned</h3>
      <ul className="courses">
        <li><b>The OS is disposable; the data is not.</b> Keeping the array separate from the boot drive turned a dead server into a reinstall instead of a data recovery.</li>
        <li><b>RAID is not a backup.</b> RAID-6 protects against drive failure, not deletion, corruption, or a dead board. An offline backup drive is my next step.</li>
        <li><b>Desktop drives need tuning for RAID.</b> These drives ship with error recovery control (SCT ERC) disabled, so a slow sector read can get a healthy drive kicked out of the array. I set a 7-second timeout on all four and reapply it at every boot.</li>
        <li><b>SMART alone isn't proof of health.</b> I once had an SSD with clean SMART data that had a controller fault visible only in the kernel log (<code>dmesg</code>). I now baseline SMART values (all four array drives passed extended tests) and watch for changes rather than trusting a single "PASSED."</li>
      </ul>
      <hr />
    </div>
  );
};

export default Nas;
