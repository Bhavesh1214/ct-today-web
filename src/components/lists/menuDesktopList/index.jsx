import React from 'react';
import NextLink from 'next/link';
import PropTypes from 'prop-types';
// components
import RootStyled from './styled';
// material
import { Box, ListSubheader } from '@mui/material';

IconBullet.propTypes = {
  type: PropTypes.string.isRequired
};
function IconBullet({ type = 'item' }) {
  return (
    <Box className="icon-bullet-main">
      <Box component="span" className={`icon-bullet-inner ${type !== 'item' && 'active'}`} />
    </Box>
  );
}
MenuDesktopList.propTypes = {
  parent: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired
};
export default function MenuDesktopList({ ...props }) {
  const { parent, onClose } = props;
  console.log('parent', parent);
  console.log('Props', props);

  return (
    <RootStyled disablePadding>
      <>
        <ListSubheader
          disableSticky
          disableGutters
          className="list-subheader"
          onClick={() => {
            onClose();
          }}
          component={NextLink}
          href={'/products/' + parent?.slug}
          sx={{width: '200px'}}
        >
          {parent?.name}
        </ListSubheader>
      </>
    </RootStyled>
  );
}
