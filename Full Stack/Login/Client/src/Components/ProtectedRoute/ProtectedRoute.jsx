import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import { useData } from "../../hooks/context-hook";
import Landing from "../Landing/Landing";
// import Layout from '../Layout/Layout'

const ProtectedRoute = () => {
  const { authedUser, handleLoggedInUser } = useData();

  let nav = useNavigate();

  useEffect(() => {
    // if(authedUser._id){
    //      nav("/")
    // }

    console.log("useEftt PROT TR");

    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:3002/api/authed/",
    })
      .then((res) => {
        // console.log('res==', res)
        console.warn("PROT ROUTE auth res", res);
        if (res.data._id) {
          console.log(
            "protectedRoute.then.axios = res.data.username",
            res.data.username
          );
          handleLoggedInUser(res.data);
          // console.log("log", loggedIn)
          // setLoggedIn(true)
        } else {
          nav("/");
        }

        // }).then(() => {
        //      setLoggedIn(true)
        // })
      })
      .catch((err) => {
        console.log("useAuth err", err);
      });
  }, []);

  return (
    <>
      {console.log("ProtectedRoute HIT", authedUser)}
      {authedUser._id ? <Outlet /> : nav("/")}
    </>
  );
};

export default ProtectedRoute;
