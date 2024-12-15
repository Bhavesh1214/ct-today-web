import PropTypes from 'prop-types';
import { useRouter } from 'next-nprogress-bar';
import Image from 'next/image';
import logoImage from '../../public/images/logo.png';
import logoLigntImage from '../../public/images/logo-light.png';
// mui
import { Box } from '@mui/material';
import { useTheme } from '@emotion/react';

export const Logo = ({ logo, width }) => {
  const { push } = useRouter();
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  return (
    <Box
      sx={{
        cursor: 'pointer',

        img: {
          width: width ? width : 100,
          height: 'auto'
        }
      }}
      onClick={() => push('/')}
    >
      {logo ? (
        <Image
          width={100}
          height={100}
          draggable="false"
          src={isLight ? logoLigntImage : logo}
          alt="banner-1"
          sizes="100px"
          objectFit="cover"
        />
      ) : (
        <Image
          draggable="false"
          src={isLight ? logoLigntImage : logoImage}
          alt="banner-1"
          static
          sizes="100px"
          objectFit="cover"
        />
      )}
    </Box>
  );
};

Logo.propTypes = {
  sx: PropTypes.object,
  isMobile: PropTypes.bool
};
export default Logo;
