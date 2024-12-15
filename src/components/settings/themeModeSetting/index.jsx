import React from 'react';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { setThemeMode } from 'src/redux/slices/settings';

// icons
import { IoSunny } from 'react-icons/io5';
import { IoMoonOutline } from 'react-icons/io5';
// mui
import { IconButton, useTheme } from '@mui/material';
export default function SettingMode({ isAdmin }) {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const { themeMode } = useSelector(({ settings }) => settings);
  const dispatch = useDispatch();
  return (
    <IconButton
      name="setting-mode"
      onClick={() => dispatch(setThemeMode(themeMode === 'light' ? 'dark' : 'light'))}
      size="medium"
      color={isAdmin ? 'default' : 'primary'}
    >
      {themeMode === 'dark' ? (
        <IoSunny size={16} color={isLight ? theme.palette.primary.dark : theme.palette.primary.main} />
      ) : (
        <IoMoonOutline size={16} color={isLight ? theme.palette.primary.dark : theme.palette.primary.main} />
      )}
    </IconButton>
  );
}
