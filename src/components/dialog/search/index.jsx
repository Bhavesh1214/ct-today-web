import * as React from 'react';
// icons
import { IoSearch } from 'react-icons/io5';
// mui
import { Dialog, Stack, useTheme } from '@mui/material';
import IconButton from '@mui/material/IconButton';
// components
import Search from './search';
import './index.css';

export default function SimpleDialogDemo() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Stack direction="row" gap={1}>
        <IconButton onClick={handleClickOpen} color="primary">
          <IoSearch color={isLight ? theme.palette.primary.dark : theme.palette.primary.main} />
        </IconButton>
      </Stack>
      <Dialog open={open} onClose={handleClose} sx={{ '& .MuiPaper-root': { width: 600 } }}>
        <Search onClose={handleClose} />
      </Dialog>
    </>
  );
}
