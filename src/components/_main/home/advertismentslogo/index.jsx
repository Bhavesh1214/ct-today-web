import React from "react";
import {
    Box,
    Typography,
    Paper,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import "swiper/css/navigation";

const AdvertismentsLogo = () => {
    // Define an array of URLs for the logos
    const logoLinks = [
        "https://example.com/link1",
        "https://example.com/link2",
        "https://example.com/link3",
        "https://example.com/link4",
        "https://example.com/link5",
        "https://example.com/link6",
        "https://example.com/link7",
        "https://example.com/link8",
        "https://example.com/link9",
        "https://example.com/link10",
    ];

    return (
        <Box sx={{ padding: 2, backgroundColor: "#ffff" }}>
            <Typography variant="h4" gutterBottom sx={{ color: "#14265E" }}>
                Advertisments
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
                            <a
                                href={logoLinks[index]} // Dynamically use URLs from the array
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: "none" }}
                            >
                                <img
                                    src="alogo2.jpg"
                                    style={{ width: "100%" }}
                                    alt={`Slide ${index + 1}`}
                                />
                            </a>
                        </Paper>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
};

export default AdvertismentsLogo;
