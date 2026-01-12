import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";

import Home from "./Screens/Home";
import About from "./Screens/About";
import Services from "./Screens/Services";
import Gallery from "./Screens/Gallery";
import Contact from "./Screens/Contact";
import Footer from "./Screens/Footer";
// import Test from "./Screens/Test";
import Agreement from "./Screens/Agreement";
import { Box } from "@mui/material";




export default function App() {
  return (
    <Box
    sx={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
    }}
  >
    <Navbar />

    {/* Page Content */}
    <Box component="main" sx={{ flexGrow: 1 }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tripartite-agreement" element={<Agreement />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        {/* <Route path="/test" element={<Test />} /> */}
      </Routes>
    </Box>

    <Footer />
  </Box>
  );
}

