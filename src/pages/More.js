import loginNav from '../images/lessons plans-nav-img.png';
import img1 from '../images/more-img-1.png';
import img2 from '../images/more-img-2.png';
import img3 from '../images/more-img-3.png';
import img4 from '../images/more-img-4.png';
import { Link } from "react-router-dom";
import Navbar from '../components/navbar';
import TopNavBar from '../components/topnavbar';

function More() {
  return (
    <div className="App">
        <Navbar img={loginNav} />
        
        {/* Nav bar in the container */}
        <div className="container p-5 mb-5" style={{width: '70%'}}>
          <TopNavBar/>

          <h3></h3>

          {/* Cards */}
          <div className="row d-flex justify-content-center">

            {/* Card 1 */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10 col-12">
              <div className="card">
                <div className="card-img">
                  <img src={img1} className="img-fluid mb-5 mt-5" alt="..." />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Monitor Progress</h5>
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
                  <h5 className="card-title">Premium Plans</h5>
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
                  <h5 className="card-title">Contact Us</h5>
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
                  <h5 className="card-title">Profile</h5>
                  <Link to="/profile" className="btn">Start</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default More;
