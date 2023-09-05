import loginNav from "../images/games-nav-img.png";
import img1 from "../images/games-img-1.png";
import img2 from "../images/games-img-2.png";
import img3 from "../images/games-img-3.png";
import img4 from "../images/games-img-4.png";
import img5 from "../images/games-img-5.png";
import img6 from "../images/games-img-6.png";
import img7 from "../images/games-img-7.png";
import img8 from "../images/games-img-8.png";
import Navbar from "../components/navbar";
import TopNavBar from "../components/topnavbar";
import loginNav2 from "../images/lessons plans-nav-img.png";
import { PROXY } from "../configs";
import React from "react";
import axios from "axios";

import Card from "../components/Card";

function Games() {
  const [games, setGames] = React.useState([]);

  React.useEffect(() => {
    retrieveGames();
  }, []);

  function retrieveGames() {
    axios.get(PROXY + "/games").then((res) => {
      if (res.data.success) {
        setGames(res.data.existingGames);
      }
    });
  }

  return (
    <div className="App">
      <Navbar img={loginNav} />

      {/* Nav bar in the container */}
      <div className="container p-5 mb-5" style={{ width: "70%" }}>
        <TopNavBar />

        <h3 className="mt-4 mb-5">Games</h3>

        {/* Cards */}
        <div className="row d-flex justify-content-center">
          {/* Card Dynamic*/}
          {games.map((games, index) => (
            <Card
              index={index}
              image={games.image}
              name={games.planName}
              id={games._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Games;
