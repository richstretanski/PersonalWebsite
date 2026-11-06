const Roadmap = () => {
  return (
    <div id="ppcontent">
      <span className="papers">Roadmap</span>
      <p>
        <b>Everything on this page is planned and not yet built.</b>
      </p>

      <h3 className="homelab-heading">Backup</h3>
      <p>
        An offsite copy, the missing piece of a 3-2-1 strategy now that the offline backup drive is running.
      </p>

      <h3 className="homelab-heading">Containers</h3>
      <p>Docker through omv-extras, with Portainer as the GUI.</p>

      <h3 className="homelab-heading">Media</h3>
      <p>
        Jellyfin. The transcoding decision is still open: I'll test Intel Quick Sync on the i5-4460 first, with a GTX 1060 as the fallback (Pascal NVENC with HEVC support).
      </p>

      <h3 className="homelab-heading">Cameras</h3>
      <p>Frigate NVR on its own dedicated drive, with cameras on an isolated VLAN.</p>

      <h3 className="homelab-heading">Networking</h3>
      <p>An OPNsense firewall on an N100 mini PC, and Tailscale for remote access.</p>

      <h3 className="homelab-heading">Operations</h3>
      <p>A UPS with graceful shutdown.</p>
      <hr />
    </div>
  );
};

export default Roadmap;
