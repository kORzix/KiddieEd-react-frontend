import * as React from "react";
import { Link } from "react-router-dom";

function search_button() {
  var x = document.getElementById("s_bar");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
};

const Navbar = ({img}) => {
    return (
        <div>
          <nav className="navbar navbar-expand navbar-dark">
            <div className="container-fluid d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <Link to="/" className="navbar-brand" style={{ fontFamily: "'Comic Sans MS', sans-serif",fontSize:'4vw'}}>KiddieEd</Link>
                <img src={img} alt="Login" className="img-fluid" style={{ marginRight: '1rem', height: '80px'}} />
              </div>
              <div className="search-bar  align-items-center" id="hide-search">
                <input type="text" className="form-control text-reset" placeholder="Search" />
                <span className="search-icon"><i className="fas fa-search"></i></span>
              </div>
                <button type="button" className="btn btn-primary hide-btn btn-floating btn-lg float-right" onClick={search_button}>
                  <i className="fas fa-search"></i>
                </button>                
            </div>
            <a className="btn btn-lg text-white btn-rounded" href="/login" style={{backgroundColor:'#01438b'}}>Login</a>
            <a className="btn btn-lg text-white mx-3 btn-rounded" href='/register' style={{backgroundColor:'#01438b'}}>Register</a>
          </nav>
          <div className="search-bar mt-4" id="s_bar" style={{display:'none',width: '70%',margin:'0 auto'}}>
            <input id="search-input form1" type="search" className="form-control text-reset" placeholder="Search" />
            <span className="search-icon"><i className="fas fa-search"></i></span>
          </div>
        </div>
    );
  }
   
  export default Navbar;