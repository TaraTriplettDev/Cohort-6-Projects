import React, { useState } from 'react'
import "./blog.css"
import axios from "axios"
import { useData } from "../../hooks/context-hook"

const BlogModal = () => {

    const { handleModal, authedUser, handleNewFeed } = useData

    const [newFeed, setNewFeed] = useState({})


    const handleFeedChange = (e) => {

        setNewFeed({
            authorName: authedUser.username,
            authorId: authedUser._id,
            feedContent: e.target.value,
        })
    
    }
    
    const handleNewFeedSubmit = (e) => {
        e.preventDefault()
    
        console.log("submit hit", newFeed)
    
        // axios with newFeed to server to add to database
        axios({
            method: 'post',
            url: 'http://localhost:3002/api/createFeed',
            withCredentials: true,
            data: newFeed
        })
        .then(res => {
            console.log("res", res)
        })
    
    
    
        // handleModal()
    
    }
}










