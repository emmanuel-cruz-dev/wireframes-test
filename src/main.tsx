import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";
import { AppRoutes } from "./routes/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      {/* <App /> */}
      <AppRoutes />
    </AuthProvider>
  </StrictMode>
);
