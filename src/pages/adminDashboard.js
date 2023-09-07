import loginNav from "../images/dashboard-nav-img.png";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";

import img1 from "../images/Games_D.png";
import img2 from "../images/worksheet_D.png";
import img3 from "../images/Guidedlessons_D.png";
import img4 from "../images/LessonPlans_D.png";
import img5 from "../images/plans_D.png";
import img6 from "../images/users_D.png";

function AdminDashboard() {
  return (
    <div className="App">
      <Navbar img={loginNav} />

      <div className="container p-5 mb-5" style={{ width: "70%" }}>
        <h3 className="mt-4 mb-5">Admin Dashboard</h3>

        {/* Cards */}
        <div className="row d-flex justify-content-center">
          {/* Card 1 */}
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-10 col-12">
            <div className="card">
              <div className="card-img">
                <img
                  src={img2}
                  className="img-fluid mb-5 mt-5 admin-db-img"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">Worksheets</h5>
                <Link to="/worksheets" className="btn">
                  Manage
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-10 col-12">
            <div className="card">
              <div className="card-img">
                <img
                  src={img1}
                  className="img-fluid mb-5 mt-5 admin-db-img"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">Games</h5>
                <Link to="/games" className="btn">
                  Manage
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-10 col-12">
            <div className="card">
              <div className="card-img">
                <img
                  src={img3}
                  className="img-fluid mb-5 mt-5 admin-db-img"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">Guided Lessons</h5>
                <Link to="/guid-lessons" className="btn">
                  Manage
                </Link>
              </div>
            </div>
          </div>

          {/* Card 4*/}
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-10 col-12">
            <div className="card">
              <div className="card-img">
                <img
                  src={img5}
                  className="img-fluid mb-5 mt-5 admin-db-img"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">Lessons Plans</h5>
                <Link to="/lesson-plans" className="btn">
                  Manage
                </Link>
              </div>
            </div>
          </div>

          {/* Card 5*/}
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-10 col-12">
            <div className="card">
              <div className="card-img">
                <img
                  src={img6}
                  className="img-fluid mb-5 mt-5 admin-db-img"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">Users</h5>
                <Link to="/button1" className="btn">
                  Manage
                </Link>
              </div>
            </div>
          </div>

          {/* Card 4*/}
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-10 col-12">
            <div className="card">
              <div className="card-img">
                <img
                  src={img4}
                  className="img-fluid mb-5 mt-5 admin-db-img"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">Teachers</h5>
                <Link to="/button1" className="btn">
                  Manage
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
