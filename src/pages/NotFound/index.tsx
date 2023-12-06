import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/');
  };

  return (
    <div>
      Parece que te has perdido{' '}
      <Button variant="outlined" onClick={handleRedirect}>
        Go to Home
      </Button>
    </div>
  );
};

export default NotFound;
