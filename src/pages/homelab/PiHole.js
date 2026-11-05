const PiHole = () => {
  return (
    <div id="ppcontent">
      <span className="papers">Pi-hole DNS Filtering</span>
      <p>
        I run Pi-hole on a Raspberry Pi to filter DNS for the whole home network, so ads and unwanted domains are blocked on every connected device without installing anything on them.
      </p>

      <h3 className="homelab-heading">Fixing IP Stability</h3>
      <p>
        Clients depend on the Pi-hole's address for DNS, so it has to stay put. I resolved an IP stability issue by pinning a fixed allocation on the gateway.
      </p>
      <hr />
    </div>
  );
};

export default PiHole;
