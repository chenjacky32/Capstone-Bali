import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({ children, ...rest }) => {
  const { isLoggedIn } = useContext(AuthContext);

  return isLoggedIn
    ? children
    : React.createElement(Navigate, { to: "/login", replace: true });
};

export default PrivateRoute;
