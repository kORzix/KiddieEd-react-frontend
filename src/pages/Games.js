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
import Card from "../components/Card";

function Games() {
  return (
    <div className="App">
      <Navbar img={loginNav} />

      {/* Nav bar in the container */}
      <div className="container p-5 mb-5" style={{ width: "70%" }}>
        <TopNavBar />
        <h3 className="mt-4 mb-5">Games</h3>

        {/* Cards */}
        <div className="row d-flex justify-content-center">
          <Card index={1} image={img1} name={"Letter Quiz"} id={"/button1"} />
          <Card
            index={2}
            image={img2}
            name={"Match the Fruit"}
            id={"/button1"}
          />
          <Card
            index={3}
            image={img3}
            name={"Science Trivia"}
            id={"/button1"}
          />
          <Card
            index={4}
            image={img4}
            name={"Guess the Country"}
            id={"/button1"}
          />
          <Card
            index={5}
            image={img5}
            name={"Letter Matcher"}
            id={"/button1"}
          />
          <Card index={6} image={img6} name={"Toy Saga"} id={"/button1"} />
          <Card
            index={7}
            image={img7}
            name={"Ski Letter Jumper"}
            id={"/button1"}
          />
          <Card index={8} image={img8} name={"Shape Picker"} id={"/button1"} />
        </div>
      </div>
    </div>
  );
}

export default Games;
