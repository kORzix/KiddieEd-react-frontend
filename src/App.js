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

import AddPlan from "./pages/lesson-plans/AddPlan";
import ViewPlans from "./pages/lesson-plans/ViewPlans";
import ViewPlan from "./pages/lesson-plans/ViewPlan";
import EditPlan from "./pages/lesson-plans/EditPlan";

import AddSheet from "./pages/worksheets/AddSheet";
import ViewSheets from "./pages/worksheets/ViewSheets";
import ViewSheet from "./pages/worksheets/ViewSheet";
import EditSheet from "./pages/worksheets/EditSheet";

import './index.css';
import Eff from "./components/Eff";

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

          <Route path='/lesson-plans/add' exact element={<AddPlan />} />
          <Route path='/lesson-plans' exact element={<ViewPlans />} />
          <Route path='/lesson-plans/view/:id' exact element={<ViewPlan />} />
          <Route path='/lesson-plans/edit/:id' exact element={<EditPlan />} />

          <Route path='/worksheets/add' exact element={<AddSheet />} />
          <Route path='/worksheets' exact element={<ViewSheets />} />
          <Route path='/worksheets/view/:id' exact element={<ViewSheet />} />
          <Route path='/worksheets/edit/:id' exact element={<EditSheet />} />

          {/* <Route path='/article/:name' element={<Article />} /> */}
          {/* <Route path='*' element={<NotFound />} /> */}
        </Routes>
      <Eff />
      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;