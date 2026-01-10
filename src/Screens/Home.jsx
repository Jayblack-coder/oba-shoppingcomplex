import { Box, Typography, Grid, Button, Stack,Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import StorefrontIcon from "@mui/icons-material/Storefront";
import StarIcon from "@mui/icons-material/Star";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";



export default function Home() {
  const navigate = useNavigate();

  return (
    <Box sx={{ bgcolor: "#fff8f2" }}>
      {/* HERO SECTION */}
      <Box sx={{ px: { xs: 2, md: 8 }, py: 10, textAlign: "center" }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom color="#5C2D0C">
          Oba International Market Shopping Complex
        </Typography>
        <Typography variant="h6" color="text.secondary">
          A New Landmark of Trade and Comfort
        </Typography>

        {/* Hero Image */}
        <Box
          component="img"
          src="/src/assets/shop4.jpeg"
          alt="Oba Shopping Complex"
          sx={{
            width: "100%",
            height: { xs: 220, md: 400 },
            objectFit: "cover",
            borderRadius: 3,
            mt: 4,
            boxShadow: 3,
          }}
        />

        {/* HERO CTA BUTTONS */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="center"
          sx={{ mt: 4 }}
        >
          <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: "#8B4513",
              px: 4,
              py: 1.5,
              fontWeight: "bold",
              "&:hover": { bgcolor: "#5C2D0C" },
            }}
            onClick={() => navigate("/contact")}
          >
            Buy a Shop
          </Button>

          <Button
            variant="outlined"
            size="large"
            sx={{
              px: 4,
              py: 1.5,
              fontWeight: "bold",
              borderColor: "#8B4513",
              color: "#8B4513",
              "&:hover": {
                bgcolor: "#8B4513",
                color: "#fff",
              },
            }}
            onClick={() => navigate("/contact")}
          >
            Contact Us
          </Button>
        </Stack>
      </Box>
<Divider sx={{ my: 8, borderColor: "rgba(139, 69, 19, 0.15)", maxWidth: "85%", mx: "auto" }} />

      {/* SECTION 1 – OVERVIEW */}
      <Grid container spacing={4} alignItems="center" px={{ xs: 2, md: 8 }} py={6}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" fontWeight="bold" gutterBottom color="#5C2D0C">
            Modern Commerce Redefined
          </Typography>
          <Typography color="text.secondary">
            The newly constructed shopping complex at Oba International Market,
            developed by <strong>Unlimited Resources and Investment Limited</strong>,
            stands as a modern architectural marvel and a major boost to commerce
            in Anambra State.
            <br /><br />
            This expansive facility comprises <strong>1,250 well-designed shops</strong>,
            purpose-built to support thriving businesses and elevate the trading
            experience for both sellers and customers.
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="/src/assets/shop2.jpeg"
            alt="Shop layout"
            sx={{ width: "100%", borderRadius: 3, objectFit: "cover", boxShadow: 2 }}
          />
        </Grid>
      </Grid>
      <Divider sx={{ my: 8, borderColor: "rgba(139, 69, 19, 0.15)", maxWidth: "85%", mx: "auto" }} />

      {/* SECTION 2 – SECURITY & ACCESS */}
      <Grid container spacing={4} alignItems="center" px={{ xs: 2, md: 8 }} py={6}>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="/src/assets/shop4.jpeg"
            alt="Security"
            sx={{ width: "100%", borderRadius: 3, objectFit: "cover", boxShadow: 2 }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h5" fontWeight="bold" gutterBottom color="#5C2D0C">
            Security, Comfort & Accessibility
          </Typography>
          <Typography color="text.secondary">
            Each shop is thoughtfully constructed with <strong>personal toilets</strong>,
            ensuring hygiene and comfort for traders and visitors alike.
            <br /><br />
            The complex operates with <strong>24-hour professional security services</strong>,
            supported by well-lit corridors, patrol teams, and surveillance systems.
            <br /><br />
            Well-planned entry and exit points, along with ample parking space,
            ensure smooth traffic flow for motorists and pedestrians.
          </Typography>
        </Grid>
      </Grid>
<Divider sx={{ my: 8, borderColor: "rgba(139, 69, 19, 0.15)", maxWidth: "85%", mx: "auto" }} />

      {/* SECTION 3 – AMENITIES */}
      <Box px={{ xs: 2, md: 8 }} py={6}>
        <Typography variant="h5" fontWeight="bold" gutterBottom color="#5C2D0C">
          World-Class Amenities
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography color="text.secondary">
              • Wide and paved walkways for easy movement<br />
              • Modern drainage systems to prevent flooding<br />
              • Fire safety installations and emergency exits<br />
              • Clean water supply for drinking and sanitation<br />
              • Designated loading and unloading zones<br />
              • Common relaxation and social areas
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/src/assets/shop3.jpeg"
              alt="Amenities"
              sx={{ width: "100%", borderRadius: 3, objectFit: "cover", boxShadow: 2 }}
            />
          </Grid>
        </Grid>
      </Box>
<Divider sx={{ my: 8, borderColor: "rgba(139, 69, 19, 0.15)", maxWidth: "85%", mx: "auto" }} />

      {/* SECTION 4 – CONCLUSION */}
      <Box textAlign="center" px={{ xs: 2, md: 8 }} py={6}>
        <Typography variant="h5" fontWeight="bold" gutterBottom color="#5C2D0C">
          A Vibrant Commercial Hub
        </Typography>
        <Typography color="text.secondary" maxWidth="900px" mx="auto">
          This development is more than a cluster of shops—it is a vibrant
          commercial hub that reflects visionary planning, quality construction,
          and a strong commitment to economic growth.
          <br /><br />
          With its blend of convenience, modern facilities, and strategic
          location, the Oba International Market Shopping Complex is set to
          become the preferred destination for traders, shoppers, and investors
          across the region.
        </Typography>
      </Box>

      {/* FINAL CTA & PRICE TIERS */}
      <Box px={{ xs: 2, md: 8 }} py={8}>
        <Typography variant="h5" fontWeight="bold" gutterBottom color="#5C2D0C" textAlign="center">
          Ready to Own a Shop at Oba International Market?
        </Typography>
        <Typography color="text.secondary" textAlign="center" mb={6}>
          Secure your space in one of Anambra State’s most modern commercial hubs.
        </Typography>

       {/* PRICE TIERS */}
<Box sx={{ mt: 10 }}>
  <Typography
    variant="h4"
    fontWeight="bold"
    textAlign="center"
    gutterBottom
  >
    Shop Categories & Pricing
  </Typography>

  <Typography textAlign="center" color="text.secondary" mb={6}>
    Choose a shop size that fits your business goals
  </Typography>

  <Grid
    container
    spacing={4}
    justifyContent="center"
    alignItems="stretch" // ensures cards take equal height
  >
    {/* STANDARD SHOP */}
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      display="flex"
      justifyContent="center"
    >
      <Box
        sx={{
          p: 4,
          borderRadius: 3,
          boxShadow: 3,
          textAlign: "center",
          width: "100%",
          maxWidth: 320,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#fff8f2",
        }}
      >
        <StorefrontIcon sx={{ fontSize: 50, color: "#8B4513" }} />
        <Typography variant="h6" fontWeight="bold" mt={2} sx={{ color: "#5C2D0C" }}>
          Standard Shop
        </Typography>
        <Typography color="text.secondary" mt={1}>
          Ideal for small-scale retail businesses
        </Typography>
        <Typography variant="h4" fontWeight="bold" mt={3}>
          ₦3.5M
        </Typography>
        <Typography color="text.secondary">One-time payment</Typography>
        <Typography color="text.secondary" mt={1}>
          Or ₦1.2M x 3 installments
        </Typography>
        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 4, bgcolor: "#8B4513", "&:hover": { bgcolor: "#5C2D0C" } }}
          onClick={() => navigate("/contact")}
        >
          Buy Standard Shop
        </Button>
      </Box>
    </Grid>

    {/* PREMIUM SHOP */}
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      display="flex"
      justifyContent="center"
    >
      <Box
        sx={{
          p: 4,
          borderRadius: 3,
          boxShadow: 6,
          textAlign: "center",
          width: "100%",
          maxWidth: 320,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: "2px solid #8B4513",
          position: "relative",
          backgroundColor: "#fff8f2",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: -14,
            left: "50%",
            transform: "translateX(-50%)",
            bgcolor: "#8B4513",
            color: "white",
            px: 3,
            py: 0.5,
            borderRadius: 5,
            fontSize: 12,
            fontWeight: "bold",
          }}
        >
          MOST POPULAR
        </Box>

        <StarIcon sx={{ fontSize: 50, color: "#8B4513" }} />
        <Typography variant="h6" fontWeight="bold" mt={2} sx={{ color: "#5C2D0C" }}>
          Premium Shop
        </Typography>
        <Typography color="text.secondary" mt={1}>
          High visibility & heavy foot traffic
        </Typography>
        <Typography variant="h4" fontWeight="bold" mt={3}>
          ₦5.5M
        </Typography>
        <Typography color="text.secondary">One-time payment</Typography>
        <Typography color="text.secondary" mt={1}>
          Or ₦2M x 3 installments
        </Typography>
        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 4, bgcolor: "#8B4513", "&:hover": { bgcolor: "#5C2D0C" } }}
          onClick={() => navigate("/contact")}
        >
          Buy Premium Shop
        </Button>
      </Box>
    </Grid>

    {/* EXECUTIVE SHOP */}
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      display="flex"
      justifyContent="center"
    >
      <Box
        sx={{
          p: 4,
          borderRadius: 3,
          boxShadow: 3,
          textAlign: "center",
          width: "100%",
          maxWidth: 320,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#fff8f2",
        }}
      >
        <BusinessCenterIcon sx={{ fontSize: 50, color: "#8B4513" }} />
        <Typography variant="h6" fontWeight="bold" mt={2} sx={{ color: "#5C2D0C" }}>
          Executive Shop
        </Typography>
        <Typography color="text.secondary" mt={1}>
          Corner shops & flagship locations
        </Typography>
        <Typography variant="h4" fontWeight="bold" mt={3}>
          ₦8.5M
        </Typography>
        <Typography color="text.secondary">One-time payment</Typography>
        <Typography color="text.secondary" mt={1}>
          Or ₦3M x 3 installments
        </Typography>
        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 4, bgcolor: "#8B4513", "&:hover": { bgcolor: "#5C2D0C" } }}
          onClick={() => navigate("/contact")}
        >
          Buy Executive Shop
        </Button>
      </Box>
    </Grid>
  </Grid>
</Box>

      </Box>
    </Box>
  );
}
