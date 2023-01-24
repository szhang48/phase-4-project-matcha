import React from 'react'

function Nav() {
    return(
        <div className="nav">
            <div className="nav-item-container">
                <nav className="nav-items">Feed</nav>
                <nav className="nav-items">Profile</nav>
                <nav className="nav-items">Standouts</nav>
            </div>
            <h2 className="title-logo">MATCHA</h2>
            <div className="login-signup-container">
                <nav className="login-signup">Login/Signup</nav>
            </div>
        </div>
    )
}

export default Nav