import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

export default function CategorySelector({
  shopType,
  setShopType,
  setWing,
  setBlock,
}) {
  const handleChange = (event) => {
    const type = event.target.value;

    setShopType(type);

    // Reset navigation when category changes
    setWing("A");

    if (type === "Standard") {
      setBlock(1);
    } else if (type === "Premium") {
      setBlock(3);
    } else {
      setBlock(5);
    }
  };

  return (
    <Box mb={4}>
      <FormControl fullWidth>
        <InputLabel>Shop Category</InputLabel>

        <Select
          value={shopType}
          label="Shop Category"
          onChange={handleChange}
        >
          <MenuItem value="Standard">
            Standard Shops
          </MenuItem>

          <MenuItem value="Premium">
            Premium Shops
          </MenuItem>

          <MenuItem value="Executive">
            Executive Shops
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}