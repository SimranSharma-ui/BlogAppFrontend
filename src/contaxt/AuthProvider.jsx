import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import { Navigate, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [registerData, setRegisterData] = useState({
    Name: "",
    Email: "",
    Password: "",
  });
  const [loginData, setLoginData] = useState({
    Email: "",
    Password: "",
  });
  const tokenFromCookies = Cookies.get("token");
  const [authorised, setAuthorised] = useState(
    localStorage.getItem("token") ? true : false
  );
  const [token, setToken] = useState(null);

  const handleChangeRegister = (e) => {
    const { name, value } = e.target;
    setRegisterData({
      ...registerData,
      [name]: value,
    });
  };

  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://blogappbackend-8pw0.onrender.com/Authorisation/Register",
        registerData,{
          withCredentials:true
        }
      );
      Swal.fire({
        icon: "success",
        title: "Registration Successful!",
        text: response.data.message,
      });
      navigate('/Login');
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Registration Failed!",
        text: error.response
          ? error.response.data.message
          : "An error occurred",
      });
    }
  };

  const handleChangeLogin = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://blogappbackend-8pw0.onrender.com/Authorisation/Login",
        loginData,
        { withCredentials: true }
      );

      if (response.data.token) {
        Cookies.set("token", response.data.token, { expires: 7, secure: true });
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setAuthorised(true);
        navigate("/AllBlogs");
        Swal.fire({
          icon: "success",
          title: "Login Successful!",
          text: response.data.message,
        });
      }
    } catch (error) {
      console.log("errorbmdhgxk",error);
      setAuthorised(false);
      Swal.fire({
        icon: "error",
        title: "Login Failed!",
        text: error.response
          ? error.response.data.message
          : "An error occurred",
      });
    }
  };

  const logout = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        "https://blogappbackend-8pw0.onrender.com/Authorisation/Logout",
        { withCredentials: true }
      );
      localStorage.removeItem("token");
      Cookies.remove("token");
      setAuthorised(false);
      navigate('/Login');
      Swal.fire({
        icon: "success",
        title: "Logged Out!",
        text: "You have been successfully logged out.",
      });
    } catch (err) {
      console.log("Error logging out:", err);
      Swal.fire({
        icon: "error",
        title: "Logout Failed!",
        text: "An error occurred while logging out.",
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        registerData,
        loginData,
        authorised,
        token,
        handleChangeRegister,
        handleSubmitRegister,
        handleChangeLogin,
        handleSubmitLogin,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
