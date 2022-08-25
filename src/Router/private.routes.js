import React from "react";

import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoutes() {
  const isAuth = window.localStorage.getItem("token");
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
}
