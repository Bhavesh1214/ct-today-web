"use client";
import React from "react";
// material ui
import { Box, Grid, Stack, Typography, useTheme, alpha } from "@mui/material";
import Image from "next/image";
// images
import { Container } from "@mui/material"; // Importing Container component from MUI (Material-UI) library.

import AdidasImage from "../../../../public/images/Adidas-transparent001.png";
import NikeImage from "../../../../public/images/Nike-transparent001.png";
import AppleImage from "../../../../public/images/Apple-transparent002.png";

// components
import bgImage from "../../../../public/images/about-banner-image.jpg";
import team from "../../../../public/images/about-banner-image.jpg";
import "./cms.css";

const Data = [
  {
    image: AppleImage,
    alt: "apple-icon",
  },
  {
    image: AdidasImage,
    alt: "adidas-icon",
  },
  {
    image: NikeImage,
    alt: "nike-icon",
  },
];

export default function Index({ data, isLoading }) {
  const theme = useTheme();

  return (
    <>
      <Grid
        item
        md={6}
        xs={12}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div dangerouslySetInnerHTML={{ __html: data?.data?.content }} />
      </Grid>
    </>
  );
}
