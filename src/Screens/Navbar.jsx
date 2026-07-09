import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

const navItems = [
  { label: "About Us", path: "/about" },
  { label: "Our Services", path: "/services" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleNavigate = (path) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          bgcolor: "#5C2D0C", // dark brown background
          color: "#fff8f2", // soft white text
          boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
          width: "100%",
        }}
      >
        <Toolbar>
          {/* Brand / Logo */}
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, cursor: "pointer", fontWeight: 700, color: "#D4AF37",
    textShadow: "0 0 14px rgba(212,175,55,0.4)" }}
            onClick={() => navigate("/")}
          >
            Anambra International Market
          </Typography>

        {/* Desktop Menu */}
<Box
  sx={{
    display: { xs: "none", md: "flex" },
    alignItems: "center",
    gap: 1,
  }}
>
  {navItems.map((item) => (
    <Button
      key={item.label}
      onClick={() => navigate(item.path)}
      sx={{
        color: "#D4AF37",
        fontWeight: 600,
        "&:hover": {
          bgcolor: "#8B4513",
          color: "#fff8f2",
        },
      }}
    >
      {item.label}
    </Button>
  ))}

  {/* Buyer Login */}
  <Button
    variant="outlined"
    onClick={() => navigate("/login")}
    sx={{
      ml: 2,
      color: "#D4AF37",
      borderColor: "#D4AF37",
      "&:hover": {
        borderColor: "#fff8f2",
        color: "#fff8f2",
      },
    }}
  >
    Login
  </Button>

  {/* Admin Login */}
  <Button
    variant="contained"
    onClick={() => navigate("/admin/login")}
    sx={{
      bgcolor: "#D4AF37",
      color: "#5C2D0C",
      fontWeight: "bold",
      ml: 1,
      "&:hover": {
        bgcolor: "#c79f24",
      },
    }}
  >
    Admin
  </Button>
</Box>
          {/* Mobile Menu Icon */}
          <IconButton
            sx={{ display: { xs: "block", md: "none" }, color: "#D4AF37" }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 250, bgcolor: "#5C2D0C", height: "100%" }}>
         <List>
  {navItems.map((item) => (
    <ListItem
      button
      key={item.label}
      onClick={() => handleNavigate(item.path)}
      sx={{
        "&:hover": {
          bgcolor: "#8B4513",
        },
      }}
    >
      <ListItemText
        primary={item.label}
        sx={{
          color: "#D4AF37",
        }}
      />
    </ListItem>
  ))}

  <ListItem
  button
  onClick={() => handleNavigate("/login")}
>
  <ListItemText
    primary="Buyer Login"
    sx={{ color: "#D4AF37" }}
  />
</ListItem>

<ListItem
  button
  onClick={() => handleNavigate("/admin/login")}
>
  <ListItemText
    primary="Admin Login"
    sx={{ color: "#D4AF37" }}
  />
</ListItem>
</List>
        </Box>
      </Drawer>
    </>
  );
}
