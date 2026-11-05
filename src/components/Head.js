import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import '../styles/style.css'; // Import the global style

const Head = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>Rich Stretanski | IT Professional</title>
        <link rel="stylesheet" href="/styles/style.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
    </HelmetProvider>
  );
};

export default Head;
