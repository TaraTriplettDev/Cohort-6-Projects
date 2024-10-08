import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';

import { useData } from '../../hooks/context-hook'
import Registration from '../Registration/Registration'


const Login = () => {

    const nav = useNavigate()

    const { handleLoggedInUser } = useData()

    const { login, setLogin} = useState({})

    const { reg, setReg } = useState(false)

    const handleRegister = () => {
        setReg(!reg)
    }

    const handleChange = (e) => {
        setLogin((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {

        axios({
            method: "POST",
            url: "http://localhost:3002/api/login",
            data: login
        })
            .then(res => {
                // console.log("res", res.data.found)
                handleLoggedInUser(res.data.found)
                nav("/landing")
            })
            .catch(err => console.log(err))

    }
}