import {
  Avatar,
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

import ApartmentIcon from "@mui/icons-material/Apartment";
import BusinessIcon from "@mui/icons-material/Business";
import ConstructionIcon from "@mui/icons-material/Construction";
import HandshakeIcon from "@mui/icons-material/Handshake";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import PublicIcon from "@mui/icons-material/Public";
import VerifiedIcon from "@mui/icons-material/Verified";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import GroupsIcon from "@mui/icons-material/Groups";
import GavelIcon from "@mui/icons-material/Gavel";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LeadershipIcon from "@mui/icons-material/WorkspacePremium";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";

import { useNavigate } from "react-router-dom";

const FALLBACK_IMAGE = "/Images/Maziside.jpeg";

const coreValues = [
  {
    icon: <VerifiedIcon />,
    title: "Integrity",
    description:
      "Adherence to professional ethics, objectivity in decision-making, honesty, professional competence and confidentiality where required.",
  },
  {
    icon: <LightbulbIcon />,
    title: "Innovation & Creativity",
    description:
      "A commitment to finding effective solutions, particularly when challenges require new thinking and unconventional approaches.",
  },
  {
    icon: <GroupsIcon />,
    title: "Teamwork",
    description:
      "Harnessing the competencies of a self-motivated workforce to accomplish shared objectives and deliver successful outcomes.",
  },
  {
    icon: <GavelIcon />,
    title: "Responsibility & Accountability",
    description:
      "A commitment to customers and stakeholders through dependable, reliable and accountable business practices.",
  },
  {
    icon: <FavoriteBorderIcon />,
    title: "Respect & Dignity",
    description:
      "Recognising the dignity of every individual and maintaining relationships founded on mutual respect.",
  },
  {
    icon: <LeadershipIcon />,
    title: "Leadership",
    description:
      "Exercising influence through service and embracing a leadership philosophy founded on responsibility to others.",
  },
];

const services = [
  {
    icon: <ConstructionIcon />,
    title: "Construction Projects",
    description:
      "Directly and through subsidiaries, the company undertakes construction projects including buildings, roads, public utilities, retrofitting and rehabilitation works.",
  },
  {
    icon: <HandshakeIcon />,
    title: "Joint Venture Initiatives",
    description:
      "The company engages in joint venture initiatives with private-sector organisations and public-sector institutions for the execution of specific projects.",
  },
  {
    icon: <HomeWorkIcon />,
    title: "Real Estate & Value-Adding Investments",
    description:
      "Providing housing and real estate solutions to individuals and corporate organisations while pursuing strategic investments that contribute to economic growth.",
  },
  {
    icon: <LocalGasStationIcon />,
    title: "Downstream Oil & Gas",
    description:
      "Participation in the procurement and nationwide distribution of petroleum products and related downstream oil and gas activities.",
  },
];

const investments = [
  "Acquisition of the former Bata premises in Aba, Abia State",
  "Investment in and turnaround initiatives involving Calabar Cement business in Cross River State",
  "Acquisition and redevelopment initiatives relating to Presidential Hotel, Enugu",
  "Approval from the National Broadcasting Commission for the establishment of URIL-TV",
];

const directors = [
  {
    name: "Mazi Sweet Chima Asouzu",
    role: "Director",
    description:
      "He holds a Bachelor of Science degree in Telecommunications Engineering, with a minor in Management, from Alabama A&M University, USA. He is the founding Managing Director/CEO of Status Symbol International Limited and Managing Director of Calabar Cement Co. Limited. He is also Chairman of Sovereign Limited and has served as Vice President of the Petroleum Dealers Association of Nigeria (PEDAN).",
  },
  {
    name: "Amb. Petar Konstantinov",
    role: "Director",
    description:
      "A seasoned Bulgarian diplomat who has served on diplomatic missions to several countries, including Nigeria as an Ambassador. He has also served as Managing Director of TechnoExportStroy of Bulgaria in Nigeria.",
  },
  {
    name: "Prince Yomi Tokosi",
    role: "Director",
    description:
      "An accomplished financial consultant, former bank Managing Director/CEO, founding Managing Director/CEO of Riggs Ventures West Africa Plc and an experienced industrialist.",
  },
  {
    name: "Engr. Pio Vu Bacolod",
    role: "Director",
    description:
      "An economist and engineer of Filipino origin with broad knowledge and experience across construction and various other business sectors.",
  },
  {
    name: "Mr. Dike Agwu Awa",
    role: "Director",
    description:
      "A First-Class graduate of Mathematics from the University of Calabar, holder of an MBA in Finance from the University of Lagos and a Chartered Accountant. He is an experienced investment banker and Managing Partner of Vision Faith Consulting Limited.",
  },
];

export default function About() {
  const navigate = useNavigate();

  return (
    <Box sx={{ bgcolor: "#faf9f6", minHeight: "100vh" }}>
      {/* HERO */}
      <Box
        sx={{
          position: "relative",
          minHeight: { xs: 580, md: 700 },
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          backgroundImage: `
            linear-gradient(
              90deg,
              rgba(5,5,5,0.96) 0%,
              rgba(5,5,5,0.86) 50%,
              rgba(5,5,5,0.55) 100%
            ),
            url("${FALLBACK_IMAGE}")
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: 450,
            height: 450,
            border: "1px solid rgba(212,175,55,0.16)",
            borderRadius: "50%",
            top: -220,
            right: -120,
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <Box sx={{ maxWidth: 850 }}>
            <Chip
              icon={<ApartmentIcon />}
              label="About the Development"
              sx={{
                mb: 3,
                bgcolor: "rgba(212,175,55,0.14)",
                color: "#D4AF37",
                border: "1px solid rgba(212,175,55,0.4)",
                fontWeight: 700,
                "& .MuiChip-icon": { color: "#D4AF37" },
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
                  sm: "3.7rem",
                  md: "5rem",
                },
              }}
            >
              Anambra International
              <Box
                component="span"
                sx={{ display: "block", color: "#D4AF37", mt: 1 }}
              >
                Market, Oba
              </Box>
            </Typography>

            <Typography
              sx={{
                mt: 3,
                maxWidth: 760,
                color: "rgba(255,255,255,0.78)",
                fontSize: { xs: "1rem", md: "1.18rem" },
                lineHeight: 1.9,
              }}
            >
              A modern commercial development created to provide
              functional business spaces, promote enterprise and support
              sustainable economic activity.
            </Typography>

            <Typography
              sx={{
                mt: 2,
                color: "#D4AF37",
                fontWeight: 600,
                fontSize: "1.05rem",
              }}
            >
              Developed and owned by Unlimited Resources & Investment Limited
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
                onClick={() => navigate("/shop-information")}
                sx={{
                  px: 4,
                  py: 1.5,
                  bgcolor: "#D4AF37",
                  color: "#111",
                  fontWeight: 700,
                  textTransform: "none",
                  "&:hover": { bgcolor: "#b99425" },
                }}
              >
                Explore Shop Information
              </Button>

              <Button
                variant="outlined"
                size="large"
                onClick={() => navigate("/contact")}
                sx={{
                  px: 4,
                  py: 1.5,
                  color: "#fff",
                  borderColor: "rgba(255,255,255,0.45)",
                  textTransform: "none",
                  "&:hover": {
                    borderColor: "#D4AF37",
                    color: "#D4AF37",
                  },
                }}
              >
                Contact Us
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* ABOUT THE MARKET */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={FALLBACK_IMAGE}
              alt="Anambra International Market, Oba"
              sx={{
                width: "100%",
                minHeight: { xs: 350, md: 520 },
                objectFit: "cover",
                borderRadius: 5,
                boxShadow: "0 25px 60px rgba(0,0,0,0.14)",
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Chip
              label="The Development"
              sx={{
                mb: 2,
                bgcolor: "rgba(212,175,55,0.12)",
                color: "#8a6815",
                fontWeight: 700,
              }}
            />

            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                fontSize: { xs: "2.2rem", md: "3.3rem" },
                lineHeight: 1.15,
              }}
            >
              A Platform for
              <Box component="span" sx={{ display: "block", color: "#D4AF37" }}>
                Commerce and Enterprise
              </Box>
            </Typography>

            <Typography
              color="text.secondary"
              sx={{ mt: 3, lineHeight: 1.9, fontSize: "1.05rem" }}
            >
              Anambra International Market, Oba is a commercial development
              designed to accommodate a diverse range of businesses within a
              structured and professionally planned environment.
            </Typography>

            <Typography
              color="text.secondary"
              sx={{ mt: 2, lineHeight: 1.9, fontSize: "1.05rem" }}
            >
              The development reflects the broader investment philosophy of
              Unlimited Resources & Investment Limited: creating assets and
              opportunities capable of contributing to private-sector growth,
              economic activity and long-term value.
            </Typography>

            <Stack spacing={2} sx={{ mt: 4 }}>
              {[
                "Modern commercial spaces",
                "Designed for diverse business activities",
                "Professional business environment",
                "Focused on enterprise and long-term value",
              ].map((item) => (
                <Stack
                  key={item}
                  direction="row"
                  spacing={1.5}
                  alignItems="center"
                >
                  <VerifiedIcon sx={{ color: "#D4AF37" }} />
                  <Typography fontWeight={600}>{item}</Typography>
                </Stack>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>

      {/* CORPORATE PROFILE */}
      <Box sx={{ bgcolor: "#111", py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={7} alignItems="center">
            <Grid item xs={12} md={5}>
              <Chip
                icon={<CorporateFareIcon />}
                label="Corporate Profile"
                sx={{
                  bgcolor: "rgba(212,175,55,0.12)",
                  color: "#D4AF37",
                  border: "1px solid rgba(212,175,55,0.3)",
                  "& .MuiChip-icon": { color: "#D4AF37" },
                }}
              />

              <Typography
                variant="h2"
                sx={{
                  color: "#fff",
                  fontWeight: 800,
                  mt: 2,
                  fontSize: { xs: "2.2rem", md: "3.5rem" },
                  lineHeight: 1.15,
                }}
              >
                Unlimited Resources
                <Box component="span" sx={{ display: "block", color: "#D4AF37" }}>
                  & Investment Limited
                </Box>
              </Typography>
            </Grid>

            <Grid item xs={12} md={7}>
              <Typography
                sx={{
                  color: "rgba(255,255,255,0.78)",
                  lineHeight: 1.9,
                  fontSize: "1.08rem",
                }}
              >
                Unlimited Resources & Investment Limited was first registered
                and licensed in the State of Alabama, United States of America,
                in 1983, with the primary objective of providing real estate
                and housing solutions to individuals and corporate
                organisations.
              </Typography>

              <Typography
                sx={{
                  mt: 2.5,
                  color: "rgba(255,255,255,0.68)",
                  lineHeight: 1.9,
                  fontSize: "1.05rem",
                }}
              >
                The company was registered in Nigeria in 1985 and subsequently
                expanded its activities through subsidiaries, strategic
                investments and joint ventures with private-sector
                organisations and government agencies.
              </Typography>

              <Paper
                elevation={0}
                sx={{
                  mt: 4,
                  p: 3,
                  bgcolor: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(212,175,55,0.25)",
                  borderRadius: 3,
                }}
              >
                <Stack spacing={2}>
                  <Stack direction="row" spacing={2} alignItems="flex-start">
                    <LocationOnIcon sx={{ color: "#D4AF37" }} />
                    <Typography sx={{ color: "rgba(255,255,255,0.75)" }}>
                      Plot 1336, Akilu Crescent, Aso-Villa, Abuja, Nigeria
                    </Typography>
                  </Stack>

                  <Stack direction="row" spacing={2} alignItems="center">
                    <PhoneIcon sx={{ color: "#D4AF37" }} />
                    <Typography sx={{ color: "rgba(255,255,255,0.75)" }}>
                      +234 803 326 5055
                    </Typography>
                  </Stack>
                </Stack>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* VISION AND MISSION */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Box sx={{ textAlign: "center", maxWidth: 760, mx: "auto", mb: 7 }}>
          <Typography
            sx={{
              color: "#b99425",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 2,
            }}
          >
            Our Direction
          </Typography>

          <Typography
            variant="h2"
            sx={{
              mt: 1.5,
              fontWeight: 800,
              fontSize: { xs: "2.2rem", md: "3.4rem" },
            }}
          >
            Vision & Mission
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                height: "100%",
                p: { xs: 4, md: 5 },
                borderRadius: 4,
                bgcolor: "#111",
                color: "#fff",
              }}
            >
              <PublicIcon sx={{ color: "#D4AF37", fontSize: 48 }} />

              <Typography variant="h4" fontWeight={800} mt={3}>
                Our Vision
              </Typography>

              <Typography
                sx={{
                  mt: 2,
                  color: "rgba(255,255,255,0.72)",
                  lineHeight: 1.9,
                  fontSize: "1.08rem",
                }}
              >
                Adding value to private and public sector economic development
                through painstaking and discerning investment decisions.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                height: "100%",
                p: { xs: 4, md: 5 },
                borderRadius: 4,
                bgcolor: "#D4AF37",
              }}
            >
              <TrendingUpIcon sx={{ color: "#111", fontSize: 48 }} />

              <Typography variant="h4" fontWeight={800} mt={3}>
                Our Mission
              </Typography>

              <Typography
                sx={{
                  mt: 2,
                  color: "rgba(0,0,0,0.7)",
                  lineHeight: 1.9,
                  fontSize: "1.08rem",
                }}
              >
                Creating solutions for private and public sector challenges
                through specialised human competence, skills and experience,
                modern technology and world-class business practices.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* CORE VALUES */}
      <Box sx={{ bgcolor: "#f1eee6", py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", maxWidth: 760, mx: "auto", mb: 7 }}>
            <Typography
              sx={{
                color: "#9a7618",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: 2,
              }}
            >
              What Guides Us
            </Typography>

            <Typography
              variant="h2"
              sx={{
                mt: 1.5,
                fontWeight: 800,
                fontSize: { xs: "2.2rem", md: "3.4rem" },
              }}
            >
              Our Core Values
            </Typography>

            <Typography
              color="text.secondary"
              sx={{ mt: 2, lineHeight: 1.8 }}
            >
              These principles guide the company&apos;s operational strategy,
              professional conduct and relationships with clients, partners and
              other stakeholders.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {coreValues.map((value) => (
              <Grid item xs={12} sm={6} md={4} key={value.title}>
                <Paper
                  elevation={0}
                  sx={{
                    height: "100%",
                    p: 4,
                    borderRadius: 4,
                    bgcolor: "#fff",
                    border: "1px solid rgba(0,0,0,0.06)",
                    transition: "0.3s",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "0 20px 45px rgba(0,0,0,0.08)",
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
                      bgcolor: "rgba(212,175,55,0.14)",
                      color: "#b99425",
                      borderRadius: 3,
                      mb: 3,
                      "& svg": { fontSize: 30 },
                    }}
                  >
                    {value.icon}
                  </Box>

                  <Typography variant="h6" fontWeight={800}>
                    {value.title}
                  </Typography>

                  <Typography
                    color="text.secondary"
                    sx={{ mt: 1.5, lineHeight: 1.8 }}
                  >
                    {value.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* SERVICES */}
      <Box sx={{ bgcolor: "#111", py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: 760, mb: 7 }}>
            <Typography
              sx={{
                color: "#D4AF37",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: 2,
              }}
            >
              Areas of Operation
            </Typography>

            <Typography
              variant="h2"
              sx={{
                color: "#fff",
                mt: 1.5,
                fontWeight: 800,
                fontSize: { xs: "2.2rem", md: "3.5rem" },
              }}
            >
              Our Services & Business Interests
            </Typography>

            <Typography
              sx={{
                color: "rgba(255,255,255,0.65)",
                mt: 2,
                lineHeight: 1.8,
              }}
            >
              Unlimited Resources & Investment Limited operates across
              strategic sectors through direct investments, subsidiaries,
              partnerships and joint ventures.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {services.map((service) => (
              <Grid item xs={12} sm={6} key={service.title}>
                <Paper
                  elevation={0}
                  sx={{
                    height: "100%",
                    p: 4,
                    bgcolor: "rgba(255,255,255,0.055)",
                    border: "1px solid rgba(255,255,255,0.09)",
                    borderRadius: 4,
                  }}
                >
                  <Box
                    sx={{
                      width: 58,
                      height: 58,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      bgcolor: "rgba(212,175,55,0.13)",
                      color: "#D4AF37",
                      borderRadius: 3,
                      mb: 3,
                      "& svg": { fontSize: 30 },
                    }}
                  >
                    {service.icon}
                  </Box>

                  <Typography variant="h5" sx={{ color: "#fff", fontWeight: 800 }}>
                    {service.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.65)",
                      mt: 1.5,
                      lineHeight: 1.8,
                    }}
                  >
                    {service.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* INVESTMENT TRACK RECORD */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Grid container spacing={7} alignItems="center">
          <Grid item xs={12} md={5}>
            <Chip
              label="Corporate Track Record"
              sx={{
                bgcolor: "rgba(212,175,55,0.13)",
                color: "#8a6815",
                fontWeight: 700,
              }}
            />

            <Typography
              variant="h2"
              sx={{
                mt: 2,
                fontWeight: 800,
                fontSize: { xs: "2.2rem", md: "3.4rem" },
              }}
            >
              Strategic Investments
              <Box component="span" sx={{ display: "block", color: "#D4AF37" }}>
                & Initiatives
              </Box>
            </Typography>

            <Typography
              color="text.secondary"
              sx={{ mt: 3, lineHeight: 1.9 }}
            >
              Over the years, the company has pursued investments and
              development initiatives across real estate, hospitality,
              manufacturing, media and other sectors.
            </Typography>
          </Grid>

          <Grid item xs={12} md={7}>
            <Stack spacing={2}>
              {investments.map((investment, index) => (
                <Paper
                  key={investment}
                  elevation={0}
                  sx={{
                    p: 3,
                    display: "flex",
                    gap: 2.5,
                    alignItems: "flex-start",
                    borderRadius: 3,
                    border: "1px solid rgba(0,0,0,0.07)",
                  }}
                >
                  <Box
                    sx={{
                      minWidth: 44,
                      height: 44,
                      borderRadius: "50%",
                      bgcolor: "#111",
                      color: "#D4AF37",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 800,
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </Box>

                  <Typography
                    color="text.secondary"
                    sx={{ lineHeight: 1.8, pt: 0.8 }}
                  >
                    {investment}
                  </Typography>
                </Paper>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>

      {/* BOARD OF DIRECTORS */}
      <Box sx={{ bgcolor: "#f1eee6", py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", maxWidth: 800, mx: "auto", mb: 7 }}>
            <Typography
              sx={{
                color: "#9a7618",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: 2,
              }}
            >
              Corporate Leadership
            </Typography>

            <Typography
              variant="h2"
              sx={{
                mt: 1.5,
                fontWeight: 800,
                fontSize: { xs: "2.2rem", md: "3.5rem" },
              }}
            >
              Board of Directors
            </Typography>

            <Typography
              color="text.secondary"
              sx={{ mt: 2, lineHeight: 1.8 }}
            >
              The company&apos;s leadership brings together experience across
              engineering, diplomacy, finance, investment, construction and
              business management.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {directors.map((director, index) => (
              <Grid
                item
                xs={12}
                md={index < 2 ? 6 : 4}
                key={director.name}
              >
                <Paper
                  elevation={0}
                  sx={{
                    height: "100%",
                    p: 4,
                    borderRadius: 4,
                    bgcolor: "#fff",
                    border: "1px solid rgba(0,0,0,0.06)",
                  }}
                >
                  <Stack
                    direction="row"
                    spacing={2}
                    alignItems="center"
                    mb={3}
                  >
                    <Avatar
                      sx={{
                        width: 58,
                        height: 58,
                        bgcolor: "#111",
                        color: "#D4AF37",
                        fontWeight: 800,
                      }}
                    >
                      {director.name
                        .split(" ")
                        .filter(
                          (part) =>
                            !["Mazi", "Amb.", "Prince", "Engr.", "Mr."].includes(
                              part
                            )
                        )
                        .slice(0, 2)
                        .map((part) => part[0])
                        .join("")}
                    </Avatar>

                    <Box>
                      <Typography variant="h6" fontWeight={800}>
                        {director.name}
                      </Typography>

                      <Typography
                        sx={{
                          color: "#b99425",
                          fontWeight: 700,
                          fontSize: ".9rem",
                        }}
                      >
                        {director.role}
                      </Typography>
                    </Box>
                  </Stack>

                  <Divider sx={{ mb: 2.5 }} />

                  <Typography
                    color="text.secondary"
                    sx={{ lineHeight: 1.85 }}
                  >
                    {director.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            bgcolor: "#D4AF37",
            borderRadius: { xs: 4, md: 6 },
            px: { xs: 3, md: 8 },
            py: { xs: 6, md: 8 },
          }}
        >
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", md: "center" }}
            spacing={4}
          >
            <Box sx={{ maxWidth: 700 }}>
              <Typography
                variant="h3"
                sx={{
                  color: "#111",
                  fontWeight: 800,
                  fontSize: { xs: "2rem", md: "3rem" },
                }}
              >
                Discover Anambra International Market, Oba
              </Typography>

              <Typography
                sx={{
                  mt: 1.5,
                  color: "rgba(0,0,0,0.68)",
                  lineHeight: 1.8,
                  fontSize: "1.05rem",
                }}
              >
                Learn more about the commercial opportunities, available shop
                spaces and the development behind the market.
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
                textTransform: "none",
                fontWeight: 700,
                "&:hover": { bgcolor: "#292929" },
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