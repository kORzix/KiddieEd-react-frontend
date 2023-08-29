import loginNav from '../images/guided lessons-nav-img.png';
import img1 from '../images/guided lessons-img-1.png';
import img2 from '../images/guided lessons-img-2.png';
import img3 from '../images/guided lessons-img-3.png';
import img4 from '../images/guided lessons-img-4.png';
import img5 from '../images/guided lessons-img-5.png';
import img6 from '../images/guided lessons-img-6.png';
import img7 from '../images/guided lessons-img-7.png';
import img8 from '../images/guided lessons-img-8.png';
import { Link } from "react-router-dom";
import Navbar from '../components/navbar';
import TopNavBar from '../components/topnavbar';

function GuidedLessons() {
  return (
    <div className="App">
        <Navbar img={loginNav} />
        
        {/* Nav bar in the container */}
        <div className="container p-5 mb-5" style={{width: '70%'}}>
          <TopNavBar/>

          <h3 className='mt-4 mb-5'>Guided Lessons</h3>

          {/* Cards */}
          <div className="row d-flex justify-content-center">

            {/* Card 1 */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10 col-12">
              <div className="card">
                <div className="card-img">
                  <img src={img1} className="img-fluid mb-5 mt-5" alt="..." />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Addition</h5>
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
                  <h5 className="card-title">Famous Places</h5>
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
                  <h5 className="card-title">Geometry</h5>
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
                  <h5 className="card-title">Vegetables</h5>
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
                  <h5 className="card-title">Letters</h5>
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
                  <h5 className="card-title">Space</h5>
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
                  <h5 className="card-title">Fruits</h5>
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
                  <h5 className="card-title">Animals</h5>
                  <Link to="/button1" className="btn">Start</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default GuidedLessons;
