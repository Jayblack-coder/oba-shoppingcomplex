// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import api from "../api/api";

// import {
//   Box,
//   Paper,
//   Typography,
//   Grid,
//   Divider,
//   Button,
//   CircularProgress,
//   Alert,
// } from "@mui/material";

// export default function Payment() {
//   const { reservationId } = useParams();
//   const navigate = useNavigate();

//   const [buyer, setBuyer] = useState(null);
//   const [reservation, setReservation] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [paying, setPaying] = useState(false);

//   useEffect(() => {
//     const loggedBuyer = JSON.parse(
//       localStorage.getItem("buyer")
//     );

//     if (!loggedBuyer || !loggedBuyer.token) {
//       navigate("/login");
//       return;
//     }

//     setBuyer(loggedBuyer);

//     fetchReservation(loggedBuyer.token);
//   }, []);

//   const fetchReservation = async (token) => {
//     try {
//       const res = await api.get(
//         `/reservations/${reservationId}`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       setReservation(res.data.reservation);
//     } catch (err) {
//       console.log(err);

//       alert(
//         err.response?.data?.message ||
//           "Unable to load reservation."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   const initializePayment = async () => {
//     try {
//       setPaying(true);

//       const res = await api.post(
//         "/payments/initialize",
//         {
//           reservationId,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${buyer.token}`,
//           },
//         }
//       );

//       window.location.href =
//         res.data.authorization_url;

//     } catch (err) {
//       alert(
//         err.response?.data?.message ||
//           "Unable to initialize payment."
//       );
//     } finally {
//       setPaying(false);
//     }
//   };

//   if (loading) {
//     return (
//       <Box
//         display="flex"
//         justifyContent="center"
//         mt={8}
//       >
//         <CircularProgress />
//       </Box>
//     );
//   }

//   if (!reservation) {
//     return (
//       <Typography
//         align="center"
//         mt={6}
//       >
//         Reservation not found.
//       </Typography>
//     );
//   }

//   const shop = reservation.shop;

//   return (
//     <Box
//       maxWidth="1000px"
//       mx="auto"
//       py={5}
//       px={2}
//     >
//       <Typography
//         variant="h3"
//         fontWeight="bold"
//         textAlign="center"
//         mb={5}
//       >
//         Complete Payment
//       </Typography>

//       <Paper
//         elevation={4}
//         sx={{ p: 4 }}
//       >
//         <Alert
//           severity="info"
//           sx={{ mb: 3 }}
//         >
//           Your reservation has been received.
//           Complete your payment below.
//         </Alert>

//         <Typography variant="h5" gutterBottom>
//           Reservation Information
//         </Typography>

//         <Divider sx={{ mb: 3 }} />

//         <Grid container spacing={2}>

//           <Grid item xs={12} md={6}>
//             <Typography>
//               <strong>Reservation No:</strong>
//             </Typography>

//             <Typography>
//               {reservation.reservationNumber}
//             </Typography>
//           </Grid>

//           <Grid item xs={12} md={6}>
//             <Typography>
//               <strong>Shop Code:</strong>
//             </Typography>

//             <Typography>
//               {shop.shopCode}
//             </Typography>
//           </Grid>

//           <Grid item xs={12} md={6}>
//             <Typography>
//               <strong>Shop Type:</strong>
//             </Typography>

//             <Typography>
//               {shop.shopType}
//             </Typography>
//           </Grid>

//           <Grid item xs={12} md={6}>
//             <Typography>
//               <strong>Payment Option:</strong>
//             </Typography>

//             <Typography>
//               {reservation.paymentOption}
//             </Typography>
//           </Grid>

//           <Grid item xs={12}>
//             <Divider sx={{ my: 2 }} />
//           </Grid>

//           <Grid item xs={12}>
//             <Typography
//               variant="h5"
//               color="primary"
//             >
//               Amount Due
//             </Typography>

//             <Typography
//               variant="h4"
//               fontWeight="bold"
//             >
//               ₦
//               {reservation.paymentOption ===
//               "Full"
//                 ? shop.price?.toLocaleString()
//                 : shop.installmentPrice?.toLocaleString()}
//             </Typography>
//           </Grid>

//         </Grid>

