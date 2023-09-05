import loginNav from "../images/games-nav-img.png";
import Navbar from "../components/navbar";
import TopNavBar from "../components/topnavbar";
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
              name={games.gameName}
              id={games._id}
              url={'games'}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Games;
