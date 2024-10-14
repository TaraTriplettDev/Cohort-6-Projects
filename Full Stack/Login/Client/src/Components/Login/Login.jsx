import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import "./login.css";
import { useData } from "../../hooks/context-hook";
import Registration from "../Registration/Registration";

const Login = () => {
  const nav = useNavigate();
  const location = useLocation();
  const { handleLoggedInUser } = useData();

  const [ login, setLogin ] = useState({});

  // const { reg, setReg } = useState(false);

  // const handleRegister = () => {
  //   setReg(!reg);
  // };

  const handleChange = (e) => {
    setLogin((login) => ({
      ...login,
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
        nav("/blog");
        // console.warn('res.body==', res.body)
      })
      .catch((err) => console.log(err));
  };

  const handleRegisterRedirect = () => {
    nav("/register"); // Navigate to the Register page
  };

  return (
    <div id='mainLogin'>
    {console.log('login hit', login)}
        <div id='loginCont'>
            <h4>Login Here</h4>
            <input type="text" placeholder='username' name="username" onChange={(e) => handleChange(e)} />
            <br /><br />
            <input type="text" placeholder='password' name="password" onChange={(e) => handleChange(e)} />
            <br /><br />
            <button className='button'onClick={(e) => handleLogin(e)}>Submit</button>
            <br /><br /><br />
            <h4>Or To Register</h4>
            <button onClick={handleRegisterRedirect}>Click Here</button>
        </div>
    </div>
)

};

export default Login;
