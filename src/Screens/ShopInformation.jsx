import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import StorefrontIcon from "@mui/icons-material/Storefront";
import BusinessIcon from "@mui/icons-material/Business";
import SecurityIcon from "@mui/icons-material/Security";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import GroupsIcon from "@mui/icons-material/Groups";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PhoneIcon from "@mui/icons-material/Phone";
import CollectionsIcon from "@mui/icons-material/Collections";
import { useNavigate } from "react-router-dom";

const FALLBACK_IMAGE = "/Images/poster.jpeg";

const shopFeatures = [
  {
    icon: <StorefrontIcon />,
    title: "Modern Commercial Shops",
    description:
      "Well-designed commercial spaces suitable for businesses seeking a professional and accessible trading environment.",
  },
  {
    icon: <SecurityIcon />,
    title: "Secure Business Environment",
    description:
      "A structured commercial environment designed to support the safety of business owners, customers and property.",
  },
  {
    icon: <LocalParkingIcon />,
    title: "Convenient Accessibility",
    description:
      "Easy access for customers, business owners, suppliers and service providers.",
  },
  {
    icon: <ElectricBoltIcon />,
    title: "Business-Friendly Infrastructure",
    description:
      "Essential infrastructure designed to support the everyday operation of modern businesses.",
  },
  {
    icon: <WaterDropIcon />,
    title: "Essential Facilities",
    description:
      "Access to important shared facilities that contribute to a comfortable commercial environment.",
  },
  {
    icon: <GroupsIcon />,
    title: "Growing Business Community",
    description:
      "Become part of a commercial destination designed to attract businesses, customers and investment.",
  },
];

const suitableBusinesses = [
  "Fashion boutiques and clothing stores",
  "Supermarkets and mini marts",
  "Pharmacies and healthcare-related businesses",
  "Beauty salons, barbershops and spas",
  "Phone, computer and electronics stores",
  "Restaurants, cafés and food businesses",
  "Professional and corporate offices",
  "Financial and agency banking services",
  "Printing and business centres",
  "Home, furniture and interior stores",
  "Logistics and service businesses",
  "Other retail and commercial enterprises",
];

const reasonsToChoose = [
  "Purpose-built environment for commercial activities",
  "Professional setting that strengthens business visibility",
  "Suitable for both established and emerging businesses",
  "Opportunity to position your business within a growing commercial community",
  "Designed to encourage customer convenience and accessibility",
  "A long-term commercial location for business growth",
];

