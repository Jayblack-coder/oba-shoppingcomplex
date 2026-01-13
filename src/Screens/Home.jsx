import { Box, Typography, Grid, Button, Stack,Divider } from "@mui/material";
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
import dark from "../assets/dark.jpg";




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
  // minHeight: "100vh",
  backgroundImage: `url(${dark})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: { xs: "fixed", md: "fixed" },
};
const contentWrapper = {
  maxWidth: "1400px",
  mx: "auto",
  px: { xs: 2, md: 6 },
};


  return (
    <Box
  sx={{
    ...pageBackgroundStyle,
    width: "100vw",
    overflowX: "hidden",
  }}
>


      {/* HERO SECTION */}
      
      <Box sx={{ py: { xs: 6, md: 8 } }}>
        <Box sx={{ px: { xs: 2, md: 8 },  textAlign: "center" }} justifyContent="center"
  alignItems="center"> 
      {/* <Box sx={contentWrapper} py={{ xs: 6, md: 8 }}  textAlign="center" justifyContent="center"
  alignItems="center"> */}


        <Typography variant="h3" fontWeight="bold" gutterBottom color="#da7127">
          Oba International Market Shopping Complex
        </Typography>
        <Typography sx={{ color: "#F5F0EC" }}>

          A New Landmark of Trade and Comfort
        </Typography>

        {/* Hero Image */}
       <Box
  component="img"
  src="/Images/shop4.jpeg"
  alt="Oba Shopping Complex"
  sx={{
    width: "100%",
    height: { xs: 220, md: 400 },
    objectFit: "cover",
    borderRadius: 3,
    boxShadow: 3,
    transition: "all 0.4s ease",
    mt: 4, // <-- add this line for spacing
    "&:hover": {
      transform: "scale(1.03)",
      boxShadow: 6,
    },
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
              bgcolor: "#da7127",
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
              color: "#da7127",
              "&:hover": {
                bgcolor: "#da7127",
                color: "#fff",
              },
            }}
            onClick={() => navigate("/contact")}
          >
            Contact Us
          </Button>
        </Stack>
      </Box>
      </Box>
{/* <Divider sx={{ my: 8, borderColor: "rgba(139, 69, 19, 0.15)", maxWidth: "85%", mx: "auto" }} /> */}
<Divider
  sx={{
    my: { xs: 4, md: 5 },
    borderColor: "rgba(139, 69, 19, 0.15)",
    maxWidth: "85%",
    mx: "auto",
  }}
/>


      {/* SECTION 1 – OVERVIEW */}
      <Box sx={contentWrapper} py={{ xs: 4, md: 5 }}>
      <Grid
  container
  spacing={4}
  justifyContent="center"
  alignItems="center"
  // px={{ xs: 2, md: 8 }}
  // py={{ xs: 4, md: 5 }}
>

  <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

    <Typography variant="h5" fontWeight="bold" gutterBottom color="#da7127" textAlign="center">
      Modern Commerce Redefined
    </Typography>
    <Typography sx={{ color: "#F5F0EC" }}>

      The newly constructed shopping complex at Oba International Market,
            developed by <strong>Unlimited Resources and Investment Limited</strong>, through a <Box
    component="span"
    sx={{
      color: "#da7127",
      fontWeight: "bold",
      cursor: "pointer",
      textDecoration: "underline",
      "&:hover": { color: "#ff8c3a" },
    }}
    onClick={() => navigate("/tripartite-agreement")}
  ><strong>TRIPARTITE AGREEMENT</strong> with the <strong>Anambra State Government,</strong></Box> and Burkham Nig. Ltd,
            stands as a modern architectural marvel and a major boost to commerce
            in Anambra State.
            <br /><br />
            This expansive facility comprises <strong>1,250 well-designed shops</strong>,
            purpose-built to support thriving businesses and elevate the trading
            experience for both sellers and customers.
    </Typography>
  </Grid>

  <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>

    <Box
      component="img"
      src="/Images/shop2.jpeg"
      alt="Shop layout"
      sx={sectionImageStyle}
    />
  </Grid>
</Grid>
</Box>
      {/* <Divider sx={{ my: 8, borderColor: "rgba(139, 69, 19, 0.15)", maxWidth: "85%", mx: "auto" }} /> */}
      <Divider
  sx={{
    my: { xs: 4, md: 5 },
    borderColor: "rgba(139, 69, 19, 0.15)",
    maxWidth: "85%",
    mx: "auto",
  }}
/>


      {/* SECTION 2 – SECURITY & ACCESS */}
      <Box sx={contentWrapper} py={{ xs: 4, md: 5 }}>
      <Grid
  container
  spacing={4}
  justifyContent="center"
  alignItems="center"
  // px={{ xs: 2, md: 8 }}
  // py={{ xs: 4, md: 5 }}
>

  <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>

    <Box
      component="img"
      src="/Images/shop4.jpeg"
      alt="Security"
      sx={sectionImageStyle}
    />
  </Grid>

  <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>

    <Typography variant="h5" fontWeight="bold" gutterBottom color="#da7127" textAlign="center">
      Security, Comfort & Accessibility
    </Typography>
    <Typography sx={{ color: "#F5F0EC" }}>

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
</Box>
{/* <Divider sx={{ my: 8, borderColor: "rgba(139, 69, 19, 0.15)", maxWidth: "85%", mx: "auto" }} /> */}
<Divider
  sx={{
    my: { xs: 4, md: 5 },
    borderColor: "rgba(139, 69, 19, 0.15)",
    maxWidth: "85%",
    mx: "auto",
  }}
/>



      {/* SECTION 3 – AMENITIES */}
      <Box sx={contentWrapper} py={{ xs: 4, md: 5 }}>
{/* <Box px={{ xs: 2, md: 8 }} py={{ xs: 4, md: 5 }} justifyContent="center"> */}
  <Typography
    variant="h5"
    fontWeight="bold"
    gutterBottom
    color="#da7127"
    textAlign="center"
  >
    World-Class Amenities
  </Typography>

  <Typography
    textAlign="center"
    sx={{ color: "#F5F0EC" }}
    maxWidth="700px"
    mx="auto"
    mb={4}
  >
    Every detail has been carefully planned to ensure safety, comfort,
    efficiency, and a pleasant trading experience.
  </Typography>

  <Grid container spacing={4} alignItems="center">
    {/* ICON FEATURES */}
    <Grid item xs={12} md={6}>
      <Grid container spacing={3 } >
        {[
          {
            icon: <DirectionsWalkIcon />,
            title: "Wide Walkways",
            desc: "Spacious paved walkways for easy and safe movement",
          },
          {
            icon: <SecurityIcon />,
            title: "24/7 Security",
            desc: "Professional surveillance and patrol services",
          },
          {
            icon: <FireExtinguisherIcon />,
            title: "Fire Safety Systems",
            desc: "Installed fire alarms and emergency exits",
          },
          {
            icon: <WaterDropIcon />,
            title: "Clean Water Supply",
            desc: "Reliable water access for sanitation and hygiene",
          },
          {
            icon: <LocalParkingIcon />,
            title: "Ample Parking",
            desc: "Well-organized parking for traders and visitors",
          },
          {
            icon: <LocalShippingIcon />,
            title: "Loading Zones",
            desc: "Designated areas for smooth loading & offloading",
          },
        ].map((item, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>

            <Box
              sx={{
                display: "flex",
                gap: 2,
                p: 3,
                borderRadius: 3,
                bgcolor: "#fff8f2",
                boxShadow: 2,
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: 6,
                },
              }}
            >
              <Box
                sx={{
                  color: "#8B4513",
                  fontSize: 36,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {item.icon}
              </Box>

              <Box>
                <Typography fontWeight="bold" color="#5C2D0C">
                  {item.title}
                </Typography>
                <Typography sx={{ color: "#F5F0EC" }} fontSize={14}>
                  {item.desc}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Grid>

    {/* IMAGE */}
    <Grid item xs={12} md={6}>
      <Box
        component="img"
        src="/Images/shop3.jpeg"
        alt="Amenities"
        sx={{
          width: "100%",
          borderRadius: 3,
          objectFit: "cover",
          boxShadow: 2,
          transition: "all 0.4s ease",
          "&:hover": {
            transform: "scale(1.03)",
            boxShadow: 6,
          },
        }}
      />
    </Grid>
  </Grid>
</Box>
{/* </Box> */}
{/* <Divider sx={{ my: 8, borderColor: "rgba(139, 69, 19, 0.15)", maxWidth: "85%", mx: "auto" }} /> */}
<Divider
  sx={{
    my: { xs: 4, md: 5 },
    borderColor: "rgba(139, 69, 19, 0.15)",
    maxWidth: "85%",
    mx: "auto",
  }}
/>

      {/* SECTION 4 – CONCLUSION */}
      <Box sx={contentWrapper} py={{ xs: 4, md: 5 }}>
      <Box
  textAlign="center"
  // px={{ xs: 2, md: 8 }}
  // py={{ xs: 4, md: 5 }}
>

        <Typography variant="h5" fontWeight="bold" gutterBottom color="#da7127">
          A Vibrant Commercial Hub
        </Typography>
        <Typography sx={{ color: "#F5F0EC" }} maxWidth="900px" mx="auto">
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
</Box>
      {/* FINAL CTA & PRICE TIERS */}
      <Box sx={contentWrapper} py={{ xs: 4, md: 5 }}>
      {/* <Box px={{ xs: 2, md: 8 }} py={{ xs: 5, md: 6 }}> */}

        <Typography variant="h5" fontWeight="bold" gutterBottom color="#da7127" textAlign="center">
          Ready to Own a Shop at Oba International Market?
        </Typography>
        <Typography sx={{ color: "#F5F0EC" }} textAlign="center" mb={6}>
          Secure your space in one of Anambra State’s most modern commercial hubs.
        </Typography>

       {/* PRICE TIERS */}
<Box sx={{ mt: 10 }}>
  <Typography
    variant="h4"
    fontWeight="bold"
    textAlign="center"
    gutterBottom color="#da7127"
    // gutterBottom
    
  >
    Shop Categories & Pricing
  </Typography>

  <Typography textAlign="center" sx={{ color: "#F5F0EC" }} mb={6}>
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
          backgroundColor: "#3A1E0F"
,
          // backgroundColor: "#fff8f2",
          transition: "all 0.3s ease",
"&:hover": {
  transform: "translateY(-6px)",
  boxShadow: 8,
},

        }}
      >
        <StorefrontIcon sx={{ fontSize: 50, color: "#8B4513" }} />
        <Typography variant="h6" fontWeight="bold" mt={2} sx={{ color: "#da7127" }}>
          Standard Shop
        </Typography>
        <Typography sx={{ color: "#F5F0EC" }}mt={1}>
          Ideal for small-scale retail businesses
        </Typography>
        <Typography variant="h4" fontWeight="bold" mt={3}>
          ₦3.5M
        </Typography>
        <Typography sx={{ color: "#F5F0EC" }}>One-time payment</Typography>
        <Typography sx={{ color: "#F5F0EC" }} mt={1}>
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
          backgroundColor: "#3A1E0F",

          // backgroundColor: "#fff8f2",
          transition: "all 0.3s ease",
"&:hover": {
  transform: "translateY(-6px)",
  boxShadow: 8,
},

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
        <Typography variant="h6" fontWeight="bold" mt={2} sx={{ color: "#da7127" }}>
          Premium Shop
        </Typography>
        <Typography sx={{ color: "#F5F0EC" }} mt={1}>
          High visibility & heavy foot traffic
        </Typography>
        <Typography variant="h4" fontWeight="bold" mt={3}>
          ₦5.5M
        </Typography>
        <Typography sx={{ color: "#F5F0EC" }}>One-time payment</Typography>
        <Typography sx={{ color: "#F5F0EC" }} mt={1}>
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
          backgroundColor: "#3A1E0F"
,
          transition: "all 0.3s ease",
"&:hover": {
  transform: "translateY(-6px)",
  boxShadow: 8,
},

        }}
      >
        <BusinessCenterIcon sx={{ fontSize: 50, color: "#8B4513" }} />
        <Typography variant="h6" fontWeight="bold" mt={2} sx={{ color: "#da7127" }}>
          Executive Shop
        </Typography>
        <Typography sx={{ color: "#F5F0EC" }} mt={1}>
          Corner shops & flagship locations
        </Typography>
        <Typography variant="h4" fontWeight="bold" mt={3}>
          ₦8.5M
        </Typography>
        <Typography sx={{ color: "#F5F0EC" }}>One-time payment</Typography>
        <Typography sx={{ color: "#F5F0EC" }} mt={1}>
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
    // </Box>
  );
}


