import React from 'react'
import './createpost.css'
import { BiPhotoAlbum, BiBookAdd, BiLocationPlus } from "react-icons/bi";

function CreatePost() {
    return (
        <div className="create-post-container">
            <div className="create-post">
                <div className="create-post-wrapper">
                    <div className="create-post-top">
                        <img src="https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg" className="create-post-profile-img"></img>
                        <input placeholder="Share your interests" 
                        className="create-post-input"
                        />                
                    </div>
                    <hr className="create-post-hr" />
                    <div className="create-post-bottom">
                        <div className="create-post-options">
                            <div className="create-post-option">
                                <BiPhotoAlbum className="create-post-icon"/>
                                <span className="create-post-option-text">Photo/Video</span>
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
                        <button className="btn create-post-button">Post</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default CreatePost