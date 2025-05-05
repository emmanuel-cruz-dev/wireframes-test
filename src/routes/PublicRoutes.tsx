import { Navigate, Outlet } from "react-router-dom";
import { useContextAuth } from "../hooks/auth/useContextAuth";

const PublicRoutes = () => {
  const { state } = useContextAuth();

  // Si el usuario está autenticado, redirigir al dashboard
  return state.isAuthenticated ? (
    <Navigate to="/dashboard" replace />
  ) : (
    <Outlet />
  );
};

export default PublicRoutes;
