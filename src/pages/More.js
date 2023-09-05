import loginNav from "../images/lessons plans-nav-img.png";
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
            image={'more-img-1.png'}
            name={"Monitor Progress"}
            id={"button1"}
          />
          <Card index={2} image={'more-img-2.png'} name={"Premium Plans"} id={"button1"} url={'more'}/>
          <Card index={3} image={'more-img-3.png'} name={"Contact Us"} id={"button1"} url={'more'}/>
          <Card index={4} image={'more-img-4.png'} name={"Profile"} id={"profile"} url={'more'}/>
        </div>
      </div>
    </div>
  );
}

export default More;
