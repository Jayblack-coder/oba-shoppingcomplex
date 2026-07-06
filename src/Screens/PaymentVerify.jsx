// import { useEffect, useState } from "react";
// import { useNavigate, useSearchParams } from "react-router-dom";
// import api from "../api/api";

// import {
//   Box,
//   Paper,
//   Typography,
//   CircularProgress,
//   Button,
//   Alert,
// } from "@mui/material";

// export default function PaymentVerify() {
//   const navigate = useNavigate();

//   const [searchParams] = useSearchParams();

//   const reference = searchParams.get("reference");

//   const [loading, setLoading] = useState(true);
//   const [success, setSuccess] = useState(false);
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     verifyPayment();
//   }, []);

//   const verifyPayment = async () => {
//     if (!reference) {
//       setMessage("Payment reference not found.");
//       setLoading(false);
//       return;
//     }

//     try {
//       const res = await api.get(
//         `/payments/verify/${reference}`
//       );

//       setSuccess(true);

//       setMessage(
//         res.data.message ||
//           "Payment completed successfully."
//       );
//     } catch (err) {
//       console.error(err);

//       setSuccess(false);

//       setMessage(
//         err.response?.data?.message ||
//           "Payment verification failed."
//       );
//     } finally {
//       setLoading(false);
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

//   return (
//     <Box
//       maxWidth="700px"
//       mx="auto"
//       mt={8}
//       px={2}
//     >
//       <Paper
//         elevation={4}
//         sx={{ p: 5, textAlign: "center" }}
//       >
//         <Typography
//           variant="h4"
//           fontWeight="bold"
//           mb={3}
//         >
//           Payment Status
//         </Typography>

//         <Alert
//           severity={success ? "success" : "error"}
//           sx={{ mb: 4 }}
//         >
//           {message}
//         </Alert>

//         {success ? (
//           <>
//             <Typography
//               sx={{ mb: 4 }}
//             >
//               Your payment has been verified.

//               <br />

//               Your shop has now been allocated
//               to you.

//               <br />

//               Our management team will contact
//               you shortly.
//             </Typography>

//             <Button
//               variant="contained"
//               sx={{
//                 bgcolor: "#D4AF37",
//               }}
//               onClick={() =>
//                 navigate("/")
//               }
//             >
//               Back to Home
//             </Button>
//           </>
//         ) : (
//           <>
//             <Typography
//               sx={{ mb: 4 }}
//             >
//               We could not verify your payment.

//               <br />

//               If your account has already been
//               debited, kindly contact support.
//             </Typography>

//             <Button
//               variant="contained"
//               color="error"
//               onClick={() =>
//                 navigate("/")
//               }
//             >
//               Back to Home
//             </Button>
//           </>
//         )}
//       </Paper>
//     </Box>
//   );
// }