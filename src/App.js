import loginNav from './images/dashboard-nav-img.png';
import img1 from './images/dashboard-img-1.png';
import img2 from './images/dashboard-img-2.png';
import img3 from './images/dashboard-img-3.png';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <div className="m-">
          <nav className="navbar navbar-expand-md navbar-dark">
            <div className="container-fluid d-flex justify-content-start align-items-center">
              <Link to="/login" className="navbar-brand" style={{ fontFamily: "'Comic Sans MS', sans-serif", fontSize: '3em'}}>KiddeEd</Link>
              <img src={loginNav} alt="Login" className="img-fluid" />
            </div>
          </nav>
        </div>

        {/* Nav bar in the container */}
        <div className="container" style={{width: '70%', padding: '2em 4em 2em 4em'}}>
          <div className="nav-container">
            <div className="nav-buttons" style={{margin: '0 1.5em 0 1.5em'}}>
              <Link to="/button1" className="nav-button">Worksheets</Link>
              <Link to="/button2" className="nav-button">Games</Link>
              <Link to="/button3" className="nav-button">Guided Lessons</Link>
              <Link to="/button4" className="nav-button">Lesson Plans</Link>
              <Link to="/button4" className="nav-button">More</Link>
            </div>
          </div>

          <h3>Popular Activities</h3>

          {/* Cards */}
          <div class="row">

            {/* Card 1 */}
            <div class="col-md-4">
              <div class="card">
                <div class="card-img">
                  <img src={img1} class="card-img-top" alt="..." />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Letter Quiz</h5>
                  <Link to="/button1" className="btn">Start</Link>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div class="col-md-4">
              <div class="card">
                <div class="card-img">
                  <img src={img2} class="card-img-top" alt="..." />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Paint Bonanza</h5>
                  <Link to="/button1" className="btn">Start</Link>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div class="col-md-4">
              <div class="card">
                <div class="card-img">
                  <img src={img3} class="card-img-top" alt="..." />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Addition</h5>
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
