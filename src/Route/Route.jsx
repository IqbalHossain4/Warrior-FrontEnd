import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import cartProductsLoader from "../Pages/cartProductsLoader";
import ShowHakaton from "../Pages/ShowHakaton/ShowHakaton";
import DashboardLayout from "../Layout/DashboardLayout";
import Dashboard from "./../Pages/Dashboard/Dashboard/Dashboard";
import StudentDetails from "../Pages/Dashboard/StudentDetails/StudentDetails";
import MentorDetails from "../Pages/Dashboard/MentorDetails/MentorDetails";
import AllHackathon from "../Pages/Dashboard/AllHackathon/AllHackathon";
import ManageHackathon from "../Pages/Dashboard/ManageHackathon/ManageHackathon";
import CodeCompiler from "../Pages/Exercise/CodeCompiler";
import HakatonNav from "../Pages/HakatonNav/HakatonNav";
import Project from "../Pages/Project/Project";
import ProjectSubmit from "../Pages/ProjectSubmit/ProjectSubmit";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {},
      {
        path: "exercise",
        element: <CodeCompiler />,
      },
      {
        path: "/hakaton",
        element: <HakatonNav></HakatonNav>,
      },
      {
        path: "projects",
        element: <Project />,
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
        path: "hackathon/:id",
        element: <ShowHakaton />,
        loader: ({ params }) =>
          fetch(`https://warrior-beta.vercel.app/hackathon/${params.id}`),
      },
      {
        path: "submitProject/:id",
        element: <ProjectSubmit />,
        loader: ({ params }) =>
          fetch(`https://warrior-beta.vercel.app/hackathon/${params.id}`),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/allHackathon",
        element: <AllHackathon />,
      },
      {
        path: "/dashboard/mentorDetails",
        element: <MentorDetails />,
      },
      {
        path: "/dashboard/manageHackathon",
        element: <ManageHackathon />,
      },
      {
        path: "/dashboard/studentDetails",
        element: <StudentDetails />,
      },
    ],
  },
]);
