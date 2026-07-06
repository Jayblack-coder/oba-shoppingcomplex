
import { useEffect, useState } from "react";

import api from "../api/api";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Grid,
  Divider,
  Chip,
  CircularProgress,
  Box,
  Paper,
  TextField,
  Checkbox,
  FormControlLabel,
  Alert,
} from "@mui/material";

export default function ReservationDetailsDialog({
  open,
  reservationId,
  onClose,
  onApprove,
  onCancel,
}) {
  const [loading, setLoading] = useState(false);

  const [saving, setSaving] = useState(false);

  const [reservation, setReservation] =
    useState(null);

  const [paymentConfirmed, setPaymentConfirmed] =
    useState(false);

  const [adminNotes, setAdminNotes] =
    useState("");

  const [success, setSuccess] =
    useState("");

  useEffect(() => {
    if (open && reservationId) {
      fetchReservation();
    }
  }, [open, reservationId]);

  const fetchReservation = async () => {
    try {
      setLoading(true);

      const res = await api.get(
        `/reservations/admin/${reservationId}`
      );

      setReservation(res.data.reservation);

      setPaymentConfirmed(
        res.data.reservation.paymentConfirmed || false
      );

      setAdminNotes(
        res.data.reservation.adminNotes || ""
      );

    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const saveAdminData = async () => {
    try {
      setSaving(true);

      await api.patch(
        `/reservations/admin/${reservation._id}`,
        {
          paymentConfirmed,
          adminNotes,
        }
      );

      setSuccess(
        "Reservation updated successfully."
      );

      fetchReservation();

    } catch (err) {
      console.error(err);
    } finally {
      setSaving(false);

      setTimeout(() => {
        setSuccess("");
      }, 2500);
    }
  };

  const statusColor = (status) => {
    switch (status) {
      case "Approved":
        return "success";

      case "Pending":
        return "warning";

      case "Cancelled":
        return "error";

      case "Rejected":
        return "default";

      default:
        return "default";
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xl"
      fullWidth
    >
      <DialogTitle>
        Reservation Review
      </DialogTitle>

      <DialogContent dividers>

        {loading ? (
          <Box
            display="flex"
            justifyContent="center"
            py={8}
          >
            <CircularProgress />
          </Box>
        ) : reservation ? (
          <>

            {success && (
              <Alert
                severity="success"
                sx={{ mb: 3 }}
              >
                {success}
              </Alert>
            )}

            <Grid
              container
              spacing={3}
            >

              {/* LEFT PANEL */}

              <Grid
                item
                xs={12}
                md={4}
              >
                <Paper
                  sx={{
                    p:3,
                    height:"100%"
                  }}
                >

                  <Typography
                    variant="h6"
                  >
                    Reservation Details
                  </Typography>

                  <Divider sx={{my:2}} />

                  <Typography
                    fontWeight="bold"
                  >
                    Buyer
                  </Typography>

                  <Typography>
                    {reservation.buyer.firstName}{" "}
                    {reservation.buyer.lastName}
                  </Typography>

                  <Typography>
                    {reservation.buyer.email}
                  </Typography>

                  <Typography>
                    {reservation.buyer.phone}
                  </Typography>

                  <Divider sx={{my:2}} />

                  <Typography
                    fontWeight="bold"
                  >
                    Shop
                  </Typography>

                  <Typography>
                    Shop Code:
                    {" "}
                    {reservation.shop.shopCode}
                  </Typography>

                  <Typography>
                    Type:
                    {" "}
                    {reservation.shop.shopType}
                  </Typography>

                  <Typography>
                    Price:
                    {" "}
                    ₦
                    {reservation.shop.price?.toLocaleString()}
                  </Typography>

                  <Typography>
                    Installment:
                    {" "}
                    ₦
                    {reservation.shop.installmentPrice?.toLocaleString()}
                  </Typography>

                  <Divider sx={{my:2}} />

                  <Typography
                    fontWeight="bold"
                  >
                    Reservation
                  </Typography>

                  <Typography>
                    Number:
                    {" "}
                    {reservation.reservationNumber}
                  </Typography>

                  <Typography>
                    Payment:
                    {" "}
                    {reservation.paymentOption}
                  </Typography>

                  <Typography
                    sx={{mt:1}}
                  >
                    Status:
                  </Typography>

                  <Chip
                    label={reservation.status}
                    color={statusColor(
                      reservation.status
                    )}
                  />

                  <Typography sx={{mt:2}}>
                    Reserved:
                  </Typography>

                  <Typography>
                    {new Date(
                      reservation.createdAt
                    ).toLocaleString()}
                  </Typography>

                  <Typography sx={{mt:2}}>
                    Expires:
                  </Typography>

                  <Typography>
                    {new Date(
                      reservation.expiresAt
                    ).toLocaleString()}
                  </Typography>

                </Paper>
              </Grid>

              {/* MIDDLE PANEL */}

              <Grid
                item
                xs={12}
                md={4}
              >
                <Paper
                  sx={{
                    p:3,
                    height:"100%"
                  }}
                >

                  <Typography
                    variant="h6"
                  >
                    Payment Verification
                  </Typography>

                  <Divider sx={{my:2}} />

                  <Typography
                    fontWeight="bold"
                  >
                    Payment Instructions
                  </Typography>

                  <Typography>
                    Bank:
                    {" "}
                    {reservation.bankName ||
                      "Configure in Admin Settings"}
                  </Typography>

                  <Typography>
                    Account Name:
                    {" "}
                    {reservation.accountName ||
                      "Configure in Admin Settings"}
                  </Typography>

                  <Typography>
                    Account Number:
                    {" "}
                    {reservation.accountNumber ||
                      "Configure in Admin Settings"}
                  </Typography>

                  <Divider sx={{my:2}} />

                  <Typography>
                    Amount Due
                  </Typography>

                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    color="primary"
                  >
                    ₦
                    {reservation.shop.price?.toLocaleString()}
                  </Typography>

                  <Typography
                    sx={{mt:2}}
                  >
                    Payment Option:
                    {" "}
                    {reservation.paymentOption}
                  </Typography>

                  <FormControlLabel
                    sx={{mt:2}}
                    control={
                      <Checkbox
                        checked={paymentConfirmed}
                        onChange={(e)=>
                          setPaymentConfirmed(
                            e.target.checked
                          )
                        }
                      />
                    }
                    label="Payment Confirmed"
                  />

                </Paper>
              </Grid>

              {/* RIGHT PANEL */}

              <Grid
                item
                xs={12}
                md={4}
              >
                <Paper
                  sx={{
                    p:3,
                    height:"100%"
                  }}
                >

                  <Typography
                    variant="h6"
                  >
                    Internal Admin Notes
                  </Typography>

                  <Divider sx={{my:2}} />

                  <TextField
                    multiline
                    rows={15}
                    fullWidth
                    value={adminNotes}
                    onChange={(e)=>
                      setAdminNotes(
                        e.target.value
                      )
                    }
                    placeholder={`Examples:

• Bank alert received

• Buyer called today

• Awaiting owner confirmation

• Buyer requested extension

• Payment verified

• Owner contacted`}
                  />

                </Paper>
              </Grid>

            </Grid>

          </>
        ) : (
          <Typography>
            Reservation not found.
          </Typography>
        )}

      </DialogContent>

      <DialogActions
        sx={{
          justifyContent:"space-between",
          px:3,
          py:2,
        }}
      >

        <Button
          onClick={onClose}
        >
          Close
        </Button>

        {reservation?.status==="Pending" && (

          <Box>

            <Button
              variant="outlined"
              sx={{mr:2}}
              disabled={saving}
              onClick={saveAdminData}
            >
              Save Notes
            </Button>

            <Button
              color="error"
              variant="outlined"
              sx={{mr:2}}
              onClick={()=>
                onCancel(reservation._id)
              }
            >
              Cancel Reservation
            </Button>

            <Button
              variant="contained"
              color="success"
              disabled={!paymentConfirmed}
              onClick={()=>
                onApprove(reservation._id)
              }
            >
              Approve Reservation
            </Button>

          </Box>

        )}

      </DialogActions>

    </Dialog>
  );
}

