import React, { useEffect, useState } from 'react'
import './styles/bio.css'
import { useParams } from 'react-router-dom'
import TopBar from './TopBar'
import Sidebar from './Sidebar'
import Rightbar from './Rightbar'
import FeedContainer from './FeedContainer'

function Bio() {
    const [userData, setUserData] = useState([])
    const [profilePhotoInput, setProfilePhotoInput] = useState("")

    let id = useParams()

    useEffect(() => {
        fetch(`/users/${id}`)
        .then(r => r.json())
        .then(d => setUserData(d))
    }, [])

    function handleAddProfilePhoto(e) {
        e.preventDefault()
        fetch(`/users/${id}/profile_photo`, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                profile_photo: profilePhotoInput
            })
        })
        .then(r => r.json())
        .then(d => console.log(d))
    }

    function handleAddCoverPhoto() {

    }

    console.log(userData)

    return (
        <div>  
            <TopBar />
            <div className="profile">
                <Sidebar />
                <div className="profile-right">
                    <div className="profile-right-top">
                        <div className="profile-cover">
                            <img className="profile-cover-img" src={userData.profile_photo}/>
                            <img className="profile-user-img" src={userData.cover_photo} />
                        </div>
                        <form className="add-profile-img" onSubmit={(e) => {handleAddProfilePhoto(e)}}>
                            <input className="add-profile-img-input" onChange={(e) => setProfilePhotoInput(e.target.value)} type="text" placeholder="add profile image" />
                            <button className="btn add-img-btn">Add</button>
                        </form> 
                    </div>
                    <div className="profile-info">
                        <h4 className="profile-info-name">{userData.name}</h4>
                        <span className="profile-info-description">{userData.email}</span>
                    </div>
                    <div className="profile-right-bottom">
                        
                    </div>
                    <FeedContainer />
                </div>
                <Rightbar />
            </div>
        </div>
    )
}

export default Bio