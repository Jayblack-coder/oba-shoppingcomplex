import { useEffect, useState } from "react";
import api from "../../api/api";

import {
  Box,
  Typography,
  Grid,
  Paper,
  Button,
  CircularProgress,
  Alert,
} from "@mui/material";
import UploadMediaDialog from "../../components/UploadMediaDialog";

export default function MediaManager() {
  const [media, setMedia] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchMedia();
  }, []);

  const fetchMedia = async () => {
    try {
      const res = await api.get("/media");

      setMedia(res.data);
    } catch (err) {
      console.log(err);

      setError("Unable to load media.");
    } finally {
      setLoading(false);
    }
  };

  if (loading)
    return (
      <Box display="flex" justifyContent="center" mt={8}>
        <CircularProgress />
      </Box>
    );

  return (
    <Box p={4}>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={4}
      >
        Media Manager
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

     <Button
    variant="contained"
    sx={{
        bgcolor: "#D4AF37",
        mb: 4,
    }}
    onClick={() => setOpen(true)}
>
    Upload Media
</Button>

      <Grid container spacing={3}>
        {media.map((item) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            key={item._id}
          >
            <Paper
              elevation={3}
              sx={{
                p: 2,
              }}
            >
              {item.type === "image" ? (
                <Box
                  component="img"
                  src={item.url}
                  sx={{
                    width: "100%",
                    height: 200,
                    objectFit: "cover",
                    borderRadius: 2,
                  }}
                />
              ) : (
                <video
                  src={item.url}
                  controls
                  width="100%"
                  style={{
                    borderRadius: 8,
                  }}
                />
              )}

              <Typography mt={2}>
                {item.category}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <UploadMediaDialog
    open={open}
    onClose={() => setOpen(false)}
    refresh={fetchMedia}
/>
    </Box>
  );
}