import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/auth/use-auth";

function AdminProtectedRoute() {
  const { isAuthenticated, user } = useAuth();
  const location = useLocation();

  // Not logged in → redirect to login page
  if (!isAuthenticated) {
    return <Navigate replace state={{ from: location }} to="/login" />;
  }

  // Logged in but NOT an admin → redirect to homepage
  if (user?.role !== "admin") {
    return <Navigate replace to="/" />;
  }

  return <Outlet />;
}

export default AdminProtectedRoute;
