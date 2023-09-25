import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import cartProductsLoader from "../Pages/cartProductsLoader";
import ShowHakaton from "../Pages/ShowHakaton/ShowHakaton";
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
