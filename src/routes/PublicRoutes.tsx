// src/routes/PublicRoutes.tsx
// import { Navigate, Outlet } from "react-router-dom";
// import { useAuth } from "../hooks/useAuth";

// export const PublicRoutes = () => {
//   const { isAuthenticated } = useAuth();

//   return !isAuthenticated ? <Outlet /> : <Navigate to="/dashboard" />;
// };

import { Navigate, Outlet } from "react-router-dom";
import { useContextAuth } from "../hooks/auth/useContextAuth";
//import { useContextAuth } from "../features/auth/hooks/useContextAuth";

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
