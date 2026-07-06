import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/api";

import {
  Box,
  Paper,
  Grid,
  Typography,
  TextField,
  Button,
  MenuItem,
  Divider,
  CircularProgress,
  Alert,
  Chip,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

export default function Reservation() {
  const { shopId } = useParams();
  console.log(shopId);
  const navigate = useNavigate();

  const [buyer, setBuyer] = useState(null);
  const [shop, setShop] = useState(null);

  const [paymentOption, setPaymentOption] =
    useState("Full");

  const [notes, setNotes] =
    useState("");

  const [acceptedTerms, setAcceptedTerms] =
    useState(false);

  const [loading, setLoading] =
    useState(true);

  const [submitting, setSubmitting] =
    useState(false);

  useEffect(() => {
    const loggedBuyer = JSON.parse(
      localStorage.getItem("buyer")
    );

    if (!loggedBuyer || !loggedBuyer.token) {
      localStorage.setItem(
        "redirectAfterLogin",
        `/reserve/${shopId}`
      );

      navigate("/login");

      return;
    }

    setBuyer(loggedBuyer);

    fetchShop();
  }, [shopId, navigate]);

  async function fetchShop() {
     console.log("Fetching shop:", shopId);
    try {
      const res = await api.get(
        `/shops/${shopId}`
      );
  console.log(res.data);
      setShop(res.data.shop);
    } catch (err) {
      console.log(err);
    } finally {
       console.log("Finished loading");
      setLoading(false);
    }
  }

 const submitReservation = async () => {
  if (!acceptedTerms) {
    alert("Please accept the reservation terms.");
    return;
  }

  try {
    setSubmitting(true);

    // await api.post(
    //   "/reservations",
    //   {
    //     shopId,
    //     paymentOption,
    //     notes,
    //   },
    //   {
    //     headers: {
    //       Authorization: `Bearer ${buyer.token}`,
    //     },
    //   }
    // );

    // alert("Reservation submitted successfully.");

    // navigate("/");

//     const res = await api.post(
//   "/reservations",
//   {
//     shopId,
//     paymentOption,
//     notes,
//   },
//   {
//     headers: {
//       Authorization: `Bearer ${buyer.token}`,
//     },
//   }
// );

// console.log("Reservation Response:", res);

// alert("Reservation submitted successfully.");

// navigate("/");

const response = await api.post(
  "/reservations",
  {
    shopId,
    paymentOption,
    notes,
  },
  {
    headers: {
      Authorization: `Bearer ${buyer.token}`,
    },
  }
);

alert("Reservation submitted successfully.");

// navigate(
//   `/payment/${response.data.reservation._id}`
// );
navigate(
  `/reservation/${response.data.reservation._id}/instructions`
);

  } catch (err) {
    alert(
      err.response?.data?.message ||
      "Reservation failed."
    );
  } finally {
    setSubmitting(false);
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

if (!shop) {
  return (
    <Typography align="center" mt={5}>
      Shop not found.
    </Typography>
  );
}

if (!buyer) {
  return (
    <Typography align="center" mt={5}>
      Buyer information not found.
    </Typography>
  );
}

    // return (
    //   <Box
    //     display="flex"
    //     justifyContent="center"
    //     mt={8}
    //   >
    //     <CircularProgress />
    //   </Box>
    // );

  return (
    <Box
      maxWidth="1300px"
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
        Shop Reservation
      </Typography>

      <Grid container spacing={4}>

        {/* SHOP */}

        <Grid item xs={12} md={6}>

          <Paper
            elevation={4}
            sx={{ p: 3 }}
          >
            <Typography
              variant="h5"
              fontWeight="bold"
              mb={2}
            >
              Selected Shop
            </Typography>

            <Box
              component="img"
             src={
  shop?.images?.length
    ? shop.images[0]
    : "/Images/shopcomplex.jpeg"
}
              sx={{
                width: "100%",
                height: 280,
                objectFit: "cover",
                borderRadius: 2,
              }}
            />

            <Typography
              mt={3}
              variant="h6"
            >
              {shop?.shopCode}
            </Typography>

            <Chip
              label={shop?.status}
              color="success"
              sx={{ mt: 2 }}
            />

            <Divider sx={{ my: 3 }} />

            <Typography>
              <strong>Type:</strong>{" "}
              {shop?.shopType}
            </Typography>

            <Typography>
              <strong>Wing:</strong>{" "}
              {shop?.location?.wing}
            </Typography>

            <Typography>
              <strong>Block:</strong>{" "}
              {shop?.location?.block}
            </Typography>

            <Typography>
              <strong>Shop:</strong>{" "}
              {/* {shop.location.shopNumber} */}
              {shop?.location?.shopNumber}
            </Typography>

            <Typography>
              <strong>Area:</strong>{" "}
              {shop?.area} sqm
            </Typography>
          </Paper>

        </Grid>

        {/* FORM */}

        <Grid item xs={12} md={6}>

          <Paper
            elevation={4}
            sx={{ p: 3 }}
          >

            <Typography
              variant="h5"
              fontWeight="bold"
              mb={3}
            >
              Reservation Details
            </Typography>

            <Alert
              severity="info"
              sx={{ mb: 3 }}
            >
              You are reserving this shop
              under your registered buyer
              account.
            </Alert>

           <TextField
  fullWidth
  margin="normal"
  label="Buyer Name"
  value={buyer ? `${buyer.firstName} ${buyer.lastName}` : ""}
  disabled
/>

            <TextField
              fullWidth
              margin="normal"
              label="Email"
              // value={buyer.email}
              value={buyer?.email || ""}
              disabled
            />

            <TextField
              fullWidth
              margin="normal"
              label="Phone"
              // value={buyer.phone}
              value={buyer?.phone || ""}
              disabled
            />

            <TextField
              select
              fullWidth
              margin="normal"
              label="Payment Option"
              value={paymentOption}
              onChange={(e) =>
                setPaymentOption(
                  e.target.value
                )
              }
            >
              <MenuItem value="Full">
                Full Payment
              </MenuItem>

              <MenuItem value="Installment">
                Installment
              </MenuItem>
            </TextField>

            <TextField
              fullWidth
              multiline
              rows={5}
              margin="normal"
              label="Special Requests / Notes"
              value={notes}
              onChange={(e) =>
                setNotes(e.target.value)
              }
            />

            <Divider sx={{ my: 3 }} />

            <Typography
              variant="h6"
              gutterBottom
            >
              Reservation Terms
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
            >
              • Reserving a shop does not
              constitute full ownership.

              <br /><br />

              • Reservation is subject to
              verification by Sweet Asouzu
              Plaza Management.

              <br /><br />

              • Payment instructions will be
              communicated after approval.

              <br /><br />

              • False information may result
              in cancellation.
            </Typography>

            <FormControlLabel
              sx={{ mt: 3 }}
              control={
                <Checkbox
                  checked={acceptedTerms}
                  onChange={(e) =>
                    setAcceptedTerms(
                      e.target.checked
                    )
                  }
                />
              }
              label="I agree to the reservation terms."
            />

          <Button
  fullWidth
  variant="contained"
  size="large"
  disabled={
    submitting ||
    !acceptedTerms ||
    shop?.status !== "Available"
  }
  sx={{
    mt: 4,
    bgcolor: "#D4AF37",
    py: 1.6,
  }}
  onClick={submitReservation}
>
  {submitting
    ? "Submitting..."
    : shop?.status === "Available"
    ? "Submit Reservation"
    : "Shop Not Available"}
</Button>

          </Paper>

        </Grid>

      </Grid>
    </Box>
  );
}