import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { PROXY } from "../configs";
import logo from "../images/kiddieed_logo.png"

function search_button() {
  var x = document.getElementById("s_bar");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

const Navbar = ({ img }) => {
  const navigate = useNavigate();

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    axios
      .get(PROXY + "/user/check-session")
      .then((res) => {
        setIsAuthenticated(res.data.isAuthenticated);
      })
      .catch((error) => {
        console.error("Session check error:", error);
      });
  }, []);

  const onLogout = () => {
    axios
      .post(PROXY + "/user/logout")
      .then((res) => {
        console.log("Response from server:", res.data);
        if (res.data) {
          console.log("Logout successful!");
          toast.success("Logout successful!");
          setIsAuthenticated(false);
          navigate("../");
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((error) => {
        console.error("Logout error:", error);
        toast.error("Logout failed!");
      });
  };

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <Link
              to="/"
              className="navbar-brand"
              style={{
                fontFamily: "'Comic Sans MS', sans-serif",
                fontSize: "4vw",
              }}
            >
              <img src={logo} alt="LOGO"/>
            </Link>
            <img
              src={img}
              alt="Login"
              className="img-fluid"
              style={{ marginRight: "1rem", height: "80px" }}
            />
          </div>
          <div className="search-bar  align-items-center" id="hide-search">
            <input
              type="search"
              className="form-control text-reset"
              placeholder="Search"
              name="searchQuery"
              // onChange={handleSearchArea}
            />
            <span className="search-icon">
              <i className="fas fa-search"></i>
            </span>
          </div>
          <button
            type="button"
            className="btn btn-primary hide-btn btn-floating btn-lg mx-2"
            onClick={search_button}
          >
            <i className="fas fa-search"></i>
          </button>
        </div>

        <div>
          {isAuthenticated ? (
            <button
              className="btn btn-lg text-white btn-rounded"
              style={{ backgroundColor: "#01438b" }}
              onClick={onLogout}
            >
              Logout
            </button>
          ) : (
            <div className="d-flex">
              <Link
                to="/login"
                className="btn btn-lg text-white btn-rounded mx-2"
                style={{ backgroundColor: "#01438b" }}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="btn btn-lg text-white btn-rounded"
                style={{ backgroundColor: "#01438b" }}
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </nav>
      <div
        className="search-bar mt-4"
        id="s_bar"
        style={{ display: "none", width: "70%", margin: "0 auto" }}
      >
        <input
          id="search-input form1"
          type="search"
          className="form-control text-reset"
          placeholder="Search"
        />
        <span className="search-icon">
          <i className="fas fa-search"></i>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
