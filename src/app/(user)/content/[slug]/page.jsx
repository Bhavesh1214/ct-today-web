"use client"

import React from 'react';
// mui
import { Container } from '@mui/material';

// component
import HeaderBreadcrumbsSkeleton from 'src/components/skeletons/breadcrumbs';
// skeleton
import dynamic from 'next/dynamic';
import * as api from 'src/services';
import { useQuery } from 'react-query';
import CMS from 'src/components/_main/cms';
import LastSection from 'src/components/_main/home/lastsection';
const Testimonials = dynamic(() => import('src/components/_main/home/testimonials'));

const HeaderBreadcrumbs = dynamic(() => import('src/components/headerBreadcrumbs'), {
  loading: () => <HeaderBreadcrumbsSkeleton />
});

export default function Page({ params }) {
  const { slug } = params;
  const { data, isLoading } = useQuery(['about-cms'], () => api.getCmsBySlug(slug));
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
            name: 'CMS'
          }
        ]}
      />
      <Container maxWidth="xl">
        <CMS data={data} isLoading={isLoading}/>
      </Container>
      {/* <Testimonials />
      <Container maxWidth="xxl">
        <LastSection />
      </Container> */}
    </>
  );
}
