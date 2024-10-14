import React from 'react'
import "./blog.css"
import { Link } from "react-router-dom"
import { useData } from "../../hooks/context-hook"

const BlogCard = ({ item }) => {

const { authedUser } = useData()

    return (
        <div id = "blogCard">
        {console.log("item", item, "authedUser")}
        <div id="blogCardTop" className='border'>


         <div id="BlogAuthor">
        
            <Link to={`/user/${item.authorId}`}>{item?.authorName} </Link>
    
        </div>
                
                
        {item?.authorName === authedUser.username
            ?
            (
                <div id="BlogAdmin">

                    <div id="BlogEdit">

                    <p> edit </p>

                    </div>

                    <div id="BlogDelete">

                    <p> delete </p>

                    </div>

                </div>
            )
            :
            (
                <div id="BlogAdmin">

                    <div id="BlogEdit">

                    </div>
                    <div id="BlogDelete">

                    </div>

                </div>
            )
        }

            <div id="BlogCreatedAt">

                <p>{item?.createdAt} createdAt</p>

            </div>
                
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