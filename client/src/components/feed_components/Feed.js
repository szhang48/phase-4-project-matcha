import React from 'react'
import TopBar from './TopBar'
import Sidebar from './Sidebar'
import FeedContainer from './FeedContainer'
import Rightbar from './Rightbar'
import './styles/feed.css'

function Feed({search, setSearch}) {
    return(
        <>
            <TopBar search={search} setSearch={setSearch}/>
            <div className="feed-body-container">
                <Sidebar />
                <FeedContainer />
                <Rightbar />
            </div>
        </>
    )
}

export default Feed