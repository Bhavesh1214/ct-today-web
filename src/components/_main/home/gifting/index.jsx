import React, { useEffect, useRef } from 'react';
import { Stack, Grid, Card, CardMedia, Typography, Box, IconButton } from '@mui/material';
import { useQuery } from 'react-query';
import * as api from 'src/services';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';

export default function Gifting() {
  const { data } = useQuery(['gifting'], () => api.getGifting());
  const baseUrl = '/products';

  // Refs for navigation buttons
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  // Effect to link navigation buttons after component mounts
  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      const swiper = swiperRef.current.swiper;
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [data]);
  return (
    <Stack spacing={2} sx={{ padding: 4, marginTop: 5 }}>
      {/* Navigation for Categories */}
      <Stack direction="row" spacing={4} justifyContent="center" alignItems="center">
        <Typography variant="h3">Gifting Made Easysxx</Typography>
      </Stack>

      {/* Offers Swiper Carousel */}
      <Grid container alignItems="center" spacing={2}>
        {/* Prev Navigator Outside Slider */}
        <Grid item xs={1}>
          <IconButton
            ref={prevRef} // Assign reference
            sx={{ backgroundColor: 'rgba(145, 158, 171, 0.08)' }}
          >
            <WestIcon />
          </IconButton>
        </Grid>

        {/* Swiper Slider */}
        <Grid item xs={10}>
          <Swiper
            ref={swiperRef} // Ref for Swiper instance
            modules={[Navigation]} // Enable navigation
            spaceBetween={30} // Space between slides
            slidesPerView={3} // Show 3 slides at once
            loop={true} // Enable infinite loop
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current
            }}
            onBeforeInit={(swiper) => {
              swiper.navigation.nextEl = nextRef.current;
              swiper.navigation.prevEl = prevRef.current;
            }}
          >
            {data?.data.map((item) => (
              <SwiperSlide key={item._id}>
                <Grid
                  component={Link}
                  href={{
                    pathname: `${baseUrl}`,
                    query: {
                      gifting: item?.slug
                    }
                  }}
                >
                  <Card sx={{ maxWidth: 345, position: 'relative', borderRadius: '8px' }}>
                    {/* Image Section with Overlay */}
                    <Box sx={{ position: 'relative', height: 'auto' }}>
                      <CardMedia
                        component="img"
                        height="300px"
                        image={process.env.IMAGE_URL + item.banner_img?.url}
                        alt={item.name}
                      />
                      {/* Overlay Panel */}
                      <div
                        style={{
                          position: 'absolute',
                          top: '0px',
                          left: 0,
                          width: '100%',
                          height: '100%',
                          backgroundColor: 'rgba(0, 0, 0, 0.65)',
                          zIndex: 0
                        }}
                      />
                      {/* Overlay Text */}
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          alignItems: 'center',
                          color: 'white'
                        }}
                      >
                        <Typography variant="h4" sx={{ fontWeight: '400' }}>
                          {item.giftingFor}
                        </Typography>
                        <Typography variant="body1" textAlign="center" paddingLeft={3} paddingRight={3}>
                          {item.description}
                        </Typography>
                        <Typography variant="subtitle1" sx={{ marginTop: 2 }}>
                          EXPLORE
                        </Typography>
                      </Box>
                    </Box>
                  </Card>
                </Grid>
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>

        {/* Next Navigator Outside Slider */}
        <Grid item xs={1}>
          <IconButton
            ref={nextRef} // Assign reference
            sx={{ backgroundColor: 'rgba(145, 158, 171, 0.08)' }}
          >
            <EastIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Stack>
  );
}
