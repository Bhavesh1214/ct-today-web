import React from 'react';
// redux

// icons
import { IoLogoFacebook } from 'react-icons/io5';

// mui
import { IconButton, useTheme } from '@mui/material';
export default function FacebookIcon({ isAdmin }) {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  return (
    <IconButton name="setting-mode" size="medium" color={isAdmin ? 'default' : 'primary'}>
      <IoLogoFacebook size={16} color={isLight ? theme.palette.primary.dark : theme.palette.primary.main} />
    </IconButton>
  );
}
