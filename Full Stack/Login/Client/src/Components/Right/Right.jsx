import React from 'react'
import "./right.css"


const Right = ({ children }) => {
    return (
        <>
            <div id="routerRight" className="routerBorder"> Right

                {children}

            </div>
        </>
    )
}

export default Right