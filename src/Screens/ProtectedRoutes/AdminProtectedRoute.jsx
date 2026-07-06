import { Navigate } from "react-router-dom";

export default function AdminProtectedRoute({
  children,
}) {
  const admin = JSON.parse(
    localStorage.getItem("admin")
  );

  if (!admin?.token) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}