import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import About from "./About";
import Contact from "./Contact";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";

const theme = createTheme({
  palette: {
    primary: { main: "#607d8b" },
    secondary: { main: "#f1dac4" },
  },
});

function App() {
  return (
    <Box className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </Box>
  );
}

export default App;
