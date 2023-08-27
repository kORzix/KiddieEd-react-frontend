import React from 'react';
import loginImage from '../images/login-b.png';
import loginNav from '../images/login-nav-img.png';
import { Link } from "react-router-dom";

function LoginPage() {
    return (
        <div>
            <div className="m-">
                <nav className="navbar navbar-expand-md navbar-dark">
                    <div className="container-fluid d-flex justify-content-start align-items-center">
                        <Link to="/login" className="navbar-brand" style={{ fontFamily: "'Comic Sans MS', sans-serif", fontSize: '3em'}}>KiddeEd</Link>
                        <img src={loginNav} alt="Login" className="img-fluid" />
                    </div>
                </nav>
            </div>

            <div className="container">
                <div className="row">
                    {/* Left Column for Image */}
                    <div className="col-md-6 d-flex justify-content-end">
                        <img src={loginImage} alt="Login" className="img-fluid" style={{ maxWidth: '100%', height: 'auto' }} />
                    </div>
                    {/* Right Column for Login Form */}
                    <div className="col-md-6">
                        <div className="p-4 bg-white form" style={{ borderRadius: '10px' }}>
                            <h2>Sign In to your Account</h2>
                            <form style={{margin: '3em 2em 1em 2em'}}>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Email</label>
                                    <input type="text" className="form-control" id="username" placeholder='Email' required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password" placeholder='Password' required />
                                </div>
                                <div className="submit-btn">
                                    <button type="submit" className="btn btn-primary" style={{padding: '0.2em 4em 0.2em 4em'}}>Login</button>
                                </div>
                                <p>Don't have a accoun? <Link to="/register" style={{color: '#00B4D8'}}>Register</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
