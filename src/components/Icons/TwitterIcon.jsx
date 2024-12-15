import React from 'react';
// redux

// icons
import { IoLogoTwitter } from 'react-icons/io5';

// mui
import { IconButton, useTheme } from '@mui/material';
export default function TwitterIcon({ isAdmin }) {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  return (
    <IconButton name="setting-mode" size="medium" color={isAdmin ? 'default' : 'primary'}>
      <IoLogoTwitter size={16} color={isLight ? theme.palette.primary.dark : theme.palette.primary.main} />
    </IconButton>
  );
}
