import React, { useEffect } from 'react';
import { useBackground } from './context/BackgroundContext'; // Import useBackground

const AppContent = () => {
  const { backgroundStyle } = useBackground(); // Get the global background style

  console.log('AppContent component rendered'); // Debug log

  useEffect(() => {
    const desktopElement = document.getElementById('desktop');
    if (!desktopElement) {
      console.error('Error: #desktop element not found in the DOM'); // Debug log
    } else {
      console.log('Success: #desktop element found in the DOM'); // Debug log
    }
  }, []); // Run once when the component mounts

  console.log('backgroundStyle:', backgroundStyle); // Debug log

  return (
    <div
      id="desktop"
      style={{
        ...backgroundStyle, // Apply the dynamic background style
      }}
    >
      {/* ...existing code... */}
    </div>
  );
};

export default AppContent;