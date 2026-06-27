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
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import CategorySelector from "./Market/CategorySelector";
import SearchIcon from "@mui/icons-material/Search";

export default function Shops() {
  const { type } = useParams();

  const navigate = useNavigate();

  const [shops, setShops] = useState([]);
  const [shopType, setShopType] = useState("Standard");
  const [loading, setLoading] = useState(true);
const [wing, setWing] = useState("A");
const [keyword, setKeyword] = useState("");

const searchShop = async () => {
  if (!keyword.trim()) return;

  try {
    const res = await axios.get(
      `http://localhost:5000/api/shops/search?keyword=${keyword}`
    );

    if (res.data.count === 1) {
      navigate(`/shop/${res.data.shops[0].shopCode}`);
    } else {
      setShops(res.data.shops);
    }
  } catch (err) {
    console.log(err);
    alert("Shop not found");
  }
};
const [block, setBlock] = useState(
  shopType === "Standard"
    ? 1
    : type === "Premium"
    ? 3
    : 5
);

const [navigation, setNavigation] = useState({});

 useEffect(() => {

  setWing("A");

  if (type === "Standard") {
    setBlock(1);
  } else if (type === "Premium") {
    setBlock(3);
  } else {
    setBlock(5);
  }

}, [type]);

useEffect(() => {
  fetchShops();
}, [shopType, wing, block]);

  async function fetchShops() {

  setLoading(true);

  try {

    const shopRes = await axios.get(
  `http://localhost:5000/api/shops/layout/${shopType}/${wing}/${block}`
);

    setShops(shopRes.data.shops);

    const navRes = await axios.get(
      `http://localhost:5000/api/shops/navigation/${shopType}/${wing}/${block}`
    );

    setNavigation(navRes.data);

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
      <CategorySelector
  shopType={shopType}
  setShopType={setShopType}
  setWing={setWing}
  setBlock={setBlock}
/>
     <Typography
  variant="h3"
  fontWeight="bold"
  textAlign="center"
  mb={5}
>
  {shopType} Shops
</Typography>
<Box
  sx={{
    display: "flex",
    justifyContent: "center",
    mb: 4,
  }}
>
  <TextField
    value={keyword}
    onChange={(e) => setKeyword(e.target.value)}
    placeholder="Search Shop Code (e.g. SAP-A1-F01)"
    sx={{ width: 420 }}
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      ),
    }}
  />

  <IconButton
    color="primary"
    onClick={searchShop}
  >
    <SearchIcon />
  </IconButton>
</Box>

<TextField
    value={keyword}
    onChange={(e) => setKeyword(e.target.value)}
    onKeyDown={(e) => {
        if (e.key === "Enter") {
            searchShop();
        }
    }}
/>
<Typography
  textAlign="center"
  color="text.secondary"
  mb={5}
>
  Wing {wing} • Block {block}
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

                {/* <Typography
                  fontWeight="bold"
                  mt={1}
                >
                  ₦{shop.price.toLocaleString()}
                </Typography> */}

{shop.price && (
  <Typography fontWeight="bold">
    ₦{shop.price.toLocaleString()}
  </Typography>
)}
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
      <Box
  display="flex"
  justifyContent="space-between"
  mt={5}
>

  <Button
    variant="outlined"
    disabled={!navigation.previous}
    onClick={() => {

      setWing(navigation.previous.wing);

      setBlock(navigation.previous.block);

    }}
  >
    ← Previous Block
  </Button>

  <Button
    variant="contained"
    disabled={!navigation.next}
    onClick={() => {

      setWing(navigation.next.wing);

      setBlock(navigation.next.block);

    }}
  >
    Next Block →
  </Button>

</Box>
    </Box>
  );
}