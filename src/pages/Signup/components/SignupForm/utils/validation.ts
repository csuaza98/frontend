import * as yup from 'yup';

import { SignupFormDto } from '../dtos/signupFormDto';

export const validationSchema: yup.ObjectSchema<SignupFormDto> = yup.object({
  name: yup.string().required('El nombre es requerido'),
  email: yup
    .string()
    .email('El email debe ser un email válido')
    .required('El email es requerido'),
  password: yup
    .string()
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .matches(/^(?=.*[a-z])/, 'La contraseña debe tener al menos una mayúscula')
    .matches(/^(?=.*[A-Z])/, 'La contraseña debe tener al menos una mayúscula')
    .matches(/^(?=.*[0-9])/, 'La contraseña debe tener al menos un número')
    .required('La contraseña es requerida')
});
