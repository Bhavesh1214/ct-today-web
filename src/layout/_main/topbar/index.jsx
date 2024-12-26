"use client";
import { Box, Link, Stack, Toolbar, TextField, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import FacebookIcon from "src/components/Icons/FacebookIcon";
import InstagramIcon from "src/components/Icons/InstagramIcon";
import LinkedinIcon from "src/components/Icons/LinkedinIcon";
import TwitterIcon from "src/components/Icons/TwitterIcon";
import NextLink from "next/link";
import Image from "next/image";

export default function UserTopbar() {
  const theme = useTheme();
  const { appSetting } = useSelector(({ settings }) => settings);

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        zIndex: 999999999999,
        backgroundColor: "#14265E",
        padding: "0px 0px",
        width: "100%",
      }}
    >
      <Toolbar
        sx={{
          minHeight: 36,
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
          width={100}
          height={100}
          alt="Logo"
          style={{ width: "auto", height: "auto", objectFit: "cover" }}
        />
        {/* Center Input */}
        <TextField
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
        />

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
