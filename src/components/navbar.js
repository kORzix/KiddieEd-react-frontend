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
        <div className="">
          <nav className="navbar navbar-expand navbar-dark">
            <div className="container-fluid d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <Link to="/" className="navbar-brand" style={{ fontFamily: "'Comic Sans MS', sans-serif",fontSize:'4vw'}}>KiddieEd</Link>
                <img src={img} alt="Login" className="img-fluid" style={{ marginRight: '1rem'}} />
              </div>
              <div className="search-bar  align-items-center" id="hide-search">
                <input type="text" className="form-control text-reset" placeholder="Search" />
                <span className="search-icon"><i className="fas fa-search"></i></span>
              </div>
                <button type="button" className="btn btn-primary hide-btn" onClick={search_button}>
                  <i className="fas fa-search"></i>
                </button>
            </div>
          </nav>


          

        <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
            <div id="s_bar" className="col-10 col-sm-12 col-md-10 col-lg-8 col-xl-6" style={{display:'none'}}>
                <div className="input-group">
                    <div className="form-outline">
                        <input id="search-input form1" type="search" className="form-control" />
                        <label className="form-label" for="form1">Search</label>
                    </div>
                    <button id="search-button" type="button" className="btn btn-primary">
                        <i className="fas fa-search"></i>
                    </button>
                </div>
            </div>
        </div>
        </div>


        </div>
    );
  }
   
  export default Navbar;