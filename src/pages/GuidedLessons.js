import loginNav from "../images/lessons plans-nav-img.png";
import Navbar from "../components/navbar";
import TopNavBar from "../components/topnavbar";
import { PROXY } from "../configs";
import React from "react";
import axios from "axios";
import Card from "../components/Card";

function Lessons() {
  const [gessons, setLessons] = React.useState([]);

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
          {gessons.map((gessons, index) => (
            <Card
              index={index}
              image={gessons.image}
              name={gessons.planName}
              id={gessons._id}
            />
          ))}
        </div>
    </div>
  );
}

export default Lessons;
