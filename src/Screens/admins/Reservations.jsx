import { useEffect, useState } from "react";
import api from "../../api/api";

import {
  Box,
  Typography,
  CircularProgress,
  Alert,
  Snackbar,
} from "@mui/material";

import ReservationFilters from "../../components/ReservationFilters";
import ReservationTable from "../../components/ReservationTable";
import ReservationDetailsDialog from "../../components/ReservationDetailsDialog";

import { useNavigate } from "react-router-dom";

export default function Reservations() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const [reservations, setReservations] = useState([]);

  const [filters, setFilters] = useState({
    search: "",
    status: "",
    paymentOption: "",
  });

  const [error, setError] = useState("");

  const [success, setSuccess] = useState("");
  const [selectedReservation, setSelectedReservation] = useState(null);

const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    fetchReservations();
  }, [filters]);

  const fetchReservations = async () => {
    try {
      setLoading(true);

      const admin = JSON.parse(
        localStorage.getItem("admin")
      );

      const res = await api.get(
        "/reservations/admin",
        {
          headers: {
            Authorization: `Bearer ${admin.token}`,
          },
          params: filters,
        }
      );

      setReservations(res.data.reservations);
    } catch (err) {
      console.log(err);

      setError(
        err.response?.data?.message ||
          "Unable to load reservations."
      );
    } finally {
      setLoading(false);
    }
  };

 const handleView = (id) => {
    setSelectedReservation(id);
    setDialogOpen(true);
};
  const handleApprove = async (id) => {
    try {
      const admin = JSON.parse(
        localStorage.getItem("admin")
      );

      await api.patch(
        `/reservations/${id}/approve`,
        {},
        {
          headers: {
            Authorization: `Bearer ${admin.token}`,
          },
        }
      );

      setSuccess("Reservation approved.");

      fetchReservations();
    } catch (err) {
      console.log(err);

      setError(
        err.response?.data?.message ||
          "Approval failed."
      );
    }
  };

  const handleCancel = async (id) => {
    try {
      const admin = JSON.parse(
        localStorage.getItem("admin")
      );

      await api.patch(
        `/reservations/${id}/cancel`,
        {},
        {
          headers: {
            Authorization: `Bearer ${admin.token}`,
          },
        }
      );

      setSuccess("Reservation cancelled.");

      fetchReservations();
    } catch (err) {
      console.log(err);

      setError(
        err.response?.data?.message ||
          "Cancellation failed."
      );
    }
  };

  const resetFilters = () => {
    setFilters({
      search: "",
      status: "",
      paymentOption: "",
    });
  };

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        mt={10}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box p={4}>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={3}
      >
        Reservation Management
      </Typography>

      <ReservationFilters
        filters={filters}
        onChange={setFilters}
        onReset={resetFilters}
      />

      {error && (
        <Alert
          severity="error"
          sx={{ mb: 3 }}
        >
          {error}
        </Alert>
      )}

      <ReservationTable
        reservations={reservations}
        onView={handleView}
        onApprove={handleApprove}
        onCancel={handleCancel}
      />

      <Snackbar
        open={Boolean(success)}
        autoHideDuration={3000}
        onClose={() => setSuccess("")}
        message={success}
      />
      <ReservationDetailsDialog
    open={dialogOpen}
    reservationId={selectedReservation}
    onClose={() => setDialogOpen(false)}
    onApprove={handleApprove}
    onCancel={handleCancel}
/>
    </Box>
  );
}