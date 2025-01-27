"use client";
import { Box, Link, Stack, Toolbar, TextField, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import React from 'react';

import FacebookIcon from "src/components/Icons/FacebookIcon";
import InstagramIcon from "src/components/Icons/InstagramIcon";
import LinkedinIcon from "src/components/Icons/LinkedinIcon";
import TwitterIcon from "src/components/Icons/TwitterIcon";
import NextLink from "next/link";
import Image from "next/image";
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
export default function UserTopbar() {
  const theme = useTheme();
  const { appSetting } = useSelector(({ settings }) => settings);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      sx={{
        
        backgroundColor: "#14265E",
        width: "100%",
      }}
    >
      <Toolbar
        sx={{
          // minHeight: 36,
          justifyContent: "space-between",
          display: { xs: "none", md: "flex" },
          width: "100%",
          px: 0,
        }}
      >
        {/* Left Section */}
        {/* <Stack direction="row" alignItems="center" spacing={1}>
          <Link
            className="nav-items"
            component={NextLink}
            href={"/blogs"}
            sx={{
              color: "#fff",
              fontSize: 14,
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            Saturday, 30th November 2024
          </Link>
        </Stack> */}
        {/* <Image
          src={"/images/ImportedPhoto_1735036522261.jpg"}
          width={190}
          height={200}
          alt="Logo"
          style={{ width: "auto", height: "auto", objectFit: "cover" }}
        /> */}
         {/* <Image
          src={"/images/images.png"}
          width={170}
          height={50}
          alt="Logo"
        /> */}
        {/* Center Input */}
        {/* <TextField
          placeholder="SEARCH HERE"
          variant="outlined"
          size="small"
          sx={{
            background: "#fff",
            borderRadius: "4px",
            width: "23%",
            margin: "5px",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#ccc",
              "&:hover fieldset": {
                borderColor: theme.palette.primary.main,
              },
              "&.Mui-focused fieldset": {
                borderColor: theme.palette.primary.main,
              },
            },
          }}
        /> */}
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 ,}}>
              <Button>Equipment & Machinery</Button>
              <Button>Product & Technology</Button>
              <Button>Article & Report</Button>
              <Button>Interview</Button>
              <Button>News</Button>
              <Button>Event</Button>
              <Button>Contact</Button>
              <Button>Advertise</Button>
              <Button>Subscribe</Button>
            </Typography>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              onClick={handleMenuOpen}
            >
              <AccountCircle />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
              <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
            </Menu>
          </Toolbar>
        {/* Right Section */}
        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          sx={{ backgroundColor: "#fff" }}
        >
          <Link component={NextLink} href={appSetting?.facebookLink || "#"}>
            <FacebookIcon />
          </Link>
          <Link component={NextLink} href={appSetting?.instaLink || "#"}>
            <InstagramIcon />
          </Link>
          <Link component={NextLink} href={appSetting?.twitterLink || "#"}>
            <TwitterIcon />
          </Link>
          <Link component={NextLink} href={appSetting?.linkedinLink || "#"}>
            <LinkedinIcon />
          </Link>
        </Stack>
      </Toolbar>
    </Box>
  );
}
