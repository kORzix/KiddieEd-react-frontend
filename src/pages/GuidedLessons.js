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

function GuidedLessons() {
  return (
    <div className="App">
      <Navbar img={loginNav} />

      {/* Nav bar in the container */}
      <div className="container p-5 mb-5" style={{ width: "70%" }}>
        <TopNavBar />

        <h3 className="mt-4 mb-5">Guided Lessons</h3>

        {/* Cards */}
        <div className="row d-flex justify-content-center">
          <Card index={1} image={img1} name={"Addition"} id={"/button1"} />
          <Card index={2} image={img2} name={"Famous Places"} id={"/button1"} />
          <Card index={3} image={img3} name={"Geometry"} id={"/button1"} />
          <Card index={4} image={img4} name={"Vegetables"} id={"/button1"} />
          <Card index={5} image={img5} name={"Letters"} id={"/button1"} />
          <Card index={6} image={img6} name={"Space"} id={"/button1"} />
          <Card index={7} image={img7} name={"Fruits"} id={"/button1"} />
          <Card index={8} image={img8} name={"Animals"} id={"/button1"} />
        </div>
      </div>
    </div>
  );
}

export default GuidedLessons;
