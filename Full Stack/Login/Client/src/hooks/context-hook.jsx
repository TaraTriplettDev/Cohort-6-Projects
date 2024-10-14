import React, { createContext, useState, useContext } from "react";
// import axios from "axios";

const MyContext = createContext();

export const useData = () => useContext(MyContext);

export function MyProvider({ children }) {
  // Logged in user state
  const [authedUser, setAuthedUser] = useState({});

  // Logs in User and updates state
  const handleLoggedInUser = (input) => {
    console.log("input", input);
    setAuthedUser(input);
  };

  //Logout functionality
  // const handleLogout = () => {
  //   axios({
  //     method: "PUT",
  //     url: `http://localhost:3002/api/logout/${authedUser._id}`,
  //   })
  //     .then((res) => {
  //       console.log("res", res);
  //     })
  //     .catch((err) => console.log(err));

  //   nav("/");
  //   setAuthedUser({});
  // };

  return (
    <MyContext.Provider
        value={{
            handleLoggedInUser,
            authedUser
        }}
    >
        {children}
    </MyContext.Provider>
)

}

export default MyProvider
