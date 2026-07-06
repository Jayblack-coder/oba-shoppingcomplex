// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import {
//   Alert,
//   Box,
//   Button,
//   Container,
//   Paper,
//   TextField,
//   Typography,
// } from "@mui/material";
// // import { useNavigate } from "react-router-dom";

// import api from "../api/api";

// export default function Login() {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
// // const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setError("");

//     try {
//       setLoading(true);

//       const res = await api.post("/buyers/login", form);

//       // localStorage.setItem(
//       //   "buyer",
//       //   JSON.stringify(res.data.buyer)
//       // );

//       // localStorage.setItem(
//       //   "token",
//       //   res.data.token
//       // );

//       localStorage.setItem(
//   "buyer",
//   JSON.stringify({
//     ...res.data.buyer,
//     token: res.data.token,
//   })
// );
// //       const redirect =
// //   localStorage.getItem(
// //     "redirectAfterLogin"
// //   );

// // if (redirect) {
// //   localStorage.removeItem(
// //     "redirectAfterLogin"
// //   );

// //   navigate(redirect);

// //   return;
// // }

// // navigate("/");
      
// const redirect = localStorage.getItem(
//   "redirectAfterLogin"
// );

// if (redirect) {
//   localStorage.removeItem(
//     "redirectAfterLogin"
//   );

//   navigate(redirect);
// } else {
//   navigate("/");
// }

//     } catch (err) {
//       setError(
//         err.response?.data?.message ||
//           "Login failed"
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Container
//       maxWidth="sm"
//       sx={{ py: 8 }}
//     >
//       <Paper
//         elevation={4}
//         sx={{
//           p: 5,
//           borderRadius: 3,
//         }}
//       >
//         <Typography
//           variant="h4"
//           fontWeight="bold"
//           align="center"
//           mb={4}
//         >
//           Buyer Login
//         </Typography>

//         {error && (
//           <Alert
//             severity="error"
//             sx={{ mb: 3 }}
//           >
//             {error}
//           </Alert>
//         )}

//         <Box
//           component="form"
//           onSubmit={handleSubmit}
//         >
//           <TextField
//             fullWidth
//             label="Email Address"
//             name="email"
//             type="email"
//             margin="normal"
//             value={form.email}
//             onChange={handleChange}
//             required
//           />

//           <TextField
//             fullWidth
//             label="Password"
//             name="password"
//             type="password"
//             margin="normal"
//             value={form.password}
//             onChange={handleChange}
//             required
//           />

//           <Button
//             fullWidth
//             variant="contained"
//             type="submit"
//             disabled={loading}
//             sx={{
//               mt: 4,
//               py: 1.5,
//               bgcolor: "#D4AF37",
//             }}
//           >
//             {loading
//               ? "Signing In..."
//               : "Login"}
//           </Button>
//         </Box>

//         <Typography
//           align="center"
//           mt={3}
//         >
//           Don't have an account?{" "}
//           <Link to="/register">
//             Register
//           </Link>
//         </Typography>
//       </Paper>
//     </Container>
//   );
// }

import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

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
  const location = useLocation();

  // Are we on /admin/login ?
  const isAdminLogin = location.pathname.startsWith("/admin");

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

    setLoading(true);
    setError("");

    try {
      //------------------------------------------------------
      // ADMIN LOGIN
      //------------------------------------------------------

      if (isAdminLogin) {
        const res = await api.post(
          "/admins/login",
          form
        );

        localStorage.setItem(
          "admin",
          JSON.stringify({
            ...res.data.admin,
            token: res.data.token,
          })
        );

        navigate("/admin/dashboard");
      }

      //------------------------------------------------------
      // BUYER LOGIN
      //------------------------------------------------------

      else {
        const res = await api.post(
          "/buyers/login",
          form
        );

        localStorage.setItem(
          "buyer",
          JSON.stringify({
            ...res.data.buyer,
            token: res.data.token,
          })
        );

        const redirect =
          localStorage.getItem(
            "redirectAfterLogin"
          );

        if (redirect) {
          localStorage.removeItem(
            "redirectAfterLogin"
          );

          navigate(redirect);
        } else {
          navigate("/");
        }
      }
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
          {isAdminLogin
            ? "Administrator Login"
            : "Buyer Login"}
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
            margin="normal"
            label="Email Address"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <TextField
            fullWidth
            margin="normal"
            label="Password"
            name="password"
            type="password"
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
              : isAdminLogin
              ? "Admin Login"
              : "Buyer Login"}
          </Button>
        </Box>

        {!isAdminLogin && (
          <Typography
            align="center"
            mt={3}
          >
            Don't have an account?{" "}
            <Link to="/register">
              Register
            </Link>
          </Typography>
        )}
      </Paper>
    </Container>
  );
}