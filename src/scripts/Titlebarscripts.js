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

  };

  return {
    handleClose,
    handleMinimize,
    handleMaximize,
  };
};
