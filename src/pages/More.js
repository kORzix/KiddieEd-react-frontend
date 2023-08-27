import loginNav from '../images/lessons plans-nav-img.png';
import img1 from '../images/more-img-1.png';
import img2 from '../images/more-img-2.png';
import img3 from '../images/more-img-3.png';
import img4 from '../images/more-img-4.png';
import { Link } from "react-router-dom";
import Navbar from '../components/navbar';

function App() {
  return (
    <div className="App">
        <Navbar img={loginNav} />
        
        {/* Nav bar in the container */}
        <div className="container" style={{width: '70%', padding: '2em 4em 2em 4em'}}>
          <div className="nav-container">
            <div className="nav-buttons" style={{margin: '0 1.5em 0 1.5em'}}>
              <Link to="/worksheets" className="nav-button">Worksheets</Link>
              <Link to="/games" className="nav-button">Games</Link>
              <Link to="/guided lessons" className="nav-button">Guided Lessons</Link>
              <Link to="/lessons plans" className="nav-button">Lesson Plans</Link>
              <Link to="/more" className="nav-button-active">More</Link>
            </div>
          </div>

          <h3></h3>

          {/* Cards */}
          <div class="row">

            {/* Card 1 */}
            <div class="col-md-3">
              <div class="card">
                <div class="card-img">
                  <img src={img1} class="card-img-top" alt="..." />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Monitor Progress</h5>
                  <Link to="/button1" className="btn">Start</Link>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div class="col-md-3">
              <div class="card">
                <div class="card-img">
                  <img src={img2} class="card-img-top" alt="..." />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Premium Plans</h5>
                  <Link to="/button1" className="btn">Start</Link>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div class="col-md-3">
              <div class="card">
                <div class="card-img">
                  <img src={img3} class="card-img-top" alt="..." />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Contact Us</h5>
                  <Link to="/button1" className="btn">Start</Link>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div class="col-md-3">
              <div class="card">
                <div class="card-img">
                  <img src={img4} class="card-img-top" alt="..." />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Profile</h5>
                  <Link to="/profile" className="btn">Start</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
