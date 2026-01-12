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
    <Box sx={{ flex: 1 }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agreement" element={<TripartiteAgreement />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Box>

    <Footer />
  </Box>
  );
}

