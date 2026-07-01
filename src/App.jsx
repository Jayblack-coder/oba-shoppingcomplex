import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Screens/Navbar";

import Home from "./Screens/Home";
// import About from "./Screens/About";
// import Services from "./Screens/Services";
// import Gallery from "./Screens/Gallery";
// import Contact from "./Screens/Contact";
import Footer from "./Screens/Footer";
// import Test from "./Screens/Test";
import Agreement from "./Screens/Agreement";
import { Box } from "@mui/material";
import Shops from "./Screens/Shops";
import ShopDetails from "./Screens/ShopDetails";
import Register from "./Screens/Register";
import Login from "./Screens/Login";
import Reservation from "./Screens/Reservation"



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
  {/* <Reservation/> */}
  {/* <Register/> */}

    {/* Page Content */}
    <Box component="main" sx={{ flexGrow: 1 }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tripartite-agreement" element={<Agreement />} />
        <Route path="/contact" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/services" element={<Home />} />
        <Route path="/gallery" element={<Home />} />
      <Route
    path="/shops/:type"
    element={<Shops />}
/>

        {/* <Route path="/test" element={<Test />} /> */}
        <Route
    path="/shop/:shopCode"
    element={<ShopDetails />}
    
/>
<Route path="/register" element={<Register />} />
<Route path="/login" element={<Login />} />
<Route
  path="/reserve/:shopId"
  element={<Reservation />}
/>

      </Routes>
      
    </Box>

    <Footer />
  </Box>
  );
}

