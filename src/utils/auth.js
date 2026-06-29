export const getToken = () =>
  localStorage.getItem("token");

export const getBuyer = () =>
  JSON.parse(localStorage.getItem("buyer"));

export const isAuthenticated = () =>
  !!localStorage.getItem("token");

export const logout = () => {
  localStorage.removeItem("buyer");
  localStorage.removeItem("token");
};