import { useState } from "react";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Container,
  Divider,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import ContactSupportOutlinedIcon from "@mui/icons-material/ContactSupportOutlined";

const GOLD = "#D4AF37";
const DARK_GOLD = "#b99425";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);
      setStatus(null);

      // Replace this with your backend API request later.
      // Example:
      //
      // await api.post("/contact", formData);

      console.log("CONTACT FORM:", formData);

      setStatus({
        type: "success",
        message:
          "Thank you for contacting us. We will get back to you shortly.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("CONTACT FORM ERROR:", error);

      setStatus({
        type: "error",
        message:
          "We could not send your message. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const contactDetails = [
    {
      icon: <LocationOnOutlinedIcon />,
      title: "Visit Us",
      content: "Anambra International Market, Oba, Anambra State",
      secondary: "Add your complete plaza address here",
    },
    {
      icon: <PhoneOutlinedIcon />,
      title: "Call Us",
      content: "09162580000",
      secondary: "We are available during business hours",
    },
    {
      icon: <EmailOutlinedIcon />,
      title: "Email Us",
      content: "Add your official email address",
      secondary: "We aim to respond as soon as possible",
    },
    {
      icon: <AccessTimeOutlinedIcon />,
      title: "Business Hours",
      content: "Monday – Saturday",
      secondary: "8:00 AM – 6:00 PM",
    },
  ];

  return (
    <Box
      sx={{
        bgcolor: "#faf9f6",
        minHeight: "100vh",
      }}
    >
      {/* ==========================================
          HERO SECTION
      ========================================== */}

      <Box
        sx={{
          position: "relative",
          minHeight: {
            xs: 380,
            md: 470,
          },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          bgcolor: "#111",
          background:
            "linear-gradient(135deg, #080808 0%, #1c1c1c 55%, #29220d 100%)",
        }}
      >
        {/* Decorative Elements */}

        <Box
          sx={{
            position: "absolute",
            width: 300,
            height: 300,
            borderRadius: "50%",
            border: "1px solid rgba(212,175,55,0.25)",
            top: -130,
            right: -70,
          }}
        />

        <Box
          sx={{
            position: "absolute",
            width: 180,
            height: 180,
            borderRadius: "50%",
            border: "1px solid rgba(212,175,55,0.15)",
            bottom: -90,
            left: -40,
          }}
        />

        <Container
          maxWidth="lg"
          sx={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              width: 70,
              height: 70,
              mx: "auto",
              mb: 3,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "rgba(212,175,55,0.12)",
              border: "1px solid rgba(212,175,55,0.4)",
              color: GOLD,
            }}
          >
            <ContactSupportOutlinedIcon
              sx={{
                fontSize: 34,
              }}
            />
          </Box>

          <Typography
            variant="h1"
            sx={{
              color: "#fff",
              fontWeight: 800,
              fontSize: {
                xs: "2.5rem",
                sm: "3.5rem",
                md: "4.5rem",
              },
              lineHeight: 1.1,
            }}
          >
            Get in{" "}
            <Box
              component="span"
              sx={{
                color: GOLD,
              }}
            >
              Touch
            </Box>
          </Typography>

          <Typography
            sx={{
              mt: 3,
              mx: "auto",
              maxWidth: 700,
              color: "rgba(255,255,255,0.75)",
              fontSize: {
                xs: "1rem",
                md: "1.15rem",
              },
              lineHeight: 1.8,
            }}
          >
            Have questions about shop availability, leasing,
            facilities or Anambra International Market? Our team is
            available to provide the information you need.
          </Typography>
        </Container>
      </Box>

      {/* ==========================================
          CONTACT INFORMATION
      ========================================== */}

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          mt: {
            xs: -4,
            md: -6,
          },
          zIndex: 5,
        }}
      >
        <Grid container spacing={3}>
          {contactDetails.map((item) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={item.title}
            >
              <Paper
                elevation={0}
                sx={{
                  height: "100%",
                  p: 3,
                  textAlign: "center",
                  borderRadius: 4,
                  border: "1px solid rgba(0,0,0,0.07)",
                  boxShadow:
                    "0 15px 45px rgba(0,0,0,0.08)",
                  transition:
                    "transform .3s ease, box-shadow .3s ease",

                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow:
                      "0 20px 50px rgba(0,0,0,0.12)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 55,
                    height: 55,
                    mx: "auto",
                    mb: 2,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    bgcolor: "rgba(212,175,55,0.12)",
                    color: GOLD,
                  }}
                >
                  {item.icon}
                </Box>

                <Typography
                  variant="h6"
                  fontWeight={700}
                >
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    mt: 1,
                    fontWeight: 600,
                    color: "#333",
                  }}
                >
                  {item.content}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    mt: 0.5,
                    lineHeight: 1.6,
                  }}
                >
                  {item.secondary}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* ==========================================
          CONTACT FORM SECTION
      ========================================== */}

      <Container
        maxWidth="lg"
        sx={{
          py: {
            xs: 8,
            md: 12,
          },
        }}
      >
        <Grid
          container
          spacing={{
            xs: 5,
            md: 8,
          }}
          alignItems="center"
        >
          {/* LEFT CONTENT */}

          <Grid item xs={12} md={5}>
            <Typography
              sx={{
                color: DARK_GOLD,
                textTransform: "uppercase",
                letterSpacing: 2,
                fontSize: "0.8rem",
                fontWeight: 800,
              }}
            >
              Contact Anambra International Market, Oba
            </Typography>

            <Typography
              variant="h2"
              sx={{
                mt: 1.5,
                fontWeight: 800,
                fontSize: {
                  xs: "2.2rem",
                  md: "3.3rem",
                },
                lineHeight: 1.15,
              }}
            >
              We Would Love to Hear From You
            </Typography>

            <Box
              sx={{
                width: 65,
                height: 4,
                bgcolor: GOLD,
                borderRadius: 5,
                my: 3,
              }}
            />

            <Typography
              color="text.secondary"
              sx={{
                fontSize: "1.05rem",
                lineHeight: 1.9,
              }}
            >
              Whether you are interested in securing a
              commercial space, making an enquiry about our
              facilities, or simply need more information,
              send us a message and our team will respond.
            </Typography>

            <Divider
              sx={{
                my: 4,
              }}
            />

            <Typography
              variant="h6"
              fontWeight={700}
            >
              Looking for a shop space?
            </Typography>

            <Typography
              color="text.secondary"
              sx={{
                mt: 1,
                lineHeight: 1.8,
              }}
            >
              Tell us the type of commercial space you need
              and include your preferred requirements in your
              message. Our team will guide you through the
              available options.
            </Typography>
          </Grid>

          {/* CONTACT FORM */}

          <Grid item xs={12} md={7}>
            <Paper
              elevation={0}
              sx={{
                p: {
                  xs: 3,
                  sm: 4,
                  md: 5,
                },
                borderRadius: 5,
                border: "1px solid rgba(0,0,0,0.07)",
                boxShadow:
                  "0 20px 60px rgba(0,0,0,0.08)",
              }}
            >
              <Typography
                variant="h4"
                fontWeight={800}
              >
                Send Us a Message
              </Typography>

              <Typography
                color="text.secondary"
                sx={{
                  mt: 1,
                  mb: 4,
                }}
              >
                Complete the form below and we will get back
                to you.
              </Typography>

              {status && (
                <Alert
                  severity={status.type}
                  sx={{
                    mb: 3,
                    borderRadius: 2,
                  }}
                >
                  {status.message}
                </Alert>
              )}

              <Box
                component="form"
                onSubmit={handleSubmit}
              >
                <Grid container spacing={2.5}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      required
                      label="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      required
                      type="email"
                      label="Email Address"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      required
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      required
                      multiline
                      rows={6}
                      label="Your Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      disabled={loading}
                      endIcon={
                        loading ? null : (
                          <SendOutlinedIcon />
                        )
                      }
                      sx={{
                        px: 4,
                        py: 1.5,
                        bgcolor: GOLD,
                        color: "#111",
                        fontWeight: 700,
                        borderRadius: 2.5,
                        textTransform: "none",
                        fontSize: "1rem",

                        "&:hover": {
                          bgcolor: DARK_GOLD,
                        },
                      }}
                    >
                      {loading ? (
                        <CircularProgress
                          size={24}
                          sx={{
                            color: "#111",
                          }}
                        />
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* ==========================================
          MAP / LOCATION SECTION
      ========================================== */}

      <Box
        sx={{
          bgcolor: "#111",
          py: {
            xs: 7,
            md: 9,
          },
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              textAlign: "center",
              mb: 5,
            }}
          >
            <LocationOnOutlinedIcon
              sx={{
                color: GOLD,
                fontSize: 40,
              }}
            />

            <Typography
              variant="h3"
              sx={{
                color: "#fff",
                fontWeight: 800,
                mt: 1,
                fontSize: {
                  xs: "2rem",
                  md: "2.8rem",
                },
              }}
            >
              Find Anambra International Market, Oba
            </Typography>

            <Typography
              sx={{
                color: "rgba(255,255,255,0.65)",
                mt: 1.5,
              }}
            >
              Visit us and experience the plaza in person.
            </Typography>
          </Box>

          {/* Replace this Box with your Google Maps
              iframe when you have the exact location */}

          <Box
            sx={{
              minHeight: {
                xs: 300,
                md: 420,
              },
              borderRadius: 4,
              overflow: "hidden",
              bgcolor: "#222",
              border:
                "1px solid rgba(212,175,55,0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              p: 4,
            }}
          >
            <Stack alignItems="center" spacing={2}>
              <LocationOnOutlinedIcon
                sx={{
                  fontSize: 55,
                  color: GOLD,
                }}
              />

              <Typography
                variant="h5"
                sx={{
                  color: "#fff",
                  fontWeight: 700,
                }}
              >
                Anambra International Market, Oba, Anambra State, Nigeria
              </Typography>

              <Typography
                sx={{
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                Add the exact plaza address and Google Maps
                embed here.
              </Typography>
            </Stack>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}