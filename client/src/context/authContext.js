import React, { Component, createContext} from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
export const AuthContext = createContext();

class AuthProvider extends Component {
  state = {
    userID: null,
    isAuthenicated: false,
  };
  
  componentDidMount() {
    this.checkTokenExpired()
  }

  checkTokenExist = () => {
    const existingToken = JSON.parse(localStorage.getItem("jwtToken"));
    if (existingToken) {
      this.setAuthToken(existingToken);
      return true;
    } else {
      this.setAuthToken(false);
      return false;
    }
  };

  setTokens = (data) => {
    localStorage.setItem("jwtToken", JSON.stringify(data));
  };

  setAuthToken = (token) => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = token;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  };

  setUser = (decoded) => {
    this.setState((prevState) => {
      return { userID: decoded.id, email: decoded.email, isAuthenicated: true };
    });
  };

  LogoutUser = () => {
    localStorage.removeItem("jwtToken");
    this.setAuthToken(false);
    this.setState((prevState) => {
      return { userID: null, email: "", isAuthenicated: false };
    });
    window.location.href = "./";
  };

  checkTokenExpired = () => {
    if (localStorage.getItem("jwtToken")) {
      const token = localStorage.getItem("jwtToken");
      this.setAuthToken(token);
      const decoded = jwt_decode(token);
      this.setUser(decoded);
      const currentTime = Date.now() / 1000; 
      if (decoded.exp < currentTime) {
        this.LogoutUser();
      }
    }
  };

  render() {
    const { children } = this.props;
    const { userID, email, isAuthenicated } = this.state;
    const {
      setUser,
      setTokens,
      checkTokenExist,
      setAuthToken,
      LogoutUser,
      checkTokenExpired,
    } = this;

    return (
      <AuthContext.Provider
        value={{
          userID,
          email,
          isAuthenicated,
          setUser,
          setTokens,
          checkTokenExist,
          setAuthToken,
          LogoutUser,
          checkTokenExpired,
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  }
}

const AuthConsumer = AuthContext.Consumer;
export default AuthContext;
export { AuthProvider, AuthConsumer }