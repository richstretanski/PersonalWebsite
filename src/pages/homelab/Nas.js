import omvDashboard from '../../images/projectimages/omv.PNG';

const specs = [
  ['OS', 'OpenMediaVault 8 (Debian 13), headless, managed by web UI and SSH'],
  ['Motherboard', 'ASRock H97 Anniversary'],
  ['CPU', 'Intel Core i5-4460 (4 cores, 3.2 GHz)'],
  ['RAM', '16 GB DDR3 (2x 8 GB, dual channel)'],
  ['Boot drive', '256 GB SATA SSD (replaced a USB flash drive)'],
  ['Data array', '4x 1 TB Hitachi Deskstar drives, Linux software RAID-6 (mdadm), ext4'],
  ['Capacity', 'About 1.8 TiB usable; survives any two drive failures'],
  ['Backup', '3 TB WD Green drive, ext4, kept offline except for a monthly rsync mirror'],
  ['Power', 'EVGA SuperNOVA 650 G3'],
  ['Network', 'Onboard gigabit Ethernet'],
  ['Services', 'SMB file sharing for Windows clients (recycle bin enabled), SMART monitoring, email alerts'],
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
        I built it after retiring two WD My Book Live units. Those devices are end-of-life and have an unpatched remote factory-reset vulnerability (<a className="link" href="https://nvd.nist.gov/vuln/detail/CVE-2021-35941" target="_blank" rel="noopener noreferrer">CVE-2021-35941</a>) that let attackers wipe drives over the internet. Rather than trust another closed appliance, I built my own NAS on open software I can update and inspect. The old My Book Live units never go back on a network; I read them only offline, over a direct connection.
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

      <h3 className="homelab-heading">Offline Backup</h3>
      <p>
        RAID keeps the server running through a drive failure, but it isn't a backup, so I added one. I reused a 3 TB WD Green drive pulled from one of the old My Book Live units, reading it over a direct cable with no gateway before removing it from its case.
      </p>
      <ul className="courses">
        <li><b>Tested before trusting it:</b> a SMART report, a short test, and a long test of about 8 hours, with all bad-sector counters at zero.</li>
        <li><b>Copied and verified:</b> rsync copied about 1.43 TiB and roughly 657,000 files. A second dry run showed 0 created, 0 deleted, and 0 transferred. rsync compares size and timestamps rather than file contents, so that confirms the copy is complete, not that every byte matches.</li>
        <li><b>Kept offline:</b> the drive stays unplugged and unmounted except during a monthly manual backup. The mirror copies deletions, so running it by hand leaves time to notice a mistake before it reaches the backup.</li>
        <li><b>Documented:</b> I wrote up the monthly routine, how to restore files, and how to read the drive on any Linux machine if the NAS dies.</li>
        <li><b>Known gap:</b> there is no offsite copy yet.</li>
      </ul>

      <h3 className="homelab-heading">Monitoring and Alerts</h3>
      <ul className="courses">
        <li><b>Email alerts:</b> the NAS emails me about RAID, SMART, filesystems, processes, and updates. CPU, load, and memory alerts stay off because they trigger on normal backup load.</li>
        <li><b>Scheduled SMART tests:</b> a short test weekly and a long test monthly on each drive, staggered so only one drive is tested at a time. I moved the short tests to noon after realizing a new self-test aborts one already running.</li>
        <li><b>Weekly health report:</b> a small read-only script is set up to email RAID status, free space, key SMART attributes, and the latest test results.</li>
      </ul>

      <h3 className="homelab-heading">Reliability Fixes</h3>
      <ul className="courses">
        <li>Found the NAS clock set to UTC, 5 hours off local time, which shifted every scheduled job. I set the correct timezone and confirmed NTP.</li>
        <li>Gave the NAS a fixed address with a DHCP reservation and verified it across a full power-off.</li>
        <li>Tested the Windows recycle bin with a throwaway file rather than assuming it worked.</li>
        <li>Decided the NAS should stay off after a power failure, which protects drives that are about 9 years old from repeated hard power cycles.</li>
      </ul>

      <h3 className="homelab-heading">Lessons Learned</h3>
      <ul className="courses">
        <li><b>The OS is disposable; the data is not.</b> Keeping the array separate from the boot drive turned a dead server into a reinstall instead of a data recovery.</li>
        <li><b>RAID is not a backup.</b> RAID-6 protects against drive failure, not deletion, corruption, or a dead board. I now keep an offline backup drive, and an offsite copy is my next step.</li>
        <li><b>Desktop drives need tuning for RAID.</b> These drives ship with error recovery control (SCT ERC) disabled, so a slow sector read can get a healthy drive kicked out of the array. The setting resets on power loss, so a boot task reapplies the 7-second timeout on all four, and I verified it survives a full power-off.</li>
        <li><b>SMART alone isn't proof of health.</b> I once had an SSD with clean SMART data that had a controller fault visible only in the kernel log (<code>dmesg</code>). I now baseline SMART values (all four array drives passed extended tests) and watch for changes rather than trusting a single "PASSED."</li>
        <li><b>Verify with real output.</b> Dry runs, test files, and power-off tests have told me more than assumptions have.</li>
        <li><b>Design the risky step so it can't touch the data.</b> Keeping the array disconnected during the install did more to protect it than being careful would have.</li>
      </ul>
      <hr />
    </div>
  );
};

export default Nas;
