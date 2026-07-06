import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const buyer = JSON.parse(
    localStorage.getItem("buyer")
  );

  const admin = JSON.parse(
    localStorage.getItem("admin")
  );

  // Admin requests
  if (
    config.url.startsWith("/admins") ||
    config.url.startsWith("/dashboard") ||
    config.url.startsWith("/reservations/admin") ||
    config.url.startsWith("/shops/admin")
  ) {
    if (admin?.token) {
      config.headers.Authorization =
        `Bearer ${admin.token}`;
    }
  }

  // Buyer requests
  else {
    if (buyer?.token) {
      config.headers.Authorization =
        `Bearer ${buyer.token}`;
    }
  }

  return config;
});

export default api;