import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/banner2.png';

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="#FFFF84" fontWeight="1000" fontSize="120px">FitQuest</Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="20px" mt="20px">
      Sweat, Smile & Repeat <br />
    </Typography>
    <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#3AFFDA', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Calibrate Your Fitness</a>
    </Stack>
    <Typography fontWeight={600} color="#00FFB1" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '300px' }}>
      Exercises
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;
