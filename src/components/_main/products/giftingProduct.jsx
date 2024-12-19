"use client";
// react
import React from "react";
import PropTypes from "prop-types";
import dynamic from "next/dynamic";

// mui
import { useMediaQuery, Grid } from "@mui/material";

// api
// components
import ProductList from "./productList";
ProductListing.propTypes = {
  product: PropTypes.object,
  subproduct: PropTypes.object,
  shop: PropTypes.object,
};
// dynamic components
const Pagination = dynamic(() => import("src/components/pagination"));

export default function ProductListing({ product }) {
  const isMobile = useMediaQuery("(max-width:900px)");
  return (
    <>
      <Grid container>
        <Grid item xs={9}>
          <ProductList data={product} isMobile={isMobile} />
          <Pagination data={data} />
        </Grid>
      </Grid>
    </>
  );
}
