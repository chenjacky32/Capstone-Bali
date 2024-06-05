import React, { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? <Component {...props} /> : <Navigate to="/login" replace />
      }
    />
  );
};

export default PrivateRoute;
