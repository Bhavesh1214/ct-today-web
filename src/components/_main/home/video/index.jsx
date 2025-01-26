import React from "react";
import { Grid, Box, Typography, Paper } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import "swiper/css/navigation";
const Video = () => {
  return (
    <Box sx={{ padding: 2, backgroundColor: "#ffff" }}>
      {/* Title Section */}
      <Typography variant="h4" gutterBottom sx={{ color: "#14265E" }}>
        Video
      </Typography>


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
        {Array.from({ length: 10 }).map((_, index) => (
          <SwiperSlide key={index}>
            <Paper
              elevation={3}
              sx={{
                borderRadius: "0 !important",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* Wrap the image in an <a> tag */}
              <Box
                sx={{
                  // border: "4px solid #ccc", // Border around video
                  height: 150,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden",
                }}
              >
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Dummy Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                // style={{ height: "100%", width: "100%" }}
                ></iframe>
              </Box>

              {/* Text Section */}
              <Box
                sx={{
                  backgroundColor: "#e0e0e0", // Light gray background
                  textAlign: "center", // Center text horizontally
                  padding: "8px 0", // Add padding to the top and bottom
                }}
              >
                <Typography variant="subtitle1" noWrap>
                  ABC
                </Typography>
              </Box>
            </Paper>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Four Cards Section */}
    

    </Box>
  );
};

export default Video;
