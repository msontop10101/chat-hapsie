// import axios from "axios";
import React from "react";
import { useState, useContext } from "react";
import { loginUser } from "./comp/Login";

export const AuthContext = React.createContext({
  isAuth: false,
  access: localStorage.getItem("access"),
  // refresh: localStorage.getItem('refresh'),
  user: localStorage.getItem("user"),
  userId: localStorage.getItem("userId"),
  error: "",
  success: false,
  loading: false,
  login: (value) => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [success, setsucess] = useState(false);
  const [error, setError] = useState("");
  const [loading, setIsloading] = useState(false);
  const [isAuth, setisAuth] = useState(
    localStorage.getItem("access") ? true : false
  );
  const Login = (details) => {
    // console.log(details)
    // const userID = "";
    setIsloading(true);
    loginUser(details)
      .then((res) => {
        console.log(res.data.data.email, "token");
        // console.log(res.data.data._id);
        // userID = res.data.data._id;
        // console.log(userID);
        setsucess(true);
        setError("");
        setisAuth(true);
        localStorage.setItem("access", res.data.data.token);
        // localStorage.setItem('refresh', res.data.refresh)
        localStorage.setItem("user", res.data.data.email);
        localStorage.setItem("userId", res.data.data._id);
        setIsloading(false);
      })
      .catch((err) => {
        // console.log(err.response.data.error.message)
        setIsloading(false);
        setsucess(false);
        setisAuth(false);
        setError(err.response.data.error.message);
        localStorage.removeItem("access");
        // localStorage.removeItem('refresh', null)
        localStorage.removeItem("user");
        localStorage.removeItem("userId");
      });
  };
  const logout = () => {
    console.log("logging out");
    localStorage.removeItem("access");
    setIsloading(false);
    setError("");
    setisAuth(false);
    localStorage.removeItem("user");
    localStorage.removeItem("userId");
  };
  return (
    <AuthContext.Provider
      value={{
        isAuth: isAuth,
        access: localStorage.getItem("access"),
        // refresh: localStorage.getItem('refresh'),
        user: localStorage.getItem("user"),
        error,
        success,
        setsucess,
        loading,
        login: Login,
        logout,
        userId: localStorage.getItem("userId"),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);

// export const userIDD = () => userID;
