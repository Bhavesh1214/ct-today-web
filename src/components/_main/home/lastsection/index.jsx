import React from 'react';
import { Grid, Card, Typography, Box, alpha, useTheme } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import VerifiedIcon from '@mui/icons-material/Verified';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import CachedIcon from '@mui/icons-material/Cached';
import ReplayIcon from '@mui/icons-material/Replay';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SecurityIcon from '@mui/icons-material/Security';
import DiamondIcon from '@mui/icons-material/Diamond';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

export default function LastSection({}) {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const data = [
    { icon: <CheckCircleOutlineIcon sx={{ fontSize: 40 }} />, text: '100% Certified Jewellery' },
    { icon: <VerifiedIcon sx={{ fontSize: 40 }} />, text: 'BIS Hallmarked Gold Jewellery' },
    { icon: <CurrencyRupeeIcon sx={{ fontSize: 40 }} />, text: 'Transparent Pricing' },
    { icon: <CachedIcon sx={{ fontSize: 40 }} />, text: 'Lifetime Exchange' },
    { icon: <ReplayIcon sx={{ fontSize: 40 }} />, text: 'Lifetime Buyback' },
    { icon: <LocalShippingIcon sx={{ fontSize: 40 }} />, text: '7 Days Return Policy' },
    { icon: <SecurityIcon sx={{ fontSize: 40 }} />, text: '1 Year Free Insurance' },
    { icon: <DiamondIcon sx={{ fontSize: 40 }} />, text: '6 Months Free Product Upgrade' },
    { icon: <LocalOfferIcon sx={{ fontSize: 40 }} />, text: 'Free Shipping' }
  ];

  return (
    <Box
      sx={{
        bgcolor: (theme) => alpha(theme.palette.background.paper, 1),
        padding: '20px',
        overflowX: 'auto',
        borderRadius: '8px',
        marginTop: 5
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'nowrap',
          justifyContent: 'flex-start',
          overflowX: 'auto',
          paddingTop: '10px'
        }}
      >
        {data.map((item, index) => (
          <Grid
            item
            key={index}
            sx={{
              width: '250px',
              borderRight:
                index !== data.length - 1
                  ? `1px solid ${isLight ? theme.palette.primary.dark : theme.palette.primary.main}`
                  : 'none', // Border only on right side except the last item
              paddingTop: '10px',
              paddingLeft: '0 !important',
              '&:last-child': {
                borderRight: 'none' // No border for last item
              }
            }}
          >
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '20px',
                height: '100%',
                justifyContent: 'start',
                textAlign: 'center',
                backgroundColor: 'transparent',
                color: isLight ? theme.palette.primary.dark : theme.palette.primary.main,
                boxShadow: 'none',
                border: 'none !important',
                borderRadius: 0
              }}
            >
              {item.icon}
              <Typography variant="body1" sx={{ marginTop: '10px', fontSize: '18px' }}>
                {item.text}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
