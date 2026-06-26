import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Chip,
  CircularProgress,
} from "@mui/material";

export default function Shops() {
  const { type } = useParams();

  const navigate = useNavigate();

  const [shops, setShops] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchShops();
  }, [type]);

  async function fetchShops() {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/shops/category/${type}`
      );

      setShops(res.data.shops);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  if (loading)
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 10,
        }}
      >
        <CircularProgress />
      </Box>
    );

  return (
    <Box
      sx={{
        maxWidth: "1400px",
        mx: "auto",
        p: 4,
      }}
    >
      <Typography
        variant="h3"
        fontWeight="bold"
        textAlign="center"
        mb={5}
      >
        {type} Shops
      </Typography>

      <Grid container spacing={4}>
        {shops.map((shop) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={shop._id}
          >
            <Card
              sx={{
                borderRadius: 3,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: ".3s",

                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: 8,
                },
              }}
            >
              <Box
                component="img"
                src={
                  shop.images.length
                    ? shop.images[0]
                    : "/Images/shop4.jpeg"
                }
                sx={{
                  height: 220,
                  objectFit: "cover",
                }}
              />

              <CardContent>

                <Typography
                  variant="h6"
                  fontWeight="bold"
                >
                  {shop.shopCode}
                </Typography>

                <Typography>
  Wing {shop.location.wing}
</Typography>

<Typography>
  Block {shop.location.block}
</Typography>

<Typography>
  {shop.location.row} Row
</Typography>

<Typography>
  Shop {shop.location.shopNumber}
</Typography>
                <Typography mt={2}>
                  Area: {shop.area} sqm
                </Typography>

                <Typography
                  fontWeight="bold"
                  mt={1}
                >
                  ₦{shop.price.toLocaleString()}
                </Typography>

                <Chip
                  label={shop.status}
                  color={
                    shop.status === "Available"
                      ? "success"
                      : "error"
                  }
                  sx={{ mt: 2 }}
                />

                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 3,
                    bgcolor: "#D4AF37",
                  }}
                  onClick={() =>
                    navigate(`/shop/${shop.shopCode}`)
                  }
                >
                  View Shop
                </Button>

              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}