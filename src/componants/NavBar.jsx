import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { useAuth } from "../contaxt/AuthProvider";
import Swal from "sweetalert2";
import { useTheme } from "../contaxt/ThemeProvider";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const { authorised, logout } = useAuth();
  const navigate = useNavigate();
  const { theme, HandleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);


  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const handleCreateBlogClick = () => {
    if (!authorised) {
      Swal.fire({
        icon: "error",
        title: "You Must First Log In",
        text: "You Must Log In Before Creating a Blog",
      });
      navigate("/Login");
    }
  };

  return (
    <div
      className={`p-4 ${theme === "Dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"} shadow-md`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4">
        
        <Link to="/" onClick={handleLinkClick}>
          <img className="w-24 h-auto" src={logo} alt="Cartoon Cravings" />
        </Link>

       
        <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      
        <ul
          className={`md:flex md:items-center md:space-x-8 absolute md:static bg-gray-900 text-white md:bg-transparent w-full md:w-auto left-0 transition-all duration-300 ease-in-out 
          ${menuOpen ? "top-16 opacity-100 visible" : "top-[-400px] opacity-0 invisible"} 
          md:top-auto md:opacity-100 md:visible md:flex-row flex flex-col items-center p-4 md:p-0 z-50`}
        >
          <li>
            <Link to="/" onClick={handleLinkClick} className="block py-2 text-xl hover:text-teal-500">
              Home
            </Link>
          </li>
          <li>
            {authorised ? (
              <Link to="/Create" onClick={handleLinkClick} className="block py-2 text-xl hover:text-teal-500">
                Create Blog
              </Link>
            ) : (
              <button onClick={handleCreateBlogClick} className="block py-2 text-xl hover:text-teal-500">
                Create Blog
              </button>
            )}
          </li>
          <li>
            <Link to="/AllBlogs" onClick={handleLinkClick} className="block py-2 text-xl hover:text-teal-500">
              All Blogs
            </Link>
          </li>
          {!authorised ? (
            <>
              <li>
                <Link to="/SignUp" onClick={handleLinkClick} className="block py-2 text-xl hover:text-teal-500">
                  SignUp
                </Link>
              </li>
              <li>
                <Link to="/Login" onClick={handleLinkClick} className="block py-2 text-xl hover:text-teal-500">
                  Login
                </Link>
              </li>
            </>
          ) : (
            <li>
              <button onClick={() => { logout(); handleLinkClick(); }} className="block py-2 text-xl hover:text-teal-500">
                Logout
              </button>
            </li>
          )}
          <li>
            <Link to="/contact" onClick={handleLinkClick} className="block py-2 text-xl hover:text-teal-500">
              Contact
            </Link>
          </li>
        
          <li>
            <button onClick={HandleTheme} className="py-2 px-2 text-xl">
              {theme === "Dark" ? <MdOutlineLightMode /> : <MdDarkMode />}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
