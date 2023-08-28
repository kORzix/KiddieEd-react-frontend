import { Link } from "react-router-dom";

function TopNavBar() {
    return (

    <div className="nav-container">
        <div className="nav-buttons" style={{ margin: '0 1.5em 0 1.5em' }}>
            <Link to="/worksheets" className="nav-button">Worksheets</Link>
            <Link to="/games" className="nav-button">Games</Link>
            <Link to="/guided lessons" className="nav-button">Guided Lessons</Link>
            <Link to="/lessons plans" className="nav-button">Lesson Plans</Link>
            <Link to="/more" className="nav-button">More</Link>
        </div>
    </div>
    );
}

export default TopNavBar;