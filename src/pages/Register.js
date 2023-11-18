import React, { useState } from "react";
import loginImage from "../images/login-b.png";
import loginNav from "../images/register-nav-img.png";
import { Link } from "react-router-dom";
import { useSignup } from '../hooks/useSignup';

function Register() {
  // const [formData, setFormData] = useState({
  //   userName: "",
  //   // image: '',
  //   userEmail: "",
  //   userPassword: "",
  //   // passwordRepeat: '',
  // });

  // const {
  //   userName,
  //   // image,
  //   userEmail,
  //   userPassword,
  //   // passwordRepeat
  // } = formData;

  // const navigate = useNavigate();

  // const onChange = (e) => {
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [e.target.name]: e.target.value,
  //   }));
  // };

  // const onSubmit = (e) => {
  //   e.preventDefault();

  //   // if (userPassword !== passwordRepeat) {
  //   //     toast.error('Passwords do not match')
  //   // } else {
  //   const userData = {
  //     userName,
  //     // image,
  //     userEmail,
  //     userPassword,
  //   };

  //   axios
  //     .post(PROXY + "/user/register", userData)
  //     .then((res) => {
  //       if (res.data.success) {
  //         toast.success("Registration successful");
  //         navigate("/login");
  //       } else {
  //         toast.error(res.data.message);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Registration error:", error);
  //       toast.error("Registration failed. Please try again later.");
  //     });
  //   // }
  // };
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const { signup, error, isLoading } = useSignup()

  const handleSubmit = async (e) => {
    const role = "parent";
    e.preventDefault()
    await signup({ email, password ,name, role});
    clearForm();
  }
  function clearForm() {
    setEmail("");
    setPassword("");
    setName("");
  }

  return (
    <div>
      <div className="m-0">
        <nav className="navbar navbar-expand-md navbar-dark">
          <div className="container-fluid d-flex justify-content-start align-items-center">
            <Link
              to="/login"
              className="navbar-brand"
              style={{
                fontFamily: "'Bubblegum Sans', cursive",
                fontSize: "300%",
                fontWeight: "1000",
              }}
            >
              KiddieEd
            </Link>
            <img src={loginNav} alt="Login" className="img-fluid" />
          </div>
        </nav>
      </div>

      <div className="container mx-auto m-0 p-4">
        <div className="row mx-auto">
          {/* Left Column for Image */}
          <div className="col-md-6 d-flex mx-auto m-0 p-0">
            <img src={loginImage} alt="Login" className="img-fluid" />
          </div>

          {/* Right Column for Login Form */}
          <div className="col-md-6 mx-auto">
            <div
              className="p-4 bg-white form"
              style={{
                borderRadius: "10px",
                fontFamily: "'Roboto', sans-serif",
                fontSize: "1em",
              }}
            >
              <h2>Create your Free Account</h2>
              <form style={{ margin: "3em 2em 1em 2em" }} onSubmit={handleSubmit}>
                <div className="mb-3 form-group">
                  <label htmlFor="username" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={name}
                    name="userName"
                    placeholder="Full Name"
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-3 form-group">
                  <label htmlFor="username" className="form-label">
                    Email
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="useremail"
                    placeholder="Email"
                    name="userEmail"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3 form-group">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    name="userPassword"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                  />
                </div>
                <div className="submit-btn">
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className="btn btn-primary"
                    style={{ padding: "0.2em 4em 0.2em 4em" }}
                  >
                    Register
                  </button>
                </div>
                <p>
                  Already have a account?{" "}
                  <Link to="/login" style={{ color: "#00B4D8" }}>
                    Login
                  </Link>
                </p>
                {error && <div className='errorSignup'>{error}</div>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
