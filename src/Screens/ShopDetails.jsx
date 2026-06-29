import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import axios from "axios";

import {
  Box,
  Grid,
  Typography,
  Chip,
  Button,
  Paper,
  Divider,
  CircularProgress,
  Stack,
} from "@mui/material";
import api from "../api/api";
import { useNavigate } from "react-router-dom";

export default function ShopDetails() {
  const { shopCode } = useParams();
const navigate = useNavigate();
  const [shop, setShop] = useState(null);
  const [loading, setLoading] = useState(true);

 
  useEffect(() => {
    fetchShop();
  }, [shopCode]);

  async function fetchShop() {
    try {
      const res = await api.get(
  `/shops/code/${shopCode}`
      );

      setShop(res.data.shop);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

   const handleReserve = () => {
  const buyer = JSON.parse(
    localStorage.getItem("buyer")
  );

  if (!buyer) {
    // Remember where the user was
    localStorage.setItem(
      "redirectAfterLogin",
      `/shop/${shop.shopCode}`
    );

    navigate("/login");
    return;
  }

  navigate(`/reserve/${shop._id}`);
};

  if (loading)
    return (
      <Box
        display="flex"
        justifyContent="center"
        mt={10}
      >
        <CircularProgress />
      </Box>
    );

  if (!shop)
    return (
      <Typography align="center" mt={8}>
        Shop not found
      </Typography>
    );


  return (
    <Box
      maxWidth="1400px"
      mx="auto"
      p={4}
    >
      <Grid container spacing={5}>
        {/* LEFT */}

        <Grid item xs={12} md={7}>
          <Paper
            elevation={4}
            sx={{ overflow: "hidden" }}
          >
            <Box
              component="img"
              src={
                shop.images.length
                  ? shop.images[0]
                  : "/Images/shopcomplex.jpeg"
              }
              sx={{
                width: "100%",
                height: 500,
                objectFit: "cover",
              }}
            />
          </Paper>

          {/* Gallery */}

          <Stack
            direction="row"
            spacing={2}
            mt={2}
          >
            {shop.images.map((image, index) => (
              <Box
                key={index}
                component="img"
                src={image}
                sx={{
                  width: 90,
                  height: 90,
                  objectFit: "cover",
                  borderRadius: 2,
                }}
              />
            ))}
          </Stack>
        </Grid>

        {/* RIGHT */}

        <Grid item xs={12} md={5}>
          <Typography
            variant="h4"
            fontWeight="bold"
          >
            {shop.shopCode}
          </Typography>

          <Chip
            sx={{ mt: 2 }}
            color={
              shop.status === "Available"
                ? "success"
                : "error"
            }
            label={shop.status}
          />

          {shop.price && (
  <Typography fontWeight="bold">
    ₦{shop.price.toLocaleString()}
  </Typography>
)}

{shop.installmentPrice && (
  <Typography>
    Installment: ₦{shop.installmentPrice.toLocaleString()}
  </Typography>
)}
          <Divider sx={{ my: 4 }} />

          <Typography variant="h6">
            Location
          </Typography>

          <Typography>
            Wing {shop.location.wing}
          </Typography>

          <Typography>
            Block {shop.location.block}
          </Typography>

          <Typography>
            {shop.location.row} Facing
          </Typography>

          <Typography>
            Shop {shop.location.shopNumber}
          </Typography>

          <Divider sx={{ my: 4 }} />

          <Typography variant="h6">
            Specifications
          </Typography>

          <Typography>
            Type: {shop.shopType}
          </Typography>

          <Typography>
            Length: {shop.length}m
          </Typography>

          <Typography>
            Width: {shop.width}m
          </Typography>

          <Typography>
            Area: {shop.area} sqm
          </Typography>

          <Divider sx={{ my: 4 }} />

          <Typography variant="h6">
            Description
          </Typography>

          <Typography mt={2}>
            {shop.description ||
              "No description available."}
          </Typography>

          <Divider sx={{ my: 4 }} />

          <Typography variant="h6">
            Features
          </Typography>

          <Box mt={2}>
            {shop.features.length ? (
              shop.features.map((feature) => (
                <Chip
                  key={feature}
                  label={feature}
                  sx={{ mr: 1, mb: 1 }}
                />
              ))
            ) : (
              <Typography>
                No features added.
              </Typography>
            )}
          </Box>

          {/* <Button
            fullWidth
            variant="contained"
            size="large"
            sx={{
              mt: 5,
              bgcolor: "#D4AF37",
              py: 1.8,
            }}
            disabled={shop.status !== "Available"}
          > */}
          <Button
  fullWidth
  variant="contained"
  size="large"
  sx={{
    mt: 5,
    bgcolor: "#D4AF37",
    py: 1.8,
  }}
  disabled={shop.status !== "Available"}
  onClick={handleReserve}
>
            {shop.status === "Available"
              ? "Reserve This Shop"
              : "Unavailable"}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}