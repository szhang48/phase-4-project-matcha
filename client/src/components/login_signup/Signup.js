import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'


function Signup() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleUsername(e) {
        setUsername(e.target.value)
    }

    function handleEmail(e) {
        setEmail(e.target.value)
    }

    function handlePassword(e) {
        setPassword(e.target.value)
    }

    function handleSignup(e) {
        e.preventDefault()
        fetch("/users", {
            method: "POST",
            headers: {
                // "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: "",
                email:"",
                password: ""
            })
        })
    }

    return (
        <div className="login">
            <form className={"signup-container"}>
                <div className="login-text-container">
                    <h3 className="login-h3">Sign Up</h3>
                    <text className="login-p-text">Please fill out the required fields below</text>
                </div>
                <label>
                    <p className="login-p">Username</p>
                    <input type="text" name="username" onChange={handleUsername}></input>
                </label>
                <label>
                    <p className="login-p">Email</p>
                    <input type="text" name="password" onChange={handleEmail}></input>
                </label>
                <label>
                    <p className="login-p">Password</p>
                    <input type="password" name="password" onChange={handlePassword}></input>
                </label>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <button onClick={handleSignup} className="btn login-btn">Signup</button>
                    <div className="signup-text-container">
                        <text className="signup-text">Already have an account?</text>
                        <NavLink to="/login">
                            <nav className="signup-text-click">Click here to Login!</nav>
                        </NavLink>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Signup