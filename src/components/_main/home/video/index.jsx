import React from "react";
import { Grid, Box, Typography, Paper } from "@mui/material";

const Video = () => {
  return (
    <Box sx={{ padding: 2, backgroundColor: "#ffff" }}>
      {/* Title Section */}
      <Typography variant="h4" gutterBottom sx={{ color: "purple" }}>
        Video
      </Typography>

      {/* Four Cards Section */}
      <Grid container spacing={2} sx={{ mb: 4 }}>
        {Array.from({ length: 4 }).map((_, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper
              elevation={3}
              sx={{
                padding: 0,
                borderRadius: 0, // No border radius
                overflow: "hidden", // Ensure the content stays inside the border
                border: "1px solid #ccc", // Add border
              }}
            >
              {/* Video Display */}
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
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Video;
