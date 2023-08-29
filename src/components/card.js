import React from "react";
import { Link } from "react-router-dom";
import img1 from '../images/more-img-1.png';
import img2 from '../images/more-img-2.png';
import img3 from '../images/more-img-3.png';
import img4 from '../images/more-img-4.png';

// function card({detail}) {
//     return (
        
//         <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10 col-12">
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
        
//     )
// }

// export default card;

let card = [
    {image: img1,title: "Letter Quiz"},
    {image: img2,title: "Match the Fruit"},
    {image: img3,title: "Science Trivia"},
    {image: img4,title: "Guess the Country"},
    // {
    //   image: img5,
    //   title: "Letter Matcher",
    // },
    // {
    //   image: img6,
    //   title: "Toy Saga",
    // },
    // {
    //   image: img7,
    //   title: "Ski Letter Jumper",
    // },
    // {
    //   image: img8,
    //   title: "Shape Picker",
    // }
  ];
  const renderCards = (card,index)=>{
    return(
      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10 col-12">
              <div className="card">
                  <div className="card-img">
                      <img src={card.image} className="img-fluid mb-5 mt-5" alt="..." />
                  </div>
                  <div className="card-body">
                      <h5 className="card-title">{card.title}</h5>
                      <Link to="/button1" className="btn">Start</Link>
                  </div>
              </div>
          </div>
    );
  }

  export default renderCards;