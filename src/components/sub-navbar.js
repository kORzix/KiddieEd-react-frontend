import * as React from "react";
import { Link } from "react-router-dom";
import worksheet from '../images/worksheet-icon.png';
import game from '../images/game-icon.png';
import more from '../images/more-icon.png';

const Navbar = ({img}) => {
    return (
        <div>
          <div className="nav-container">
            <div className="nav-buttons" style={{margin: '0 1.5em 0 1.5em'}}>
              <Link to="/worksheets" className="nav-button">Worksheets</Link>
              <Link to="/worksheets" className="nav-button nav-icon"><img src={worksheet} /></Link>
              <Link to="/games" className="nav-button">Games</Link>
              <Link to="/worksheets" className="nav-button nav-icon"><img src={game} /></Link>
              <Link to="/guided lessons" className="nav-button">Guided Lessons</Link>
              <Link to="/worksheets" className="nav-button nav-icon"><img src={worksheet} /></Link>
              <Link to="/lessons plans" className="nav-button">Lesson Plans</Link>
              <Link to="/worksheets" className="nav-button nav-icon"><img src={worksheet} /></Link>
              <Link to="/more" className="nav-button">More</Link>
              <Link to="/worksheets" className="nav-button nav-icon"><img src={more} /></Link>
            </div>
          </div>

          <div className="side-nav-container">
            <div className="side-nav-buttons" style={{margin: '0 1.5em 0 1.5em'}}>
              <Link to="/worksheets" className="side-nav-button">Worksheets</Link>
              <Link to="/worksheets" className="side-nav-button nav-icon"><img src={worksheet} /></Link>
              <Link to="/games" className="side-nav-button">Games</Link>
              <Link to="/worksheets" className="side-nav-button nav-icon"><img src={game} /></Link>
              <Link to="/guided lessons" className="side-nav-button">Guided Lessons</Link>
              <Link to="/worksheets" className="side-nav-button nav-icon"><img src={worksheet} /></Link>
              <Link to="/lessons plans" className="side-nav-button">Lesson Plans</Link>
              <Link to="/worksheets" className="side-nav-button nav-icon"><img src={worksheet} /></Link>
              <Link to="/more" className="side-nav-button">More</Link>
              <Link to="/worksheets" className="side-nav-button nav-icon"><img src={more} /></Link>
            </div>
          </div>
        </div>
    );
  }
   
  export default Navbar;