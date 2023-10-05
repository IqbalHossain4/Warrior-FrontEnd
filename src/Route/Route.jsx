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
import PriveteAdmine from "./PriveteAdmine";
import Mentor from "../Pages/DashBoard/Mentor";
import PriveteMentor from "./PriveteMentor";
import Profile from "../Pages/Profile/Profile";
import PriveteRoutes from "./PriveteRoutes";
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
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "hackathon/:id",
        element: <ShowHakaton />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/hackathon/${params.id}`),
      },
      {
        path: "submitProject/:id",
        element: <ProjectSubmit />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/hackathon/${params.id}`),
      },
      {
        path: "/profile",
        element: (
          <PriveteRoutes>
            <Profile />
          </PriveteRoutes>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard/admin",
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
