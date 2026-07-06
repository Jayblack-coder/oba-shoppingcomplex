import {
  Box,
  Button,
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const getStatusColor = (status) => {
  switch (status) {
    case "Pending":
      return "warning";

    case "Approved":
      return "success";

    case "Rejected":
      return "error";

    case "Cancelled":
      return "default";

    default:
      return "default";
  }
};

export default function ReservationTable({
  reservations,
  onView,
  onApprove,
  onCancel,
}) {
  if (!reservations.length) {
    return (
      <Paper sx={{ p: 4 }}>
        <Typography align="center">
          No reservations found.
        </Typography>
      </Paper>
    );
  }

  return (
    <TableContainer component={Paper}>
      <Table>

        <TableHead>
          <TableRow>
            <TableCell>
              Reservation No
            </TableCell>

            <TableCell>
              Buyer
            </TableCell>

            <TableCell>
              Shop
            </TableCell>

            <TableCell>
              Payment
            </TableCell>

            <TableCell>
              Status
            </TableCell>

            <TableCell>
              Reserved On
            </TableCell>

            <TableCell align="center">
              Actions
            </TableCell>

          </TableRow>
        </TableHead>

        <TableBody>

          {reservations.map((reservation) => (

            <TableRow
              key={reservation._id}
              hover
            >
              <TableCell>
                {reservation.reservationNumber}
              </TableCell>

              <TableCell>
                {reservation.buyer?.firstName}{" "}
                {reservation.buyer?.lastName}
              </TableCell>

              <TableCell>
                {reservation.shop?.shopCode}
              </TableCell>

              <TableCell>
                {reservation.paymentOption}
              </TableCell>

              <TableCell>
                <Chip
                  label={reservation.status}
                  color={getStatusColor(
                    reservation.status
                  )}
                  size="small"
                />
              </TableCell>

              <TableCell>
                {new Date(
                  reservation.createdAt
                ).toLocaleDateString()}
              </TableCell>

              <TableCell>

                <Box
                  display="flex"
                  gap={1}
                  justifyContent="center"
                >
                  <Button
                    size="small"
                    variant="outlined"
                    onClick={() =>
                      onView(
                        reservation._id
                      )
                    }
                  >
                    View
                  </Button>

                  {reservation.status ===
                    "Pending" && (
                    <>
                      <Button
                        size="small"
                        color="success"
                        variant="contained"
                        onClick={() =>
                          onApprove(
                            reservation._id
                          )
                        }
                      >
                        Approve
                      </Button>

                      <Button
                        size="small"
                        color="error"
                        variant="contained"
                        onClick={() =>
                          onCancel(
                            reservation._id
                          )
                        }
                      >
                        Cancel
                      </Button>
                    </>
                  )}

                </Box>

              </TableCell>

            </TableRow>

          ))}

        </TableBody>

      </Table>
    </TableContainer>
  );
}