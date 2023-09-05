import { PROXY } from "../configs";
import React from "react";
import axios from "axios";
import Card from "../components/Card";

import loginNav from '../images/guided lessons-nav-img.png';

// import { Link } from "react-router-dom";
import Navbar from '../components/navbar';
import TopNavBar from '../components/topnavbar';

function GuidedLessons() {
  const [guidedLesson, setGuidedLesson] = React.useState([]);

  React.useEffect(() => {
    retrieveGuidedLesson();
  }, []);

  function retrieveGuidedLesson() {
    axios.get(PROXY + "/guide-lessons").then((res) => {
      if (res.data.success) {
        setGuidedLesson(res.data.existingGuidedLessons);
      }
    });
  }

  return (
    <div className="App">
        <Navbar img={loginNav} />
        
        <div className="container p-5 mb-5" style={{ width: "70%" }}>
        <TopNavBar />

        <h3 className="mt-4 mb-5">GuidedLessons</h3>

        {/* Cards */}
        <div className="row d-flex justify-content-center">
          {/* Card Dynamic*/}
          {guidedLesson.map((guidedLesson, index) => (
            <Card
              index={index}
              image={guidedLesson.image}
              name={guidedLesson.planName}
              id={guidedLesson._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default GuidedLessons;
