import React, { useState } from 'react'
import axios from "axios"

const Registration = () => {
    const [data, setData] = useState({

    })

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        axios({
            method: "post",
            url: "http://localhost:3002/api/registration",
            data: data
        })
            .then((res) => {
                console.log("res", res)
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            {console.log("data", data)}
            <div>Registration</div>
            <br />
            <br />

            <input name="first" placeholder='First' value={data.first} onChange={(e) => handleChange(e)}></input>
            <br />
            <br />

            <input name="last" placeholder='Last' onChange={(e) => handleChange(e)}></input>
            <br />
            <br />

            <input name="username" placeholder='username' onChange={(e) => handleChange(e)}></input>
            <br />
            <br />

            <input name="email" placeholder='email' type='email' onChange={(e) => handleChange(e)}></input>
            <br />
            <br />

            <input name="password" placeholder='password' onChange={(e) => handleChange(e)}></input>
            <br />
            <br />

            <input name="confirmPassword" placeholder='confirmPassword' onChange={(e) => handleChange(e)}></input>
            <br />
            <br />

            <button onClick={(e) => handleSubmit(e)}>Submit</button>
            <br />
            <br /> 
            <br />
            <br /> 

            {/* <div>User Login</div>
            <br />
            <br />

            <input name="username" placeholder='username' onChange={(e) => handleChange(e)}></input>
            <br />
            <br />

            <input name="password" placeholder='password' onChange={(e) => handleChange(e)}></input>
            <br />
            <br />

            <button onClick={(e) => handleSubmit(e)}>Log In</button> */}
        </>
    )
} 

export default Registration