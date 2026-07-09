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
import api from "../api/api";

export default function Shops() {
  const { type } = useParams();

  const navigate = useNavigate();

  const [shops, setShops] = useState([]);
  const [shopType, setShopType] = useState("Standard");
  const [loading, setLoading] = useState(true);
const [wing, setWing] = useState("A");
const [keyword, setKeyword] = useState("");
const [media, setMedia] = useState([]);
const fetchMedia = async () => {
  try {
    const res = await api.get("/media");
    setMedia(res.data);
  } catch (err) {
    console.log(err);
  }
};

useEffect(() => {
  fetchMedia();
}, []);

const getMedia = (key) => {
  return (
    media.find(item => item.key === key)?.url ||
    "/Images/poster.jpeg"
  );
  // console.log(shop.image);
};
const searchShop = async () => {
  if (!keyword.trim()) return;

  try {
    // const res = await axios.get(
    //   `http://localhost:5000/api/shops/search?keyword=${keyword}`
    // );
    const res = await api.get(
  `/shops/search?keyword=${keyword}`
);
// console.log(res.data)
    if (res.data.count === 1) {
      navigate(`/shop/${res.data.shops[0].shopCode}`);
    } else {
      setShops(res.data.shops);
      // console.log(res.data.shops)
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

//     useEffect(() => {
//   fetchMedia();
// }, []);

// const fetchMedia = async () => {
//   try {
//     const res = await api.get("/media");
//     setMedia(res.data);
//   } catch (err) {
//     console.log(err);
//   }
// };

// const getMedia = (key) => {
//   return media.find(item => item.key === key)?.url || "/Images/poster.jpeg";
// };

    const shopRes = await api.get(
  `/shops/layout/${shopType}/${wing}/${block}`
);

console.log(shopRes.data.shops[0].image);

setShops(shopRes.data.shops);

    const navRes = await api.get(
  `/shops/navigation/${shopType}/${wing}/${block}`
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
    alignItems: "center",
    mb: 4,
    px: 2,
  }}
>
  <TextField
    value={keyword}
    onChange={(e) => setKeyword(e.target.value)}
    onKeyDown={(e) => {
      if (e.key === "Enter") {
        searchShop();
      }
    }}
    placeholder="Search Shop Code (e.g. SAP-A1-F01)"
    sx={{
      width: {
        xs: "100%",
        sm: 420,
      },
      maxWidth: 420,
    }}
    InputProps={{
      // startAdornment: (
      //   <InputAdornment position="start">
      //     <SearchIcon />
      //   </InputAdornment>
      // ),
      endAdornment: (
        <InputAdornment position="end">
          <IconButton color="primary" onClick={searchShop}>
            <SearchIcon />
          </IconButton>
        </InputAdornment>
      ),
    }}
  />
</Box>

{/* <TextField
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
</Typography> */}

      <Grid
  container
  spacing={4}
  // justifyContent="center"
>
        {shops.map((shop) => (
          <Grid
  size={{
    xs: 12,
    sm: 6,
    md: 6,
    lg: 4,
  }}
  key={shop._id}
>
            {/* <Card
        sx={{
          width: "100%",
          maxWidth: 330,
          borderRadius: 3,
          display: "flex",
          flexDirection: "column",
          transition: ".3s",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: 8,
          },
        }}
      > */}
      {/* <Card
  sx={{
    width: {
      xs: "95%",
      sm: "100%",
    },
    maxWidth: 330,
    borderRadius: 3,
    display: "flex",
    flexDirection: "column",
    transition: ".3s",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: 8,
    },
  }}
> */}

<Card
  sx={{
    width: "100%",
    maxWidth: 420,
    mx: "auto",
    borderRadius: 4,
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    boxShadow: 3,
    bgcolor: "#fff",
    transition: ".3s",
    "&:hover": {
      transform: "translateY(-8px)",
      boxShadow: 8,
    },
  }}
>
              {/* <Box
  component="img"
  src={shop.image }
  sx={{
    height: 220,
    objectFit: "cover",
  }}
/> */}

<Box
  sx={{
    width: "100%",
    height: {
      xs: 220,
      md: 260,
    },
    overflow: "hidden",
    bgcolor: "#f8f8f8",
  }}
>
 <Box
  component="img"
  src={shop.image || getMedia("poster")}
  alt={shop.shopCode}
  sx={{
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    transition: ".4s",
    "&:hover": {
      transform: "scale(1.05)",
    },
  }}
/>
</Box>
              <CardContent
  sx={{
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    gap: 1,
    p: 3,
  }}
>

    <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
    >
        <Typography
            variant="h6"
            fontWeight={700}
        >
            {shop.shopCode}
        </Typography>

        <Chip
            size="small"
            label={shop.status}
            color={
                shop.status === "Available"
                    ? "success"
                    : "error"
            }
        />
    </Box>

    <Typography
        color="text.secondary"
        gutterBottom
    >
        {shop.shopType} Shop
    </Typography>

    <Typography>
        Wing <strong>{shop.location.wing}</strong> • Block{" "}
        <strong>{shop.location.block}</strong>
    </Typography>

    <Typography>
        {shop.location.row} Row
    </Typography>

    <Typography>
        Area: <strong>{shop.area} sqm</strong>
    </Typography>

    <Button
        fullWidth
        variant="contained"
        sx={{
            mt: 3,
            bgcolor: "#D4AF37",
            py: 1.2,
            fontWeight: 700,
        }}
        onClick={() =>
            navigate(`/shop/${shop.shopCode}`)
        }
    >
        View Details
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