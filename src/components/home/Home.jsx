import React from "react";
import './styles.css'
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="bg-content">
            <div className="welcome-box">
                Welcome
                <form className="content-input">
                    <div className="input-box ">
                        <input className="username" type="text" id="username" name="username" placeholder="Enter Username" />
                        <div className="line-grey"></div>
                    </div>
                    <div className="input-box">
                        <input className="password" type="password" name="password" id="password" placeholder="Enter Password" />
                        <div className="line-grey"></div>
                    </div>
                    <button className="login-button" type="submit">LOGIN</button>
                </form>
                <div className="signup-link">
                    <p className="p-question">Don't have an account?</p>
                    <Link to="/signup" className="signup-link-text">Sign Up</Link>
                </div>
            </div>
        </div>
    )
}

export default Home;