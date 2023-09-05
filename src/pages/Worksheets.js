import loginNav from "../images/worksheets-nav-img.png";
import Navbar from "../components/navbar";
import TopNavBar from "../components/topnavbar";
import { PROXY } from "../configs";
import React from "react";
import axios from "axios";
import Card from "../components/Card";

  

function Worksheet() {
  const [sheets, setSheets] = React.useState([]);

  React.useEffect(() => {
    retrieveSheets();
  }, []);

  function retrieveSheets() {
    axios.get(PROXY + "/worksheets").then((res) => {
      if (res.data.success) {
        setSheets(res.data.existingSheets);
      }
    });
  }
  return (
    <div className="App">
      <Navbar img={loginNav} />

      {/* Nav bar in the container */}
      <div className="container p-5 mb-5" style={{ width: "70%" }}>
        <TopNavBar pageNo={'worksheets'} />

        <h3 className="mt-4 mb-5">Worksheets</h3>

        <div class="row d-flex justify-content-center">
          {/* Card Dynamic*/}
          {sheets.map((sheets, index) => (
            <Card
              index={index}
              image={sheets.image}
              name={sheets.sheetName}
              id={sheets._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Worksheet;
