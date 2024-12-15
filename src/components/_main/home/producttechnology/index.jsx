

import React from "react";
import { Grid, Box, Typography, Paper, CardContent, Card, CardMedia, Chip } from "@mui/material";

const ProductTechnology = () => {
    return (
        <Box sx={{ padding: 2, backgroundColor: '#ffff' }}>
            {/* Title Section */}
            <Typography variant="h4" gutterBottom>
            Product & Technology
            </Typography>

            {/* Four Cards Section */}
            <Grid container spacing={2} sx={{ mb: 4 }}>
                {Array.from({ length: 4 }).map((_, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Paper elevation={3} sx={{ padding: 2 }}>
                            {/* Image Placeholder */}
                            <Box
                                sx={{
                                    height: 150,
                                    backgroundColor: "#f0f0f0",
                                    mb: 1,
                                }}
                            ></Box>
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


            
        </Box>
    );
};

export default ProductTechnology;
