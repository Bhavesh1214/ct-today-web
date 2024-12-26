import React from "react";
import {
    Grid,
    Box,
    Typography,
    Paper,
    CardContent,
    Card,
    CardMedia,
    Chip,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const AdvertismentsLogo = () => {
    return (
        <Box sx={{ padding: 2, backgroundColor: "#ffff" }}>
            <Typography variant="h4" gutterBottom sx={{ color: "#14265E" }}>
                Advertisments
            </Typography>
            <Swiper
                autoplay
                spaceBetween={40}
                speed={1500}
                slidesPerView={1}
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
                                // padding: 2,
                                borderRadius: "0 !important",
                                // display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <img
                                src="alogo2.jpg"
                                style={{ width: "100%" }}
                                alt={`Slide ${index + 1}`}
                            />

                        </Paper>
                    </SwiperSlide>
                ))}
            </Swiper>


        </Box>
    );
};

export default AdvertismentsLogo;
