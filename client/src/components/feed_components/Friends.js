import React from 'react'
import './styles/rightbar.css'

function Friends() {

    return (
        <div className="right-bar-wrapper">
            <div className="friends-container">
                <div className="friends-left">
                    <img className="friends-profile-photo" src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" />
                    <span className="friends-name">John Doe</span>
                </div>
                <div className="friends-center">
                    <div className="friend-activity"></div>
                    <span className="friend-activity-text"><b>Is Active</b></span>
                </div>
            </div>
        </div>
    )
}

export default Friends