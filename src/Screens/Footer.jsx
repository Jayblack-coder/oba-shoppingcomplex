import { Box, Typography, Stack, IconButton, Divider } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { motion } from "framer-motion";
import dark from "../assets/dark.jpg";


export default function Footer() {
  return (
   <Box
  component={motion.footer}
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true }}
  sx={{
    mt: "auto", 
    backgroundImage: `url(${dark})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    py: 4,
  }}
>

      <Divider sx={{ mb: 4, borderColor: "rgba(218,113,39,0.3)" }} />

      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={4}
        justifyContent="space-between"
        alignItems={{ xs: "center", md: "flex-start" }}
      >
        {/* CONTACT */}
        <Box textAlign={{ xs: "center", md: "left" }}>
          <Typography variant="h6" fontWeight="bold" color="#da7127">
            Oba International Market
          </Typography>

          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            justifyContent={{ xs: "center", md: "flex-start" }}
            mt={1}
          >
            <PhoneIcon sx={{ color: "#da7127" }} />
            <Typography fontSize={14}>
              +234 800 000 0000
            </Typography>
          </Stack>
        </Box>

        {/* SOCIALS */}
        <Box textAlign={{ xs: "center", md: "right" }}>
          <Typography variant="h6" fontWeight="bold" color="#da7127">
            Connect With Us
          </Typography>

          <Stack
            direction="row"
            spacing={2}
            justifyContent={{ xs: "center", md: "flex-end" }}
            mt={1}
          >
            <IconButton
  href="https://wa.me/2348000000000"
  target="_blank"
  sx={{
    transition: "all 0.3s ease",
    "&:hover": {
      transform: "translateY(-4px) scale(1.05)",
      boxShadow: "0 0 18px rgba(37, 211, 102, 0.8)",
    },
  }}
>
  <WhatsAppIcon sx={{ color: "#25D366" }} fontSize="large" />
</IconButton>


            <IconButton href="https://facebook.com" target="_blank"
  sx={{
    transition: "all 0.3s ease",
    "&:hover": {
      transform: "translateY(-4px) scale(1.05)",
      boxShadow: "0 0 18px rgba(24, 119, 242, 0.8)",

    },
  }}>
              <FacebookIcon sx={{ color: "#1877F2" }} fontSize="large" />
            </IconButton>

            <IconButton href="https://instagram.com" target="_blank"
  sx={{
    transition: "all 0.3s ease",
    "&:hover": {
      transform: "translateY(-4px) scale(1.05)",
      boxShadow: "0 0 18px rgba(228, 64, 95, 0.8)",

    },
  }}>
              <InstagramIcon sx={{ color: "#E4405F" }} fontSize="large" />
            </IconButton>
          </Stack>
        </Box>
      </Stack>

      {/* COPYRIGHT */}
      <Typography
        textAlign="center"
        fontSize={13}
        sx={{ mt: 4, color: "rgba(245,240,236,0.7)" }}
      >
        © 2026 Ejimographics. All Rights Reserved.
      </Typography>
    </Box>
  );
}
