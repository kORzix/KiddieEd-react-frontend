import loginNav from "../images/lessons plans-nav-img.png";
import Navbar from "../components/navbar";
import TopNavBar from "../components/topnavbar";
import { PROXY } from "../configs";
import React from "react";
import axios from "axios";
import Card from "../components/Card";

function LessonPlans() {
  const [plans, setPlans] = React.useState([]);

  React.useEffect(() => {
    retrievePlans();
  }, []);

  function retrievePlans() {
    axios.get(PROXY + "/lesson-plans").then((res) => {
      if (res.data.success) {
        setPlans(res.data.existingPlans);
      }
    });
  }

  return (
    <div className="App">
      <Navbar img={loginNav} />

      {/* Nav bar in the container */}
      <div className="container p-5 mb-5" style={{ width: "70%" }}>
        <TopNavBar />

        <h3 className="mt-4 mb-5">Lessons Plans</h3>

        {/* Cards */}
        <div className="row d-flex justify-content-center">
          
          {/* Card Dynamic*/}
          {plans.map((plans, index) => (
            <Card
              index={index}
              image={plans.image}
              name={plans.planName}
              id={plans._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LessonPlans;
