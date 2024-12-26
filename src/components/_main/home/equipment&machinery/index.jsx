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

const EquipmentMachinery = () => {
  return (
    <Box sx={{ padding: 2, backgroundColor: "#ffff" }}>
      {/* Title Section */}
      <Typography variant="h4" gutterBottom sx={{ color: "#14265E" }}>
        Equipment & Machinery
      </Typography>

      {/* Four Cards Section */}
      <Grid container spacing={2} sx={{ mb: 4 }}>
        {Array.from({ length: 4 }).map((_, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              {/* Image Placeholder */}
              <img src="BM-m.webp" style={{ width: "100%" }} />

              {/* <Box
                sx={{
                  height: 150,
                  backgroundColor: "#f0f0f0",
                  mb: 1,
                }}
              ></Box> */}
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

      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <img src="BCEE-2025.webp" style={{ width: "100%" }} />

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

        <Grid item xs={12} sm={6}>
          <img src="CICEE-2025.webp" style={{ width: "100%" }} />

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

export default EquipmentMachinery;
