import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import logo from '../assets/logo.png';

const NavBar = () => (
  <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
    <Link to="/">
      <img src={logo} alt="logo" style={{ width: '70px', height: '60px', margin: '0px 0px' }} />
    </Link>
    <Stack direction="row" gap="40px" fontFamily="Alegreya" fontSize="24px" alignItems="flex-end">
      <Link to="/" style={{ textDecoration: 'none', fontWeight: 'bold', fontFamily: 'Arial, sans-serif', color: '#FFFB71', borderBottom: '3px solid #FF2625' }}>Home</Link>
      <a href="#exercises" style={{ textDecoration: 'none', fontWeight: 'bold', fontFamily: 'Arial, sans-serif', color: '#FFFB71' }}>Exercises</a>
    </Stack>
  </Stack>
);

export default NavBar;
