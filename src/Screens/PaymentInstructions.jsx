import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/api";

import {
  Alert,
  Box,
  Button,
  Chip,
  CircularProgress,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";

import ContentCopyIcon from "@mui/icons-material/ContentCopy";

export default function PaymentInstructions() {
  const { reservationId } = useParams();

  const navigate = useNavigate();

  const [buyer, setBuyer] = useState(null);
  const [reservation, setReservation] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loggedBuyer = JSON.parse(
      localStorage.getItem("buyer")
    );

    if (!loggedBuyer || !loggedBuyer.token) {
      navigate("/login");
      return;
    }

    setBuyer(loggedBuyer);

    fetchReservation(loggedBuyer.token);
  }, []);

  const fetchReservation = async (token) => {
    try {
      const res = await api.get(
        `/reservations/${reservationId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setReservation(res.data.reservation);
    } catch (err) {
      alert(
        err.response?.data?.message ||
          "Unable to load reservation."
      );
    } finally {
      setLoading(false);
    }
  };

  const copyAccountNumber = async () => {
    await navigator.clipboard.writeText(
      "0123456789"
    );

    alert("Account number copied.");
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

  if (!reservation) {
    return (
      <Typography
        align="center"
        mt={8}
      >
        Reservation not found.
      </Typography>
    );
  }

  const shop = reservation.shop;

  const totalPrice = shop.price;

  const amountDue =
    reservation.paymentOption === "Full"
      ? totalPrice
      : shop.installmentPrice;

  const outstanding =
    reservation.paymentOption === "Installment"
      ? totalPrice - shop.installmentPrice
      : 0;

  return (
    <Box
      maxWidth="1000px"
      mx="auto"
      py={5}
      px={2}
    >
      <Typography
        variant="h3"
        fontWeight="bold"
        textAlign="center"
        mb={5}
      >
        Payment Instructions
      </Typography>

      <Paper
        elevation={4}
        sx={{ p: 4 }}
      >
        <Alert
          severity="success"
          sx={{ mb: 4 }}
        >
          Your reservation has been created successfully.
          Kindly complete your payment using the
          bank details below.
        </Alert>

        <Typography
          variant="h5"
          gutterBottom
        >
          Reservation Details
        </Typography>

        <Divider sx={{ mb: 3 }} />

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography fontWeight="bold">
              Reservation Number
            </Typography>

            <Typography>
              {reservation.reservationNumber}
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography fontWeight="bold">
              Shop Code
            </Typography>

            <Typography>
              {shop.shopCode}
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography fontWeight="bold">
              Shop Type
            </Typography>

            <Typography>
              {shop.shopType}
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography fontWeight="bold">
              Payment Option
            </Typography>

            <Typography>
              {reservation.paymentOption}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Divider sx={{ my: 2 }} />
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant="h6"
              color="primary"
            >
              Amount Due
            </Typography>

            <Typography
              variant="h4"
              fontWeight="bold"
            >
              ₦{amountDue.toLocaleString()}
            </Typography>
          </Grid>

          {reservation.paymentOption ===
            "Installment" && (
            <Grid item xs={12}>
              <Typography
                variant="h6"
                color="error"
              >
                Outstanding Balance
              </Typography>

              <Typography
                variant="h5"
                fontWeight="bold"
              >
                ₦
                {outstanding.toLocaleString()}
              </Typography>
            </Grid>
          )}
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Typography
          variant="h5"
          gutterBottom
        >
          Bank Payment Details
        </Typography>

        <Paper
          variant="outlined"
          sx={{
            p: 3,
            bgcolor: "#fafafa",
          }}
        >
          <Typography fontWeight="bold">
            Bank
          </Typography>

          <Typography mb={2}>
            UBA PLC
          </Typography>

          <Typography fontWeight="bold">
            Account Name
          </Typography>

          <Typography mb={2}>
            ULIMITED RESOURCES AND INVESTMENT LIMITED
          </Typography>

          <Typography fontWeight="bold">
            Account Number
          </Typography>

          <Box
            display="flex"
            alignItems="center"
            gap={2}
            mb={2}
          >
            <Typography>
              1030447557
            </Typography>

            <Button
              size="small"
              startIcon={
                <ContentCopyIcon />
              }
              onClick={copyAccountNumber}
            >
              Copy
            </Button>
          </Box>
        </Paper>

         <Paper
          variant="outlined"
          sx={{
            p: 3,
            bgcolor: "#fafafa",
          }}
        >
          <Typography fontWeight="bold">
            Bank
          </Typography>

          <Typography mb={2}>
            ZENITH BANK PLC
          </Typography>

          <Typography fontWeight="bold">
            Account Name
          </Typography>

          <Typography mb={2}>
            ULIMITED RESOURCES AND INVESTMENT LIMITED
          </Typography>

          <Typography fontWeight="bold">
            Account Number
          </Typography>

          <Box
            display="flex"
            alignItems="center"
            gap={2}
            mb={2}
          >
            <Typography>
              1225753948
            </Typography>

            <Button
              size="small"
              startIcon={
                <ContentCopyIcon />
              }
              onClick={copyAccountNumber}
            >
              Copy
            </Button>
          </Box>
        </Paper>

        <Divider sx={{ my: 4 }} />

        <Typography
          variant="h5"
          gutterBottom
        >
          Next Steps
        </Typography>

        <Typography paragraph>
          1. Transfer the amount due to the
          account above.
        </Typography>

        <Typography paragraph>
          2. Use your Reservation Number as
          the payment narration.
        </Typography>

        <Typography paragraph>
          3. Send your payment evidence via
          WhatsApp or call the contact below.
        </Typography>

       <Divider sx={{ my: 4 }} />

<Typography
  variant="h5"
  gutterBottom
>
  Contact Information
</Typography>

<Typography paragraph>
  <strong>Management Office:</strong><br />
  <a href="tel:+2349162580000.">
    +234 916 258 0000
  </a>
  <br />
  <a href="https://wa.me/2349162580000">
    WhatsApp Chat
  </a>
</Typography>

<Typography paragraph>
  <strong>Landlord (Price Negotiation):</strong><br />
  <a href="tel:+2349162590000">
    +234 916 259 0000
  </a>
</Typography>

<Typography paragraph>
  For any negotiation regarding the purchase price or payment
  flexibility, kindly contact the landlord directly. For payment
  confirmation, reservation enquiries, or documentation, contact
  the Sweet Asouzu Plaza Management Office.
</Typography>

        <Typography paragraph>
          Your reservation remains
          <Chip
            label="Pending"
            color="warning"
            size="small"
            sx={{ mx: 1 }}
          />
          until payment is confirmed by
          management.
        </Typography>

        <Box
          display="flex"
          gap={2}
          mt={5}
        >
          <Button
            fullWidth
            variant="contained"
            onClick={() => navigate("/")}
            sx={{
              bgcolor: "#D4AF37",
            }}
          >
            Return Home
          </Button>

          <Button
            fullWidth
            variant="outlined"
            onClick={() =>
              window.print()
            }
          >
            Print Instructions
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}