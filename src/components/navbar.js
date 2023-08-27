import * as React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="m-">
            <nav className="navbar navbar-expand-md navbar-dark">
                <div className="container-fluid">
                <Link to="/login" className="navbar-brand" style={{fontFamily: "'Comic Sans MS', sans-serif", fontSize: '3em'}}>KiddeEd</Link>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
        </div>
    );
  }
   
  export default Navbar;