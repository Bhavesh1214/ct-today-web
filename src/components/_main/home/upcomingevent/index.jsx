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

const UpcomingEvent = () => {
  return (
    <Box sx={{ padding: 2, backgroundColor: "#ffff" }}>
      {/* Title Section */}
      <Typography variant="h4" gutterBottom sx={{ color: "purple" }}>
        Upcoming Event
      </Typography>

      {/* Four Cards Section */}

      <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <img src="ICA-2025.webp" style={{ width: "100%" }} />

          {/* <Box
            sx={{
              width: "100%",
              height: 150,
              backgroundColor: "#e0e0e0",
              textAlign: "center",
              lineHeight: "150px",
              fontSize: "20px",
              mb: 1,
            }}
          >
            Banner 1 (700x150 px)
          </Box> */}
        </Grid>
        <Grid item xs={12} sm={4}>
          <img src="CICEE-2025 (1).webp" style={{ width: "100%" }} />

          {/* <Box
            sx={{
              width: "100%",
              height: 150,
              backgroundColor: "#e0e0e0",
              textAlign: "center",
              lineHeight: "150px",
              fontSize: "20px",
            }}
          >
            Banner 2 (700x150 px)
          </Box> */}
        </Grid>
        <Grid item xs={12} sm={4}>
          <img src="BCEE-2025 (1).webp" style={{ width: "100%" }} />

          {/* <Box
            sx={{
              width: "100%",
              height: 150,
              backgroundColor: "#e0e0e0",
              textAlign: "center",
              lineHeight: "150px",
              fontSize: "20px",
            }}
          >
            Banner 2 (700x150 px)
          </Box> */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default UpcomingEvent;
