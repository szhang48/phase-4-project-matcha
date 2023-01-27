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

    console.log(id)

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

    // const renderProfilePhoto = userData.profile_photo ? userData.profile_photo : "https://images.nightcafe.studio//assets/profile.png?tr=w-1600,c-at_max"
    // const renderCoverPhoto = userData.cover_photo ? userData.cover_photo : "https://d2x3xhvgiqkx42.cloudfront.net/43cf6303-25b8-4c1e-9942-cb14f8fe611e/caa7233a-a6bf-4482-93a9-62ae52b515cc/2020/06/18/61cf6bfa-3e00-4ebf-ab37-0712958ec0ef/b4ffc494-e590-4d31-9b39-5aa9b3d98312.png"

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