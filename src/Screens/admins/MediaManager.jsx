// import { useEffect, useState } from "react";
// import api from "../../api/api";

// import {
//   Box,
//   Typography,
//   Grid,
//   Paper,
//   Button,
//   CircularProgress,
//   Alert,
// } from "@mui/material";
// import UploadMediaDialog from "../../components/UploadMediaDialog";

// export default function MediaManager() {
//   const [media, setMedia] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [open, setOpen] = useState(false);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     fetchMedia();
//   }, []);

//   const fetchMedia = async () => {
//     try {
//       const res = await api.get("/media");

//       setMedia(res.data);
//     } catch (err) {
//       console.log(err);

//       setError("Unable to load media.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const deleteMedia = async (id) => {
//   try {
//     await api.delete(`/media/${id}`);

//     // Refresh the list
//     fetchMedia();
//   } catch (err) {
//     console.error(err);
//   }
// };

//   if (loading)
//     return (
//       <Box display="flex" justifyContent="center" mt={8}>
//         <CircularProgress />
//       </Box>
//     );

//   return (
//     <Box p={4}>
//       <Typography
//         variant="h4"
//         fontWeight="bold"
//         mb={4}
//       >
//         Media Manager
//       </Typography>

//       {error && (
//         <Alert severity="error" sx={{ mb: 3 }}>
//           {error}
//         </Alert>
//       )}

//      <Button
//     variant="contained"
//     sx={{
//         bgcolor: "#D4AF37",
//         mb: 4,
//     }}
//     onClick={() => setOpen(true)}
// >
//     Upload Media
// </Button>

//       <Grid container spacing={3}>
//         {media.map((item) => (
//           <Grid
//             item
//             xs={12}
//             sm={6}
//             md={3}
//             key={item._id}
//           >
//             <Paper
//               elevation={3}
//               sx={{
//                 p: 2,
//               }}
//             >
//               {item.type === "image" ? (
//                 <Box
//                   component="img"
//                   src={item.url}
//                   sx={{
//                     width: "100%",
//                     height: 200,
//                     objectFit: "cover",
//                     borderRadius: 2,
//                   }}
//                 />
//               ) : (
//                 <video
//                   src={item.url}
//                   controls
//                   width="100%"
//                   style={{
//                     borderRadius: 8,
//                   }}
//                 />
//               )}

//               <Typography mt={2}>
//                 {item.category}
//               </Typography>
//                <Button
//       color="error"
//       variant="contained"
//       onClick={() => deleteMedia(item._id)}
//     >
//       Delete
//     </Button>
//             </Paper>
//           </Grid>
//         ))}
//       </Grid>
//       <UploadMediaDialog
//     open={open}
//     onClose={() => setOpen(false)}
//     refresh={fetchMedia}
// />
//     </Box>
//   );
// }
import { useEffect, useMemo, useState } from "react";
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import RefreshIcon from "@mui/icons-material/Refresh";

import api from "../../api/api";

const categories = [
  "all",
  "gallery",
  "home",
  "hero",
  "shops",
  "general",
];

