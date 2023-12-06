import { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Dialog,
  DialogActions,
  DialogTitle
} from '@mui/material';
import { Menu, LightMode, DarkMode } from '@mui/icons-material';

import { useCustomDispatch, useCustomSelector } from '@/hooks/reduxHooks';
import { setAccessToken } from '@/redux/slices/user.slice';
import { setThemeMode } from '@/redux/slices/settings.slice';

export default function ButtonAppBar() {
  const [open, setOpen] = useState(false);

  const { themeMode } = useCustomSelector((state) => state.settings);

  const dispatch = useCustomDispatch();

  const handleLogout = () => {
    dispatch(setAccessToken(null));
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeThemeMode = () => {
    dispatch(setThemeMode(themeMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Users App
          </Typography>
          <IconButton onClick={handleChangeThemeMode}>
            {themeMode === 'light' ? <DarkMode /> : <LightMode />}
          </IconButton>
          <Button color="inherit" onClick={handleOpen}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      {/* Modal para confirmar logout */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Está seguro que quiere salir?</DialogTitle>
        <DialogActions>
          <Button variant="outlined" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="contained" onClick={handleLogout} autoFocus>
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
