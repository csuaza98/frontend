import { ReactNode } from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

import { useCustomSelector } from '@/hooks/reduxHooks';

interface ThemeConfigProps {
  children: ReactNode;
}

const ThemeConfig = ({ children }: ThemeConfigProps) => {
  const themeMode = useCustomSelector((state) => state.settings.themeMode);

  const theme = createTheme({
    palette: {
      primary: {
        light: '#A294FD',
        main: '#614EFA',
        dark: '#3327B3'
      },
      secondary: {
        light: '#FEB19A',
        main: '#FE6257',
        dark: '#B62B39'
      },
      background: {
        default: themeMode === 'light' ? '#F5F5F5' : '#121212'
      },
      mode: themeMode
    },
    typography: {
      fontFamily: 'Lexend, sans-serif'
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '500px'
          },
          sizeMedium: {
            height: 40
          }
        }
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: '500px'
          }
        }
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeConfig;
