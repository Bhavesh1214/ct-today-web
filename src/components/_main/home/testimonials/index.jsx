import React from "react";
import { Grid, Box, Typography, Paper, Avatar } from "@mui/material";
import { color } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import "swiper/css/navigation";

const Testimonials = () => {
  return (
    <Box sx={{ padding: 2, backgroundColor: "#ffff" }}>
      {/* Title Section */}
      <Typography variant="h4" gutterBottom sx={{ color: "#14265E" }}>
        Testimonials
      </Typography>

      {/* Four Cards Section */}

      <Swiper
        spaceBetween={40}
        speed={1500}
        slidesPerView={1}
        autoplay={{
            delay: 1000,
            disableOnInteraction: false, 
        }}
        modules={[Autoplay]}
        breakpoints={{
            600: { slidesPerView: 2 },
            960: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
        }}
        navigation={true}

      >
        {/* {Array.from({ length: 5 }).map((_, index) => ( */}
        <SwiperSlide >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              padding: 3,
              border: '1px solid #ddd',
              borderRadius: '8px',
              width: '300px',
              backgroundColor: '#f9f9f9',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Avatar
              src="/EezUIL10cp.jpg"
              alt="Mr. V. G. Sakthikumar"
              sx={{ width: 80, height: 80, marginBottom: 2 }}
            />
            <Typography variant="h6" fontWeight="400" sx={{ marginBottom: 2 }}>
              “Uganda is strategically important in our business in Africa. We are
              happy to be a part of African..”
            </Typography>
            <Typography
              variant="subtitle1"
              fontWeight="700"
              sx={{ color: '#555', marginTop: 1 }}
            >
              Mr. V. G. Sakthikumar, Managing Director
              <br />
              Schwing Stetter India Pvt. Ltd.
            </Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            padding: 3,
            border: '1px solid #ddd',
            borderRadius: '8px',
            width: '300px',
            backgroundColor: '#f9f9f9',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Avatar
            src="/t2.jpg"
            alt="Mr. V. G. Sakthikumar"
            sx={{ width: 80, height: 80, marginBottom: 2 }}
          />
          <Typography variant="h6" fontWeight="400" sx={{ marginBottom: 2 }}>
            “Uganda is a Pearl of Africa continent and plays a principal role in a boost of construction growt..”
          </Typography>
          <Typography
            variant="subtitle1"
            fontWeight="700"
            sx={{ color: '#555', marginTop: 1 }}
          >
            Mr. R. V. Panchal, CEO Neptune
            <br />
            Industries Ltd

          </Typography>
        </Box>
        </SwiperSlide>
        <SwiperSlide>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            padding: 3,
            border: '1px solid #ddd',
            borderRadius: '8px',
            width: '300px',
            backgroundColor: '#f9f9f9',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Avatar
            src="/t3.jpg"
            alt="Mr. V. G. Sakthikumar"
            sx={{ width: 80, height: 80, marginBottom: 2 }}
          />
          <Typography variant="h6" fontWeight="400" sx={{ marginBottom: 2 }}>
            “Being a growing nation, Uganda is always been on marketing strategy for us and all.”..


          </Typography>
          <Typography
            variant="subtitle1"
            fontWeight="700"
            sx={{ color: '#555', marginTop: 1 }}
          >
            Mr. Kranthi Kumar Ravuri, MD
            <br />
            Vibrant Construction Equipments Pvt. Ltd
          </Typography>
        </Box>
        </SwiperSlide>
        <SwiperSlide>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            padding: 3,
            border: '1px solid #ddd',
            borderRadius: '8px',
            width: '300px',
            backgroundColor: '#f9f9f9',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Avatar
            src="/t4.jpg"
            alt="Mr. V. G. Sakthikumar"
            sx={{ width: 80, height: 80, marginBottom: 2 }}
          />
          <Typography variant="h6" fontWeight="400" sx={{ marginBottom: 2 }}>
            “Uganda's infrastructure market is good business potential, and with the right approach, we can op..


          </Typography>
          <Typography
            variant="subtitle1"
            fontWeight="700"
            sx={{ color: '#555', marginTop: 1 }}
          >
            Mr. Saumil Shah, Director BD
            <br />
            Coninfra Machinery Pvt. Ltd.
          </Typography>
        </Box>
        </SwiperSlide>
        <SwiperSlide>
 
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            padding: 3,
            border: '1px solid #ddd',
            borderRadius: '8px',
            width: '300px',
            backgroundColor: '#f9f9f9',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Avatar
            src="/t5.jpg"
            alt="Mr. V. G. Sakthikumar"
            sx={{ width: 80, height: 80, marginBottom: 2 }}
          />
          <Typography variant="h6" fontWeight="400" sx={{ marginBottom: 2 }}>
            “Uganda Expo was to grow and explore the East African Market.”..


          </Typography>
          <Typography
            variant="subtitle1"
            fontWeight="700"
            sx={{ color: '#555', marginTop: 1 }}
          >
            Mr. Hemal Baraiya, Head
            <br />
            International BD Nilang Asphalt Equipments Pvt Ltd

          </Typography>
        </Box>
        </SwiperSlide>
        {/* ))} */}
      </Swiper>
      
    </Box>

  );
};

export default Testimonials;
