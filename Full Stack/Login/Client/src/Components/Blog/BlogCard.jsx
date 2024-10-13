import React from 'react'
import "./blog.css"
import { Link } from "react-router-dom"

const BlogCard = ({ item }) => {
    return (
        <div id = "blogCard">
        {console.log("item", item)}
            <div id="blogCardTop" className='border'>

                <Link path={}>{item?.authorName} </Link>
                <p>{item?.createdAt} createdAt</p>

            </div>

            <div id="blogCardMid" className='border'>

                <p>{item?.feedContent}</p>

            </div>

            <div id="blogCardFoot" className='border'>

                <div> likes </div>
            </div>
        </div>
    )
}