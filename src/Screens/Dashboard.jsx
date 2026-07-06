import { useEffect, useState } from "react";
import api from "../api/api";

import {
  Box,
  Grid,
  Paper,
  Typography,
  CircularProgress,
  Alert,
} from "@mui/material";

import {
  Store,
  ShoppingCart,
  People,
  MonetizationOn,
  CheckCircle,
  PendingActions,
} from "@mui/icons-material";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);

  const [stats, setStats] = useState(null);

  const [error, setError] = useState("");

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const admin = JSON.parse(localStorage.getItem("admin"));

const res = await api.get(
  "/dashboard/overview",
  {
    headers: {
      Authorization: `Bearer ${admin.token}`,
    },
  }
);

      setStats(res.data);
    } catch (err) {
      console.log(err);

      setError(
        err.response?.data?.message ||
          "Unable to load dashboard."
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        mt={8}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box p={4}>
        <Alert severity="error">
          {error}
        </Alert>
      </Box>
    );
  }

  const cards = [
    {
      title: "Total Shops",
      value: stats.totalShops,
      icon: <Store fontSize="large" />,
      color: "#1565C0",
    },
    {
      title: "Available Shops",
      value: stats.availableShops,
      icon: <CheckCircle fontSize="large" />,
      color: "#2E7D32",
    },
    {
      title: "Pending Reservations",
      value: stats.pendingReservations,
      icon: (
        <PendingActions fontSize="large" />
      ),
      color: "#ED6C02",
    },
    {
      title: "Sold Shops",
      value: stats.soldShops,
      icon: (
        <ShoppingCart fontSize="large" />
      ),
      color: "#C62828",
    },
    {
      title: "Registered Buyers",
      value: stats.totalBuyers,
      icon: <People fontSize="large" />,
      color: "#6A1B9A",
    },
    {
      title: "Completed Sales",
      value: stats.completedSales,
      icon: (
        <MonetizationOn fontSize="large" />
      ),
      color: "#00897B",
    },
  ];

  return (
    <Box p={4}>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={4}
      >
        Admin Dashboard
      </Typography>

      <Grid container spacing={3}>
        {cards.map((card) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={card.title}
          >
            <Paper
              elevation={4}
              sx={{
                p: 3,
                borderLeft: `6px solid ${card.color}`,
                borderRadius: 3,
              }}
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box>
                  <Typography
                    color="text.secondary"
                  >
                    {card.title}
                  </Typography>

                  <Typography
                    variant="h3"
                    fontWeight="bold"
                  >
                    {card.value}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    color: card.color,
                  }}
                >
                  {card.icon}
                </Box>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Paper
        elevation={4}
        sx={{
          mt: 5,
          p: 4,
          borderRadius: 3,
        }}
      >
        <Typography
          variant="h5"
          gutterBottom
        >
          Business Summary
        </Typography>

        <Typography>
          • Total Shops:{" "}
          <strong>{stats.totalShops}</strong>
        </Typography>

        <Typography>
          • Available Shops:{" "}
          <strong>
            {stats.availableShops}
          </strong>
        </Typography>

        <Typography>
          • Sold Shops:{" "}
          <strong>{stats.soldShops}</strong>
        </Typography>

        <Typography>
          • Reservations Awaiting Approval:{" "}
          <strong>
            {stats.pendingReservations}
          </strong>
        </Typography>

        <Typography>
          • Registered Buyers:{" "}
          <strong>{stats.totalBuyers}</strong>
        </Typography>

        <Typography>
          • Completed Sales:{" "}
          <strong>
            {stats.completedSales}
          </strong>
        </Typography>
      </Paper>
    </Box>
  );
}