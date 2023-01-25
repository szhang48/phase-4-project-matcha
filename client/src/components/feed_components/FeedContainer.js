import React from 'react'
import './styles/feed_container.css'

import CreatePost from './create_post/CreatePost'
import Posts from './posts/Posts'

function FeedContainer() {

    

    return (
        <div className="feed-container">
            <div className="feed-wrapper">
                <CreatePost />
                <Posts />
            </div>
        </div>
    )
}

export default FeedContainer