import loginNav from '../../images/lessons plans-nav-img.png';
import img1 from '../../images/lessons plans-img-1.png';
import { Link } from "react-router-dom";
import Navbar from '../../components/navbar';
import TopNavBar from '../../components/topnavbar';

import axios from "axios";
import React from "react";

export default function Prev() {
    const [lessons, setLessons] = React.useState([]);

  React.useEffect(() => {
    retrieveLessons();
  }, []);

  function retrieveLessons() {
    axios.get("http://localhost:8000/lessons").then((res) => {
      if (res.data.success) {
        setLessons(res.data.existingLessons);
      }
    });
  }

  return (
    <div className="App">
        <Navbar img={loginNav} />
        
        {/* Nav bar in the container */}
        <div className="container p-5 mb-5" style={{width: '70%'}}>
          <TopNavBar/>

          <h3 className='mt-4 mb-5'>Lessons Plans</h3>

          {/* Cards */}
          <div className="row d-flex justify-content-center">

            {/* Card 1 */}
            {lessons.map((lessons, index) => (
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10 col-12" key={index}>
              <div className="card">
                <div className="card-img">
                  <img src={img1} className="img-fluid mb-5 mt-5" alt="..." />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{lessons.lessonName}</h5>
                  <Link to={`/viewlesson/${lessons._id}`} className="btn">Start</Link>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
    </div>
  );
}