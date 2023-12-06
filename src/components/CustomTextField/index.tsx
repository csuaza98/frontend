import {
  TextField,
  TextFieldProps,
  FormControl,
  FormControlProps
} from '@mui/material';

interface CustomTextFieldProps {
  textFieldProps?: TextFieldProps;
  formControlProps?: FormControlProps;
}

const CustomTextField = ({
  textFieldProps = {},
  formControlProps = {}
}: CustomTextFieldProps) => {
  return (
    <FormControl fullWidth sx={{ mb: 2 }} {...formControlProps}>
      <TextField size="small" {...textFieldProps} />
    </FormControl>
  );
};

export default CustomTextField;
