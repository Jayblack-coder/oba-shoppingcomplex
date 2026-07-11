import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Box,
  Button,
  Chip,
  CircularProgress,
  Container,
  Dialog,
  DialogContent,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import CollectionsIcon from "@mui/icons-material/Collections";
import ImageNotSupportedIcon from "@mui/icons-material/ImageNotSupported";

import api from "../api/api";

/*
Expected API response:

GET /gallery

Option 1:
{
  success: true,
  gallery: [
    {
      _id: "...",
      title: "Premium Shop Interior",
      description: "Spacious commercial shop...",
      category: "Shops",
      image: "https://res.cloudinary.com/...",
      featured: false
    }
  ]
}

Option 2:
[
  {
    _id: "...",
    title: "...",
    category: "Shops",
    image: "..."
  }
]

Both formats are supported below.
*/

const DEFAULT_CATEGORIES = [
  "All",
  "Shops",
  "Plaza Layout",
  "Exterior",
  "Interior",
  "Facilities",
];

const FALLBACK_IMAGE = "/Images/poster.jpeg";

export default function Gallery() {
  const [gallery, setGallery] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  /*
  ============================
  FETCH GALLERY
  ============================
  */

  const fetchGallery = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const res = await api.get("/gallery");

      const galleryData =
        res.data?.gallery ||
        res.data?.images ||
        res.data?.data ||
        (Array.isArray(res.data) ? res.data : []);

      setGallery(galleryData);
    } catch (err) {
      console.error("Gallery fetch error:", err);

      setError(
        err.response?.data?.message ||
          "We could not load the gallery at the moment."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchGallery();
  }, [fetchGallery]);

  /*
  ============================
  CATEGORIES
  ============================
  */

  const categories = useMemo(() => {
    const backendCategories = gallery
      .map((item) => item.category)
      .filter(Boolean);

    return [
      "All",
      ...new Set([
        ...DEFAULT_CATEGORIES.filter(
          (category) => category !== "All"
        ),
        ...backendCategories,
      ]),
    ];
  }, [gallery]);

  /*
  ============================
  FILTERED IMAGES
  ============================
  */

  const filteredGallery = useMemo(() => {
    if (selectedCategory === "All") {
      return gallery;
    }

    return gallery.filter(
      (item) =>
        item.category?.toLowerCase() ===
        selectedCategory.toLowerCase()
    );
  }, [gallery, selectedCategory]);

  /*
  ============================
  LIGHTBOX
  ============================
  */

  const selectedImage =
    selectedImageIndex !== null
      ? filteredGallery[selectedImageIndex]
      : null;

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setSelectedImageIndex(null);
  }, []);

  const showPreviousImage = useCallback(() => {
    if (!filteredGallery.length) return;

    setSelectedImageIndex((currentIndex) => {
      if (currentIndex === null) return null;

      return currentIndex === 0
        ? filteredGallery.length - 1
        : currentIndex - 1;
    });
  }, [filteredGallery.length]);

  const showNextImage = useCallback(() => {
    if (!filteredGallery.length) return;

    setSelectedImageIndex((currentIndex) => {
      if (currentIndex === null) return null;

      return currentIndex === filteredGallery.length - 1
        ? 0
        : currentIndex + 1;
    });
  }, [filteredGallery.length]);

  /*
  ============================
  KEYBOARD NAVIGATION
  ============================
  */

  useEffect(() => {
    if (selectedImageIndex === null) return;

    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        showPreviousImage();
      }

      if (event.key === "ArrowRight") {
        showNextImage();
      }

      if (event.key === "Escape") {
        closeLightbox();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    selectedImageIndex,
    showPreviousImage,
    showNextImage,
    closeLightbox,
  ]);

  /*
  ============================
  LOADING STATE
  ============================
  */

  if (loading) {
    return (
      <Box
        sx={{
          minHeight: "70vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack spacing={2} alignItems="center">
          <CircularProgress
            sx={{
              color: "#D4AF37",
            }}
          />

          <Typography color="text.secondary">
            Loading gallery...
          </Typography>
        </Stack>
      </Box>
    );
  }

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
            xs: 420,
            md: 520,
          },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",

          backgroundImage: `
            linear-gradient(
              rgba(15, 15, 15, 0.78),
              rgba(15, 15, 15, 0.72)
            ),
            url("${gallery[0]?.image || FALLBACK_IMAGE}")
          `,

          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Decorative Gold Element */}

        <Box
          sx={{
            position: "absolute",
            width: 250,
            height: 250,
            border: "1px solid rgba(212,175,55,0.25)",
            borderRadius: "50%",
            top: -100,
            right: -60,
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
          <Chip
            icon={<CollectionsIcon />}
            label="Sweet Asouzu Plaza Gallery"
            sx={{
              mb: 3,
              px: 1,
              py: 2.5,
              bgcolor: "rgba(212,175,55,0.15)",
              color: "#D4AF37",
              border: "1px solid rgba(212,175,55,0.5)",

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
                md: "4.5rem",
              },
              lineHeight: 1.1,
              maxWidth: 900,
              mx: "auto",
            }}
          >
            Discover the Beauty of
            <Box
              component="span"
              sx={{
                display: "block",
                color: "#D4AF37",
                mt: 1,
              }}
            >
              Sweet Asouzu Plaza
            </Box>
          </Typography>

          <Typography
            sx={{
              mt: 3,
              mx: "auto",
              maxWidth: 750,
              color: "rgba(255,255,255,0.82)",
              fontSize: {
                xs: "1rem",
                md: "1.2rem",
              },
              lineHeight: 1.8,
            }}
          >
            Explore our commercial spaces, architectural
            layout, shop interiors, facilities and the
            environment designed to support successful
            businesses.
          </Typography>

          <Button
            variant="contained"
            size="large"
            onClick={() => {
              document
                .getElementById("gallery-content")
                ?.scrollIntoView({
                  behavior: "smooth",
                });
            }}
            sx={{
              mt: 4,
              px: 5,
              py: 1.5,
              bgcolor: "#D4AF37",
              color: "#111",
              fontWeight: 700,
              borderRadius: 3,

              "&:hover": {
                bgcolor: "#b99425",
              },
            }}
          >
            Explore Gallery
          </Button>
        </Container>
      </Box>

      {/* ==========================================
          GALLERY SECTION
      ========================================== */}

      <Container
        id="gallery-content"
        maxWidth="xl"
        sx={{
          py: {
            xs: 7,
            md: 10,
          },
        }}
      >
        {/* Section Heading */}

        <Box
          sx={{
            textAlign: "center",
            mb: 5,
          }}
        >
          <Typography
            variant="h3"
            fontWeight={800}
            sx={{
              fontSize: {
                xs: "2rem",
                md: "3rem",
              },
            }}
          >
            Explore Our Plaza
          </Typography>

          <Box
            sx={{
              width: 70,
              height: 4,
              bgcolor: "#D4AF37",
              mx: "auto",
              my: 2,
              borderRadius: 5,
            }}
          />

          <Typography
            color="text.secondary"
            sx={{
              maxWidth: 700,
              mx: "auto",
              lineHeight: 1.8,
            }}
          >
            Browse through our collection of shop spaces,
            plaza layouts, facilities and architectural
            highlights.
          </Typography>
        </Box>

        {/* ==========================================
            CATEGORY FILTERS
        ========================================== */}

        <Stack
          direction="row"
          spacing={1.5}
          justifyContent="center"
          sx={{
            mb: 6,
            flexWrap: "wrap",
            gap: 1.5,
          }}
        >
          {categories.map((category) => {
            const active =
              selectedCategory === category;

            return (
              <Button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setSelectedImageIndex(null);
                }}
                variant={
                  active ? "contained" : "outlined"
                }
                sx={{
                  px: 3,
                  py: 1,
                  borderRadius: 10,
                  textTransform: "none",
                  fontWeight: 600,

                  ...(active
                    ? {
                        bgcolor: "#D4AF37",
                        color: "#111",

                        "&:hover": {
                          bgcolor: "#b99425",
                        },
                      }
                    : {
                        borderColor:
                          "rgba(0,0,0,0.18)",
                        color: "#333",

                        "&:hover": {
                          borderColor: "#D4AF37",
                          color: "#b99425",
                        },
                      }),
                }}
              >
                {category}
              </Button>
            );
          })}
        </Stack>

        {/* ==========================================
            ERROR
        ========================================== */}

        {error && (
          <Box
            sx={{
              textAlign: "center",
              py: 8,
            }}
          >
            <ImageNotSupportedIcon
              sx={{
                fontSize: 60,
                color: "#D4AF37",
                mb: 2,
              }}
            />

            <Typography
              variant="h5"
              fontWeight={700}
            >
              Gallery unavailable
            </Typography>

            <Typography
              color="text.secondary"
              mt={1}
            >
              {error}
            </Typography>

            <Button
              variant="contained"
              onClick={fetchGallery}
              sx={{
                mt: 3,
                bgcolor: "#D4AF37",
                color: "#111",

                "&:hover": {
                  bgcolor: "#b99425",
                },
              }}
            >
              Try Again
            </Button>
          </Box>
        )}

        {/* ==========================================
            EMPTY STATE
        ========================================== */}

        {!error && filteredGallery.length === 0 && (
          <Box
            sx={{
              textAlign: "center",
              py: 10,
            }}
          >
            <CollectionsIcon
              sx={{
                fontSize: 70,
                color: "text.disabled",
              }}
            />

            <Typography
              variant="h5"
              fontWeight={700}
              mt={2}
            >
              No images available
            </Typography>

            <Typography
              color="text.secondary"
              mt={1}
            >
              Images for this category will appear
              here once they are uploaded.
            </Typography>
          </Box>
        )}

        {/* ==========================================
            MASONRY-STYLE GALLERY
        ========================================== */}

        {!error && filteredGallery.length > 0 && (
          <Box
            sx={{
              columnCount: {
                xs: 1,
                sm: 2,
                md: 3,
                lg: 4,
              },
              columnGap: 3,
            }}
          >
            {filteredGallery.map((item, index) => (
              <Box
                key={item._id || `${item.image}-${index}`}
                onClick={() => openLightbox(index)}
                sx={{
                  position: "relative",
                  mb: 3,
                  breakInside: "avoid",
                  overflow: "hidden",
                  borderRadius: 4,
                  cursor: "pointer",
                  bgcolor: "#eee",
                  boxShadow:
                    "0 8px 30px rgba(0,0,0,0.08)",

                  "&:hover .gallery-image": {
                    transform: "scale(1.07)",
                  },

                  "&:hover .gallery-overlay": {
                    opacity: 1,
                  },

                  "&:hover .zoom-icon": {
                    transform: "scale(1)",
                    opacity: 1,
                  },
                }}
              >
                <Box
                  component="img"
                  className="gallery-image"
                  src={item.image || FALLBACK_IMAGE}
                  alt={
                    item.title ||
                    "Sweet Asouzu Plaza"
                  }
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.src =
                      FALLBACK_IMAGE;
                  }}
                  sx={{
                    width: "100%",
                    display: "block",
                    minHeight: 250,
                    maxHeight: 550,
                    objectFit: "cover",
                    transition:
                      "transform 0.6s ease",
                  }}
                />

                {/* Overlay */}

                <Box
                  className="gallery-overlay"
                  sx={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    p: 3,
                    opacity: {
                      xs: 1,
                      md: 0,
                    },
                    transition: "opacity .35s ease",

                    background:
                      "linear-gradient(to top, rgba(0,0,0,.85), rgba(0,0,0,.05) 70%)",
                  }}
                >
                  {/* Zoom Icon */}

                  <Box
                    className="zoom-icon"
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform:
                        "translate(-50%, -50%) scale(.7)",
                      opacity: 0,
                      width: 55,
                      height: 55,
                      borderRadius: "50%",
                      display: {
                        xs: "none",
                        md: "flex",
                      },
                      alignItems: "center",
                      justifyContent: "center",
                      bgcolor:
                        "rgba(212,175,55,.92)",
                      transition: ".3s",
                    }}
                  >
                    <ZoomInIcon />
                  </Box>

                  {item.category && (
                    <Typography
                      sx={{
                        color: "#D4AF37",
                        fontSize: ".8rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: 1.5,
                      }}
                    >
                      {item.category}
                    </Typography>
                  )}

                  <Typography
                    variant="h6"
                    sx={{
                      color: "#fff",
                      fontWeight: 700,
                      mt: 0.5,
                    }}
                  >
                    {item.title ||
                      "Sweet Asouzu Plaza"}
                  </Typography>

                  {item.description && (
                    <Typography
                      sx={{
                        color:
                          "rgba(255,255,255,.75)",
                        fontSize: ".9rem",
                        mt: 0.5,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {item.description}
                    </Typography>
                  )}
                </Box>
              </Box>
            ))}
          </Box>
        )}
      </Container>

      {/* ==========================================
          LIGHTBOX
      ========================================== */}

      <Dialog
        open={Boolean(selectedImage)}
        onClose={closeLightbox}
        fullScreen
        PaperProps={{
          sx: {
            bgcolor: "rgba(8,8,8,.97)",
          },
        }}
      >
        {selectedImage && (
          <DialogContent
            sx={{
              position: "relative",
              p: {
                xs: 1,
                md: 4,
              },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            {/* Close */}

            <IconButton
              onClick={closeLightbox}
              aria-label="Close image"
              sx={{
                position: "absolute",
                top: {
                  xs: 15,
                  md: 25,
                },
                right: {
                  xs: 15,
                  md: 30,
                },
                zIndex: 10,
                bgcolor:
                  "rgba(255,255,255,.12)",
                color: "#fff",

                "&:hover": {
                  bgcolor: "#D4AF37",
                  color: "#111",
                },
              }}
            >
              <CloseIcon />
            </IconButton>

            {/* Previous */}

            {filteredGallery.length > 1 && (
              <IconButton
                onClick={showPreviousImage}
                aria-label="Previous image"
                sx={{
                  position: "absolute",
                  left: {
                    xs: 8,
                    md: 30,
                  },
                  top: "50%",
                  transform:
                    "translateY(-50%)",
                  zIndex: 10,
                  bgcolor:
                    "rgba(255,255,255,.12)",
                  color: "#fff",

                  "&:hover": {
                    bgcolor: "#D4AF37",
                    color: "#111",
                  },
                }}
              >
                <ArrowBackIosNewIcon />
              </IconButton>
            )}

            {/* Image and Details */}

            <Stack
              spacing={2}
              alignItems="center"
              sx={{
                width: "100%",
                maxWidth: 1200,
              }}
            >
              <Box
                component="img"
                src={
                  selectedImage.image ||
                  FALLBACK_IMAGE
                }
                alt={
                  selectedImage.title ||
                  "Sweet Asouzu Plaza"
                }
                sx={{
                  maxWidth: "100%",
                  maxHeight: {
                    xs: "68vh",
                    md: "78vh",
                  },
                  objectFit: "contain",
                  borderRadius: 2,
                }}
              />

              <Box
                sx={{
                  textAlign: "center",
                  maxWidth: 700,
                  px: 3,
                }}
              >
                {selectedImage.category && (
                  <Typography
                    sx={{
                      color: "#D4AF37",
                      textTransform: "uppercase",
                      letterSpacing: 1.5,
                      fontSize: ".8rem",
                      fontWeight: 700,
                    }}
                  >
                    {selectedImage.category}
                  </Typography>
                )}

                <Typography
                  variant="h5"
                  sx={{
                    color: "#fff",
                    fontWeight: 700,
                    mt: 0.5,
                  }}
                >
                  {selectedImage.title ||
                    "Sweet Asouzu Plaza"}
                </Typography>

                {selectedImage.description && (
                  <Typography
                    sx={{
                      color:
                        "rgba(255,255,255,.7)",
                      mt: 1,
                    }}
                  >
                    {selectedImage.description}
                  </Typography>
                )}

                <Typography
                  sx={{
                    color:
                      "rgba(255,255,255,.45)",
                    mt: 1,
                    fontSize: ".85rem",
                  }}
                >
                  {selectedImageIndex + 1} of{" "}
                  {filteredGallery.length}
                </Typography>
              </Box>
            </Stack>

            {/* Next */}

            {filteredGallery.length > 1 && (
              <IconButton
                onClick={showNextImage}
                aria-label="Next image"
                sx={{
                  position: "absolute",
                  right: {
                    xs: 8,
                    md: 30,
                  },
                  top: "50%",
                  transform:
                    "translateY(-50%)",
                  zIndex: 10,
                  bgcolor:
                    "rgba(255,255,255,.12)",
                  color: "#fff",

                  "&:hover": {
                    bgcolor: "#D4AF37",
                    color: "#111",
                  },
                }}
              >
                <ArrowForwardIosIcon />
              </IconButton>
            )}
          </DialogContent>
        )}
      </Dialog>
    </Box>
  );
}