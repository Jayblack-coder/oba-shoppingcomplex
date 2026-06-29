import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
  Alert,
} from "@mui/material";

import api from "../api/api";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    state: "",
    country: "Nigeria",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (form.password !== form.confirmPassword) {
      return setError("Passwords do not match");
    }

    try {
      setLoading(true);

      const res = await api.post("/buyers/register", {
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        phone: form.phone,
        address: form.address,
        state: form.state,
        country: form.country,
        password: form.password,
      });

      localStorage.setItem("buyer", JSON.stringify(res.data.buyer));
      localStorage.setItem("token", res.data.token);

      navigate("/");
    } catch (err) {
      setError(
        err.response?.data?.message || "Registration failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Paper elevation={4} sx={{ p: 5, borderRadius: 3 }}>
        <Typography
          variant="h4"
          align="center"
          fontWeight="bold"
          mb={4}
        >
          Buyer Registration
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

        <Box
          component="form"
          onSubmit={handleSubmit}
        >
          <TextField
            fullWidth
            label="First Name"
            name="firstName"
            margin="normal"
            value={form.firstName}
            onChange={handleChange}
            required
          />

          <TextField
            fullWidth
            label="Last Name"
            name="lastName"
            margin="normal"
            value={form.lastName}
            onChange={handleChange}
            required
          />

          <TextField
            fullWidth
            type="email"
            label="Email Address"
            name="email"
            margin="normal"
            value={form.email}
            onChange={handleChange}
            required
          />

          <TextField
            fullWidth
            label="Phone Number"
            name="phone"
            margin="normal"
            value={form.phone}
            onChange={handleChange}
            required
          />

          <TextField
            fullWidth
            label="Address"
            name="address"
            margin="normal"
            value={form.address}
            onChange={handleChange}
          />

          <TextField
            fullWidth
            label="State"
            name="state"
            margin="normal"
            value={form.state}
            onChange={handleChange}
          />

          <TextField
            fullWidth
            label="Country"
            name="country"
            margin="normal"
            value={form.country}
            onChange={handleChange}
          />

          <TextField
            fullWidth
            type="password"
            label="Password"
            name="password"
            margin="normal"
            value={form.password}
            onChange={handleChange}
            required
          />

          <TextField
            fullWidth
            type="password"
            label="Confirm Password"
            name="confirmPassword"
            margin="normal"
            value={form.confirmPassword}
            onChange={handleChange}
            required
          />

          <Button
            fullWidth
            variant="contained"
            type="submit"
            disabled={loading}
            sx={{
              mt: 4,
              py: 1.5,
              bgcolor: "#D4AF37",
            }}
          >
            {loading ? "Creating Account..." : "Register"}
          </Button>
        </Box>

        <Typography align="center" mt={3}>
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </Typography>
      </Paper>
    </Container>
  );
}