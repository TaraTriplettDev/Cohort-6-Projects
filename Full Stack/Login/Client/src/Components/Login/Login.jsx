import React, { useState } from 'react'
import axios from "axios"
import { useLocation } from 'react-router-dom';



const Login = () => {
    const handleLogin = (e) => {
        e.preventDefault()
        console.log('handleLogin hit')
        axios({
            method: 'post',
            url: 'http://localhost:3002/api/login',
            data: login,
            withCredentials: true
        })

            .then((res) => {
                console.warn('res.data--', res.data)
                handleLoggedInUser(res.data.found)
                navigate('/landing')
                // console.warn('res.body==', res.body)
            })
            .catch(err => console.log(err))
    }

    const handleRegisterRedirect = () => {
        navigate('/register'); // Navigate to the Register Page
    }

    const navigate = useNavigate()

    const { handleLoggedInUser } = useData()

// const handleLoginSubmit = (e) => {
//     e.preventDefault()
//     axios({
//         method: 'post',
//         url: 'http://localhost:3002/api/login',
//         loginData: loginData
//     })
//     .then((res) => {
//         console.log('res', res)
//     })
//     .catch(err => console.log(err))
// }


    return (
        <div className="loginCont">

            <div className="login">Login</div>

        
        <div className="loginInputs">
            
        </div>
        </div>
    )

}