import React from "react";
import { Link } from "react-router-dom";

function card({imgs,title}) {
    return (
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10 col-12">
            <div className="card">
                <div className="card-img">
                    <img src={imgs} className="img-fluid mb-5 mt-5" alt="..." />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <Link to="/button1" className="btn">Start</Link>
                </div>
            </div>
        </div>
    )
}

export default card;