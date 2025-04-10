import React, { createContext, useState, useContext } from 'react';

const BackgroundContext = createContext();

export const BackgroundProvider = ({ children }) => {
  const [isBackgroundRemoved, setIsBackgroundRemoved] = useState(false);
  const [backgroundStyle, setBackgroundStyle] = useState({
    backgroundImage: "url('../images/backgrounds/wallpaper.jpg')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  });

  const toggleBackground = () => {
    console.log('toggleBackground called'); // Debug log
    setIsBackgroundRemoved((prev) => {
      console.log('Previous state:', prev); // Log the previous state
      const newState = !prev;
      console.log('New state:', newState); // Log the new state
      setBackgroundStyle(
        newState
          ? { backgroundImage: 'none' }
          : {
              backgroundImage: "url('../images/backgrounds/wallpaper.jpg')",
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }
      );
      return newState;
    });
  };

  return (
    <BackgroundContext.Provider value={{ isBackgroundRemoved, toggleBackground, backgroundStyle }}>
      {children}
    </BackgroundContext.Provider>
  );
};

export const useBackground = () => useContext(BackgroundContext);
