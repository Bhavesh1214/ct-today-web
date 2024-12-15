'use client';

import React from 'react';

// mui
import { Container } from '@mui/material';

// component import
import CMS from 'src/components/_main/cms';
import WhyUs from 'src/components/_main/home/whyUs';
// Next.js dynamic import
import dynamic from 'next/dynamic';
import * as api from 'src/services';
import { useQuery } from 'react-query';
// skeleton component import
import HeaderBreadcrumbsSkeleton from 'src/components/skeletons/breadcrumbs';
import LastSection from 'src/components/_main/home/lastsection';
const Testimonials = dynamic(() => import('src/components/_main/home/testimonials'));
const HeaderBreadcrumbs = dynamic(() => import('src/components/headerBreadcrumbs'), {
  loading: () => <HeaderBreadcrumbsSkeleton />
});

export default function Page() {
  const { data, isLoading } = useQuery(['about-cms'], () => api.getCmsBySlug('about-us'));
  return (
    <>
      <HeaderBreadcrumbs
        heading={data?.data?.title}
        links={[
          {
            name: 'Home',
            href: '/'
          },
          {
            name: 'About us'
          }
        ]}
      />
      <Container maxWidth="xl">
        <CMS data={data} isLoading={isLoading}/>
      </Container>
      <Testimonials />
      {/* <Container maxWidth="xl" style={{ marginTop: 50 }}>
        <WhyUs />
      </Container> */}
      <Container maxWidth="xxl">
        <LastSection />
      </Container>
    </>
  );
}
