'use client';
import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import BlurImage from 'src/components/blurImage';
import * as api from 'src/services';

export default function Banner({ type }) {
  const [bannerImg, setBannerImg] = useState('');
  const [blurDataURL, setBlurDataURL] = useState('');

  useEffect(() => {
    getAllAdvertiseByAdmin();
  }, [type]);

  const getAllAdvertiseByAdmin = async () => {
    try {
      const response = await api.getAdvertiseImages();

      if (response?.data && response.data.length > 0) {
        const advertiseData = response.data[0];

        let imgURL = '';
        let blurURL = '';

        const numericType = Number(type);

        switch (numericType) {
          case 1:
            imgURL =
              process.env.IMAGE_BASE === 'LOCAL'
                ? `${process.env.IMAGE_URL}${advertiseData.advertise_img.url}`
                : advertiseData.advertise_img.url;
            blurURL = advertiseData.advertise_img.blurDataURL;
            break;
          case 2:
            imgURL =
              process.env.IMAGE_BASE === 'LOCAL'
                ? `${process.env.IMAGE_URL}${advertiseData.advertise2_img.url}`
                : advertiseData.advertise2_img.url;
            blurURL = advertiseData.advertise2_img.blurDataURL;
            break;
          case 3:
            imgURL =
              process.env.IMAGE_BASE === 'LOCAL'
                ? `${process.env.IMAGE_URL}${advertiseData.advertise3_img.url}`
                : advertiseData.advertise3_img.url;
            blurURL = advertiseData.advertise3_img.blurDataURL;
            break;
          case 4:
            imgURL =
              process.env.IMAGE_BASE === 'LOCAL'
                ? `${process.env.IMAGE_URL}${advertiseData.advertise4_img.url}`
                : advertiseData.advertise4_img.url;
            blurURL = advertiseData.advertise4_img.blurDataURL;
            break;
          case 5:
            imgURL =
              process.env.IMAGE_BASE === 'LOCAL'
                ? `${process.env.IMAGE_URL}${advertiseData.advertise5_img.url}`
                : advertiseData.advertise5_img.url;
            blurURL = advertiseData.advertise5_img.blurDataURL;
            break;
          default:
            imgURL = '';
            blurURL = '';
            break;
        }

        setBannerImg(imgURL);
        setBlurDataURL(blurURL);
      } else {
        console.warn('No data received in API response.');
      }
    } catch (error) {
      console.error('Error fetching advertise images:', error);
    }
  };

  return (
    <>
      {bannerImg && blurDataURL && (
        <Box
          sx={{
            mt: 4,
            overflow: 'hidden',
            position: 'relative',
            display: { md: 'block', xs: 'none' }
          }}
        >
          <Box
            sx={{
              mt: 3,
              py: 12,
              height: 300,
              position: 'relative'
            }}
          >
            <BlurImage
              src={bannerImg}
              alt="banner"
              blurDataURL={blurDataURL}
              layout="fill"
              sizes="700px"
              objectFit="cover"
            />
          </Box>
        </Box>
      )}
    </>
  );
}
