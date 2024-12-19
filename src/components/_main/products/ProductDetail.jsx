"use client";
import PropTypes from "prop-types";
// mui
// mui
import { Container, Stack, Grid } from "@mui/material";

// components
import RelatedProductsCarousel from "src/components/_main/product/relatedProducts";
import ProductDetailTabs from "src/components/_main/product/tabs";
import ProductAdditionalInfo from "src/components/_main/product/additionalInfo";
import ProductDetailsCarousel from "src/components/carousels/customPaginationSilder";
import ProductDetailsSumary from "src/components/_main/product/summary";
import { Suspense, useState } from "react";
import LastSection from "../home/lastsection";

export default function ProductCardDetail({ response, slug }) {
  console.log(response);
  const [productColorIndex, setProductColorIndex] = useState(0);
  const { data, totalRating, totalReviews, brand, metadata, category } =
    response;

  return (
    <Container maxWidth="xl">
      <Stack gap={5} paddingTop={4}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <ProductDetailsCarousel
              slug={slug}
              product={data}
              data={data}
              productColorIndex={productColorIndex}
            />
          </Grid>
          <Grid item xs={12} md={8} lg={8}>
            <ProductDetailsSumary
              id={data?._id}
              product={data}
              brand={brand}
              metadata={metadata}
              category={category}
              totalRating={totalRating}
              setProductColorIndex={setProductColorIndex}
              totalReviews={totalReviews}
            />
          </Grid>
        </Grid>
        <ProductAdditionalInfo />
        <Suspense fallback={<></>}>
          <ProductDetailTabs
            product={{ description: data.description, _id: data._id }}
            totalRating={totalRating}
            totalReviews={totalReviews}
          />
        </Suspense>
        <Suspense fallback={<></>}>
          <LastSection />
        </Suspense>
        <Suspense fallback={<></>}>
          <RelatedProductsCarousel id={data._id} category={category?.slug} />
        </Suspense>
      </Stack>
    </Container>
  );
}

// add propTypes
ProductCardDetail.propTypes = {
  response: PropTypes.object.isRequired,
  slug: PropTypes.object.isRequired,
};
