import React, { useState } from 'react'
import axios from "axios"
import { useLocation } from 'react-router-dom';



const Login = (data) => {

    const navigate = useNavigate()

    const { handleLoggedInUser } = useData()

const handleLogin = (e) => {
    settingData({
        ...loginData,
        [e.target.name]: e.target.value
    })
}

const handleLoginSubmit = (e) => {
    e.preventDefault()
    axios({
        method: 'post',
        url: 'http://localhost:3002/api/login',
        loginData: loginData
    })
    .then((res) => {
        console.log('res', res)
    })
    .catch(err => console.log(err))
}


    return (
        <div className="loginCont">

            <div className="login">Login</div>

        
        <div className="loginInputs">
            
        </div>
        </div>
    )

}