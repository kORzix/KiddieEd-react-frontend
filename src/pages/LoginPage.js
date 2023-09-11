import React, { useState } from "react";
import loginImage from '../images/login-b.png';
import loginNav from '../images/login-nav-img.png';
import { useNavigate, Link } from "react-router-dom";
import { toast } from 'react-toastify'
import axios from 'axios';
import { PROXY } from "../configs";

function LoginPage() {
    const [formData, setFormData] = useState({
        userEmail: '',
        userPassword: '',
      })

      const { userEmail, userPassword } = formData
    
      const navigate = useNavigate()

      const onChange = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }))
      }

      const onSubmit = (e) => {
        e.preventDefault()
    
        const userData = {
          userEmail,
          userPassword,
        }

        axios.post(PROXY+"/user/login", userData)
            .then((res) => {
            console.log("Response from server:", res.data);
            if (res.data) {
                console.log("User id:", res.data._id);
                console.log("Login successful!");
                toast.success("Login successful!");
                navigate("../");
            } else {
                toast.error(res.data.message); 
            }
            })
            .catch((error) => {
            console.error('Login error:', error);
            toast.error('Login failed!');
            });
      }

    return (
        <div>
            <div className="">
                <nav className="navbar navbar-expand-md navbar-dark">
                    <div className="container-fluid d-flex justify-content-start align-items-center">
                        <Link to="/login" className="navbar-brand"
                              style={{fontFamily: "'Comic Sans MS', sans-serif", fontSize: '3em'}}>KiddieEd</Link>
                        <img src={loginNav} alt="Login" className="img-fluid"/>
                    </div>
                </nav>
            </div>

            <div className="container">
                <div className="row">
                    {/* Left Column for Image */}
                    <div className="col-md-6 d-flex justify-content-end">
                        <img src={loginImage} alt="Login" className="img-fluid"/>
                    </div>
                    {/* Right Column for Login Form */}
                    <div className="col-md-6">
                        <div className="p-4 bg-white form" style={{borderRadius: '10px'}}>
                            <h2>Sign In to your Account</h2>
                            <form style={{margin: '3em 2em 1em 2em'}} onSubmit={onSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="useremail" className="form-label">Email</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="useremail"
                                        placeholder='Email'
                                        name="userEmail"
                                        value={userEmail}
                                        required
                                        onChange={onChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        placeholder='Password'
                                        name="userPassword"
                                        value={userPassword}
                                        required
                                        onChange={onChange}
                                    />
                                </div>
                                <div className="submit-btn">
                                    <button type="submit" className="btn btn-primary"
                                            style={{padding: '0.2em 4em 0.2em 4em'}}>Login
                                    </button>
                                </div>
                                <p>Don't have an account? <Link to="/register" style={{color: '#00B4D8'}}>Register</Link></p>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default LoginPage;
