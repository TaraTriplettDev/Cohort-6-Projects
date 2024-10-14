import React, { useState, useEffect } from "react"
import { useData } from "../../hooks/context-hook"
import BlogModal from "./BlogModal"
import "./blog.css"
import axios from "axios"



const Blog = () => {

  const [allFeeds, setAllFeeds] = useState()



  const { handleModal, modal } = useData()


  useEffect(() => {

        axios({
          method: 'get',
          url: 'http://localhost:3002/api/getFeeds',
          withCredentials: true
        })
            .then((res) => {
                console.log("res", res.data)
                setAllFeeds(res.data)
            })
            .catch(err => console.log("err", err))

      // axios to get all feeds from routes, save in local state and map results
  
  }, [])



  return (
      <>

        {console.log("allFeeds", allFeeds)}
        <div id="blog">

            <div id="blogHeader">


                <div id="blogInput">

                     <div>
                        <p onClick={(e) => handleModal(e)}>

                            What's on your mind?
                        </p>
                    </div>
                    {/* open modal for content */}
                    <br />
                    {modal && <BlogModal />}
                    <div> video / photo option </div>
                        

                </div>
            </div>



            <div id="blogBody">


                {allFeeds && allFeeds.length > 0 
                ?
                (
                    allFeeds.map((item) => (
                        <div id="BlogCardContainer">
                        <BlogCard key={item.id} item={item} />
                        </div>
                    ))
                )
                :
                (
                    <p>No feeds available</p>
                )}
            </div>
        
        






        </div>
      </>
  )
}

export default Blog