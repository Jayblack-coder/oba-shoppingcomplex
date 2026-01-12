import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";

import Home from "./Screens/Home";
import About from "./Screens/About";
import Services from "./Screens/Services";
import Gallery from "./Screens/Gallery";
import Contact from "./Screens/Contact";
import Footer from "./Screens/Footer";
// import Test from "./Screens/Test";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

