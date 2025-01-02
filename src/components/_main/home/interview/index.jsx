import React from "react";
import { Grid, Box, Typography, Paper } from "@mui/material";
import { color } from "framer-motion";

const Interview = () => {
  return (
    <Box sx={{ padding: 2, backgroundColor: "#ffff" }}>
      {/* Title Section */}
      <Typography variant="h4" gutterBottom sx={{ color: "purple" }}>
        Interview
      </Typography>

      {/* Four Cards Section */}
      <Grid container spacing={2} sx={{ mb: 4 }}>
        {Array.from({ length: 4 }).map((_, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper
              elevation={3}
              sx={{ padding: 2, borderRadius: "0 !important" }}
            >
              <img src="2-m.webp" style={{ width: "100%" }} />

              {/* Image Placeholder */}
              {/* <Box
                component="img"
                src="https://via.placeholder.com/150" // Replace with actual image URLs
                alt={`Placeholder ${index + 1}`}
                sx={{
                  width: "100%",
                  height: 150,
                  objectFit: "cover",
                  mb: 1,
                  borderRadius: 0,
                  // border:' 1px',
                  border: "1px solid black", // Added border
                }}
              /> */}
              <Typography variant="subtitle1" noWrap>
                Building Resilient and Long...
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Brick & Block | 03 Dec 2024
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                YEIDA Unveils 20 Plots in New Housing Scheme Across Three
                Sectors in Noida
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Banner Section */}
      <Grid container spacing={2}>
        {/* Left Placeholder (400x300 px) */}

        <Grid item xs={12} sm={3}>
          <img src="Demolition.webp" style={{ width: "100%" }} />

          {/* <Box
            component="img"
            src="https://via.placeholder.com/400x300" // Replace with actual image URLs
            alt="Left Placeholder"
            sx={{
              width: "100%",
              height: 300,
              objectFit: "cover",
              borderRadius: 0,
            }}
          /> */}
        </Grid>

        {/* Center Banners (700x150 px stacked) */}
        <Grid item xs={12} sm={6}>
          <img src="hpv1.webp" style={{ width: "100%" }} />

          {/* <Box
            component="img"
            src="https://via.placeholder.com/700x150" // Replace with actual image URLs
            alt="Banner 1"
            sx={{
              width: "100%",
              height: 150,
              objectFit: "cover",
              mb: 1,
              borderRadius: 0,
            }}
          /> */}
          <img src="hpv1.webp" style={{ width: "100%" }} />

          {/* <Box
            component="img"
            src="https://via.placeholder.com/700x150" // Replace with actual image URLs
            alt="Banner 2"
            sx={{
              width: "100%",
              height: 150,
              objectFit: "cover",
              borderRadius: 0,
            }}
          /> */}
        </Grid>

        {/* Right Placeholder (400x300 px) */}
        <Grid item xs={12} sm={3}>
          <img src="3-m.webp" style={{ width: "100%" }} />

          {/* <Box
            component="img"
            src="https://via.placeholder.com/400x300" // Replace with actual image URLs
            alt="Right Placeholder"
            sx={{
              width: "100%",
              height: 300,
              objectFit: "cover",
              borderRadius: 0,
            }}
          /> */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Interview;
