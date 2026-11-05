import ArchitectureDiagram from './ArchitectureDiagram';

const skills = [
  'Linux (Debian)',
  'OpenMediaVault',
  'mdadm / software RAID-6',
  'ext4',
  'SMB/Samba',
  'SMART diagnostics (smartctl)',
  'Hardware troubleshooting and isolation',
  'PC building',
  'SSH/PuTTY',
  'Data deduplication (BLAKE3)',
  'DNS (Pi-hole)',
  'Network configuration',
  'CVE-aware risk decisions',
];

const learning = ['Docker', 'Portainer', 'Jellyfin', 'Frigate', 'OPNsense', 'VLANs', 'Tailscale'];

const HomelabOverview = () => {
  return (
    <div id="ppcontent">
      <span className="papers">About My Homelab</span>
      <p>
        A home server I rebuilt, migrated, and hardened: RAID-6 storage, SMART monitoring, and SMB file sharing, alongside Pi-hole DNS filtering on my home network.
      </p>
      <p>
        The server holds many years of family data consolidated from old PCs, laptops, and shared drives. I run it myself to keep that data safe and to learn by doing. The sidebar has a page for each project, including what went wrong and how I worked through it.
      </p>
      <hr />

      <h3 className="homelab-heading">Architecture</h3>
      <ArchitectureDiagram />

      <h3 className="homelab-heading">What I Learned</h3>
      <ul className="courses">
        <li>The OS is disposable, the array is not.</li>
        <li>RAID is not a backup.</li>
        <li>Verify before any irreversible action.</li>
      </ul>

      <h3 className="homelab-heading">Skills</h3>
      <ul className="homelab-tags">
        {skills.map((skill) => <li key={skill}>{skill}</li>)}
      </ul>
      <p><b>Planned and learning:</b></p>
      <ul className="homelab-tags planned">
        {learning.map((skill) => <li key={skill}>{skill}</li>)}
      </ul>
    </div>
  );
};

export default HomelabOverview;
