// Layers of the home server, top to bottom. Anything not running today is
// marked planned so the diagram never reads as a claim about finished work.
const layers = [
  {
    name: 'Hardware',
    parts: [
      { label: 'ASRock H97 board' },
      { label: 'Intel Core i5-4460' },
      { label: '16 GB DDR3' },
    ],
  },
  {
    name: 'Storage',
    parts: [
      { label: '256 GB OS SSD' },
      { label: 'RAID-6 array (4x 1 TB)' },
      { label: 'Camera disk', planned: true },
      { label: 'Offline backup disk (3 TB)' },
    ],
  },
  {
    name: 'Host OS: OpenMediaVault 8',
    parts: [
      { label: 'SMB shares' },
      { label: 'Disks and RAID' },
      { label: 'SMART monitoring' },
      { label: 'Email alerts' },
      { label: 'Docker', planned: true },
    ],
  },
  {
    name: 'Containers',
    parts: [
      { label: 'Jellyfin', planned: true },
      { label: 'Frigate', planned: true },
      { label: 'Portainer', planned: true },
      { label: 'Other apps', planned: true },
    ],
  },
];

const ArchitectureDiagram = () => {
  return (
    <figure className="homelab-diagram">
      {layers.map((layer) => (
        <div className="homelab-layer" key={layer.name}>
          <div className="homelab-layer-name">{layer.name}</div>
          <ul className="homelab-parts">
            {layer.parts.map((part) => (
              <li className={part.planned ? 'homelab-part planned' : 'homelab-part'} key={part.label}>
                {part.label}
                {part.planned && <span className="homelab-planned-label"> (planned)</span>}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <figcaption className="homelab-legend">
        <span className="homelab-part">Running now</span>
        <span className="homelab-part planned">Planned, not built</span>
      </figcaption>
    </figure>
  );
};

export default ArchitectureDiagram;