//         <Button
//           fullWidth
//           variant="contained"
//           size="large"
//           sx={{
//             mt: 5,
//             bgcolor: "#D4AF37",
//             py: 1.6,
//           }}
//           disabled={paying}
//           onClick={initializePayment}
//         >
//           {paying
//             ? "Redirecting..."
//             : "Proceed to Pay"}
//         </Button>

//       </Paper>
//     </Box>
//   );
// }

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/api";

import {
  Box,
  Paper,
  Typography,
  Grid,
  Divider,
  Button,
  CircularProgress,
  Alert,
} from "@mui/material";

export default function Payment() {
  const { reservationId } = useParams();
  const navigate = useNavigate();

  const [buyer, setBuyer] = useState(null);
  const [reservation, setReservation] = useState(null);

  const [loading, setLoading] = useState(true);
  const [paying, setPaying] = useState(false);

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
  }, [reservationId, navigate]);

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
      console.error(err);

      alert(
        err.response?.data?.message ||
          "Unable to load reservation."
      );

      navigate("/");
    } finally {
      setLoading(false);
    }
  };

  const initializePayment = async () => {
    if (paying) return;

    try {
      setPaying(true);

      const res = await api.post(
        "/payments/initialize",
        {
          reservationId,
        },
        {
          headers: {
            Authorization: `Bearer ${buyer.token}`,
          },
        }
      );

      if (!res.data.authorization_url) {
        throw new Error(
          "Payment URL was not returned."
        );
      }

      window.location.href =
        res.data.authorization_url;
    } catch (err) {
      console.error(err);

      alert(
        err.response?.data?.message ||
          err.message ||
          "Unable to initialize payment."
      );

      setPaying(false);
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

  if (!reservation) {
    return (
      <Typography align="center" mt={6}>
        Reservation not found.
      </Typography>
    );
  }

  const shop = reservation?.shop;

  const amountDue =
    reservation?.paymentOption === "Full"
      ? shop?.price
      : shop?.installmentPrice;

  const reservationBlocked =
    reservation?.status === "Cancelled" ||
    reservation?.status === "Expired";

  const alreadyPaid =
    reservation?.paymentStatus === "Paid";

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
        Complete Payment
      </Typography>

      <Paper
        elevation={4}
        sx={{ p: 4 }}
      >
        {alreadyPaid ? (
          <Alert
            severity="success"
            sx={{ mb: 3 }}
          >
            This reservation has already been
            paid for.
          </Alert>
        ) : reservationBlocked ? (
          <Alert
            severity="error"
            sx={{ mb: 3 }}
          >
            This reservation is no longer
            valid.
          </Alert>
        ) : (
          <Alert
            severity="info"
            sx={{ mb: 3 }}
          >
            Your reservation has been
            received. Complete your payment
            below.
          </Alert>
        )}

        <Typography
          variant="h5"
          gutterBottom
        >
          Reservation Information
        </Typography>

        <Divider sx={{ mb: 3 }} />

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography>
              <strong>
                Reservation No:
              </strong>
            </Typography>

            <Typography>
              {
                reservation?.reservationNumber
              }
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography>
              <strong>Shop Code:</strong>
            </Typography>

            <Typography>
              {shop?.shopCode}
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography>
              <strong>Shop Type:</strong>
            </Typography>

            <Typography>
              {shop?.shopType}
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography>
              <strong>
                Payment Option:
              </strong>
            </Typography>

            <Typography>
              {
                reservation?.paymentOption
              }
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Divider sx={{ my: 2 }} />
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant="h5"
              color="primary"
            >
              Amount Due
            </Typography>

            <Typography
              variant="h4"
              fontWeight="bold"
            >
              ₦
              {amountDue?.toLocaleString()}
            </Typography>
          </Grid>
        </Grid>

        <Button
          fullWidth
          variant="contained"
          size="large"
          sx={{
            mt: 5,
            bgcolor: "#D4AF37",
            py: 1.6,
          }}
          disabled={
            paying ||
            alreadyPaid ||
            reservationBlocked
          }
          onClick={initializePayment}
        >
          {paying
            ? "Connecting to Paystack..."
            : alreadyPaid
            ? "Payment Completed"
            : reservationBlocked
            ? "Reservation Invalid"
            : "Proceed to Pay"}
        </Button>
      </Paper>
    </Box>
  );
}