"use client";
import React from "react";
import NextLink from "next/link";

// mui
import { useTheme } from "@mui/material/styles";
import {
  Typography,
  Container,
  Stack,
  Box,
  Grid,
  Link,
  Fab,
  Divider,
  TextField,
  Button,
} from "@mui/material";

// icons
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { useQuery } from "react-query";
import * as api from "src/services";

export default function Footer() {
  const { appSetting } = useSelector(({ settings }) => settings);
  const { data, isLoading } = useQuery(["cms-all"], () => api.getAllCms());
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        py: 4,
        
        overflow: "hidden",
        width: "100%",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {/* Location Section */}
          <Grid item xs={12} md={2}>
            <Stack spacing={2}>
              <Typography variant="h6" color="text.primary">
                Location
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Ahmedabad-382445,
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Gujarat, INDIA.
              </Typography>
              {/* <Typography variant="body2" color="text.secondary">
                Mobile: +91 0000000000
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Email: constructionmagazineindia@gmail.com
              </Typography> */}
            </Stack>
          </Grid>

          {/* Popular Tags Section */}
          <Grid item xs={12} md={2}>
            <Stack spacing={2}>
              <Typography variant="h6" color="text.primary">
                Popular Tags
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Equipment & Machinery
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Product & Technology
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Article & Report
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Interview
              </Typography>
            </Stack>
          </Grid>

          {/* Quick Links Section */}
          <Grid item xs={12} md={3}>
            <Stack spacing={2}>
              <Typography variant="h6" color="text.primary">
                Quick Links
              </Typography>
              <Typography variant="body2" color="text.secondary">
                About Us
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Interview
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Subscription
              </Typography>
              <Stack direction="row" spacing={1}>
                <Fab
                  size="small"
                  color="primary"
                  component={NextLink}
                  href={appSetting?.facebookLink || "#"}
                >
                  <FaFacebookF size={18} />
                </Fab>
                <Fab
                  size="small"
                  color="primary"
                  component={NextLink}
                  href={appSetting?.instaLink || "#"}
                >
                  <FaInstagram size={18} />
                </Fab>
                <Fab
                  size="small"
                  color="primary"
                  component={NextLink}
                  href={appSetting?.twitterLink || "#"}
                >
                  <FaTwitter size={18} />
                </Fab>
                <Fab
                  size="small"
                  color="primary"
                  component={NextLink}
                  href={appSetting?.linkedinLink || "#"}
                >
                  <FaLinkedinIn size={18} />
                </Fab>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} md={5}>
            <Stack spacing={2}>
              <Typography variant="h6" color="text.primary">
                SUBSCRIBE NEWSLETTER
              </Typography>
              <Box sx={{
                  display: 'flex',
                  flexDirection: 'row', 
                  gap: 2, 
                  px: 0 
                }}>
                <TextField
                  placeholder="Your Name"
                  variant="outlined"
                  size="small"
                  sx={{
                    background: "#fff",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 0,
                      "& fieldset": {
                        borderColor: "black",
                      },
                      "&:hover fieldset": {
                        borderColor: "black",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "black",
                      },
                    },
                  }}
                />
                <TextField
                  placeholder="Your Whatsapp No"
                  variant="outlined"
                  size="small"
                  sx={{
                    background: "#fff",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 0,
                      "& fieldset": {
                        borderColor: "black",
                      },
                      "&:hover fieldset": {
                        borderColor: "black",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "black",
                      },
                    },
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row', 
                  gap: 2, 
                  px: 0 
                }}
              >
                <TextField
                  placeholder="Your e-mail id"
                  variant="outlined"
                  size="small"
                  sx={{
                    background: "#fff",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 0, // Remove border radius
                      "& fieldset": {
                        borderColor: "black",
                      },
                      "&:hover fieldset": {
                        borderColor: "black",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "black",
                      },
                    },
                  }}
                />
                <TextField
                  placeholder="Captcha code"
                  variant="outlined"
                  size="small"
                 
                  sx={{
                    background: "#fff",
                   
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 0, // Remove border radius
                      "& fieldset": {
                        borderColor: "black",
                      },
                      "&:hover fieldset": {
                        borderColor: "black",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "black",
                      },
                    },
                  }}
                />
              </Box>

              <Button
                variant="contained"
             
                sx={{ padding: "0.75rem", width: "68%", fontWeight: "bold", borderRadius: 0, color:'#fff', backgroundColor:'#14265E'}}
              // fullWidth
              >
                SUBSCRIBE
              </Button>

            </Stack>
          </Grid>

        </Grid>

        <Divider sx={{ my: 3 }} />
        <Typography variant="body2" color="text.secondary" align="center">
          &copy; 2024 Construction Magazine India. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
