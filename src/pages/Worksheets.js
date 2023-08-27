import loginNav from '../images/worksheets-nav-img.png';
import img1 from '../images/worksheets-img-1.png';
import img2 from '../images/worksheets-img-2.png';
import img3 from '../images/worksheets-img-3.png';
import img4 from '../images/worksheets-img-4.png';
import img5 from '../images/worksheets-img-5.png';
import img6 from '../images/worksheets-img-6.png';
import img7 from '../images/worksheets-img-7.png';
import img8 from '../images/worksheets-img-8.png';
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
              <Link to="/worksheets" className="nav-button-active">Worksheets</Link>
              <Link to="/games" className="nav-button">Games</Link>
              <Link to="/button3" className="nav-button">Guided Lessons</Link>
              <Link to="/button4" className="nav-button">Lesson Plans</Link>
              <Link to="/button4" className="nav-button">More</Link>
            </div>
          </div>

          <h3>Worksheets</h3>

          {/* Cards */}
          <div class="row">

            {/* Card 1 */}
            {/* Card 1 */}
            <div class="col-md-3">
              <div class="card">
                <div class="card-img">
                  <img src={img1} class="card-img-top" alt="..." />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Double Digit Addition</h5>
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
                  <h5 class="card-title">Crazy Story</h5>
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
                  <h5 class="card-title">Paint Bonanza</h5>
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
                  <h5 class="card-title">Color Rainbow</h5>
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
                  <h5 class="card-title">Time Guessing</h5>
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
                  <h5 class="card-title">Explore Space</h5>
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
                  <h5 class="card-title">Planets</h5>
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
                  <h5 class="card-title">Fruits</h5>
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
