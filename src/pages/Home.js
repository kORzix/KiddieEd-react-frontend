import loginNav from "../images/dashboard-nav-img.png";
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
          <Card
            index={1}
            image={"file_1693933342128.png"}
            name={"Letter Quiz"}
            id={"64f75f1e7011fa86a1bbb3f2"}
            url={"games"}
          />
          <Card
            index={2}
            image={"file_1693675766318.png"}
            name={"Paint Bonanza"}
            id={"64f370f685e561374b2ad8fc"}
            url={"worksheets"}
          />
          <Card
            index={3}
            image={"file_1693933764201.png"}
            name={"Addition"}
            id={"64f760c47011fa86a1bbb40c"}
            url={"guid-lessons"}
          />
          <Card
            index={3}
            image={"file_1693669067163.png"}
            name={"Painting"}
            id={"64f356cbc49518319c4097d3"}
            url={"lesson-plans"}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
