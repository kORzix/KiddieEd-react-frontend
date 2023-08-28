<<<<<<< HEAD
import loginNav from './images/dashboard-nav-img.png';
import img1 from './images/dashboard-img-1.png';
import img2 from './images/dashboard-img-2.png';
import img3 from './images/dashboard-img-3.png';
import { Link } from "react-router-dom";
import Navbar from './components/navbar';
import SubNavbar from './components/sub-navbar';

function App() {
  return (
    <div className="App">
        <Navbar img={loginNav} />

        {/* Nav bar in the container */}
        {/* , padding: '2em 4em 2em 4em' */}
        <div className="container p-5 mb-5" style={{width: '70%'}}>
          <SubNavbar />

          <h3 className='mt-4 mb-5'>Popular Activities</h3>

          {/* Cards */}
          <div className="row d-flex justify-content-center">

            {/* Card 1 */}
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-10 col-12">
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
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-10 col-12">
              <div className="card">
                <div className="card-img">
                  <img src={img2} className="img-fluid mb-5 mt-5" alt="..." />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Paint Bonanza</h5>
                  <Link to="/button1" className="btn">Start</Link>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-10 col-12">
              <div className="card">
                <div className="card-img">
                  <img src={img3} className="img-fluid mb-5 mt-5" alt="..." />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Addition</h5>
                  <Link to="/button1" className="btn">Start</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
=======
import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pages
import Home from "./pages/Home";
import Games from "./pages/Games";
import GuidedLessons from "./pages/GuidedLessons";
import LessonPlans from "./pages/LessonPlans";
import More from "./pages/More";
import Register from "./pages/Register";
import Worksheet from "./pages/Worksheets";
import Login from "./pages/LoginPage";
import './index.css';

// Components
// import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/login' exact element={<Login />} />
          <Route path='/register' exact element={<Register />} />
          <Route path='/worksheet' exact element={<Worksheet />} />
          <Route path='/games' exact element={<Games />} />
          <Route path='/guided-lessons' exact element={<GuidedLessons />} />
          <Route path='/lessons-plans' exact element={<LessonPlans />} />
          <Route path='/more' exact element={<More />} />
          {/* <Route path='/article/:name' element={<Article />} /> */}
          {/* <Route path='*' element={<NotFound />} /> */}
        </Routes>
      {/* </div> */}
    </BrowserRouter>
>>>>>>> c227087ee8123df2b80b9567489facd7f9a1210c
  );
}

export default App;