import React from 'react';
import { Helmet } from 'react-helmet';
import favicon from '../images/gamertag.png'; // Import the favicon
import '../styles/style.css'; // Import the global style

const Head = () => {
  return (
    <Helmet>
      <meta charSet="UTF-8" />
      <title>Rich Stretanski</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css" />
      <link rel="stylesheet" href="https://unpkg.com/98.css" />
      <link rel="stylesheet" href="/styles/style.css" /> {/* Add styles/style.css */}
      <link rel="icon" type="image/x-icon" href={favicon} /> {/* Use imported favicon */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* Ensure the script tag has valid attributes */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/draggabilly/2.2.0/draggabilly.pkgd.min.js" type="text/javascript"></script>
    </Helmet>
  );
};

export default Head;
