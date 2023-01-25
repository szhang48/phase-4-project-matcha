import React from 'react'
import TopBar from './TopBar'
import SideBar from './Sidebar'
import FeedContainer from './FeedContainer'
import Rightbar from './Rightbar'
import './styles/feed.css'

function Feed() {
    return(
        <>
            <TopBar />
            <div className="feed-body-container">
                <SideBar />
                <FeedContainer />
                <Rightbar />
            </div>
        </>
    )
}

export default Feed