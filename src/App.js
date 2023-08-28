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
      {/* <div className="container p-5 mb-5" style={{width: '70%'}}> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/worksheet' element={<Worksheet />} />
          <Route path='/games' element={<Games />} />
          <Route path='/guided-lessons' element={<GuidedLessons />} />
          <Route path='/lesson-plans' element={<LessonPlans />} />
          <Route path='/more' element={<More />} />
          {/* <Route path='/article/:name' element={<Article />} /> */}
          {/* <Route path='*' element={<NotFound />} /> */}
        </Routes>
      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;