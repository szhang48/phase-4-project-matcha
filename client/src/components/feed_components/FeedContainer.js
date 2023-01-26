import React, { useState, useEffect } from 'react'
import './styles/feed_container.css'

import CreatePost from './create_post/CreatePost'
import Posts from './posts/Posts'

function FeedContainer() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('/posts')
        .then(r => r.json())
        .then(d => setPosts(d))
    }, [])

    const renderPosts = posts?.map((post) => {
        return (
            <Posts
                key={post.id} 
                name={post.name}
                content={post.content}
                picture={post.picture}
            />
        )
    })

    console.log(posts)

    return (
        <div className="feed-container">
            <div className="feed-wrapper">
                <CreatePost />
                <Posts />
                {renderPosts}
            </div>
        </div>
    )
}

export default FeedContainer