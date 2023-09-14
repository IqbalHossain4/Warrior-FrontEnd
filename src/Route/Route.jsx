import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import cartProductsLoader from "../Pages/cartProductsLoader";
import ShowHakaton from "../Pages/ShowHakaton/ShowHakaton";


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
          path: '/hakaton/:_id', // Updated path with ':' to define a parameter
          element: <ShowHakaton />,
          loader: ({ params }) => cartProductsLoader(params._id), // Use params._id to access the parameter
        }

      ]
    },
  ]);