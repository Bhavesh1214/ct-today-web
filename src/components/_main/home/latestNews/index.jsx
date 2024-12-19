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

  // const newsData = [
  //   {
  //     title: 'Ravin Group Secures Mumbai Metro Line 3 with Cutting-Edge Fire Safety Tech',
  //     image: 'CU5yljz7OR.jpg',
  //   },
  //   {
  //     title: 'Borivali Set for Major Overhaul with ₹1,100 Cr Redevelopment Boost',
  //     image: 'Ivubw9bg5w.jpg',
  //   },
  //   {
  //     title: '₹2,800 Cr Approved for Road Projects in Tripura',
  //     image: 'jOjRTa6IUP.jpg',
  //   },
  //   {
  //     title: 'UP Clears Bold Growth Plans for Noida & YEIDA Through 2041',
  //     image: 'mUDBkpdYI2.jpg',
  //   },
  //   {
  //     title: 'MPMRCL Reviews Bhopal Metro Construction Progress',
  //     image: 'nMjzqsiP1a.jpg',
  //   },
  //   {
  //     title: '23 Projects Unveiled by Modi, Focus on Airport Expansions and Development',
  //     image: 'Ul6LNZawz3.jpg',
  //   },
  // ];

  // return (
  //   <div style={{ padding: '20px 120px' }}>
  //   <Box
  //     sx={{
  //       position: 'relative',
  //       backgroundColor: '#D32F2F', // Red background color
  //       height: { xs: '50px', sm: '50px' }, // Responsive height
  //       width: '20%',
  //       display: 'flex',
  //       alignItems: 'center',
  //       justifyContent: 'flex-start', // Align text to the left
  //       overflow: 'hidden',
  //       marginY: '20px',

  //     }}
  //   >
  //     {/* Text */}
  //     <Typography
  //       variant="h6"
  //       sx={{
  //         fontSize: { xs: '14px', sm: '18px' }, // Responsive font size
  //         color: 'white',
  //         fontWeight: 'bold',
  //         paddingLeft: '16px',
  //         textTransform: 'uppercase',
  //       }}
  //     >
  //       Latest News
  //     </Typography>

  //     {/* Black Diagonal Section */}
  //     <Box
  //       sx={{
  //         position: 'absolute',
  //         right: 0,
  //         width: '80px',
  //         height: '100%',
  //         backgroundColor: 'black',
  //         clipPath: 'polygon(50% 0%, 100% 0, 100% 100%, 0 100%)', // Creates the diagonal cut

  //       }}
  //     />
  //   </Box>
  //     <Grid container spacing={3} sx={{ display: 'flex', }}>
  //       {newsData.map((news, index) => (
  //         <Grid item xs={6} sm={6} key={index} borderBottom={'1px solid gray'} pb={2} >
  //           <Card sx={{ display: 'flex', alignItems: 'start', background: 'none', boxShadow: 'none', border: 'none !important' }}>
  //             <CardMedia
  //               component="img"
  //               height="140"
  //               width="140"
  //               image={news.image}
  //               sx={{ width: 'auto' }}
  //             />
  //             <CardContent>
  //               <Typography variant="body1" gutterBottom sx={{ fontSize: 18, color: '#333333' }}>
  //                 {news.title}
  //               </Typography>
  //             </CardContent>
  //           </Card>
  //         </Grid>
  //       ))}
  //     </Grid>
  //   </div>
  // );

  return (
    <Box sx={{ padding: 2, backgroundColor: "#ffff" }}>
      {/* Latest News Header */}

      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          marginBottom: 2,
          color: "purple",
          backgroundColor: "#F1E0D9",
        }}
      >
        Breaking News:
      </Typography>
      <Grid container spacing={2}>
        {/* Left Section: Two Large Blocks */}
        <Grid item xs={12} md={3}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box
                sx={{
                  backgroundColor: "grey.300",
                  height: 300,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 18,
                  fontWeight: "bold",
                  color: "grey.600",
                }}
              >
                400x300 px
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  backgroundColor: "grey.300",
                  height: 300,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 18,
                  fontWeight: "bold",
                  color: "grey.600",
                }}
              >
                400x300 px
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={9}>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", marginBottom: 2, color: "purple" }}
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
      <Box
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
      </Box>
    </Box>
  );
}
