import {
  Box,
  Typography,
  Grid,
  Modal,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState, useEffect } from "react";
import dark from "../assets/dark.jpg"

const images = [
  "/Images/agreement1.jpg",
  "/Images/agreement2.jpg",
  "/Images/agreement3.jpg",
  "/Images/agreement4.jpg",
];

export default function TripartiteAgreement() {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpen = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!open) return;
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <Box
  sx={{
    pt: { xs: 12, md: 16 }, 
    pb: { xs: 10, md: 14 }, 
    backgroundImage: `url(${dark})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  }}
>


      {/* TITLE */}
      <Typography
  variant="h4"
  fontWeight="bold"
  textAlign="center"
  mb={2}
  sx={{
    color: "#da7127",
    animation: "fadeDown 0.8s ease",
  }}
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
        Official tripartite agreement between Unlimited Resources and Investment Ltd, Anambra State Govenment and Burkham Nig. Ltd.
      </Typography>

      {/* IMAGE GRID */}
      <Grid container spacing={4} justifyContent="center">
        {images.map((img, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box
              component="img"
              src={img}
              alt={`Agreement ${index + 1}`}
              onClick={() => handleOpen(index)}
              sx={{
                width: "100%",
                height: 260,
                objectFit: "cover",
                borderRadius: 3,
                boxShadow: 6,
                cursor: "pointer",
                transition: "all 0.35s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 0 30px rgba(218,113,39,0.6)",
                },
              }}
            />
          </Grid>
        ))}
      </Grid>

      {/* LIGHTBOX MODAL */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "fixed",
            inset: 0,
            bgcolor: "rgba(0,0,0,0.92)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* CLOSE */}
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 20,
              right: 20,
              color: "#fff",
              bgcolor: "rgba(255,255,255,0.1)",
              "&:hover": { bgcolor: "#da7127" },
            }}
          >
            <CloseIcon />
          </IconButton>

          {/* PREVIOUS */}
          <IconButton
            onClick={handlePrev}
            sx={{
              position: "absolute",
              left: { xs: 10, md: 40 },
              color: "#fff",
              bgcolor: "rgba(255,255,255,0.1)",
              "&:hover": { bgcolor: "#da7127" },
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>

          {/* IMAGE */}
          <Box
            component="img"
            src={images[currentIndex]}
            alt="Agreement Full View"
            sx={{
              maxWidth: "95%",
              maxHeight: "90vh",
              objectFit: "contain",
              borderRadius: 2,
              animation: "zoomIn 0.4s ease",
            }}
          />

          {/* NEXT */}
          <IconButton
            onClick={handleNext}
            sx={{
              position: "absolute",
              right: { xs: 10, md: 40 },
              color: "#fff",
              bgcolor: "rgba(255,255,255,0.1)",
              "&:hover": { bgcolor: "#da7127" },
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>

          {/* ZOOM ANIMATION */}
          <style>
            {`
              @keyframes zoomIn {
                from {
                  transform: scale(0.85);
                  opacity: 0;
                }
                to {
                  transform: scale(1);
                  opacity: 1;
                }
              }
            `}
          </style>
        </Box>
      </Modal>
    </Box>
  );
}
