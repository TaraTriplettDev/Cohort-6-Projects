import React from 'react'
import "./UserCards.css"
import { Link } from 'react-router-dom'

const UserCards = ({ item }) => {
    return (
        <div id="userCards">

            <div id="userCardLeft">image</div>

            <div id="userCardRight">

                <Link to={`/user/${item._id}`}>{item.username}</Link>

            </div>

        </div>
    )
}

export default UserCards