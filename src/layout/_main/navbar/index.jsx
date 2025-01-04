"use client";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { useDispatch, useSelector } from "react-redux";

// mui
import { alpha } from "@mui/material/styles";
import {
  Toolbar,
  Skeleton,
  Stack,
  AppBar,
  useMediaQuery,
  Container,
  IconButton,
  InputBase,
} from "@mui/material";
import * as api from "src/services";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import {
  Box,
  TextField,
  Button,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

// components
import Logo from "src/components/logo";
import { setSettings } from "src/redux/slices/settings";
import MenuDesktop from "../actionbar/menuDesktop";
import config from "src/layout/_main/config.json";
import Image from "next/image";
import MobileBar from "../mobileBar";
// dynamic import components

// new //

// ----------------------------------------------------------------------
export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    // 'Home',
    // 'About Us',
    // 'Contact',
    "News",
    "Equipment & Machinery",
    "Product & Technology",
    "Article & Report",
    "Interview",
    "Event",
    "Subscribe",
    "E-Magazine",
  ];

  return (
    <>
      <AppBar
        sx={{
          boxShadow: "none",
          position: "relative !important",
          borderRadius: 0,
          // paddingTop: '20px !important',
          // bgcolor: (theme) => alpha(theme.palette.background.paper, 1),
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          // display: { md: 'block', xs: 'none' },
          "& .toolbar": {
            justifyContent: "space-between",
            backdropFilter: "blur(6px)",
            borderRadius: 0,
            // Fix on Mobile
            bgcolor: (theme) => alpha(theme.palette.background.paper, 1),
            // backgroundColor: '#301935',
            py: 1.5,
          },
        }}
      >
        <Box sx={{ padding: 2 }}>
          <Box sx={{ py: { xs: 2, sm: 4 } }}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              py={1}
            >
              
              {/* Section: Input Fields */}
              
            </Box>

            {/* Advertisement Banners */}
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <img src="banner1.webp" style={{ width: "100%" }} />
              </Grid>
              <Grid item xs={12} md={6}>
                <img src="banner2.webp" style={{ width: "100%" }} />
              </Grid>
            </Grid>
            
            {/* <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <Box
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
                </Box>
                
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box
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
                </Box>
              </Grid>
            </Grid> */}
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar
              sx={{
                backgroundColor: "#sdsdsdsd",
              }}
            >
              <Toolbar sx={{ minHeight: "46px !important" }}>
                <Typography
                  variant="h6"
                  sx={{ flexGrow: 1, display: { color: "#FF6F00" } }}
                >
                  Home
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ flexGrow: 1, display: { color: "#FF6F00" } }}
                >
                  About Us
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ flexGrow: 1, display: { color: "#FF6F00" } }}
                >
                  Contact
                </Typography>

                <Box sx={{ display: { xs: "none", md: "flex" } }}>
                  {menuItems.map((item, index) => (
                    <Button
                      key={index}
                      sx={{
                        color: "#fff",
                        textTransform: "none",
                        fontWeight: "bold",
                      }}
                    >
                      {item}
                    </Button>
                  ))}
                </Box>
                <IconButton
                  color="inherit"
                  aria-label="menu"
                  onClick={handleMenuOpen}
                  sx={{ display: { xs: "block", md: "none" } }}
                >
                  <MenuIcon />
                </IconButton>
              </Toolbar>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {menuItems.map((item, index) => (
                  <MenuItem key={index} onClick={handleMenuClose}>
                    {item}
                  </MenuItem>
                ))}
              </Menu>
            </AppBar>
          </Box>
        </Box>
      </AppBar>
      {/* {isMobile && <MobileBar />} */}
    </>
  );
}
