import { Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

import { useCustomDispatch } from '@/hooks/reduxHooks';
import { setAccessToken } from '@/redux/slices/user.slice';
import { useLoginMutation } from '@/redux/services/user.service';
import LoginForm from './components/LoginForm';
import {
  StyledBox,
  StyledCard,
  StyledTitle
} from './components/styledComponents';
import { LoginFormDto } from './components/LoginForm/dtos/loginFormDto';

const Login = () => {
  const [login, { isLoading }] = useLoginMutation();

  const dispatch = useCustomDispatch();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (values: LoginFormDto) => {
    try {
      const response = await login(values).unwrap();
      enqueueSnackbar('Bienvenido!', {
        variant: 'success'
      });
      dispatch(setAccessToken(response.accessToken));
      navigate('/');
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
          <StyledTitle variant="h1">Login</StyledTitle>
          <LoginForm isLoading={isLoading} onSubmit={handleSubmit} />
        </StyledCard>
      </StyledBox>
    </Container>
  );
};

export default Login;
