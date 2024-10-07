import React, { useEffect } from 'react'
import { useData } from '../../hooks/context-hook'
import Landing from '../Landing/Landing'
import { useNavigation } from 'react-router-dom'
import axios from 'axios'


const ProtectedRoute = () => {

    const { authedUser, handleLoggedInUser } = useData()
    let nav = useNavigation()

    useEffect(() => {
        axios(
            {
                method: 'get',
                credentials: true,
                url: 'http://localhost:3002/api/authed'

            }
        )
            .then((res) => {
                console.log('res==', res) 
                console.warn("PROT ROUTE auth res", res)
                if (res.data._id) {
                    console.log("protectedRoute.then.axios = res.data.username", res.data.username)
                    handleLoggedInUser(res.data)
                    // console.log("log", loggedIn)
                    // setLoggedIn(true)
                }else {
                    nav("/")
                }
            })
        })
        return (
            <dev>
                {console.log('ProtectedRoute HIT', authedUser)}
                {authedUser._id ? <Landing /> : navigator('/')}
            </dev>
        )
}

export default ProtectedRoute