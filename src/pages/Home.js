import loginNav from "../images/dashboard-nav-img.png";
import img1 from "../images/dashboard-img-1.png";
import img2 from "../images/dashboard-img-2.png";
import img3 from "../images/dashboard-img-3.png";
import Card from "../components/Card";
import Navbar from "../components/navbar";
import TopNavBar from "../components/topnavbar";

function Home() {
  return (
    <div className="App">
      <Navbar img={loginNav} />

      <div className="container p-5 mb-5" style={{ width: "70%" }}>
        <TopNavBar />

        <h3 className="mt-4 mb-5">Popular Activities</h3>

        {/* Cards */}
        <div className="row d-flex justify-content-center">
          <Card index={1} image={img1} name={"Letter Quiz"} id={"/button1"} />
          <Card index={2} image={img2} name={"Paint Bonanza"} id={"/button1"} />
          <Card index={3} image={img3} name={"Addition"} id={"/button1"} />
        </div>
      </div>
    </div>
  );
}

export default Home;
