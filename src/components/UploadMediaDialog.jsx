import { useState } from "react";
import api from "../api/api";

import {
    Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  TextField,
  MenuItem,
  Box,
  LinearProgress,
  Alert,
} from "@mui/material";

export default function UploadMediaDialog({
  open,
  onClose,
  refresh,
}) {
  const [files, setFiles] = useState([]);

  const [category, setCategory] =
    useState("general");

  const [uploading, setUploading] =
    useState(false);

  const [progress, setProgress] =
    useState(0);

const [preview, setPreview] =useState([]);

  const [error, setError] =
    useState("");

 const handleFileChange = (e) => {
  const selected = [...e.target.files];

  setFiles(selected);

  setPreview(
    selected.map((file) => ({
      file,
      url: URL.createObjectURL(file),
      type: file.type,
    }))
  );
};

  const handleUpload = async () => {
    if (!files.length) {
      setError(
        "Please select at least one file."
      );
      return;
    }

    try {
      setUploading(true);
      setError("");

      const formData = new FormData();

      files.forEach((file) => {
        formData.append("files", file);
      });

      formData.append(
        "category",
        category
      );

      const admin = JSON.parse(
        localStorage.getItem("admin")
      );

      await api.post(
        "/media/upload",
        formData,
        {
          headers: {
            Authorization: `Bearer ${admin.token}`,
            "Content-Type":
              "multipart/form-data",
          },

          onUploadProgress: (
            progressEvent
          ) => {
            const percent = Math.round(
              (progressEvent.loaded * 100) /
                progressEvent.total
            );

            setProgress(percent);
          },
        }
      );

      setFiles([]);
      setCategory("general");
      setProgress(0);

      refresh();

      onClose();
    } catch (err) {
      console.log(err);

      setError(
        err.response?.data?.message ||
          "Upload failed."
      );
    } finally {
      setUploading(false);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle>
        Upload Media
      </DialogTitle>

      <DialogContent>

        {error && (
          <Alert
            severity="error"
            sx={{ mb: 2 }}
          >
            {error}
          </Alert>
        )}

        <TextField
          select
          fullWidth
          label="Category"
          margin="normal"
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
        >
          <MenuItem value="general">
            General
          </MenuItem>

          <MenuItem value="hero">
            Hero
          </MenuItem>

          <MenuItem value="slider">
            Homepage Slider
          </MenuItem>

          <MenuItem value="gallery">
            Gallery
          </MenuItem>

          <MenuItem value="shops">
            Shops
          </MenuItem>

          <MenuItem value="events">
            Events
          </MenuItem>
        </TextField>

        <Button
          variant="outlined"
          component="label"
          fullWidth
          sx={{ mt: 2 }}
        >
          {/* Choose Files */}

          {/* <input
            hidden
            multiple
            type="file"
            accept="image/*,video/*"
            onChange={handleFileChange}
          /> */}
          <input
  type="file"
  multiple
  accept="image/*,video/*"
  onChange={handleFileChange}
/>

        </Button>
<Grid container spacing={2} mt={2}>
  {preview.map((item, index) => (
    <Grid item xs={4} key={index}>
      {item.type.startsWith("image") ? (
        <img
          src={item.url}
          width="100%"
          style={{
            borderRadius:8,
            objectFit:"cover",
            height:120
          }}
        />
      ) : (
        <video
          src={item.url}
          width="100%"
          controls
        />
      )}
    </Grid>
  ))}
</Grid>
        <Box mt={2}>

          {files.length === 0 ? (
            <Typography
              color="text.secondary"
            >
              No files selected
            </Typography>
          ) : (
            files.map((file) => (
              <Typography
                key={file.name}
              >
                • {file.name}
              </Typography>
            ))
          )}

        </Box>

        {uploading && (
          <Box mt={3}>
            <LinearProgress
              variant="determinate"
              value={progress}
            />

            <Typography
              mt={1}
              align="center"
            >
              {progress}%
            </Typography>
          </Box>
        )}

      </DialogContent>

      <DialogActions>

        <Button
          onClick={onClose}
          disabled={uploading}
        >
          Cancel
        </Button>

        <Button
          variant="contained"
          sx={{
            bgcolor: "#D4AF37",
          }}
          disabled={
            uploading ||
            files.length === 0
          }
          onClick={handleUpload}
        >
          {uploading
            ? "Uploading..."
            : "Upload"}
        </Button>

      </DialogActions>
    </Dialog>
  );
}