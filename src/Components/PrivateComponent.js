import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function PrivateComponent() {
  const auth = localStorage.getItem("users");

  return <div>{auth ? <Outlet /> : <Navigate to="/signup" />}</div>;
}

export default PrivateComponent;
