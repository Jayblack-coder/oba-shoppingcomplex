import api from "../api/api";

const reservationService = {
  getReservations(params = {}) {
    return api.get("/reservations/admin", {
      params,
    });
  },

  getReservation(id) {
    return api.get(`/reservations/admin/${id}`);
  },

  approveReservation(id) {
    return api.patch(
      `/reservations/${id}/approve`
    );
  },

  cancelReservation(id) {
    return api.patch(
      `/reservations/${id}/cancel`
    );
  },

  updateReservationAdmin(id, data) {
    return api.patch(
      `/reservations/admin/${id}`,
      data
    );
  },
};

export default reservationService;