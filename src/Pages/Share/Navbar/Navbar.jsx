import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider/AuthProvider";
import useAdmin from "../../../hooks/useAdmin";
import useMentor from "../../../hooks/useMentor";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [isMentor] = useMentor();
  //make nav Active
  const Active = ({ to, children }) => {
    return (
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? "activeNav text-[#F6EC4D]" : "navItem"
        }
      >
        {children}
      </NavLink>
    );
  };
  const navOptions = (
    <>
      <li>
        <Active to="/">
          <p className="text-md font-semibold ">Home</p>
        </Active>
      </li>
      <li>
        <Active to="hakaton">
          <p className="text-md font-semibold ">Hackathon</p>
        </Active>
      </li>
      <li>
        <Active to="/projects">
          <p className="text-md font-semibold ">Projects</p>
        </Active>
      </li>
      <li>
        <Active to="/exercise">
          <p className="text-md font-semibold ">Exercise</p>
        </Active>
      </li>
      <li>
        <Active to="/about">
          <p className="text-md font-semibold ">About Us</p>
        </Active>
      </li>
    </>
  );

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
          <a className="btn btn-ghost normal-case text-md">Warrior</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-4">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <div>
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
                  {!isAdmin && !isMentor ? (
                    <li>
                      <Link to="profile">
                        <button>Profile</button>
                      </Link>
                    </li>
                  ) : (
                    <li>
                      <Link to={"/dashboard"}>
                        <button>Dashboard</button>
                      </Link>
                    </li>
                  )}

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
                <Link to="/login">
                  <button className="btn btn-ghost btn-circle avatar">
                    Login
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
