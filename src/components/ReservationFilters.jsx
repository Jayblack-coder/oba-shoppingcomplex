import {
  Box,
  Grid,
  MenuItem,
  TextField,
  Button,
} from "@mui/material";

export default function ReservationFilters({
  filters,
  onChange,
  onReset,
}) {
  const handleChange = (e) => {
    onChange({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box mb={3}>
      <Grid container spacing={2}>

        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            label="Search"
            name="search"
            value={filters.search}
            onChange={handleChange}
            placeholder="Reservation No, Buyer, Shop..."
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <TextField
            select
            fullWidth
            label="Status"
            name="status"
            value={filters.status}
            onChange={handleChange}
          >
            <MenuItem value="">
              All Statuses
            </MenuItem>

            <MenuItem value="Pending">
              Pending
            </MenuItem>

            <MenuItem value="Approved">
              Approved
            </MenuItem>

            <MenuItem value="Rejected">
              Rejected
            </MenuItem>

            <MenuItem value="Cancelled">
              Cancelled
            </MenuItem>
          </TextField>
        </Grid>

        <Grid item xs={12} md={3}>
          <TextField
            select
            fullWidth
            label="Payment Option"
            name="paymentOption"
            value={filters.paymentOption}
            onChange={handleChange}
          >
            <MenuItem value="">
              All Payment Options
            </MenuItem>

            <MenuItem value="Full Payment">
              Full Payment
            </MenuItem>

            <MenuItem value="Installment">
              Installment
            </MenuItem>
          </TextField>
        </Grid>

        <Grid
          item
          xs={12}
          md={2}
          display="flex"
          alignItems="center"
        >
          <Button
            fullWidth
            variant="outlined"
            color="secondary"
            onClick={onReset}
          >
            Reset
          </Button>
        </Grid>

      </Grid>
    </Box>
  );
}