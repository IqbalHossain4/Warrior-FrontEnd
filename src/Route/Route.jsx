import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import cartProductsLoader from "../Pages/cartProductsLoader";
import ShowHakaton from "../Pages/ShowHakaton/ShowHakaton";
import HakatonNav from "../Pages/HakatonNav/HakatonNav";

// import cartProductsLoader from "../Pages/cartProductsLoader";
// import ShowHakaton from "../Pages/ShowHakaton/ShowHakaton";
import UserHome from "../Pages/DashBoard/UserHome";
import Dashboard from "../Layout/Dashboard";
// import UserDashboard from "../Pages/DashBoard/UserDashboard/UserDashboard";



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
        {
            path: "/hakaton",
            element: <HakatonNav></HakatonNav>
        },

        

		{
      path:'/hakaton/:_id', 

        // {
        //     path: "/user",
        //     element: <UserDashboard></UserDashboard>
        },
        {
          path: '/hakaton/:_id', // Updated path with ':' to define a parameter

          element: <ShowHakaton />,
          loader: ({ params }) => cartProductsLoader(params._id), // Use params._id to access the parameter
        }

      ]
    },

    {
      path: 'dashboard',
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: 'userhome',
          element: <UserHome></UserHome>
        },
      ],
    }

  ]);