import React from "react";
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
import Profile from "./pages/More/Profile";

import AddCourse from "./pages/lesson/AddCourse";
import ViewAll from "./pages/lesson/ViewAll";
import ViewCourse from "./pages/lesson/ViewCourse";
import EditCourse from "./pages/lesson/EditCourse";


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
          <Route path='/profile' exact element={<Profile />} />

          <Route path='/addlesson' exact element={<AddCourse />} />
          <Route path='/lessons' exact element={<ViewAll />} />
          <Route path='/viewlesson/:id' exact element={<ViewCourse />} />
          <Route path='/editlesson/:id' exact element={<EditCourse />} />

          {/* <Route path='/article/:name' element={<Article />} /> */}
          {/* <Route path='*' element={<NotFound />} /> */}
        </Routes>
      {/* </div> */}
    </BrowserRouter>
    //add test comment from buddhika
  );
}

export default App;