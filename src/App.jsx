import { Routes, Route } from "react-router-dom";
import Navbar from "./Screens/Navbar";
import Home from "./Screens/Home";
import About from "./Screens/About";
import Gallery from "./Screens/Gallery";
import Contact from "./Screens/Contact";
import Footer from "./Screens/Footer";
import Agreement from "./Screens/Agreement";
import { Box } from "@mui/material";
import Shops from "./Screens/Shops";
import ShopDetails from "./Screens/ShopDetails";
import Register from "./Screens/Register";
import Login from "./Screens/Login";
import Reservation from "./Screens/Reservation";
import PaymentInstructions from "./Screens/PaymentInstructions";
import Dashboard from "./Screens/admins/Dashboard";
import AdminProtectedRoute from "./Screens/ProtectedRoutes/AdminProtectedRoute";
import Reservations from "./Screens/admins/Reservations";
import MediaManager from "./Screens/admins/MediaManager";
import ShopInformation from "./Screens/ShopInformation";

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

      <Box component="main" sx={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tripartite-agreement" element={<Agreement />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />

          {/* Shop information / marketing page */}
          <Route path="/shop-information" element={<ShopInformation />} />

          {/* Shop listing by type */}
          <Route path="/shops/:type" element={<Shops />} />

          {/* Individual shop details */}
          <Route path="/shop/:shopCode" element={<ShopDetails />} />

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin/login" element={<Login />} />

          <Route path="/reserve/:shopId" element={<Reservation />} />

          <Route
            path="/reservation/:reservationId/instructions"
            element={<PaymentInstructions />}
          />

          <Route
            path="/admin/dashboard"
            element={
              <AdminProtectedRoute>
                <Dashboard />
              </AdminProtectedRoute>
            }
          />

          <Route
            path="/admin/reservations"
            element={
              <AdminProtectedRoute>
                <Reservations />
              </AdminProtectedRoute>
            }
          />

          <Route
            path="/admin/media"
            element={
              <AdminProtectedRoute>
                <MediaManager />
              </AdminProtectedRoute>
            }
          />
        </Routes>
      </Box>

      <Footer />
    </Box>
  );
}