export default function MediaManager() {
  const [media, setMedia] = useState([]);
  const [files, setFiles] = useState([]);

  const [category, setCategory] = useState("gallery");
  const [filterCategory, setFilterCategory] =
    useState("gallery");

  const [title, setTitle] = useState("");
  const [key, setKey] = useState("");
  const [order, setOrder] = useState(0);

  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [deletingId, setDeletingId] = useState(null);

  const [editOpen, setEditOpen] = useState(false);
  const [editingMedia, setEditingMedia] = useState(null);
  const [saving, setSaving] = useState(false);

  const [message, setMessage] = useState({
    open: false,
    text: "",
    severity: "success",
  });

  const showMessage = (
    text,
    severity = "success"
  ) => {
    setMessage({
      open: true,
      text,
      severity,
    });
  };

  // ==============================
  // FETCH MEDIA
  // ==============================

  const fetchMedia = async () => {
    try {
      setLoading(true);

      const res = await api.get("/media");

      // Supports both:
      // res.data = [...]
      // res.data.media = [...]
      const data = Array.isArray(res.data)
        ? res.data
        : res.data.media || [];

      setMedia(data);
    } catch (error) {
      console.error("FETCH MEDIA ERROR:", error);

      showMessage(
        error.response?.data?.message ||
          "Failed to load media",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMedia();
  }, []);

  // ==============================
  // FILTER MEDIA
  // ==============================

  const filteredMedia = useMemo(() => {
    if (filterCategory === "all") {
      return media;
    }

    return media.filter(
      (item) =>
        item.category === filterCategory
    );
  }, [media, filterCategory]);

  // ==============================
  // SELECT FILES
  // ==============================

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(
      event.target.files || []
    );

    setFiles(selectedFiles);
  };

  // ==============================
  // UPLOAD MEDIA
  // ==============================

  const handleUpload = async () => {
    if (!files.length) {
      showMessage(
        "Please select at least one file",
        "warning"
      );
      return;
    }

    try {
      setUploading(true);

      const formData = new FormData();

      files.forEach((file) => {
        formData.append("files", file);
      });

      formData.append("category", category);
      formData.append("title", title);
      formData.append("order", order);

      /*
       * Only send key when uploading
       * ONE file.
       *
       * Your Media model requires keys
       * to be unique.
       */
      if (
        files.length === 1 &&
        key.trim()
      ) {
        formData.append(
          "key",
          key.trim()
        );
      }

     const res = await api.post(
  "/media/upload",
  formData,
  {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  }
);
      const uploadedItems =
        res.data.media ||
        (Array.isArray(res.data)
          ? res.data
          : []);

      setMedia((previous) => [
        ...uploadedItems,
        ...previous,
      ]);

      setFiles([]);
      setTitle("");
      setKey("");
      setOrder(0);

      // Reset native file input
      const input =
        document.getElementById(
          "media-upload-input"
        );

      if (input) {
        input.value = "";
      }

      showMessage(
        `${uploadedItems.length} media file${
          uploadedItems.length === 1
            ? ""
            : "s"
        } uploaded successfully`
      );

      await fetchMedia();
    } catch (error) {
      console.error("UPLOAD ERROR:", error);

      showMessage(
        error.response?.data?.message ||
          "Upload failed",
        "error"
      );
    } finally {
      setUploading(false);
    }
  };

  // ==============================
  // EDIT MEDIA
  // ==============================

  const handleOpenEdit = (item) => {
    setEditingMedia({
      ...item,
      title: item.title || "",
      key: item.key || "",
      order: item.order || 0,
    });

    setEditOpen(true);
  };

  const handleCloseEdit = () => {
    if (saving) return;

    setEditOpen(false);
    setEditingMedia(null);
  };

  const handleSaveEdit = async () => {
    if (!editingMedia) return;

    try {
      setSaving(true);

      const res = await api.put(
        `/media/${editingMedia._id}`,
        {
          title: editingMedia.title,
          key: editingMedia.key,
          category:
            editingMedia.category,
          order: Number(
            editingMedia.order
          ),
        }
      );

      const updated =
        res.data.media || res.data;

      setMedia((previous) =>
        previous.map((item) =>
          item._id === updated._id
            ? updated
            : item
        )
      );

      setEditOpen(false);
      setEditingMedia(null);

      showMessage(
        "Media updated successfully"
      );

      await fetchMedia();
    } catch (error) {
      console.error(
        "UPDATE MEDIA ERROR:",
        error
      );

      showMessage(
        error.response?.data?.message ||
          "Failed to update media",
        "error"
      );
    } finally {
      setSaving(false);
    }
  };

  // ==============================
  // DELETE MEDIA
  // ==============================

  const handleDelete = async (item) => {
    const confirmed = window.confirm(
      `Delete "${
        item.title || "this media item"
      }"? This will also remove it from Cloudinary.`
    );

    if (!confirmed) return;

    try {
      setDeletingId(item._id);

      await api.delete(
        `/media/${item._id}`
      );

      setMedia((previous) =>
        previous.filter(
          (mediaItem) =>
            mediaItem._id !== item._id
        )
      );

      showMessage(
        "Media deleted successfully"
      );
    } catch (error) {
      console.error(
        "DELETE MEDIA ERROR:",
        error
      );

      showMessage(
        error.response?.data?.message ||
          "Failed to delete media",
        "error"
      );
    } finally {
      setDeletingId(null);
    }
  };

  // ==============================
  // FILE PREVIEWS
  // ==============================

  const filePreviews = useMemo(() => {
    return files.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));
  }, [files]);

  useEffect(() => {
    return () => {
      filePreviews.forEach(
        (preview) =>
          URL.revokeObjectURL(
            preview.url
          )
      );
    };
  }, [filePreviews]);

  return (
    <Box
      sx={{
        maxWidth: 1500,
        mx: "auto",
        px: {
          xs: 2,
          md: 4,
        },
        py: 5,
      }}
    >
      {/* HEADER */}

      <Stack
        direction={{
          xs: "column",
          sm: "row",
        }}
        justifyContent="space-between"
        alignItems={{
          xs: "flex-start",
          sm: "center",
        }}
        spacing={2}
        mb={4}
      >
        <Box>
          <Typography
            variant="h4"
            fontWeight={800}
          >
            Media & Gallery Manager
          </Typography>

          <Typography
            color="text.secondary"
            mt={1}
          >
            Manage gallery images, shop
            photographs, videos and website
            media.
          </Typography>
        </Box>

        <Button
          variant="outlined"
          startIcon={<RefreshIcon />}
          onClick={fetchMedia}
          disabled={loading}
        >
          Refresh
        </Button>
      </Stack>

      {/* UPLOAD SECTION */}

      <Card
        sx={{
          borderRadius: 4,
          mb: 5,
          boxShadow: 3,
        }}
      >
        <CardContent
          sx={{
            p: {
              xs: 2,
              md: 4,
            },
          }}
        >
          <Typography
            variant="h6"
            fontWeight={700}
            mb={3}
          >
            Upload Media
          </Typography>

          <Grid
            container
            spacing={2}
          >
            <Grid
              size={{
                xs: 12,
                md: 4,
              }}
            >
              <FormControl fullWidth>
                <InputLabel>
                  Category
                </InputLabel>

                <Select
                  value={category}
                  label="Category"
                  onChange={(e) =>
                    setCategory(
                      e.target.value
                    )
                  }
                >
                  {categories
                    .filter(
                      (item) =>
                        item !== "all"
                    )
                    .map((item) => (
                      <MenuItem
                        key={item}
                        value={item}
                      >
                        {item
                          .charAt(0)
                          .toUpperCase() +
                          item.slice(1)}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid
              size={{
                xs: 12,
                md: 4,
              }}
            >
              <TextField
                fullWidth
                label="Title"
                value={title}
                onChange={(e) =>
                  setTitle(
                    e.target.value
                  )
                }
                helperText="Optional gallery title"
              />
            </Grid>

            <Grid
              size={{
                xs: 12,
                md: 4,
              }}
            >
              <TextField
                fullWidth
                label="Unique Key"
                value={key}
                onChange={(e) =>
                  setKey(e.target.value)
                }
                disabled={
                  files.length > 1
                }
                helperText={
                  files.length > 1
                    ? "Keys are only available for single uploads"
                    : "Optional: poster, hero, etc."
                }
              />
            </Grid>

            <Grid
              size={{
                xs: 12,
                md: 4,
              }}
            >
              <TextField
                fullWidth
                type="number"
                label="Display Order"
                value={order}
                onChange={(e) =>
                  setOrder(
                    e.target.value
                  )
                }
              />
            </Grid>

            <Grid
              size={{
                xs: 12,
                md: 8,
              }}
            >
              <Button
                component="label"
                variant="outlined"
                startIcon={
                  <CloudUploadIcon />
                }
                sx={{
                  height: 56,
                  width: "100%",
                  borderStyle: "dashed",
                }}
              >
                Select Images or Videos

                <input
                  id="media-upload-input"
                  hidden
                  multiple
                  type="file"
                  accept="image/*,video/*"
                  onChange={
                    handleFileChange
                  }
                />
              </Button>
            </Grid>
          </Grid>

          {files.length > 0 && (
            <Box mt={4}>
              <Typography
                fontWeight={700}
                mb={2}
              >
                Selected Files (
                {files.length})
              </Typography>

              <Grid
                container
                spacing={2}
              >
                {filePreviews.map(
                  (
                    preview,
                    index
                  ) => (
                    <Grid
                      key={
                        preview.file
                          .name +
                        index
                      }
                      size={{
                        xs: 6,
                        sm: 4,
                        md: 2,
                      }}
                    >
                      <Box
                        sx={{
                          height: 130,
                          borderRadius: 2,
                          overflow:
                            "hidden",
                          bgcolor:
                            "#f5f5f5",
                        }}
                      >
                        {preview.file.type.startsWith(
                          "video/"
                        ) ? (
                          <Box
                            component="video"
                            src={
                              preview.url
                            }
                            controls
                            sx={{
                              width:
                                "100%",
                              height:
                                "100%",
                              objectFit:
                                "cover",
                            }}
                          />
                        ) : (
                          <Box
                            component="img"
                            src={
                              preview.url
                            }
                            alt={
                              preview.file
                                .name
                            }
                            sx={{
                              width:
                                "100%",
                              height:
                                "100%",
                              objectFit:
                                "cover",
                            }}
                          />
                        )}
                      </Box>

                      <Typography
                        variant="caption"
                        display="block"
                        noWrap
                        mt={1}
                      >
                        {
                          preview.file
                            .name
                        }
                      </Typography>
                    </Grid>
                  )
                )}
              </Grid>

              <Stack
                direction={{
                  xs: "column",
                  sm: "row",
                }}
                spacing={2}
                mt={3}
              >
                <Button
                  variant="contained"
                  startIcon={
                    uploading ? (
                      <CircularProgress
                        size={20}
                        color="inherit"
                      />
                    ) : (
                      <CloudUploadIcon />
                    )
                  }
                  disabled={uploading}
                  onClick={handleUpload}
                  sx={{
                    bgcolor: "#D4AF37",
                    color: "#111",
                    fontWeight: 700,
                    px: 4,
                    "&:hover": {
                      bgcolor:
                        "#b8941f",
                    },
                  }}
                >
                  {uploading
                    ? "Uploading..."
                    : `Upload ${files.length} File${
                        files.length ===
                        1
                          ? ""
                          : "s"
                      }`}
                </Button>

                <Button
                  color="inherit"
                  disabled={uploading}
                  onClick={() =>
                    setFiles([])
                  }
                >
                  Clear Selection
                </Button>
              </Stack>
            </Box>
          )}
        </CardContent>
      </Card>

      {/* FILTER */}

      <Stack
        direction={{
          xs: "column",
          sm: "row",
        }}
        justifyContent="space-between"
        alignItems={{
          xs: "stretch",
          sm: "center",
        }}
        spacing={2}
        mb={3}
      >
        <Typography
          variant="h5"
          fontWeight={700}
        >
          Media Library
        </Typography>

        <FormControl
          sx={{
            minWidth: 220,
          }}
        >
          <InputLabel>
            Filter Category
          </InputLabel>

          <Select
            value={filterCategory}
            label="Filter Category"
            onChange={(e) =>
              setFilterCategory(
                e.target.value
              )
            }
          >
            {categories.map(
              (item) => (
                <MenuItem
                  key={item}
                  value={item}
                >
                  {item === "all"
                    ? "All Media"
                    : item
                        .charAt(0)
                        .toUpperCase() +
                      item.slice(1)}
                </MenuItem>
              )
            )}
          </Select>
        </FormControl>
      </Stack>

      {/* MEDIA LIBRARY */}

      {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          py={10}
        >
          <CircularProgress />
        </Box>
      ) : filteredMedia.length === 0 ? (
        <Box
          sx={{
            py: 10,
            textAlign: "center",
            bgcolor: "#fafafa",
            borderRadius: 4,
          }}
        >
          <Typography
            variant="h6"
            color="text.secondary"
          >
            No media found in this
            category.
          </Typography>
        </Box>
      ) : (
        <Grid
          container
          spacing={3}
        >
          {filteredMedia.map(
            (item) => (
              <Grid
                key={item._id}
                size={{
                  xs: 12,
                  sm: 6,
                  md: 4,
                  lg: 3,
                }}
              >
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 3,
                    overflow:
                      "hidden",
                    boxShadow: 2,
                    transition:
                      "0.3s",
                    "&:hover": {
                      transform:
                        "translateY(-5px)",
                      boxShadow: 6,
                    },
                  }}
                >
                  <Box
                    sx={{
                      height: 230,
                      bgcolor:
                        "#f5f5f5",
                      position:
                        "relative",
                    }}
                  >
                    {item.type ===
                    "video" ? (
                      <Box
                        component="video"
                        src={item.url}
                        controls
                        sx={{
                          width:
                            "100%",
                          height:
                            "100%",
                          objectFit:
                            "cover",
                        }}
                      />
                    ) : (
                      <Box
                        component="img"
                        src={item.url}
                        alt={
                          item.title ||
                          "Media"
                        }
                        loading="lazy"
                        sx={{
                          width:
                            "100%",
                          height:
                            "100%",
                          objectFit:
                            "cover",
                        }}
                      />
                    )}

                    <Chip
                      label={
                        item.category
                      }
                      size="small"
                      sx={{
                        position:
                          "absolute",
                        top: 10,
                        left: 10,
                        bgcolor:
                          "rgba(255,255,255,.9)",
                      }}
                    />
                  </Box>

                  <CardContent>
                    <Typography
                      fontWeight={700}
                      noWrap
                    >
                      {item.title ||
                        "Untitled Media"}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      mt={1}
                    >
                      Type: {item.type}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                    >
                      Order:{" "}
                      {item.order || 0}
                    </Typography>

                    {item.key && (
                      <Chip
                        label={`Key: ${item.key}`}
                        size="small"
                        variant="outlined"
                        sx={{ mt: 1 }}
                      />
                    )}

                    <Stack
                      direction="row"
                      justifyContent="flex-end"
                      mt={2}
                    >
                      <IconButton
                        color="primary"
                        onClick={() =>
                          handleOpenEdit(
                            item
                          )
                        }
                      >
                        <EditIcon />
                      </IconButton>

                      <IconButton
                        color="error"
                        disabled={
                          deletingId ===
                          item._id
                        }
                        onClick={() =>
                          handleDelete(
                            item
                          )
                        }
                      >
                        {deletingId ===
                        item._id ? (
                          <CircularProgress
                            size={20}
                          />
                        ) : (
                          <DeleteIcon />
                        )}
                      </IconButton>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            )
          )}
        </Grid>
      )}

      {/* EDIT DIALOG */}

      <Dialog
        open={editOpen}
        onClose={handleCloseEdit}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>
          Edit Media
        </DialogTitle>

        {editingMedia && (
          <DialogContent>
            <Stack
              spacing={3}
              mt={1}
            >
              {editingMedia.type ===
              "video" ? (
                <Box
                  component="video"
                  src={
                    editingMedia.url
                  }
                  controls
                  sx={{
                    width: "100%",
                    maxHeight: 300,
                    borderRadius: 2,
                  }}
                />
              ) : (
                <Box
                  component="img"
                  src={
                    editingMedia.url
                  }
                  alt={
                    editingMedia.title
                  }
                  sx={{
                    width: "100%",
                    maxHeight: 300,
                    objectFit:
                      "cover",
                    borderRadius: 2,
                  }}
                />
              )}

              <TextField
                label="Title"
                fullWidth
                value={
                  editingMedia.title
                }
                onChange={(e) =>
                  setEditingMedia(
                    (previous) => ({
                      ...previous,
                      title:
                        e.target
                          .value,
                    })
                  )
                }
              />

              <TextField
                label="Unique Key"
                fullWidth
                value={
                  editingMedia.key
                }
                onChange={(e) =>
                  setEditingMedia(
                    (previous) => ({
                      ...previous,
                      key:
                        e.target
                          .value,
                    })
                  )
                }
              />

              <FormControl fullWidth>
                <InputLabel>
                  Category
                </InputLabel>

                <Select
                  value={
                    editingMedia.category
                  }
                  label="Category"
                  onChange={(e) =>
                    setEditingMedia(
                      (
                        previous
                      ) => ({
                        ...previous,
                        category:
                          e.target
                            .value,
                      })
                    )
                  }
                >
                  {categories
                    .filter(
                      (item) =>
                        item !== "all"
                    )
                    .map((item) => (
                      <MenuItem
                        key={item}
                        value={item}
                      >
                        {item
                          .charAt(0)
                          .toUpperCase() +
                          item.slice(1)}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>

              <TextField
                label="Display Order"
                type="number"
                fullWidth
                value={
                  editingMedia.order
                }
                onChange={(e) =>
                  setEditingMedia(
                    (previous) => ({
                      ...previous,
                      order:
                        e.target
                          .value,
                    })
                  )
                }
              />
            </Stack>
          </DialogContent>
        )}

        <DialogActions
          sx={{ p: 3 }}
        >
          <Button
            onClick={
              handleCloseEdit
            }
            disabled={saving}
          >
            Cancel
          </Button>

          <Button
            variant="contained"
            onClick={
              handleSaveEdit
            }
            disabled={saving}
            sx={{
              bgcolor: "#D4AF37",
              color: "#111",
            }}
          >
            {saving
              ? "Saving..."
              : "Save Changes"}
          </Button>
        </DialogActions>
      </Dialog>

      {/* NOTIFICATIONS */}

      <Snackbar
        open={message.open}
        autoHideDuration={5000}
        onClose={() =>
          setMessage(
            (previous) => ({
              ...previous,
              open: false,
            })
          )
        }
      >
        <Alert
          severity={
            message.severity
          }
          onClose={() =>
            setMessage(
              (previous) => ({
                ...previous,
                open: false,
              })
            )
          }
        >
          {message.text}
        </Alert>
      </Snackbar>
    </Box>
  );
}