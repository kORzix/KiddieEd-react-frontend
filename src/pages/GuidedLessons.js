import loginNav from "../images/guided lessons-nav-img.png";
import img1 from "../images/guided lessons-img-1.png";
import img2 from "../images/guided lessons-img-2.png";
import img3 from "../images/guided lessons-img-3.png";
import img4 from "../images/guided lessons-img-4.png";
import img5 from "../images/guided lessons-img-5.png";
import img6 from "../images/guided lessons-img-6.png";
import img7 from "../images/guided lessons-img-7.png";
import img8 from "../images/guided lessons-img-8.png";
import Card from "../components/Card";

import Navbar from "../components/navbar";
import TopNavBar from "../components/topnavbar";

import { PROXY } from "../configs";
import React from "react";
import axios from "axios";
import Card from "../components/Card";


function Lessons() {
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
      <div className="container p-5 mb-5" style={{ width: "70%" }}>
        <TopNavBar />

        <h3 className="mt-4 mb-5">Lessons</h3>

        {/* Cards */}
        <div className="row d-flex justify-content-center">
          {/* Card Dynamic*/}
          {lessons.map((lessons, index) => (
            <Card
              index={index}
              image={lessons.image}
              name={lessons.lessonName}
              id={lessons._id}
              url={"guid-lessons"}

            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Lessons;
