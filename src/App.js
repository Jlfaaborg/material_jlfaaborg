import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import About from "./About";

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
        </Routes>
        <Footer />
      </ThemeProvider>
    </Box>
  );
}

export default App;
