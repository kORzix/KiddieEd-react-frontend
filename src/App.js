import loginNav from './images/dashboard-nav-img.png';
import img1 from './images/dashboard-img-1.png';
import img2 from './images/dashboard-img-2.png';
import img3 from './images/dashboard-img-3.png';
import { Link } from "react-router-dom";
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
        <Navbar img={loginNav} />

        {/* Nav bar in the container */}
        {/* , padding: '2em 4em 2em 4em' */}
        <div className="container p-5 mb-5" style={{width: '70%'}}>
          <div className="nav-container">
            <div className="nav-buttons" style={{margin: '0 1.5em 0 1.5em'}}>
              <Link to="/worksheets" className="nav-button">Worksheets</Link>
              <Link to="/games" className="nav-button">Games</Link>
              <Link to="/guided lessons" className="nav-button">Guided Lessons</Link>
              <Link to="/lessons plans" className="nav-button">Lesson Plans</Link>
              <Link to="/more" className="nav-button">More</Link>
            </div>
          </div>

          <h3 className='mt-4 mb-5'>Popular Activities</h3>

          {/* Cards */}
          <div className="row d-flex justify-content-center">

            {/* Card 1 */}
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-10 col-12">
              <div className="card">
                <div className="card-img">
                  <img src={img1} className="img-fluid mb-5 mt-5" alt="..." />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Letter Quiz</h5>
                  <Link to="/button1" className="btn">Start</Link>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-10 col-12">
              <div className="card">
                <div className="card-img">
                  <img src={img2} className="img-fluid mb-5 mt-5" alt="..." />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Paint Bonanza</h5>
                  <Link to="/button1" className="btn">Start</Link>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-10 col-12">
              <div className="card">
                <div className="card-img">
                  <img src={img3} className="img-fluid mb-5 mt-5" alt="..." />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Addition</h5>
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
