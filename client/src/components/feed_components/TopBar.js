import React from 'react'
import './styles/topbar.css'
import { FaSearch } from 'react-icons/fa'
import { BiBell } from 'react-icons/bi'
import { AiFillMessage } from 'react-icons/ai'

function TopBar() {

    return (
        <div className="top-bar-container">
            <div className="top-bar-left">
                <span className="logo">MATCHA</span>
            </div>
            <div className="top-bar-center">
                <div className="search-bar">
                    <button>
                        <FaSearch className="search-icon"/>
                    </button>
                    <input placeholder="Search for common interests" className="search-input" />
                </div>
            </div>
            <div className="top-bar-right">
                <div className="top-bar-links">
                </div>
                <div className="top-bar-icons">
                    <div className="top-bar-icon-item">
                        <BiBell className="top-bar-icon-style"/>
                        <span className="top-bar-icon-badge">1</span>
                    </div>
                    <div className="top-bar-icon-item">
                        <AiFillMessage className="top-bar-icon-style"/>
                        <span className="top-bar-icon-badge">1</span>
                    </div>
                    <div className="top-bar-icon-3">
                        <img src="https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg" className="top-bar-img"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBar