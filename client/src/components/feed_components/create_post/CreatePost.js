import React, { useState } from 'react'
import './createpost.css'
import { BiPhotoAlbum, BiBookAdd, BiLocationPlus } from "react-icons/bi";

function CreatePost({posts, setPosts}) {
    const name = "/feed/userid then grab name"
    const [content, setContent] = useState("")
    const [picture, setPicture] = useState("")
    const [showPicUrl, setShowPicUrl] = useState(false)

    function createPost(e) {
        e.preventDefault()
        fetch("/posts", {
            method: "POST",
            headers: {
                "Accept": 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                content: content,
                picture: picture
            })
        })
        .then(res => res.json())
        .then(data => setPosts([...posts, data]))
    }

    console.log(content)

    return (
        <div className="create-post-container">
            <div className="create-post">
                <div className="create-post-wrapper">
                    <div className="create-post-top">
                        <img src="https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg" className="create-post-profile-img"></img>
                        <input onChange={(e) => {setContent(e.target.value)}} placeholder="Share your interests" 
                        className="create-post-input"
                        />                
                    </div>
                    <hr className="create-post-hr" />
                    <div className="create-post-bottom">
                        <div className="create-post-options">
                            <div className="create-post-option">
                                <BiPhotoAlbum className="create-post-icon"/>
                                <span onClick={() => setShowPicUrl(!showPicUrl)} className="create-post-option-text">Photo/Video</span>
                                {showPicUrl ? <input type="text" onChange={(e) => setPicture(e.target.value)} /> : null}
                            </div>
                            <div className="create-post-option">
                                <BiBookAdd className="create-post-icon"/>
                                <span className="create-post-option-text">Save</span>
                            </div>
                            <div className="create-post-option">
                                <BiLocationPlus className="create-post-icon"/>
                                <span className="create-post-option-text">Location</span>
                            </div>
                        </div>
                        <button onClick={createPost} className="btn create-post-button">Post</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default CreatePost