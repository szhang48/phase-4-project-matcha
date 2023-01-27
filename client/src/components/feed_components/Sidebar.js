import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles/sidebar.css'
import { BiDollar } from "react-icons/bi";
import { BiDonateHeart } from "react-icons/bi";
import { BiMessageAltDetail } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import { BiHeart } from "react-icons/bi";
import { BiExit } from "react-icons/bi";

function Sidebar() {

    function handleLogout() {
        fetch('/logout', {
            method: 'DELETE'
        })
    }

    return (
        <div className="side-bar">
            <div className="side-bar-wrapper">
                <ul className="side-bar-list">
                    <li className="side-bar-list-item">
                    <NavLink className="navlink" to="/bio/1">
                        <BiUser className="side-bar-icon"/>
                        <span className="side-bar-list-item-text">Profile</span>
                    </NavLink>
                    </li>
                    <li className="side-bar-list-item">
                        <BiHeart className="side-bar-icon"/>
                        <span className="side-bar-list-item-text">Likes</span>
                    </li>
                    <li className="side-bar-list-item">
                        <BiDonateHeart className="side-bar-icon"/>
                        <span className="side-bar-list-item-text">Requests</span>
                    </li>
                    <li className="side-bar-list-item">
                        <BiMessageAltDetail className="side-bar-icon"/>
                        <span className="side-bar-list-item-text">Messages</span>
                    </li>
                    <li className="side-bar-list-item">
                        <BiDollar className="side-bar-icon"/>
                        <span className="side-bar-list-item-text">Subscription</span>
                    </li>
                    <li className="side-bar-list-item">
                        <NavLink className="navlink" to="/">
                            <BiExit onClick={handleLogout} className="side-bar-icon"/>
                            <span onClick={handleLogout} className="side-bar-list-item-text">Log Out</span>    
                        </NavLink>
                    </li>
                </ul>
                <hr className="side-bar-hr"/>
            </div>
        </div>
    )
}

export default Sidebar