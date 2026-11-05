import piholeDashboard from '../../images/projectimages/pihole.PNG';

const PiHole = ({ handleImageClick }) => {
  return (
    <div id="ppcontent">
      <span className="papers">Pi-hole DNS Filtering</span>
      <p>
        I run Pi-hole on a Raspberry Pi as a DNS filter for my home network, blocking ads and unwanted domains on the devices that use it without installing anything on them. Not every device is covered, since some IoT devices only take their DNS settings from DHCP.
      </p>
      <figure className="homelab-figure">
        <img
          src={piholeDashboard}
          alt="Pi-hole dashboard showing total queries, blocked queries, and domains on block lists"
          onClick={() => handleImageClick(piholeDashboard)}
        />
        <figcaption>Pi-hole dashboard.</figcaption>
      </figure>

      <h3 className="homelab-heading">Fixing IP Stability</h3>
      <p>
        Clients depend on the Pi-hole's address for DNS, so it has to stay put. I resolved an IP stability issue by pinning a fixed allocation on the gateway.
      </p>
      <hr />
    </div>
  );
};

export default PiHole;
