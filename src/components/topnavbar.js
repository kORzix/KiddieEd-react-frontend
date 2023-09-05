import * as React from "react";
import { Link } from "react-router-dom";
import './topnavbar.css';
import navBarImg from "./navBarImg"

const topNavbar = ({pageNo}) => {
    return (
        <div>
            <div className="nav-container">
                <div className="nav-buttons" style={{margin: '0 1.5em 0 1.5em'}}>
                    {pageNo === "worksheets" ? (
                        <Link to="/worksheet" className="nav-button selected">Worksheets</Link>
                    ) : (
                        <Link to="/worksheet" className="nav-button">Worksheets</Link>
                    )}

                    {pageNo === "games" ? (
                        <Link to="/games" className="nav-button selected">Games</Link>
                    ) : (
                        <Link to="/games" className="nav-button">Games</Link>
                    )}

                    {pageNo === "guided-lessons" ? (
                        <Link to="/guided-lessons" className="nav-button selected">Guided Lessons</Link>
                    ) : (
                        <Link to="/guided-lessons" className="nav-button">Guided Lessons</Link>
                    )}

                    {pageNo === "lessons-plans" ? (
                        <Link to="/lessons-plans" className="nav-button selected">Lesson Plans</Link>
                    ) : (
                        <Link to="/lessons-plans" className="nav-button">Lesson Plans</Link>
                    )}

                    {pageNo === "more" ? (
                        <Link to="/more" className="nav-button selected">More</Link>
                    ) : (
                        <Link to="/more" className="nav-button">More</Link>
                    )}
                </div>
            </div>

            <div className="side-nav-container">
                <div className="side-nav-buttons" style={{margin: '0 1.5em 0 1.5em'}}>
                    <Link to="/worksheet" className="side-nav-button"><img className="icon" src={navBarImg.worksheet} alt="worksheet icon"/></Link>
                    <Link to="/games" className="side-nav-button"><img className="icon" src={navBarImg.game} alt="game icon" /></Link>
                    <Link to="/guided-lessons" className="side-nav-button"><img className="icon" src={navBarImg.lesson} alt="lesson icon" /></Link>
                    <Link to="/lessons-plans" className="side-nav-button"><img className="icon" src={navBarImg.plan} alt="plan icon" /></Link>
                    <Link to="/more" className="side-nav-button"><img className="icon" src={navBarImg.more} alt="more icon" /></Link>
                </div>
            </div>
        </div>
    );
  }
   
  export default topNavbar;