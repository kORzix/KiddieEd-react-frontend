import loginNav from '../images/lessons plans-nav-img.png';
import img1 from '../images/lessons plans-img-1.png';
import img2 from '../images/lessons plans-img-2.png';
import img3 from '../images/lessons plans-img-3.png';
import img4 from '../images/lessons plans-img-4.png';
import img5 from '../images/lessons plans-img-5.png';
import img6 from '../images/lessons plans-img-6.png';
import img7 from '../images/lessons plans-img-7.png';
import img8 from '../images/lessons plans-img-8.png';
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
              <Link to="/lessons plans" className="nav-button-active">Lesson Plans</Link>
              <Link to="/more" className="nav-button">More</Link>
            </div>
          </div>

          <h3>Lessons Plans</h3>

          {/* Cards */}
          <div class="row">

            {/* Card 1 */}
            <div class="col-md-3">
              <div class="card">
                <div class="card-img">
                  <img src={img1} class="card-img-top" alt="..." />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Astronomy</h5>
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
                  <h5 class="card-title">Music</h5>
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
                  <h5 class="card-title">Math</h5>
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
                  <h5 class="card-title">Painting</h5>
                  <Link to="/button1" className="btn">Start</Link>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div class="col-md-3">
              <div class="card">
                <div class="card-img">
                  <img src={img5} class="card-img-top" alt="..." />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Social</h5>
                  <Link to="/button1" className="btn">Start</Link>
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div class="col-md-3">
              <div class="card">
                <div class="card-img">
                  <img src={img6} class="card-img-top" alt="..." />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Science</h5>
                  <Link to="/button1" className="btn">Start</Link>
                </div>
              </div>
            </div>

            {/* Card 7 */}
            <div class="col-md-3">
              <div class="card">
                <div class="card-img">
                  <img src={img7} class="card-img-top" alt="..." />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Sports</h5>
                  <Link to="/button1" className="btn">Start</Link>
                </div>
              </div>
            </div>

            {/* Card 8 */}
            <div class="col-md-3">
              <div class="card">
                <div class="card-img">
                  <img src={img8} class="card-img-top" alt="..." />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Law</h5>
                  <Link to="/button1" className="btn">Start</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
