import loginNav from '../images/games-nav-img.png';
import img1 from '../images/games-img-1.png';
import img2 from '../images/games-img-2.png';
import img3 from '../images/games-img-3.png';
import img4 from '../images/games-img-4.png';
import img5 from '../images/games-img-5.png';
import img6 from '../images/games-img-6.png';
import img7 from '../images/games-img-7.png';
import img8 from '../images/games-img-8.png';
import { Link } from "react-router-dom";
import Navbar from '../components/navbar';
import TopNavBar from '../components/topnavbar';
import Card from '../components/card'

// let arr = [[img1,"Letter Quiz"], [img2,"Match the Fruit"], [img3,"Science Trivia"], [img4,"Guess the Country"], [img5,"Letter Matcher"], [img6,"Toy Saga"], [img7,"Ski Letter Jumper"], [img8,"Shape Picker"]];
// let itemList = []

//       arr.forEach((arr,index)=>{
//         itemList.push(<Card image={arr}
//       />)
//       })  

function App() {
  return (
    <div className="App">
      <Navbar img={loginNav} />
      {/* {itemList} */}

      

      {/* Nav bar in the container */}
      <div className="container p-5 mb-5" style={{ width: '70%' }}>

        <TopNavBar />
        <h3 className='mt-4 mb-5'>Games</h3>

        {/* Cards */}
        <div className="row d-flex justify-content-center">

          {/* Card 1 */}
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10 col-12">
            <div className="card">
              <div className="card-img">
                <img src={img1} className="img-fluid mb-5 mt-5" alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title">Letter Quiz</h5>
                <Link to="/button1" className="btn">Start</Link>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10 col-12">
            <div className="card">
              <div className="card-img">
                <img src={img2} className="img-fluid mb-5 mt-5" alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title">Match the Fruit</h5>
                <Link to="/button1" className="btn">Start</Link>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10 col-12">
            <div className="card">
              <div className="card-img">
                <img src={img3} className="img-fluid mb-5 mt-5" alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title">Science Trivia</h5>
                <Link to="/button1" className="btn">Start</Link>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10 col-12">
            <div className="card">
              <div className="card-img">
                <img src={img4} className="img-fluid mb-5 mt-5" alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title">Guess the Country</h5>
                <Link to="/button1" className="btn">Start</Link>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10 col-12">
            <div className="card">
              <div className="card-img">
                <img src={img5} className="img-fluid mb-5 mt-5" alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title">Letter Matcher</h5>
                <Link to="/button1" className="btn">Start</Link>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10 col-12">
            <div className="card">
              <div className="card-img">
                <img src={img6} className="img-fluid mb-5 mt-5" alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title">Toy Saga</h5>
                <Link to="/button1" className="btn">Start</Link>
              </div>
            </div>
          </div>

          {/* Card 7 */}
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10 col-12">
            <div className="card">
              <div className="card-img">
                <img src={img7} className="img-fluid mb-5 mt-5" alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title">Ski Letter Jumper</h5>
                <Link to="/button1" className="btn">Start</Link>
              </div>
            </div>
          </div>

          {/* Card 8 */}
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10 col-12">
            <div className="card">
              <div className="card-img">
                <img src={img8} className="img-fluid mb-5 mt-5" alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title">Shape Picker</h5>
                <Link to="/button1" className="btn">Start</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
