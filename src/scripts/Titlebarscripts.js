import { useNavigate } from 'react-router-dom';

export const useTitlebarFunctions = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    try {
      console.log('handleClose called'); // Debug log to ensure the function is triggered
      navigate('/PersonalWebsite'); // Navigate back to the root page
    } catch (error) {
      console.error('Error navigating to the root page:', error);
    }
  };

  const handleMinimize = () => {
    console.log('Minimize button clicked');
  };

  const handleMaximize = () => {
    console.log('Maximize button clicked');
    const container = document.querySelector('.academic') || document.querySelector('.content');
    if (container) {
      container.style.position = 'fixed';
      container.style.top = '0';
      container.style.left = '0';
      container.style.width = '100vw';
      container.style.height = '100vh';
      container.style.zIndex = '9999';
      container.style.backgroundColor = 'white'; // Optional: Ensure background covers other elements
    } else {
      console.error('No .academic or .content container found to maximize.');
    }
  };

  return {
    handleClose,
    handleMinimize,
    handleMaximize,
  };
};
