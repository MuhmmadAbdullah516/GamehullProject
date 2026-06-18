import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/auth/use-auth";

function AdminProtectedRoute() {
  const { isAuthenticated, user } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate replace state={{ from: location }} to="/login" />;
  }

  if (user?.role !== "admin") {
    return <Navigate replace to="/" />;
  }

  return <Outlet />;
}

export default AdminProtectedRoute;
