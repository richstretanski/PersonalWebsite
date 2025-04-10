const ThisWebsite = () => {
  return (
    <div id="ppcontent">
      <span id="9" className="papers">This Website</span>
      <br />
      <br />
      <p>
        So, this website is basically my personal portfolio where I can show off all the projects I've worked on. The purpose is so that anyone can explore what I've been up to, see my work, and get a sense of my interests in replacement of social media. It's hosted on <b>GitHub Pages</b>, which makes it super easy to update and deploy.
      </p>
      <br />
      <p><b>Functionality</b></p>
      <ul className="courses">
        <li><b>Dynamic Content:</b> The site updates dynamically based on what you click. For example, if you pick a project from the sidebar, it loads that specific content without refreshing the whole page.</li>
        <li><b>Navigation:</b> I went for a retro Windows 98 vibe with desktop-style navigation. There are icons for different sections like Academic Projects, Personal Projects, and Resume page. The sidebars make it easy to dive into specific topics or projects.</li>
        <li><b>Embedded Tools:</b> I’ve integrated stuff like Google Looker Studio for data visualizations, embedded web apps, and even a Google Form for requesting my resume. It’s all right there on the site.</li>
        <li><b>Popout Image Viewer:</b> If you click on an image, it pops out in a larger view. It’s a small touch, but it makes the site feel more interactive.</li>
        <li><b>Responsive Design:</b> The site works on different screen sizes, so whether you're on a phone (sort of) or a desktop, it still looks okay.</li>
      </ul>
      <br />
      <p><b>Features:</b></p>
      <ul className="courses">
        <li><b>Project Categories:</b>
          <ul>
            <li><b>Academic Projects:</b> These are summaries of the work I did during my studies, including team projects and individual research.</li>
            <li><b>Personal Projects:</b> This section is for the hobby stuff, like MIPRDLE (a daily guessing game) and Melee Tournament Stats.</li>
            <li><b>Resume:</b> There’s a Google Form where people can request my resume if they’re interested.</li>
          </ul>
        </li>
        <li><b>Retro Design:</b> The whole site has this Windows 98-inspired look, thanks to the <b>98.css</b> library. It’s nostalgic and fun to work with.</li>
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
            <li>React Helmet for managing the document head and metadata.</li>
          </ul>
        </li>
        <li><b>Styling:</b>
          <ul>
            <li><b>98.css:</b> For the retro Windows 98 look.</li>
            <li>Custom CSS for additional tweaks and layout adjustments.</li>
          </ul>
        </li>
        <li><b>Embedded Tools:</b>
          <ul>
            <li>Google Looker Studio for data visualizations.</li>
            <li>Google Forms for the resume request feature.</li>
            <li>GitHub Pages for hosting the site.</li>
          </ul>
        </li>
        <li><b>Other Libraries:</b>
          <ul>
            <li>Draggabilly.js for draggable components.</li>
            <li>Web Vitals for monitoring performance.</li>
          </ul>
        </li>
      </ul>
      <br />
      <p><b>Future Work:</b></p>
      <ul className="courses">
        <li>Improve the mobile experience by optimizing the layout for smaller screens.</li>
        <li> Titlebar Minimize and Maximize functionality.</li>
        <li>Draggable windows</li>
        <li>Add more animations and transitions to make the site feel even more interactive.</li>
        <li>Add some of the retro games from <a href="https://98.js.org/"target="_blank" rel="noopener noreferrer">98.js.org</a> </li>
      </ul>
      <br />
      <hr />
    </div>
  );
};

export default ThisWebsite;