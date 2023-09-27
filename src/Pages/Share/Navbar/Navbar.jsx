import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider/AuthProvider";
import useCart from "../../../hooks/useCart";
import axios from "axios";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const navOptions = (
    <>
      <Link>
        <li>
          <a className="text-xl hover:text-white">Home</a>
        </li>
      </Link>
      <Link to="hakaton">
        <li>
          <a className="text-xl hover:text-white">Hakatons</a>
        </li>
      </Link>
      <Link to="/projects">
        <li>
          <a className="text-xl hover:text-white">Projects</a>
        </li>
      </Link>
      <Link to="/exercise">
        <li>
          <a className="text-xl hover:text-white">Exercise</a>
        </li>
      </Link>
      <Link>
        <li>
          <a className="text-xl hover:text-white">About Us</a>
        </li>
      </Link>
    </>
  );

  axios.get("https://warrior-beta.vercel.app/user").then((res) => {
    console.log(res.data);
  });

  return (
    <div className="sticky top-0 z-50">
      <div className="navbar text-white  font-bold bg-[#00061A]">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Warrior</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <div className="flex md:mx-5 items-center">
            {user && (
              <Link to={"/dashboard"}>
                <button className="btn mx-5">Dashboard</button>
              </Link>
            )}
            {user && (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-2xl bg-white text-black rounded-box w-52"
                >
                  <li>
                    <button
                      className="green-btn shadow-2xl"
                      onClick={() => logOut()}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
            {!user && (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  Login
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt- z-[1] p-2 shadow-2xl bg-white text-black rounded-box w-52"
                >
                  <li>
                    <Link to="/login/participant">
                      <button className="green-btn w-full mx-2">
                        Login as Participant
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/login/mentor">
                      <button className="green-btn w-full mx-2">
                        Login as Mentor
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
