import React from 'react';
import { Stack, Grid, IconButton, useMediaQuery } from '@mui/material';
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import { useQuery } from 'react-query';
import * as api from 'src/services';
import { ProductCard } from 'src/components/cards';

export default function Offers() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const isMobile = useMediaQuery('(max-width:900px)');
  const { data, isLoading } = useQuery(['offere-products'], () => api.offereProducts());
  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? data?.data.length - 1 : prevSlide - 1));
  };
  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide === data?.data.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <Stack spacing={2} sx={{ padding: 4, marginTop: 5 }}>
      {/* Offers Carousel */}
      <Grid container alignItems="center" spacing={2}>
        {/* Left Arrow */}
        {data?.data?.length > 0 && (
          <Grid item xs={1}>
            <IconButton onClick={handlePrev} sx={{ backgroundColor: 'rgba(145, 158, 171, 0.08)' }}>
              <WestIcon />
            </IconButton>
          </Grid>
        )}

        {/* Product Cards */}
        <Grid item xs={10}>
          <Grid container spacing={2} justifyContent="center">
            {data?.data?.slice(currentSlide, currentSlide + 3).map((product) => {
              return (
                <Grid item xs={12} sm={4} key={product._id}>
                  <ProductCard product={product} loading={isLoading} isMobile={isMobile} />
                </Grid>
              );
            })}
          </Grid>
        </Grid>

        {/* Right Arrow */}
        {data?.data?.length > 0 && (
          <Grid item xs={1}>
            <IconButton onClick={handleNext} sx={{ backgroundColor: 'rgba(145, 158, 171, 0.08)' }}>
              <EastIcon />
            </IconButton>
          </Grid>
        )}
      </Grid>
    </Stack>
  );
}




