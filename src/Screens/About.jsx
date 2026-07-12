import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import BusinessIcon from "@mui/icons-material/Business";
import ApartmentIcon from "@mui/icons-material/Apartment";
import StorefrontIcon from "@mui/icons-material/Storefront";
import HandshakeIcon from "@mui/icons-material/Handshake";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import VerifiedIcon from "@mui/icons-material/Verified";

import { useNavigate } from "react-router-dom";

const FALLBACK_IMAGE = "/Images/poster.jpeg";

const values = [
  {
    icon: <BusinessIcon />,
    title: "Purposeful Development",
    description:
      "Creating commercial environments designed to support business activity, accessibility and long-term value.",
  },
  {
    icon: <StorefrontIcon />,
    title: "Business-Focused Spaces",
    description:
      "Providing functional commercial spaces where entrepreneurs, retailers and service providers can establish and grow their businesses.",
  },
  {
    icon: <HandshakeIcon />,
    title: "Professional Management",
    description:
      "Promoting responsible ownership, organised operations and a professional environment for occupants, visitors and business partners.",
  },
  {
    icon: <TrendingUpIcon />,
    title: "Long-Term Value",
    description:
      "Developing assets with a focus on sustainability, commercial relevance and lasting investment value.",
  },
];

export default function About() {
  const navigate = useNavigate();

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
            xs: 500,
            md: 620,
          },
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          backgroundImage: `
            linear-gradient(
              90deg,
              rgba(8,8,8,0.94) 0%,
              rgba(8,8,8,0.82) 50%,
              rgba(8,8,8,0.58) 100%
            ),
            url("${FALLBACK_IMAGE}")
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Decorative elements */}

        <Box
          sx={{
            position: "absolute",
            width: 350,
            height: 350,
            border: "1px solid rgba(212,175,55,0.2)",
            borderRadius: "50%",
            top: -170,
            right: -80,
          }}
        />

        <Box
          sx={{
            position: "absolute",
            width: 180,
            height: 180,
            border: "1px solid rgba(212,175,55,0.15)",
            borderRadius: "50%",
            bottom: -80,
            left: -50,
          }}
        />

        <Container
          maxWidth="lg"
          sx={{
            position: "relative",
            zIndex: 2,
          }}
        >
          <Box
            sx={{
              maxWidth: 800,
            }}
          >
            <Chip
              icon={<ApartmentIcon />}
              label="About Anambra International Market Oba"
              sx={{
                mb: 3,
                px: 1,
                py: 2.5,
                bgcolor: "rgba(212,175,55,0.14)",
                color: "#D4AF37",
                border:
                  "1px solid rgba(212,175,55,0.45)",

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
                fontSize: {
                  xs: "2.5rem",
                  sm: "3.5rem",
                  md: "4.7rem",
                },
                lineHeight: 1.08,
              }}
            >
              A Commercial Space
              <Box
                component="span"
                sx={{
                  display: "block",
                  color: "#D4AF37",
                  mt: 1,
                }}
              >
                Built for Opportunity
              </Box>
            </Typography>

            <Typography
              sx={{
                mt: 3,
                maxWidth: 720,
                color: "rgba(255,255,255,0.8)",
                fontSize: {
                  xs: "1rem",
                  md: "1.2rem",
                },
                lineHeight: 1.9,
              }}
            >
              Anambra International Market Oba, is a commercial
              development created to provide functional,
              accessible and professionally designed
              business spaces for entrepreneurs,
              retailers and service providers.
            </Typography>

            <Stack
              direction={{
                xs: "column",
                sm: "row",
              }}
              spacing={2}
              sx={{
                mt: 4,
              }}
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
                  borderRadius: 3,
                  textTransform: "none",

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
                onClick={() => navigate("/gallery")}
                sx={{
                  px: 4,
                  py: 1.5,
                  color: "#fff",
                  borderColor:
                    "rgba(255,255,255,0.45)",
                  borderRadius: 3,
                  textTransform: "none",
                  fontWeight: 600,

                  "&:hover": {
                    borderColor: "#D4AF37",
                    color: "#D4AF37",
                  },
                }}
              >
                Explore the Gallery
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* ==========================================
          ABOUT THE PLAZA
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
            xs: 6,
            md: 9,
          }}
          alignItems="center"
        >
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: "relative",
              }}
            >
              <Box
                component="img"
                src={FALLBACK_IMAGE}
                alt="Anambra International Market Oba"
                sx={{
                  width: "100%",
                  minHeight: {
                    xs: 350,
                    md: 520,
                  },
                  maxHeight: 580,
                  objectFit: "cover",
                  borderRadius: 5,
                  display: "block",
                  boxShadow:
                    "0 25px 60px rgba(0,0,0,0.15)",
                }}
              />

              <Paper
                elevation={0}
                sx={{
                  position: {
                    xs: "relative",
                    md: "absolute",
                  },
                  bottom: {
                    md: -35,
                  },
                  right: {
                    md: -35,
                  },
                  mt: {
                    xs: 2,
                    md: 0,
                  },
                  p: 3,
                  maxWidth: {
                    md: 280,
                  },
                  bgcolor: "#111",
                  color: "#fff",
                  borderRadius: 4,
                  border:
                    "1px solid rgba(212,175,55,0.35)",
                }}
              >
                <LocationCityIcon
                  sx={{
                    color: "#D4AF37",
                    fontSize: 38,
                    mb: 1,
                  }}
                />

                <Typography
                  variant="h6"
                  fontWeight={700}
                >
                  A Place for Business
                </Typography>

                <Typography
                  sx={{
                    color:
                      "rgba(255,255,255,0.68)",
                    mt: 1,
                    lineHeight: 1.7,
                    fontSize: ".92rem",
                  }}
                >
                  Designed to provide a professional
                  environment for commerce, enterprise
                  and everyday business activity.
                </Typography>
              </Paper>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Chip
              label="Our Story"
              sx={{
                mb: 2,
                bgcolor: "rgba(212,175,55,0.12)",
                color: "#9a7618",
                fontWeight: 700,
              }}
            />

            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                fontSize: {
                  xs: "2.2rem",
                  md: "3.2rem",
                },
                lineHeight: 1.2,
              }}
            >
              More Than a Plaza.
              <Box
                component="span"
                sx={{
                  display: "block",
                  color: "#b99425",
                }}
              >
                A Platform for Enterprise.
              </Box>
            </Typography>

            <Typography
              sx={{
                mt: 3,
                color: "text.secondary",
                lineHeight: 1.9,
                fontSize: "1.05rem",
              }}
            >
              Anambra International Market Oba was developed as a
              modern commercial property where businesses
              can operate within a structured and
              functional environment. The development
              brings together commercial spaces intended
              to serve a variety of business activities.
            </Typography>

            <Typography
              sx={{
                mt: 2,
                color: "text.secondary",
                lineHeight: 1.9,
                fontSize: "1.05rem",
              }}
            >
              From retail operations to professional
              services and other commercial activities,
              the plaza is designed to support the people
              and businesses that contribute to a vibrant
              business community.
            </Typography>

            <Stack
              spacing={2}
              sx={{
                mt: 4,
              }}
            >
              {[
                "Functional commercial spaces",
                "Professional business environment",
                "Designed for diverse business activities",
                "Focused on long-term commercial value",
              ].map((item) => (
                <Stack
                  key={item}
                  direction="row"
                  spacing={1.5}
                  alignItems="center"
                >
                  <VerifiedIcon
                    sx={{
                      color: "#D4AF37",
                    }}
                  />

                  <Typography
                    sx={{
                      fontWeight: 600,
                      color: "#333",
                    }}
                  >
                    {item}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>

      {/* ==========================================
          DEVELOPER AND OWNER
      ========================================== */}

      <Box
        sx={{
          bgcolor: "#111",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: 450,
            height: 450,
            border:
              "1px solid rgba(212,175,55,0.12)",
            borderRadius: "50%",
            right: -200,
            top: -200,
          }}
        />

        <Container
          maxWidth="lg"
          sx={{
            position: "relative",
            zIndex: 2,
            py: {
              xs: 8,
              md: 12,
            },
          }}
        >
          <Grid
            container
            spacing={6}
            alignItems="center"
          >
            <Grid item xs={12} md={5}>
              <Chip
                icon={<BusinessIcon />}
                label="Developer & Owner"
                sx={{
                  mb: 3,
                  bgcolor:
                    "rgba(212,175,55,0.12)",
                  color: "#D4AF37",
                  border:
                    "1px solid rgba(212,175,55,0.3)",

                  "& .MuiChip-icon": {
                    color: "#D4AF37",
                  },
                }}
              />

              <Typography
                variant="h2"
                sx={{
                  color: "#fff",
                  fontWeight: 800,
                  fontSize: {
                    xs: "2.2rem",
                    md: "3.4rem",
                  },
                  lineHeight: 1.2,
                }}
              >
                Unlimited Resources
                <Box
                  component="span"
                  sx={{
                    display: "block",
                    color: "#D4AF37",
                  }}
                >
                  and Investment Limited
                </Box>
              </Typography>
            </Grid>

            <Grid item xs={12} md={7}>
              <Typography
                sx={{
                  color:
                    "rgba(255,255,255,0.78)",
                  fontSize: {
                    xs: "1rem",
                    md: "1.1rem",
                  },
                  lineHeight: 1.9,
                }}
              >
                Anambra International Market Oba is developed and owned
                by{" "}
                <Box
                  component="span"
                  sx={{
                    color: "#D4AF37",
                    fontWeight: 700,
                  }}
                >
                  Unlimited Resources and Investment
                  Limited
                </Box>
                , the company responsible for the
                development and ownership of the
                property.
              </Typography>

              <Typography
                sx={{
                  mt: 2.5,
                  color:
                    "rgba(255,255,255,0.68)",
                  fontSize: "1.05rem",
                  lineHeight: 1.9,
                }}
              >
                Through Anambra International Market Oba, the company
                provides a commercial environment created
                to accommodate businesses and support
                productive economic activity. The
                development reflects a commitment to
                functional commercial infrastructure,
                responsible property ownership and
                long-term investment value.
              </Typography>

              <Box
                sx={{
                  mt: 4,
                  p: 3,
                  borderLeft:
                    "4px solid #D4AF37",
                  bgcolor:
                    "rgba(255,255,255,0.04)",
                  borderRadius:
                    "0 12px 12px 0",
                }}
              >
                <Typography
                  sx={{
                    color: "#fff",
                    fontWeight: 600,
                    lineHeight: 1.8,
                  }}
                >
                  Building commercial spaces that create
                  opportunities for businesses, support
                  enterprise and contribute to lasting
                  investment value.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ==========================================
          OUR VALUES
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
        <Box
          sx={{
            textAlign: "center",
            maxWidth: 750,
            mx: "auto",
            mb: 7,
          }}
        >
          <Chip
            label="What Guides Us"
            sx={{
              mb: 2,
              bgcolor: "rgba(212,175,55,0.12)",
              color: "#9a7618",
              fontWeight: 700,
            }}
          />

          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: {
                xs: "2.2rem",
                md: "3.2rem",
              },
            }}
          >
            Our Development Philosophy
          </Typography>

          <Typography
            color="text.secondary"
            sx={{
              mt: 2,
              lineHeight: 1.8,
              fontSize: "1.05rem",
            }}
          >
            Anambra International Market Oba, is built around the idea
            that quality commercial environments should
            provide both immediate functionality and
            long-term value.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {values.map((value) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={value.title}
            >
              <Paper
                elevation={0}
                sx={{
                  height: "100%",
                  p: 4,
                  borderRadius: 4,
                  bgcolor: "#fff",
                  border:
                    "1px solid rgba(0,0,0,0.06)",
                  transition:
                    "transform .3s ease, box-shadow .3s ease",

                  "&:hover": {
                    transform:
                      "translateY(-8px)",
                    boxShadow:
                      "0 20px 50px rgba(0,0,0,0.1)",
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
                    borderRadius: 3,
                    bgcolor:
                      "rgba(212,175,55,0.14)",
                    color: "#b99425",
                    mb: 3,

                    "& svg": {
                      fontSize: 30,
                    },
                  }}
                >
                  {value.icon}
                </Box>

                <Typography
                  variant="h6"
                  fontWeight={700}
                >
                  {value.title}
                </Typography>

                <Typography
                  color="text.secondary"
                  sx={{
                    mt: 1.5,
                    lineHeight: 1.8,
                  }}
                >
                  {value.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* ==========================================
          CALL TO ACTION
      ========================================== */}

      <Container
        maxWidth="lg"
        sx={{
          pb: {
            xs: 8,
            md: 12,
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            bgcolor: "#D4AF37",
            borderRadius: {
              xs: 4,
              md: 6,
            },
            px: {
              xs: 3,
              md: 8,
            },
            py: {
              xs: 6,
              md: 8,
            },
          }}
        >
          <Box
            sx={{
              position: "absolute",
              width: 250,
              height: 250,
              border:
                "1px solid rgba(0,0,0,0.12)",
              borderRadius: "50%",
              right: -80,
              top: -120,
            }}
          />

          <Stack
            direction={{
              xs: "column",
              md: "row",
            }}
            justifyContent="space-between"
            alignItems={{
              xs: "flex-start",
              md: "center",
            }}
            spacing={4}
            sx={{
              position: "relative",
              zIndex: 2,
            }}
          >
            <Box
              sx={{
                maxWidth: 700,
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  color: "#111",
                  fontWeight: 800,
                  fontSize: {
                    xs: "2rem",
                    md: "3rem",
                  },
                }}
              >
                Discover Sweet Asouzu Plaza
              </Typography>

              <Typography
                sx={{
                  mt: 1.5,
                  color:
                    "rgba(0,0,0,0.68)",
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                }}
              >
                Explore our gallery or contact us to
                learn more about Sweet Asouzu Plaza and
                its commercial spaces.
              </Typography>
            </Box>

            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              onClick={() => navigate("/contact")}
              sx={{
                flexShrink: 0,
                px: 4,
                py: 1.6,
                bgcolor: "#111",
                color: "#fff",
                borderRadius: 3,
                textTransform: "none",
                fontWeight: 700,

                "&:hover": {
                  bgcolor: "#292929",
                },
              }}
            >
              Get in Touch
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}