<<<<<<< HEAD
import {
    createBrowserRouter,
  } from "react-router-dom";
=======
import { createBrowserRouter } from "react-router-dom";
>>>>>>> edc1c29af950c9b3e41ed72a868789af9340414f
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import cartProductsLoader from "../Pages/cartProductsLoader";
import ShowHakaton from "../Pages/ShowHakaton/ShowHakaton";
<<<<<<< HEAD
import HakatonNav from "../Pages/HakatonNav/HakatonNav";

// import cartProductsLoader from "../Pages/cartProductsLoader";
// import ShowHakaton from "../Pages/ShowHakaton/ShowHakaton";
import UserHome from "../Pages/DashBoard/UserHome";
import Dashboard from "../Layout/Dashboard";
import Project from "../Pages/Project/Project";
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
            path: "/project",
            element: <Project></Project>
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
=======
import DashboardLayout from "../Layout/DashboardLayout";
import Dashboard from './../Pages/Dashboard/Dashboard/Dashboard';
import StudentDetails from "../Pages/Dashboard/StudentDetails/StudentDetails";
import MentorDetails from "../Pages/Dashboard/MentorDetails/MentorDetails";
import AllHackathon from "../Pages/Dashboard/AllHackathon/AllHackathon";
import ManageHackathon from "../Pages/Dashboard/ManageHackathon/ManageHackathon";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login/participant",
        element: <Login />,
      },
      {
        path: "/login/mentor",
        element: <Login />,
      },
      {
        path: "/signUp/participant",
        element: <SignUp />,
      },
      {
        path: "/signUp/mentor",
        element: <SignUp />,
      },
      {
        path: "/hakaton/:_id", // Updated path with ':' to define a parameter
        element: <ShowHakaton />,
        loader: ({ params }) => cartProductsLoader(params._id), // Use params._id to access the parameter
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout/>,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard/>,
      },
      {
        path: "/dashboard/allHackathon",
        element: <AllHackathon/>,
      },
      {
        path: "/dashboard/mentorDetails",
        element: <MentorDetails/>,
      },
      {
        path: "/dashboard/manageHackathon",
        element: <ManageHackathon/>,
      },
      {
        path: "/dashboard/studentDetails",
        element: <StudentDetails/>,
      },
    ],
  },
]);
>>>>>>> edc1c29af950c9b3e41ed72a868789af9340414f
