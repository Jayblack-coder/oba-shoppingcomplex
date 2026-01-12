import { Box, Typography, Grid } from "@mui/material";

export default function TripartiteAgreement() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        px: { xs: 2, md: 8 },
        py: { xs: 6, md: 10 },
        backgroundColor: "#2B150A", // dark brown theme
      }}
    >
      {/* PAGE TITLE */}
      <Typography
        variant="h4"
        fontWeight="bold"
        textAlign="center"
        mb={2}
        sx={{ color: "#da7127" }}
      >
        Tripartite Agreement
      </Typography>

      <Typography
        textAlign="center"
        maxWidth="800px"
        mx="auto"
        mb={6}
        sx={{ color: "#F5F0EC" }}
      >
        Official tripartite agreement between the Oba International Market
        Shopping Complex developers, traders, and the Anambra State Government.
      </Typography>

      {/* IMAGE GRID */}
      <Grid container spacing={4} justifyContent="center">
        {[
          "/src/assets/agreement1.jpg",
          "/src/assets/agreement2.jpg",
          "/src/assets/agreement3.jpg",
          "/src/assets/agreement4.jpg",
        ].map((img, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box
              component="img"
              src={img}
              alt={`Tripartite Agreement ${index + 1}`}
              sx={{
                width: "100%",
                height: 260,
                objectFit: "cover",
                borderRadius: 3,
                boxShadow: 6,
                transition: "all 0.4s ease",
                "&:hover": {
                  transform: "scale(1.04)",
                  boxShadow: "0 0 25px rgba(218,113,39,0.6)",
                },
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
