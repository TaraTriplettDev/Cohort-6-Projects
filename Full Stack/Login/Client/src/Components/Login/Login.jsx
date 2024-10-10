import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { useData } from "../../hooks/ContextHook";
import Registration from "../Registration/Registration";

const Login = () => {
  const nav = useNavigate();

  const { handleLoggedInUser } = useData();

  const { login, setLogin } = useState({});

  const { reg, setReg } = useState(false);

  const handleRegister = () => {
    setReg(!reg);
  };

  const handleChange = (e) => {
    setLogin((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // console.log('handleLogin hit')
    axios({
      method: "post",
      url: "http://localhost:3002/api/login",
      data: login,
    })
      .then((res) => {
        console.warn("res.data==", res.data);
        handleLoggedInUser(res.data.found);
        nav("/landing");
        // console.warn('res.body==', res.body)
      })
      .catch((err) => console.log(err));
  };

  const handleRegisterRedirect = () => {
    nav("/register"); // Navigate to the Register page
  };

  // return (
  //     console.log('login')
  // )

  const handleSubmit = (e) => {
    axios({
      method: "POST",
      url: "http://localhost:3002/api/login",
      data: login,
    })
      .then((res) => {
        // console.log("res", res.data.found)
        handleLoggedInUser(res.data.found);
        nav("/landing");
      })
      .catch((err) => console.log(err));
  };
};

export default Login;
