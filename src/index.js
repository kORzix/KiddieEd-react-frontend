import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import Login  from './pages/LoginPage';
import Register from './pages/Register';
import Worksheets from './pages/Worksheets';
import Games from './pages/Games';
import GuidedLessons from './pages/GuidedLessons';
import LessonsPlans from './pages/LessonPlans';
import More from './pages/More';
import NotFound from './NotFound';
import Profile from './pages/More/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "worksheets",
    element: <Worksheets />,
  },
  {
    path: "games",
    element: <Games />,
  },
  {
    path: "more",
    element: <More />,
  },
  {
    path: "guided lessons",
    element: <GuidedLessons />,
  },
  {
    path: "lessons plans",
    element: <LessonsPlans />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
  {
    path: 'profile',
    element: <Profile />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);