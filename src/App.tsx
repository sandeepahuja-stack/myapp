

import {  Container, createTheme, ThemeProvider } from '@mui/material';
import Navbar from './components/layout/Navbar';
import { Routes, Route } from "react-router-dom";
import React, { Suspense } from 'react';

const Login = React.lazy(() => import(
  /* webpackChunkName: "LoginPage" */
  './pages/Login'));


const Home = React.lazy(() => import(
  /* webpackChunkName: "HomePage" */
  './pages/Home'));

function App() {
  const theme = createTheme();
  
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Container >
      <Routes>
        <Route path="/" element={<Suspense fallback={<div>Loading home</div>}><Home /></Suspense>} />
        <Route path="/login" element={<Suspense fallback={<div>Loading login</div>}><Login /></Suspense>} />
        <Route path="/:newsCategory" element={<Suspense fallback={<div>Loading home</div>}><Home /></Suspense>} />

      </Routes>
    </Container>
    {/* 
    Footer section to be created
    */}
    </ThemeProvider>
  );
}


export default App;
