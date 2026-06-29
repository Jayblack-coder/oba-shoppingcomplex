import { createContext, useContext, useEffect, useState } from "react";
import api from "../api/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [buyer, setBuyer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("buyerToken");

    if (token) {
      api.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${token}`;

      api
        .get("/buyers/profile")
        .then((res) => {
          setBuyer(res.data.buyer);
        })
        .catch(() => {
          localStorage.removeItem("buyerToken");
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  const login = (buyer, token) => {
    localStorage.setItem("buyerToken", token);

    api.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${token}`;

    setBuyer(buyer);
  };

  const logout = () => {
    localStorage.removeItem("buyerToken");

    delete api.defaults.headers.common.Authorization;

    setBuyer(null);
  };

  return (
    <AuthContext.Provider
      value={{
        buyer,
        login,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () =>
  useContext(AuthContext);