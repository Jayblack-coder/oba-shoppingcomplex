import { Box, Typography, Grid } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{ px: { xs: 2, md: 8 }, py: 6 }}>
      
      {/* HERO SECTION */}
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
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
          }}
        />
      </Box>

      {/* SECTION 1 – OVERVIEW */}
      <Grid container spacing={4} alignItems="center" mb={6}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
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
            sx={{
              width: "100%",
              borderRadius: 3,
              objectFit: "cover",
            }}
          />
        </Grid>
      </Grid>

      {/* SECTION 2 – SECURITY & ACCESS */}
      <Grid container spacing={4} alignItems="center" mb={6}>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="/src/assets/shop4.jpeg"
            alt="Security"
            sx={{
              width: "100%",
              borderRadius: 3,
              objectFit: "cover",
            }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
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

      {/* SECTION 3 – AMENITIES */}
      <Box mb={6}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
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
              src="/src/assets/shop5.jpeg"
              alt="Amenities"
              sx={{
                width: "100%",
                borderRadius: 3,
                objectFit: "cover",
              }}
            />
          </Grid>
        </Grid>
      </Box>

      {/* SECTION 4 – CONCLUSION */}
      <Box textAlign="center">
        <Typography variant="h5" fontWeight="bold" gutterBottom>
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

    </Box>
  );
}
