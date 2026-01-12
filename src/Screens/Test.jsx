import { Box, Typography, Grid, Button, Stack, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import StorefrontIcon from "@mui/icons-material/Storefront";
import StarIcon from "@mui/icons-material/Star";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import SecurityIcon from "@mui/icons-material/Security";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import FireExtinguisherIcon from "@mui/icons-material/FireExtinguisher";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { motion } from "framer-motion";

export default function Home() {
  const navigate = useNavigate();

  const sectionImageStyle = {
    width: "100%",
    height: { xs: 220, md: 400 },
    objectFit: "cover",
    borderRadius: 3,
    boxShadow: 3,
    transition: "all 0.4s ease",
    "&:hover": {
      transform: "scale(1.03)",
      boxShadow: 6,
    },
  };

  const pageBackgroundStyle = {
    minHeight: "100vh",
    backgroundImage: 'url("/src/assets/dark-brown.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: { xs: "fixed", md: "fixed" },
  };

  // Common fade-up animation
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const amenities = [
    { icon: <DirectionsWalkIcon />, title: "Wide Walkways", desc: "Spacious paved walkways for easy and safe movement" },
    { icon: <SecurityIcon />, title: "24/7 Security", desc: "Professional surveillance and patrol services" },
    { icon: <FireExtinguisherIcon />, title: "Fire Safety Systems", desc: "Installed fire alarms and emergency exits" },
    { icon: <WaterDropIcon />, title: "Clean Water Supply", desc: "Reliable water access for sanitation and hygiene" },
    { icon: <LocalParkingIcon />, title: "Ample Parking", desc: "Well-organized parking for traders and visitors" },
    { icon: <LocalShippingIcon />, title: "Loading Zones", desc: "Designated areas for smooth loading & offloading" },
  ];

  return (
    <Box sx={pageBackgroundStyle}>
      {/* HERO SECTION */}
      <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.8, ease: "easeOut" }}>
        <Box sx={{ px: { xs: 2, md: 8 }, py: 8, textAlign: "center" }}>
          <Typography variant="h3" fontWeight="bold" gutterBottom color="#da7127">
            Oba International Market Shopping Complex
          </Typography>
          <Typography sx={{ color: "#F5F0EC" }}>A New Landmark of Trade and Comfort</Typography>

          <Box component="img" src="/src/assets/shop4.jpeg" alt="Oba Shopping Complex" sx={sectionImageStyle} />

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center" sx={{ mt: 4 }}>
            <Button variant="contained" size="large" sx={{ bgcolor: "#da7127", px: 4, py: 1.5, fontWeight: "bold", "&:hover": { bgcolor: "#5C2D0C" } }} onClick={() => navigate("/contact")}>
              Buy a Shop
            </Button>
            <Button variant="outlined" size="large" sx={{ px: 4, py: 1.5, fontWeight: "bold", borderColor: "#8B4513", color: "#da7127", "&:hover": { bgcolor: "#da7127", color: "#fff" } }} onClick={() => navigate("/contact")}>
              Contact Us
            </Button>
          </Stack>
        </Box>
      </motion.div>

      <Divider sx={{ my: 6, borderColor: "rgba(139, 69, 19, 0.15)", maxWidth: "85%", mx: "auto" }} />

      {/* SECTION 1 – OVERVIEW */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.8 }}>
        <Grid container spacing={4} justifyContent="center" alignItems="center" px={{ xs: 2, md: 8 }} py={6}>
          <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom color="#da7127" textAlign="center">
              Modern Commerce Redefined
            </Typography>
            <Typography sx={{ color: "#F5F0EC" }}>
              The newly constructed shopping complex at Oba International Market, developed by <strong>Unlimited Resources and Investment Limited</strong> through a <strong>TRIPARTITE AGREEMENT</strong> with the <strong>Anambra State Government</strong> and Burkham Nig. Ltd, stands as a modern architectural marvel and a major boost to commerce in Anambra State.
              <br /><br />
              This expansive facility comprises <strong>1,250 well-designed shops</strong>, purpose-built to support thriving businesses and elevate the trading experience for both sellers and customers.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box component="img" src="/src/assets/shop2.jpeg" alt="Shop layout" sx={sectionImageStyle} />
          </Grid>
        </Grid>
      </motion.div>

      <Divider sx={{ my: 6, borderColor: "rgba(139, 69, 19, 0.15)", maxWidth: "85%", mx: "auto" }} />

      {/* SECTION 2 – SECURITY & ACCESS */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.8 }}>
        <Grid container spacing={4} justifyContent="center" alignItems="center" px={{ xs: 2, md: 8 }} py={6}>
          <Grid item xs={12} md={6}>
            <Box component="img" src="/src/assets/shop4.jpeg" alt="Security" sx={sectionImageStyle} />
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom color="#da7127" textAlign="center">
              Security, Comfort & Accessibility
            </Typography>
            <Typography sx={{ color: "#F5F0EC" }}>
              Each shop is thoughtfully constructed with <strong>personal toilets</strong>, ensuring hygiene and comfort for traders and visitors alike.
              <br /><br />
              The complex operates with <strong>24-hour professional security services</strong>, supported by well-lit corridors, patrol teams, and surveillance systems.
              <br /><br />
              Well-planned entry and exit points, along with ample parking space, ensure smooth traffic flow for motorists and pedestrians.
            </Typography>
          </Grid>
        </Grid>
      </motion.div>

      <Divider sx={{ my: 6, borderColor: "rgba(139, 69, 19, 0.15)", maxWidth: "85%", mx: "auto" }} />

      {/* SECTION 3 – AMENITIES */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.8 }}>
        <Box px={{ xs: 2, md: 8 }} py={8}>
          <Typography variant="h5" fontWeight="bold" gutterBottom color="#da7127" textAlign="center">
            World-Class Amenities
          </Typography>
          <Typography textAlign="center" sx={{ color: "#F5F0EC" }} maxWidth="700px" mx="auto" mb={6}>
            Every detail has been carefully planned to ensure safety, comfort, efficiency, and a pleasant trading experience.
          </Typography>

          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}>
                <Grid container spacing={3}>
                  {amenities.map((item, i) => (
                    <motion.div key={i} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.6 }}>
                      <Grid item xs={12} sm={6} md={6}>
                        <Box sx={{ display: "flex", gap: 2, p: 3, borderRadius: 3, bgcolor: "#fff8f2", boxShadow: 2, transition: "all 0.3s ease", "&:hover": { transform: "translateY(-5px)", boxShadow: 6 } }}>
                          <Box sx={{ color: "#8B4513", fontSize: 36, display: "flex", alignItems: "center" }}>{item.icon}</Box>
                          <Box>
                            <Typography fontWeight="bold" color="#5C2D0C">{item.title}</Typography>
                            <Typography sx={{ color: "#F5F0EC" }} fontSize={14}>{item.desc}</Typography>
                          </Box>
                        </Box>
                      </Grid>
                    </motion.div>
                  ))}
                </Grid>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box component="img" src="/src/assets/shop3.jpeg" alt="Amenities" sx={{ width: "100%", borderRadius: 3, objectFit: "cover", boxShadow: 2, transition: "all 0.4s ease", "&:hover": { transform: "scale(1.03)", boxShadow: 6 } }} />
            </Grid>
          </Grid>
        </Box>
      </motion.div>

      {/* SECTION 4 – CONCLUSION */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.8 }}>
        <Box textAlign="center" px={{ xs: 2, md: 8 }} py={6}>
          <Typography variant="h5" fontWeight="bold" gutterBottom color="#da7127">
            A Vibrant Commercial Hub
          </Typography>
          <Typography sx={{ color: "#F5F0EC" }} maxWidth="900px" mx="auto">
            This development is more than a cluster of shops—it is a vibrant commercial hub that reflects visionary planning, quality construction, and a strong commitment to economic growth.
            <br /><br />
            With its blend of convenience, modern facilities, and strategic location, the Oba International Market Shopping Complex is set to become the preferred destination for traders, shoppers, and investors across the region.
          </Typography>
        </Box>
      </motion.div>

      {/* FINAL CTA & PRICE TIERS */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.8 }}>
        <Box px={{ xs: 2, md: 8 }} py={8}>
          <Typography variant="h5" fontWeight="bold" gutterBottom color="#da7127" textAlign="center">
            Ready to Own a Shop at Oba International Market?
          </Typography>
          <Typography sx={{ color: "#F5F0EC" }} textAlign="center" mb={6}>
            Secure your space in one of Anambra State’s most modern commercial hubs.
          </Typography>

          {/* PRICE TIERS */}
          <Box sx={{ mt: 6 }}>
            <Grid container spacing={4} justifyContent="center" alignItems="stretch">
              {/* Standard, Premium, Executive shops... */}
              {/* ...Keep your existing Box markup for each shop card here, wrapped inside motion.div for fade-in if needed */}
            </Grid>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
}
