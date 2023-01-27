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
    const [coverPhotoInput, setCoverPhotoInput] = useState("")
    const [displayAddProf, setDisplayAddProf] = useState(false)
    const [displayAddCover, setDisplayAddCover] = useState(false)

    const showAddProf = displayAddProf ? "add-profile-img" : "add-profile-img hidden"
    const showAddCover = displayAddCover ? "add-profile-img" : "add-profile-img hidden"

    let idObject = useParams()
    const id = idObject.id

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
        .then(d => userData(d))
    }
    console.log(userData)

    function handleAddCoverPhoto(e) {
        e.preventDefault()
        fetch(`/users/${id}/cover_photo`, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                cover_photo: coverPhotoInput
            })
        })
        .then(r => r.json())
        .then(d => setUserData(d))
    }

    return (
        <div>  
            <TopBar />
            <div className="profile">
                <Sidebar />
                <div className="profile-right">
                    <div className="profile-right-top">
                        <div className="profile-cover">
                            <img onClick={() => setDisplayAddCover(!displayAddCover)} className="profile-cover-img" src={userData.cover_photo}/>
                            <img onClick={() => setDisplayAddProf(!displayAddProf)} className="profile-user-img" src={userData.profile_photo} />
                        </div>
                        <form className={showAddProf} onSubmit={(e) => {handleAddProfilePhoto(e)}}>
                            <input className="add-profile-img-input" onChange={(e) => setProfilePhotoInput(e.target.value)} type="text" placeholder="add profile image" />
                            <button className="btn add-img-btn">Add</button>
                        </form> 
                        <form className={showAddCover} onSubmit={(e) => {handleAddCoverPhoto(e)}}>
                            <input className="add-profile-img-input" onChange={(e) => setCoverPhotoInput(e.target.value)} type="text" placeholder="add cover photo" />
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