"use client";
import { Box, Link, Stack, Toolbar, TextField, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
// import React from 'react';

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
import React, { useState } from "react";
export default function UserTopbar() {
  const theme = useTheme();
  const { appSetting } = useSelector(({ settings }) => settings);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [dropdownMenu, setDropdownMenu] = useState(null);


  const handleDropdownOpen = (event, menuName) => {
    setAnchorEl(event.currentTarget);
    setDropdownMenu(menuName);
  };

  const handleDropdownClose = () => {
    setAnchorEl(null);
    setDropdownMenu(null);
  };
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        zIndex: 999999999999,
        backgroundColor: "#14265E",
        padding: "0px 0px",
        width: "100%",
        cursor: "pointer"
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
        <Image
          src={"/images/ImportedPhoto_1735036522261.jpg"}
          width={190}
          height={200}
          alt="Logo"
          style={{ width: "auto", height: "auto", objectFit: "cover" }}
        />
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
              },
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
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Button
            onClick={(e) => handleDropdownOpen(e, "equipmentMachinery")}
          >
            Equipment & Machinery
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={dropdownMenu === "equipmentMachinery"}
            onClose={handleDropdownClose}
          >
            <MenuItem onClick={handleDropdownClose}>Cranes</MenuItem>
            <MenuItem onClick={handleDropdownClose}>Excavators</MenuItem>
            <MenuItem onClick={handleDropdownClose}>Bulldozers</MenuItem>
          </Menu>

          <Button onClick={(e) => handleDropdownOpen(e, "productTechnology")}>
            Product & Technology
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={dropdownMenu === "productTechnology"}
            onClose={handleDropdownClose}
          >
            <MenuItem onClick={handleDropdownClose}>AI Innovations</MenuItem>
            <MenuItem onClick={handleDropdownClose}>Software</MenuItem>
            <MenuItem onClick={handleDropdownClose}>Hardware</MenuItem>
          </Menu>

          <Button onClick={(e) => handleDropdownOpen(e, "articleReport")}>
            Article & Report
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={dropdownMenu === "articleReport"}
            onClose={handleDropdownClose}
          >
            <MenuItem onClick={handleDropdownClose}>Market Reports</MenuItem>
            <MenuItem onClick={handleDropdownClose}>Industry Articles</MenuItem>
          </Menu>

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
          onClick={(e) => handleDropdownOpen(e, "account")}
        >
          <AccountCircle />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={dropdownMenu === "account"}
          onClose={handleDropdownClose}
        >
          <MenuItem onClick={handleDropdownClose}>Profile</MenuItem>
          <MenuItem onClick={handleDropdownClose}>Logout</MenuItem>
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
