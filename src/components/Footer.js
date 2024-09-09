import React from 'react';
import { Box, Stack } from '@mui/material';
import logo from '../assets/logo.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={logo} alt="logo" style={{ width: '200px', height: '180px' }} />
    </Stack>
  </Box>
);

export default Footer;
