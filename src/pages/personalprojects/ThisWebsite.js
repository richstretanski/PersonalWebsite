const ThisWebsite = () => {
  return (
    <div id="ppcontent">
      <span id="9" className="papers">This Website</span>
      <br />
      <br />
      <p>
        This website is my personal portfolio, where visitors can explore my projects, see my work, and get a sense of my interests. It's built with React and hosted on <b>GitHub Pages</b>.
      </p>
      <br />
      <p><b>Functionality</b></p>
      <ul className="courses">
        <li><b>Dynamic Content:</b> The site updates dynamically based on what you click. For example, if you pick a project from the sidebar, it loads that specific content without refreshing the whole page.</li>
        <li><b>Navigation:</b> I went for a retro Windows 98 vibe with desktop-style navigation. There are icons for different sections like Academic Projects, Personal Projects, Homelab, and Resume. The sidebars make it easy to dive into specific topics or projects.</li>
        <li><b>Embedded Tools:</b> I’ve integrated Google Looker Studio for data visualizations, embedded web apps, and a Google Drive preview of my resume.</li>
        <li><b>Popout Image Viewer:</b> If you click on an image, it pops out in a larger view. It’s a small touch, but it makes the site feel more interactive.</li>
        <li><b>Responsive Design:</b> The site adapts to different screen sizes. On phones, windows open fullscreen, and closing one returns you to the desktop icons.</li>
      </ul>
      <br />
      <p><b>Features:</b></p>
      <ul className="courses">
        <li><b>Project Categories:</b>
          <ul>
            <li><b>Academic Projects:</b> These are summaries of the work I did during my studies, including team projects and individual research.</li>
            <li><b>Personal Projects:</b> This section is for the hobby stuff, like MIPRDLE (a daily guessing game) and Melee Tournament Stats.</li>
            <li><b>Homelab:</b> Write-ups of my home server and network projects.</li>
            <li><b>Resume:</b> My resume is embedded right on the page, so you can read it without leaving the site.</li>
          </ul>
        </li>
        <li><b>Retro Design:</b> The whole site has a Windows 98-inspired look, built with custom CSS.</li>
        <li><b>Interactive Components:</b> I added titlebars with minimize (future work), maximize (future work), and close buttons, plus dropdown menus and a file-tree-style navigation system for organizing projects.</li>
        <li><b>Hosting:</b> The site is hosted on <b>GitHub Pages.</b></li>
      </ul>
      <br />
      <p><b>Tech Stack:</b></p>
      <ul className="courses">
        <li><b>Frontend:</b>
          <ul>
            <li>React.js for building the interface and handling dynamic content.</li>
            <li>React Router for navigation between pages.</li>
            <li>React Helmet Async for managing the document head and metadata.</li>
          </ul>
        </li>
        <li><b>Styling:</b>
          <ul>
            <li>Custom CSS for the retro Windows 98 look and layout.</li>
          </ul>
        </li>
        <li><b>Embedded Tools:</b>
          <ul>
            <li>Google Looker Studio for data visualizations.</li>
            <li>Google Drive for the embedded resume.</li>
            <li>GitHub Pages for hosting the site.</li>
          </ul>
        </li>
      </ul>
      <br />
      <p><b>Future Work:</b></p>
      <ul className="courses">
        <li>Titlebar Minimize and Maximize functionality.</li>
        <li>Draggable windows using Draggabilly.js.</li>
        <li>Add more animations and transitions to make the site feel even more interactive.</li>
        <li>Add some of the retro games from <a href="https://98.js.org/"target="_blank" rel="noopener noreferrer">98.js.org</a> </li>
      </ul>
      <br />
      <hr />
    </div>
  );
};

export default ThisWebsite;