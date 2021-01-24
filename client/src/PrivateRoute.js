import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "./context/authContext";

function PrivateRoute({ component: Component, ...rest }) {
  const { checkTokenExist }  = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        checkTokenExist() ? (
          <Component {...props} />
        ) : (
            <Redirect to="/login" />
        )
      }
    />
  )
}

export default PrivateRoute;