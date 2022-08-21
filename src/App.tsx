

import { Container, createTheme, ThemeProvider } from '@mui/material';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom";
import Login from './pages/Login';
function App() {
  const theme = createTheme();
  
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Container >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/:newsCategory" element={<Home />} />

        {/* <Route path="about" element={<About />} /> */}
      </Routes>
    </Container>
    </ThemeProvider>
  );
}


export default App;
