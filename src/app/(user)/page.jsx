'use client';
import dynamic from 'next/dynamic';

// mui
import { Container } from '@mui/material'; // Importing Container component from MUI (Material-UI) library.

// components
// import Hero from 'src/components/_main/home/hero'; // Importing the Hero component.
import Offers from 'src/components/_main/home/offers';
import Gifting from 'src/components/_main/home/gifting';
import Testimonials from 'src/components/_main/home/testimonials';
import LastSection from 'src/components/_main/home/lastsection';
import Compaigns from 'src/components/_main/home/compaign';
import LatestNews from 'src/components/_main/home/latestNews';
import Interview from 'src/components/_main/home/interview';
import EquipmentMachinery from 'src/components/_main/home/equipment&machinery';
import ArticleReport from 'src/components/_main/home/articlereport';
import ProductTechnology from 'src/components/_main/home/producttechnology';
import UpcomingEvent from 'src/components/_main/home/upcomingevent';
import Video from 'src/components/_main/home/video';
import Emagazine from 'src/components/_main/home/emagazine';
 
export default function IndexPage() {
  return (
    <>
      <Container maxWidth="xl" sx={{padding: '0 !important'}}>
        <LatestNews />
      </Container>

      <Container maxWidth="xl" sx={{padding: '0 !important'}} >
        <Interview />
      </Container>

      <Container maxWidth="xl" sx={{padding: '0 !important'}}>
        <EquipmentMachinery />
      </Container>

      <Container maxWidth="xl" sx={{padding: '0 !important'}}>
        <ArticleReport />
      </Container>

      <Container maxWidth="xl" sx={{padding: '0 !important'}}>
        <ProductTechnology />
      </Container>

      <Container maxWidth="xl" sx={{padding: '0 !important'}}>
        <UpcomingEvent />
      </Container>

      <Container maxWidth="xl" sx={{padding: '0 !important'}}>
        <Video />
      </Container>

      <Container maxWidth="xl" sx={{padding: '0 !important'}}>
        <Emagazine />
      </Container>

     

      {/* <Container maxWidth="xl">
        <Offers />
      </Container> */}

      {/* <Container maxWidth="xl">
        <Gifting />
      </Container> */}

      {/* <Container maxWidth="xl">
        <Testimonials />
      </Container> */}

      {/* <Container maxWidth="xxl">
        <LastSection />
      </Container> */}
    </>
  );
}
