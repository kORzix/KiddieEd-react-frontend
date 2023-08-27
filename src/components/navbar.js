import * as React from "react";
import { Link } from "react-router-dom";

const Navbar = ({img}) => {
    return (
        <div className="m-">
          <nav className="navbar navbar-expand-md navbar-dark">
            <div className="container-fluid d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <Link to="/" className="navbar-brand" style={{ fontFamily: "'Comic Sans MS', sans-serif", fontSize: '3em'}}>KiddeEd</Link>
                <img src={img} alt="Login" className="img-fluid" style={{ marginRight: '1rem', height: '5em' }} />
              </div>
              <div className="search-bar">
                <input type="text" className="form-control" placeholder="Search" />
                <span className="search-icon"><i className="bi bi-search"></i></span>
              </div>
            </div>
          </nav>
        </div>
    );
  }
   
  export default Navbar;