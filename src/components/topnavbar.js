import * as React from "react";
import { Link } from "react-router-dom";
import './topnavbar.css';
import worksheet from "../images/worksheet.icon.png";
import game from "../images/game.icon.png";
import lesson from "../images/lessons.icon.png";
import plan from "../images/plans.icon.png";
import more from "../images/more.icon.png";

const Navbar = () => {
    return (
        <div>
            <div className="nav-container">
                <div className="nav-buttons" style={{margin: '0 1.5em 0 1.5em'}}>
                    <Link to="/worksheet" className="nav-button">Worksheets</Link>
                    <Link to="/games" className="nav-button">Games</Link>
                    <Link to="/guided-lessons" className="nav-button">Guided Lessons</Link>
                    <Link to="/lessons-plans" className="nav-button">Lesson Plans</Link>
                    <Link to="/more" className="nav-button">More</Link>
                </div>
            </div>

            <div className="side-nav-container">
                <div className="side-nav-buttons" style={{margin: '0 1.5em 0 1.5em'}}>
                    <Link to="/worksheet" className="side-nav-button"><img className="icon" src={worksheet} /></Link>
                    <Link to="/games" className="side-nav-button"><img className="icon" src={game} /></Link>
                    <Link to="/guided-lessons" className="side-nav-button"><img className="icon" src={lesson} /></Link>
                    <Link to="/lessons-plans" className="side-nav-button"><img className="icon" src={plan} /></Link>
                    <Link to="/more" className="side-nav-button"><img className="icon" src={more} /></Link>
                </div>
            </div>
        </div>
    );
  }
   
  export default Navbar;