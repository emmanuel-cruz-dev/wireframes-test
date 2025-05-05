import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
//import { PublicRoutes } from "./PublicRoutes";
//import { PrivateRoutes } from "./PrivateRoutes";
//import Home from "../pages/Home";
//import Login from "../pages/Login";
// import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";
// import Register from "../pages/Register";
import DashboardPage from "../pages/dashboard/DashboardPage";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import PatientsPage from "../pages/patients/PatientsPage";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";

export const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      <Route element={<PrivateRoutes />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        {/* <Route path="/dashboard" element={<ProfilePage />} /> */}
        <Route path="/patients" element={<PatientsPage />} />
        {/* <Route path="/appointments" element={<AppointmentsPage />} /> */}
      </Route>

      <Route path="/404" element={<NotFound />} />

      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  </BrowserRouter>
);
