import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import '../styles/style.css'; // Import the global style

const Head = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>Rich Stretanski</title>
        <link rel="stylesheet" href="/styles/style.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/draggabilly/2.2.0/draggabilly.pkgd.min.js" type="text/javascript"></script>
      </Helmet>
    </HelmetProvider>
  );
};

export default Head;
