import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useData } from "../../hooks/context-hook"
import axios from "axios"
const ViewProfile = () => {

    const [user, setUser] = useState()

    const loc = useLocation()
    const param = useParams()

    const { handleAddFriend } = useData()

    useEffect(() => {

        axios({
            method: "get",
            withCredentials: true,
            url: `http://localhost:3002/api/finduser/${param.id}`
        })
            .then(res => {
                console.log("FIIIIND USER", res)
                setUser(res.data)
            })
    })
}