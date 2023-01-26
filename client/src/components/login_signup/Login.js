import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const imgSrc = "https://cdn2.momjunction.com/wp-content/uploads/2019/03/55-Romantic-Date-Ideas-For-Couples-1.jpg"
    const [errors, setErrors] = useState([])
    const history = useHistory()

    function handleUsername(e) {
        setUsername(e.target.value)
    }

    function handlePassword(e) {
        setPassword(e.target.value)
    }

    function handleLogin(e) {
        e.preventDefault()
        fetch("/login", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: username,
                password: password
            })
        })
        .then(res => {
            if(res.ok) {
                res.json().then(user => {
                    history.push(`/feed`)
                })
            }else {
                res.json().then(json => setErrors(json.errors))
            }
        })
    }

    console.log(errors)

    return(
        <>
        <div className="login">
            <form className={"login-container"}>
                <div className="login-text-container">
                    <h3 className="login-h3">Welcome Back!</h3>
                    <text className="login-p-text">Please provide information for the fields below to login</text>
                </div>
                <label>
                    <p className="login-p">Username</p>
                    <input type="text" name="username" onChange={handleUsername}></input>
                </label>
                <label>
                    <p className="login-p">Password</p>
                    <input type="password" name="password" onChange={handlePassword}></input>
                </label>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    {errors&&<p className="error-p">{errors}</p>}
                    <button onClick={handleLogin} className="btn login-btn">Login</button>
                    <div className="signup-text-container">
                        <text className="signup-text">Don't have an account?</text>
                        <NavLink to="/signup">
                            <nav className="signup-text-click">Click here to Signup!</nav>
                        </NavLink>
                    </div>
                </div>
            </form>
        </div>
        </>
    )
}

export default Login