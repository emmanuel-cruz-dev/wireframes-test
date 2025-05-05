// import { useContext } from "react";
// import { AuthContext } from "../services/authContext";

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth debe usarse dentro de AuthProvider");
//   }
//   return context;
// };

import { useContextAuth as useAuthStore } from "./auth/useContextAuth";

export const useAuth = () => {
  const auth = useAuthStore();

  const isAdmin = () => {
    return auth.state.user !== null;
  };

  return {
    ...auth,
    isAdmin,
  };
};
