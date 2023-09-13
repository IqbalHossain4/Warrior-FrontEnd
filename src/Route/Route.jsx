import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/login/participant",
            element: <Login/>
        },
        {
            path: "/login/mentor",
            element: <Login/>
        },
        {
            path: "/signUp/participant",
            element: <SignUp/>
        },
        {
            path: "/signUp/mentor",
            element: <SignUp/>
        },
      ]
    },
  ]);