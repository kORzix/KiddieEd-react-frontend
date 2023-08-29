import loginNav from '../images/lessons plans-nav-img.png';
import img1 from '../images/more-img-1.png';
import img2 from '../images/more-img-2.png';
import img3 from '../images/more-img-3.png';
import img4 from '../images/more-img-4.png';
import { Link } from "react-router-dom";
import Navbar from '../components/navbar';
import TopNavBar from '../components/topnavbar';
import Card from '../components/card'
// [img1,"Letter Quiz"], [img2,"Match the Fruit"], [img3,"Science Trivia"], [img4,"Guess the Country"], [img5,"Letter Matcher"], [img6,"Toy Saga"], [img7,"Ski Letter Jumper"], [img8,"Shape Picker"]

// let userList = [
//   {image: img1,title: "Letter Quiz"},
//   {image: img2,title: "Match the Fruit"},
//   {image: img3,title: "Science Trivia"},
//   {image: img4,title: "Guess the Country"},
//   // {
//   //   image: img5,
//   //   title: "Letter Matcher",
//   // },
//   // {
//   //   image: img6,
//   //   title: "Toy Saga",
//   // },
//   // {
//   //   image: img7,
//   //   title: "Ski Letter Jumper",
//   // },
//   // {
//   //   image: img8,
//   //   title: "Shape Picker",
//   // }
// ];
// const renderCards = (card,index)=>{
//   return(
//     <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10 col-12">
//             <div className="card">
//                 <div className="card-img">
//                     <img src={detail.image} className="img-fluid mb-5 mt-5" alt="..." />
//                 </div>
//                 <div className="card-body">
//                     <h5 className="card-title">{detail.title}</h5>
//                     <Link to="/button1" className="btn">Start</Link>
//                 </div>
//             </div>
//         </div>
//   );
// }

function More() {
  return (
    <div className="App">
        <Navbar img={loginNav} />

        
        <Card/>
        {/* Nav bar in the container */}
        <div className="container p-5 mb-5" style={{width: '70%'}}>
          <TopNavBar/>

          <h3></h3>

          {/* Cards */}
          <div class="row d-flex justify-content-center">


            {/* Card 1 */}
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-10 col-12">
              <div class="card">
                <div class="card-img">
                  <img src={img1} class="img-fluid mb-5 mt-5" alt="..." />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Monitor Progress</h5>
                  <Link to="/button1" className="btn">Start</Link>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-10 col-12">
              <div class="card">
                <div class="card-img">
                  <img src={img2} class="img-fluid mb-5 mt-5" alt="..." />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Premium Plans</h5>
                  <Link to="/button1" className="btn">Start</Link>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-10 col-12">
              <div class="card">
                <div class="card-img">
                  <img src={img3} class="img-fluid mb-5 mt-5" alt="..." />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Contact Us</h5>
                  <Link to="/button1" className="btn">Start</Link>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-10 col-12">
              <div class="card">
                <div class="card-img">
                  <img src={img4} class="img-fluid mb-5 mt-5" alt="..." />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Profile</h5>
                  <Link to="/profile" className="btn">Start</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default More;
