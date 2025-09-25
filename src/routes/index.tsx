import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NotFound from "../pages/NotFound";
import DashboardPage from "../pages/dashboard/DashboardPage";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import PatientsPage from "../pages/patients/PatientsPage";
import PublicRoutes from "./PublicRoutes";
import ProfilePage from "../pages/profile/ProfilePage";
import AppointmentsPage from "../pages/appointments/AppointmentsPage";
import DashboardPageTwo from "../pages/dashboard/DashboardPageTwo";
import PatientTabs from "../pages/patientTabs/PatientTabsPage";
import Products from "../pages/Products/Products";

export const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route path="/" element={<Products />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/dashboard2" element={<DashboardPageTwo />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/patients" element={<PatientsPage />} />
      <Route path="/appointments" element={<AppointmentsPage />} />
      <Route path="/patient-tabs" element={<PatientTabs />} />

      <Route path="/404" element={<NotFound />} />

      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  </BrowserRouter>
);
