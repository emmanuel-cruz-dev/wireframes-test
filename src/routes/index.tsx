import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PublicRoutes } from "./PublicRoutes";
import { PrivateRoutes } from "./PrivateRoutes";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";
import Register from "../pages/Register";

export const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PublicRoutes />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
      </Route>

      <Route path="/dashboard" element={<PrivateRoutes />}>
        <Route index element={<Dashboard />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
