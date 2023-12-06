import { useState } from 'react';
import { Person, VisibilityOff, Visibility, Lock } from '@mui/icons-material';
import { IconButton, Box, Button, CircularProgress } from '@mui/material';
import { useFormik } from 'formik';

import { validationSchema } from './utils/validation';
import { LoginFormDto } from './dtos/loginFormDto';
import CustomTextField from '@/components/CustomTextField';

interface LoginFormProps {
  isLoading?: boolean;
  onSubmit?: (values: LoginFormDto) => void;
}

const LoginForm = ({
  isLoading = false,
  onSubmit = () => {}
}: LoginFormProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema,
    onSubmit: (values) => {
      onSubmit(values);
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <CustomTextField
        textFieldProps={{
          name: 'email',
          label: 'E-mail',
          placeholder: 'Type your e-mail',
          error: Boolean(formik.errors.email),
          helperText: formik.errors.email,
          InputProps: {
            startAdornment: (
              <Person
                sx={{ color: (theme) => theme.palette.grey[500], mr: 1 }}
              />
            )
          },
          onChange: formik.handleChange
        }}
      />
      <CustomTextField
        textFieldProps={{
          label: 'Password',
          name: 'password',
          placeholder: 'Type your password',
          type: showPassword ? 'text' : 'password',
          error: Boolean(formik.errors.password),
          helperText: formik.errors.password,
          InputProps: {
            startAdornment: (
              <Lock sx={{ color: (theme) => theme.palette.grey[500], mr: 1 }} />
            ),
            endAdornment: (
              <IconButton
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            )
          },
          onChange: formik.handleChange
        }}
      />
      <Box display="flex" justifyContent="center" sx={{ mt: 3 }}>
        <Button variant="contained" type="submit">
          Login{' '}
          {isLoading && (
            <CircularProgress size={20} sx={{ color: 'white', ml: 1 }} />
          )}
        </Button>
      </Box>
    </form>
  );
};

export default LoginForm;