export default function ShopInformation() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        bgcolor: "#faf9f6",
        minHeight: "100vh",
      }}
    >
      {/* =========================
          HERO SECTION
      ========================== */}
      <Box
        sx={{
          position: "relative",
          minHeight: { xs: 580, md: 680 },
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          backgroundImage: `
            linear-gradient(
              90deg,
              rgba(8,8,8,0.94) 0%,
              rgba(8,8,8,0.82) 48%,
              rgba(8,8,8,0.55) 100%
            ),
            url("${FALLBACK_IMAGE}")
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            position: "relative",
            zIndex: 2,
          }}
        >
          <Box
            sx={{
              maxWidth: 780,
            }}
          >
            <Chip
              icon={<StorefrontIcon />}
              label="Premium Commercial Spaces"
              sx={{
                mb: 3,
                bgcolor: "rgba(212,175,55,0.14)",
                color: "#D4AF37",
                border: "1px solid rgba(212,175,55,0.5)",
                fontWeight: 600,

                "& .MuiChip-icon": {
                  color: "#D4AF37",
                },
              }}
            />

            <Typography
              variant="h1"
              sx={{
                color: "#fff",
                fontWeight: 800,
                lineHeight: 1.05,
                fontSize: {
                  xs: "2.6rem",
                  sm: "3.6rem",
                  md: "5rem",
                },
              }}
            >
              Find the Right Space for Your
              <Box
                component="span"
                sx={{
                  display: "block",
                  color: "#D4AF37",
                  mt: 1,
                }}
              >
                Business to Grow
              </Box>
            </Typography>

            <Typography
              sx={{
                mt: 3,
                maxWidth: 700,
                color: "rgba(255,255,255,0.8)",
                lineHeight: 1.9,
                fontSize: {
                  xs: "1rem",
                  md: "1.18rem",
                },
              }}
            >
              Anambra International Market offers modern commercial
              spaces designed for entrepreneurs, retailers,
              service providers and investors looking for a
              professional environment to establish and grow
              their businesses.
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ mt: 4 }}
            >
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                onClick={() => navigate("/contact")}
                sx={{
                  px: 4,
                  py: 1.5,
                  bgcolor: "#D4AF37",
                  color: "#111",
                  fontWeight: 700,
                  borderRadius: 2,

                  "&:hover": {
                    bgcolor: "#b99425",
                  },
                }}
              >
                Enquire About a Shop
              </Button>

              <Button
                variant="outlined"
                size="large"
                startIcon={<CollectionsIcon />}
                onClick={() => navigate("/gallery")}
                sx={{
                  px: 4,
                  py: 1.5,
                  color: "#fff",
                  borderColor: "rgba(255,255,255,0.5)",
                  borderRadius: 2,

                  "&:hover": {
                    borderColor: "#D4AF37",
                    color: "#D4AF37",
                  },
                }}
              >
                View Gallery
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* =========================
          INTRODUCTION
      ========================== */}
      <Container
        maxWidth="lg"
        sx={{
          py: { xs: 8, md: 12 },
        }}
      >
        <Grid
          container
          spacing={7}
          alignItems="center"
        >
          <Grid item xs={12} md={6}>
            <Typography
              sx={{
                color: "#D4AF37",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: 2,
                mb: 1.5,
              }}
            >
              Your Business Deserves the Right Location
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                fontSize: {
                  xs: "2.2rem",
                  md: "3.5rem",
                },
                lineHeight: 1.15,
              }}
            >
              More Than a Shop.
              <Box
                component="span"
                sx={{
                  display: "block",
                  color: "#D4AF37",
                }}
              >
                A Place to Build Your Business.
              </Box>
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography
              color="text.secondary"
              sx={{
                lineHeight: 1.9,
                fontSize: "1.05rem",
              }}
            >
              Choosing a commercial space is an important
              business decision. Anambra International Market is
              designed to provide businesses with a
              professional commercial environment where they
              can serve customers, build visibility and
              pursue long-term growth.
            </Typography>

            <Typography
              color="text.secondary"
              sx={{
                lineHeight: 1.9,
                fontSize: "1.05rem",
                mt: 2,
              }}
            >
              Whether you are launching a new venture,
              expanding an existing business or looking for
              a strategic commercial location, our shop
              spaces provide the flexibility needed for a
              wide range of business activities.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      {/* =========================
          FEATURES
      ========================== */}
      <Box
        sx={{
          bgcolor: "#111",
          py: { xs: 8, md: 12 },
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              textAlign: "center",
              maxWidth: 750,
              mx: "auto",
              mb: 7,
            }}
          >
            <Typography
              sx={{
                color: "#D4AF37",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: 2,
              }}
            >
              The Anambra International Market Advantage
            </Typography>

            <Typography
              variant="h2"
              sx={{
                color: "#fff",
                fontWeight: 800,
                mt: 1.5,
                fontSize: {
                  xs: "2.2rem",
                  md: "3.5rem",
                },
              }}
            >
              Designed With Business in Mind
            </Typography>

            <Typography
              sx={{
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.8,
                mt: 2,
              }}
            >
              A commercial environment designed to support
              everyday business activities and create a
              positive experience for business owners and
              customers.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {shopFeatures.map((feature) => (
              <Grid
                item
                xs={12}
                sm={6}
                lg={4}
                key={feature.title}
              >
                <Paper
                  elevation={0}
                  sx={{
                    height: "100%",
                    p: 4,
                    bgcolor: "rgba(255,255,255,0.055)",
                    border:
                      "1px solid rgba(255,255,255,0.09)",
                    borderRadius: 4,
                    transition: "0.3s",

                    "&:hover": {
                      transform: "translateY(-6px)",
                      borderColor:
                        "rgba(212,175,55,0.5)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 58,
                      height: 58,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      bgcolor:
                        "rgba(212,175,55,0.13)",
                      color: "#D4AF37",
                      borderRadius: 2,
                      mb: 3,

                      "& svg": {
                        fontSize: 30,
                      },
                    }}
                  >
                    {feature.icon}
                  </Box>

                  <Typography
                    variant="h5"
                    sx={{
                      color: "#fff",
                      fontWeight: 700,
                    }}
                  >
                    {feature.title}
                  </Typography>

                  <Typography
                    sx={{
                      color:
                        "rgba(255,255,255,0.62)",
                      lineHeight: 1.8,
                      mt: 1.5,
                    }}
                  >
                    {feature.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* =========================
          BUSINESS TYPES
      ========================== */}
      <Container
        maxWidth="lg"
        sx={{
          py: { xs: 8, md: 12 },
        }}
      >
        <Grid container spacing={8}>
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                position: { md: "sticky" },
                top: 100,
              }}
            >
              <Chip
                icon={<BusinessIcon />}
                label="Business Opportunities"
                sx={{
                  bgcolor:
                    "rgba(212,175,55,0.12)",
                  color: "#9a7618",

                  "& .MuiChip-icon": {
                    color: "#D4AF37",
                  },
                }}
              />

              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  mt: 2,
                  fontSize: {
                    xs: "2.2rem",
                    md: "3.4rem",
                  },
                }}
              >
                A Space for
                <Box
                  component="span"
                  sx={{
                    display: "block",
                    color: "#D4AF37",
                  }}
                >
                  Different Businesses
                </Box>
              </Typography>

              <Typography
                color="text.secondary"
                sx={{
                  lineHeight: 1.9,
                  mt: 3,
                }}
              >
                The plaza can accommodate a diverse mix of
                retail, service and professional businesses,
                helping to create an active commercial
                environment.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={7}>
            <Grid container spacing={2}>
              {suitableBusinesses.map(
                (business, index) => (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    key={business}
                  >
                    <Paper
                      elevation={0}
                      sx={{
                        height: "100%",
                        p: 2.5,
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        border:
                          "1px solid rgba(0,0,0,0.08)",
                        borderRadius: 3,
                        bgcolor: "#fff",
                      }}
                    >
                      <Box
                        sx={{
                          minWidth: 38,
                          height: 38,
                          borderRadius: "50%",
                          bgcolor:
                            "rgba(212,175,55,0.13)",
                          color: "#b99425",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: 800,
                        }}
                      >
                        {index + 1}
                      </Box>

                      <Typography fontWeight={600}>
                        {business}
                      </Typography>
                    </Paper>
                  </Grid>
                )
              )}
            </Grid>
          </Grid>
        </Grid>
      </Container>

      {/* =========================
          INVESTMENT SECTION
      ========================== */}
      <Box
        sx={{
          bgcolor: "#f1eee6",
          py: { xs: 8, md: 12 },
        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            spacing={7}
            alignItems="center"
          >
            <Grid item xs={12} md={6}>
              <Chip
                icon={<TrendingUpIcon />}
                label="A Commercial Opportunity"
                sx={{
                  bgcolor:
                    "rgba(212,175,55,0.15)",
                  color: "#8a6815",

                  "& .MuiChip-icon": {
                    color: "#D4AF37",
                  },
                }}
              />

              <Typography
                variant="h2"
                sx={{
                  mt: 2,
                  fontWeight: 800,
                  fontSize: {
                    xs: "2.2rem",
                    md: "3.5rem",
                  },
                }}
              >
                Position Your Business for
                <Box
                  component="span"
                  sx={{
                    color: "#D4AF37",
                  }}
                >
                  {" "}
                  Growth
                </Box>
              </Typography>

              <Typography
                color="text.secondary"
                sx={{
                  mt: 3,
                  lineHeight: 1.9,
                }}
              >
                A good business location contributes to
                visibility, accessibility and customer
                experience. Anambra International Market provides a
                structured environment where businesses can
                establish their presence and become part of
                a growing commercial destination.
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, md: 5 },
                  borderRadius: 4,
                  bgcolor: "#fff",
                }}
              >
                <Typography
                  variant="h5"
                  fontWeight={800}
                  mb={3}
                >
                  Why Choose Anambra International Market, Oba?
                </Typography>

                <Stack spacing={2.5}>
                  {reasonsToChoose.map((reason) => (
                    <Stack
                      key={reason}
                      direction="row"
                      spacing={2}
                      alignItems="flex-start"
                    >
                      <CheckCircleIcon
                        sx={{
                          color: "#D4AF37",
                          mt: 0.2,
                        }}
                      />

                      <Typography
                        color="text.secondary"
                        sx={{
                          lineHeight: 1.7,
                        }}
                      >
                        {reason}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* =========================
          SHOP ENQUIRY PROCESS
      ========================== */}
      <Container
        maxWidth="lg"
        sx={{
          py: { xs: 8, md: 12 },
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            maxWidth: 750,
            mx: "auto",
            mb: 7,
          }}
        >
          <Typography
            sx={{
              color: "#D4AF37",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 2,
            }}
          >
            Getting Started
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              mt: 1,
              fontSize: {
                xs: "2.2rem",
                md: "3.5rem",
              },
            }}
          >
            Interested in a Shop?
          </Typography>

          <Typography
            color="text.secondary"
            sx={{
              mt: 2,
              lineHeight: 1.8,
            }}
          >
            Our enquiry process makes it easy to obtain
            current information about available commercial
            spaces.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {[
            {
              number: "01",
              title: "Make an Enquiry",
              text: "Contact our team and tell us about the type of business and commercial space you require.",
            },
            {
              number: "02",
              title: "Check Availability",
              text: "Receive information about currently available shops, applicable terms and other relevant details.",
            },
            {
              number: "03",
              title: "Inspect the Property",
              text: "Arrange a physical inspection to experience the plaza and assess the available commercial spaces.",
            },
            {
              number: "04",
              title: "Secure Your Space",
              text: "Complete the required process and prepare to establish your business at Anambra International Market, Oba.",
            },
          ].map((step) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={step.number}
            >
              <Box
                sx={{
                  p: 3,
                  height: "100%",
                  borderTop:
                    "3px solid #D4AF37",
                }}
              >
                <Typography
                  sx={{
                    color:
                      "rgba(212,175,55,0.35)",
                    fontWeight: 900,
                    fontSize: "3rem",
                  }}
                >
                  {step.number}
                </Typography>

                <Typography
                  variant="h5"
                  fontWeight={700}
                  mt={1}
                >
                  {step.title}
                </Typography>

                <Typography
                  color="text.secondary"
                  sx={{
                    mt: 1.5,
                    lineHeight: 1.8,
                  }}
                >
                  {step.text}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* =========================
          LOCATION / VISIT CTA
      ========================== */}
      <Box
        sx={{
          bgcolor: "#111",
          py: { xs: 7, md: 9 },
        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            spacing={4}
            alignItems="center"
          >
            <Grid item xs={12} md={7}>
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                mb={2}
              >
                <LocationOnIcon
                  sx={{
                    color: "#D4AF37",
                    fontSize: 35,
                  }}
                />

                <Typography
                  sx={{
                    color: "#D4AF37",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: 1.5,
                  }}
                >
                  Visit Anambra International Market, Oba
                </Typography>
              </Stack>

              <Typography
                variant="h3"
                sx={{
                  color: "#fff",
                  fontWeight: 800,
                }}
              >
                See the Opportunity for Yourself
              </Typography>

              <Typography
                sx={{
                  color:
                    "rgba(255,255,255,0.65)",
                  lineHeight: 1.8,
                  mt: 2,
                  maxWidth: 700,
                }}
              >
                Contact our team to obtain current shop
                availability information or arrange a visit
                to the plaza.
              </Typography>
            </Grid>

            <Grid item xs={12} md={5}>
              <Stack
                direction={{
                  xs: "column",
                  sm: "row",
                  md: "column",
                }}
                spacing={2}
              >
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<PhoneIcon />}
                  onClick={() =>
                    navigate("/contact")
                  }
                  sx={{
                    py: 1.5,
                    bgcolor: "#D4AF37",
                    color: "#111",
                    fontWeight: 700,

                    "&:hover": {
                      bgcolor: "#b99425",
                    },
                  }}
                >
                  Contact Us
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  onClick={() =>
                    navigate("/gallery")
                  }
                  sx={{
                    py: 1.5,
                    color: "#fff",
                    borderColor:
                      "rgba(255,255,255,0.35)",

                    "&:hover": {
                      color: "#D4AF37",
                      borderColor: "#D4AF37",
                    },
                  }}
                >
                  Explore the Gallery
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* =========================
          DEVELOPER / OWNER
      ========================== */}
      <Box
        sx={{
          bgcolor: "#080808",
          py: 5,
        }}
      >
        <Container maxWidth="lg">
          <Divider
            sx={{
              borderColor:
                "rgba(255,255,255,0.08)",
              mb: 4,
            }}
          />

          <Typography
            align="center"
            sx={{
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.8,
            }}
          >
            Anambra International Market, Oba is developed and owned by{" "}
            <Box
              component="span"
              sx={{
                color: "#D4AF37",
                fontWeight: 700,
              }}
            >
              Unlimited Resources and Investment Limited
            </Box>
            , committed to developing valuable commercial
            opportunities and supporting sustainable
            business growth.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}