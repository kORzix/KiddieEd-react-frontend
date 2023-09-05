import loginNav from "../images/lessons plans-nav-img.png";
import img1 from "../images/more-img-1.png";
import img2 from "../images/more-img-2.png";
import img3 from "../images/more-img-3.png";
import img4 from "../images/more-img-4.png";
import Navbar from "../components/navbar";
import TopNavBar from "../components/topnavbar";
import Card from "../components/Card";

function More() {
  return (
    <div className="App">
      <Navbar img={loginNav} />

      {/* Nav bar in the container */}
      <div className="container p-5 mb-5" style={{ width: "70%" }}>
        <TopNavBar />

        {/* Cards */}
        <div class="row d-flex justify-content-center mt-5">
          <Card
            index={1}
            image={img1}
            name={"Monitor Progress"}
            id={"/button1"}
          />
          <Card index={2} image={img2} name={"Premium Plans"} id={"/button1"} />
          <Card index={3} image={img3} name={"Contact Us"} id={"/button1"} />
          <Card index={4} image={img4} name={"Profile"} id={"/profile"} />
        </div>
      </div>
    </div>
  );
}

export default More;
