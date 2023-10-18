import React from "react";
import { Link } from "react-router-dom";
import { PROXY } from "../configs";

const Card = ({ index, image, name, id, url }) => {

  return (
    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10 col-12" key={index}>
      <div className="card">
        <div className="card-img">
          <img
            src={PROXY + `/images/` + image}
            className="img-fluid mb-5 mt-5"
            alt="Card image"
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <Link to={`/${url}/view/${id}`} className="btn">
            Start
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
