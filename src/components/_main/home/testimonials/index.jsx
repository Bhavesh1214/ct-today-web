'use client';
import React, { useEffect, useState } from 'react';
// Next
// MUI
import { Box, Grid, Typography, Stack, Avatar, useTheme } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { useSelector } from 'react-redux';
// api
import * as api from 'src/services';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';

export default function Testimonials() {
  const theme = useTheme();
  const { themeMode } = useSelector(({ settings }) => settings);
  const isLight = themeMode === 'light';
  const [testimonials, setTestimonials] = useState([]);
  const getReviewsList = async () => {
    const value = await api.getReviews();
    if (value.success) {
      const data = value.data;

      const arr = data.map((item) => ({
        id: item._id,
        avatar:
          process.env.IMAGE_BASE === 'LOCAL' ? `${process.env.IMAGE_URL}${item.avtar_img.url}` : item.avtar_img.url,
        name: item.user,
        jobTitle: item.designation,
        text: item.review,
        rating: item.rating
      }));

      setTestimonials(arr);
    }
  };

  useEffect(() => {
    getReviewsList();
  }, []);

  return (
    <Box sx={{ padding: '50px', textAlign: 'center' }}>
      {/* Section Heading */}
      <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
        Testimonials
      </Typography>
      <Typography variant="subtitle1" sx={{ color: 'gray', marginBottom: '20px' }}>
        See What Our Clients Are Saying
      </Typography>

      {/* Swiper Slider for Testimonials */}
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={false}
        pagination={{ clickable: true }}
        loop
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <Grid item xs={12} md={6}>
              <Box sx={{ marginBottom: '40px' }}>
                {/* Star Rating */}
                <Stack direction="row" justifyContent="center" sx={{ marginBottom: '20px' }}>
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <StarIcon
                      key={index}
                      sx={{ color: isLight ? theme.palette.primary.dark : theme.palette.primary.light }}
                    />
                  ))}
                </Stack>

                {/* Testimonial Text */}
                <Typography
                  variant="body1"
                  sx={{
                    fontStyle: 'italic',
                    maxWidth: '800px',
                    margin: '0 auto',
                    marginBottom: '20px',
                    lineHeight: 1.6
                  }}
                >
                  "{testimonial.text}"
                </Typography>

                {/* Avatar and Name */}
                <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
                  <Avatar
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    sx={{
                      width: 60,
                      height: 60,
                      backgroundColor: isLight ? theme.palette.primary.light : theme.palette.primary.dark,
                      color: isLight ? theme.palette.primary.dark : theme.palette.primary.light
                    }}
                  />
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {testimonial.name}
                  </Typography>
                </Stack>
              </Box>
            </Grid>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
