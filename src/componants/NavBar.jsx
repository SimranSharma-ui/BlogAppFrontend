import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { useAuth } from "../contaxt/AuthProvider";
import Swal from "sweetalert2";
import { useTheme } from "../contaxt/ThemeProvider";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

const NavBar = () => {
  const { authorised, logout } = useAuth();
  const navigate = useNavigate();
  const { theme, HandleTheme } = useTheme();

  const handleCreateBlogClick = () => {
    if (!authorised) {
      Swal.fire({
        icon: "error",
        title: "You Must First Logged In ",
        text: "You Must First Logged In Before Creating The Blog",
      });
      navigate("/Login");
    }
  };

  return (
    <div >
      <div className={`p-4 ${theme === "Dark" ? "bg-gray-900 text-white" : "bg-gray-900 text-white"}`}>
        <nav className="max-w-6xl mx-auto px-1">
          <div className="flex items-center justify-between">
            <div>
              <img
                className="w-24 h-auto object-contain"
                src={logo}
                alt="Cartoon Cravings"
              />
            </div>

            <ul className="flex space-x-8">
              <li>
                <Link
                  to={"/"}
                  className=" text-xl cursor-pointer hover:text-teal-500"
                >
                  Home
                </Link>
              </li>

              {authorised ? (
                <li>
                  <Link
                    to={"/Create"}
                    className=" text-xl cursor-pointer hover:text-teal-500"
                  >
                    Create Blog
                  </Link>
                </li>
              ) : (
                <li>
                  <button
                    onClick={handleCreateBlogClick}
                    className=" text-xl cursor-pointer hover:text-teal-500"
                  >
                    Create Blog
                  </button>
                </li>
              )}

              <li>
                <Link
                  to={"/AllBlogs"}
                  className=" text-xl cursor-pointer hover:text-teal-500"
                >
                  All Blogs
                </Link>
              </li>
              {!authorised ? (
                <>
                  <li>
                    <Link
                      to={"/SignUp"}
                      className=" text-xl cursor-pointer hover:text-teal-500"
                    >
                      SignUp
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/Login"}
                      className=" text-xl cursor-pointer hover:text-teal-500"
                    >
                      Login
                    </Link>
                  </li>
                </>
              ) : (
                <li>
                  <button
                    onClick={logout}
                    className=" text-xl cursor-pointer hover:text-teal-500"
                  >
                    Logout
                  </button>
                </li>
              )}

              <li>
                <Link
                  to={"/contact"}
                  className="text-xl cursor-pointer hover:text-teal-500"
                >
                  Contact
                </Link>
              </li>
              <li> <button
              onClick={HandleTheme}
                className="py-2 px-2 text-xl"
        >
                 {theme === "Dark" ? <MdOutlineLightMode /> : <MdDarkMode/>}
                  </button></li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
