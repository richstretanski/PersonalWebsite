import React from 'react';
import PropTypes from 'prop-types';
import bannerImageM from '../images/M.png'; // Import M.png

const Banner = ({ title, backgroundImage }) => {
  const bannerStyle = {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderBottom: '2px solid #c0c0c0',
    padding: '2.5%',
    ...(backgroundImage === bannerImageM && {
      backgroundColor: '#00274C',
      backgroundPosition: 'right',
      backgroundSize: '30%',
      gridArea: 'header',
    }),
  };

  return (
    <div style={{ ...bannerStyle, backgroundImage: `url(${backgroundImage})` }}>
      <h2>{title}</h2>
    </div>
  );
};

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string,
};

export default Banner;
