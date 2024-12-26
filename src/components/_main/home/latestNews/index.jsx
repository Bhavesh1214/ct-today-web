import React, { useEffect, useState } from "react";
import { CardContent } from "@mui/material";

// components
// slides data
// mui
import {
  Stack,
  Grid,
  Card,
  Dialog,
  IconButton,
  Container,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useQuery } from "react-query";
import * as api from "src/services";
import BlurImage from "src/components/blurImage";
import { CardMedia, Typography } from "@mui/material";

export default function LatestNews({}) {
  const { data } = useQuery(["get-home-compaign-all"], () =>
    api.getAdvertiseImages(),
  );
  const [dannerData, setBannerData] = useState();
  useEffect(() => {
    if (data?.data?.length > 0) {
      setBannerData(data.data[0]);
    }
  }, [data]);

  

  return (
    <Box sx={{ padding: 2, backgroundColor: "#ffff" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <img src="b4.webp" style={{ width: "100%" }} />
            </Grid>
            <Grid item xs={12}>
              <img src="pai-machines.webp" style={{ width: "100%" }} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={9}>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", marginBottom: 2, color: "#14265E" }}
          >
            Latest News
          </Typography>
          <Grid container spacing={4} top={"10px"}>
            {[
              {
                category: "Real Estate",
                date: "03 Dec 2024",
                title: "India's Coal Production Rises 7.2% in November",
                image: "CU5yljz7OR.jpg", // Replace with your image URL
              },
              {
                category: "Coal & Mining",
                date: "03 Dec 2024",
                title: "India's Coal Production Rises 7.2% in November",
                image: "Ivubw9bg5w.jpg", // Replace with your image URL
              },
              {
                category: "Coal & Mining",
                date: "03 Dec 2024",
                title: "India's Coal Production Rises 7.2% in November",
                image: "jOjRTa6IUP.jpg", // Replace with your image URL
              },
              {
                category: "Coal & Mining",
                date: "03 Dec 2024",
                title: "India's Coal Production Rises 7.2% in November",
                image: "mUDBkpdYI2.jpg", // Replace with your image URL
              },
              {
                category: "Coal & Mining",
                date: "03 Dec 2024",
                title: "India's Coal Production Rises 7.2% in November",
                image: "nMjzqsiP1a.jpg", // Replace with your image URL
              },
              {
                category: "Coal & Mining",
                date: "03 Dec 2024",
                title: "India's Coal Production Rises 7.2% in November",
                image: "Ul6LNZawz3.jpg", // Replace with your image URL
              },
            ].map((news, index) => (
              <Grid item xs={6} key={index}>
                <Box
                  sx={{
                    display: "flex",
                    display: { xs: "block", sm: "flex" },
                    alignItems: "start",
                    gap: 2,
                    borderBottom: "1px solid #ddd",
                    pb: 2,
                  }}
                >
                  {/* Image Section */}
                  <Box
                    component="img"
                    src={news.image}
                    alt={news.title}
                    sx={{
                      width: 200,
                      height: 150,
                      width: { xs: "100%", sm: 200 },
                      height: { xs: "100%", sm: 150 },
                      objectFit: "cover",
                      // borderRadius: 1,
                    }}
                  />
                  {/* Content Section */}
                  <Box>
                    {/* Category and Date */}
                    <Typography
                      variant="caption"
                      sx={{
                        display: "inline-block",
                        backgroundColor: "#f8d7da",
                        color: "#d9534f",
                        padding: "2px 8px",
                        borderRadius: "4px",
                        fontWeight: "bold",
                        marginRight: 1,
                      }}
                    >
                      {news.category}
                    </Typography>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{ fontSize: "0.9rem" }}
                    >
                      {news.date}
                    </Typography>
                    {/* Headline */}
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: "bold", marginTop: 1 }}
                    >
                      {news.title}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/* Bottom Banner */}
      <img src="Infrawise.webp" style={{ width: "100%" }} />
      {/* <Box
        sx={{
          backgroundColor: "grey.300",
          height: 150,
          marginTop: 4,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 18,
          fontWeight: "bold",
          color: "grey.600",
        }}
      >
        Banner 1 - 1430x150 px
      </Box> */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          marginBottom: 2,
          color: "#14265E",
          backgroundColor: "#F1E0D9",
        }}
      >
        Breaking News:
      </Typography>
    </Box>
  );
}
