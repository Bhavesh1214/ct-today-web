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

export default function TopBanners({ }) {
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
    <Box sx={{ padding: 2, backgroundColor: "#ffff",mt:8,cursor: "pointer"}}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <img src="banner1.webp" style={{ width: "100%" }} />
        </Grid>
        <Grid item xs={12} md={6}>
          <img src="banner2.webp" style={{ width: "100%" }} />
        </Grid>
      </Grid>

      {/* Bottom Banner */}


    </Box>
  );
}
