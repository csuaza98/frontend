import { Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

import { useSignupMutation } from '@/redux/services/user.service';
import SignupForm from './components/SignupForm';
import {
  StyledBox,
  StyledCard,
  StyledTitle
} from './components/styledComponents';
import { SignupFormDto } from './components/SignupForm/dtos/signupFormDto';

const Signup = () => {
  const [signup, { isLoading }] = useSignupMutation();

  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (values: SignupFormDto) => {
    try {
      await signup(values).unwrap();
      enqueueSnackbar('Usuario creado correctamente!', {
        variant: 'success'
      });
      navigate('/login');
    } catch (error) {
      enqueueSnackbar('Hubo un error, por favor intente nuevamente!', {
        variant: 'error'
      });
    }
  };

  return (
    <Container maxWidth="xs">
      <StyledBox>
        <StyledCard>
          <StyledTitle variant="h1">Signup</StyledTitle>
          <SignupForm isLoading={isLoading} onSubmit={handleSubmit} />
        </StyledCard>
      </StyledBox>
    </Container>
  );
};

export default Signup;
