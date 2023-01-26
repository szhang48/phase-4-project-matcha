import React from 'react'
import './styles/bio.css'

import TopBar from './TopBar'
import Sidebar from './Sidebar'
import Rightbar from './Rightbar'
import FeedContainer from './FeedContainer'

function Bio() {

    // fix diverged branches

    return (
        <div>  
            <TopBar />
            <div className="profile">
                <Sidebar />
                <div className="profile-right">
                    <div className="profile-right-top">
                        <div className="profile-cover">
                            <img className="profile-cover-img" src="https://images.unsplash.com/photo-1623627484632-f041d1fb366d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y292ZXIlMjBwaG90b3xlbnwwfHwwfHw%3D&w=1000&q=80"/>
                            <img className="profile-user-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU" />
                        </div> 
                    </div>
                    <div className="profile-info">
                        <h4 className="profile-info-name">Name</h4>
                        <span className="profile-info-description">Description</span>
                    </div>
                    <div className="profile-right-bottom">
                        
                    </div>
                    <FeedContainer />
                    <Rightbar />
                </div>
                
            </div>
        </div>
    )
}

export default Bio