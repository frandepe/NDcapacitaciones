import React from "react";

import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoutes() {
  const isAuth = process.env.REACT_APP_ACCESS;
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
}
