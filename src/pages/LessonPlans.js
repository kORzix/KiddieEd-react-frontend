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

function LessonPlans() {
  return (
    <div className="App">
        <Navbar img={loginNav} />
        
        {/* Nav bar in the container */}
        <div className="container p-5 mb-5" style={{width: '70%'}}>
          <div className="nav-container">
            <div className="nav-buttons" style={{margin: '0 1.5em 0 1.5em'}}>
              <Link to="/worksheets" className="nav-button">Worksheets</Link>
              <Link to="/games" className="nav-button">Games</Link>
              <Link to="/guided lessons" className="nav-button">Guided Lessons</Link>
              <Link to="/lessons plans" className="nav-button-active">Lesson Plans</Link>
              <Link to="/more" className="nav-button">More</Link>
            </div>
          </div>

          <h3 className='mt-4 mb-5'>Lessons Plans</h3>

          {/* Cards */}
          <div className="row d-flex justify-content-center">

            {/* Card 1 */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10 col-12">
              <div className="card">
                <div className="card-img">
                  <img src={img1} className="img-fluid mb-5 mt-5" alt="..." />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Astronomy</h5>
                  <Link to="/button1" className="btn">Start</Link>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10 col-12">
              <div className="card">
                <div className="card-img">
                  <img src={img2} className="img-fluid mb-5 mt-5" alt="..." />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Music</h5>
                  <Link to="/button1" className="btn">Start</Link>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10 col-12">
              <div className="card">
                <div className="card-img">
                  <img src={img3} className="img-fluid mb-5 mt-5" alt="..." />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Math</h5>
                  <Link to="/button1" className="btn">Start</Link>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10 col-12">
              <div className="card">
                <div className="card-img">
                  <img src={img4} className="img-fluid mb-5 mt-5" alt="..." />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Painting</h5>
                  <Link to="/button1" className="btn">Start</Link>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10 col-12">
              <div className="card">
                <div className="card-img">
                  <img src={img5} className="img-fluid mb-5 mt-5" alt="..." />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Social</h5>
                  <Link to="/button1" className="btn">Start</Link>
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10 col-12">
              <div className="card">
                <div className="card-img">
                  <img src={img6} className="img-fluid mb-5 mt-5" alt="..." />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Science</h5>
                  <Link to="/button1" className="btn">Start</Link>
                </div>
              </div>
            </div>

            {/* Card 7 */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10 col-12">
              <div className="card">
                <div className="card-img">
                  <img src={img7} className="img-fluid mb-5 mt-5" alt="..." />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Sports</h5>
                  <Link to="/button1" className="btn">Start</Link>
                </div>
              </div>
            </div>

            {/* Card 8 */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10 col-12">
              <div className="card">
                <div className="card-img">
                  <img src={img8} className="img-fluid mb-5 mt-5" alt="..." />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Law</h5>
                  <Link to="/button1" className="btn">Start</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default LessonPlans;
