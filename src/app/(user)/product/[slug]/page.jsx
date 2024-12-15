import React from 'react';

// mui
import { Box } from '@mui/material';

// components
import HeaderBreadcrumbs from 'src/components/headerBreadcrumbs';
import ProductCardDetail from 'src/components/_main/products/ProductDetail';
// api
import * as api from 'src/services';

export const revalidate = 10;
export const dynamic = 'error';

export async function generateStaticParams() {
  const { data } = await api.getProductSlugs();
  return data?.map((product) => {
    return {
      slug: product.slug
    };
  });
}

export async function generateMetadata({ params }) {
  const { data: response } = await api.getProductDetails(params.slug);

  return {
    title: response?.metaTitle,
    description: response?.metaDescription,
    keywords: response?.tags,
    title: response?.name,
    openGraph: {
      images: response?.images.map((v) => v.url)
    }
  };
}

export default async function ProductDetail({ params: { slug } }) {
  const response = await api.getProductDetails(slug);
  const { data } = response;

  return (
    <Box>
      <HeaderBreadcrumbs
        heading="Product Details"
        links={[
          {
            name: 'Home',
            href: '/'
          },
          {
            name: 'Products',
            href: '/products'
          },
          {
            name: data?.name
          }
        ]}
      />
      <ProductCardDetail response={response} slug={slug} />
    </Box>
  );
}
