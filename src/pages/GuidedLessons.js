import loginNav from '../images/guided lessons-nav-img.png';
import Navbar from '../components/navbar';
import TopNavBar from '../components/topnavbar';
import { PROXY } from "../configs";
import React from "react";
import axios from "axios";
import Card from "../components/Card";

function GuidedLessons() {
  const [lessons, setLessons] = React.useState([]);

  React.useEffect(() => {
    retrieveLessons();
  }, []);

  function retrieveLessons() {
    axios.get(PROXY + "/guid-lessons").then((res) => {
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
          <TopNavBar pageNo={'guided-lessons'} />

          <h3 className='mt-4 mb-5'>Guided Lessons</h3>

          {/* Cards */}
          <div className="row d-flex justify-content-center">
          {lessons.map((lessons, index) => (
            <Card
              index={index}
              image={lessons.image}
              name={lessons.lessonName}
              id={lessons._id}
              url={'guid-lessons'}
            />
          ))}
            
          </div>
        </div>
    </div>
  );
}

export default GuidedLessons;
