import { useNavigate } from 'react-router-dom';

export const useTitlebarFunctions = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    // '/' now shows the About window, so closing goes to the empty desktop instead
    navigate('/desktop');
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
