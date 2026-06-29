import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Alert,
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import api from "../api/api";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
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

    try {
      setLoading(true);

      const res = await api.post("/buyers/login", form);

      localStorage.setItem(
        "buyer",
        JSON.stringify(res.data.buyer)
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      navigate("/");
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{ py: 8 }}
    >
      <Paper
        elevation={4}
        sx={{
          p: 5,
          borderRadius: 3,
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          align="center"
          mb={4}
        >
          Buyer Login
        </Typography>

        {error && (
          <Alert
            severity="error"
            sx={{ mb: 3 }}
          >
            {error}
          </Alert>
        )}

        <Box
          component="form"
          onSubmit={handleSubmit}
        >
          <TextField
            fullWidth
            label="Email Address"
            name="email"
            type="email"
            margin="normal"
            value={form.email}
            onChange={handleChange}
            required
          />

          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            margin="normal"
            value={form.password}
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
            {loading
              ? "Signing In..."
              : "Login"}
          </Button>
        </Box>

        <Typography
          align="center"
          mt={3}
        >
          Don't have an account?{" "}
          <Link to="/register">
            Register
          </Link>
        </Typography>
      </Paper>
    </Container>
  );
}