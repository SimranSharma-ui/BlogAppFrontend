import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useAuth } from '../contaxt/AuthProvider';
import Swal from 'sweetalert2';

const NavBar = () => {
  const { authorised, logout ,token } = useAuth();
  const navigate = useNavigate();
  
  const handleCreateBlogClick = () => {
    if (!authorised) {
      Swal.fire({
             icon: 'error',
             title: 'You Must First Logged In ',
             text:  'You Must First Logged In Before Creating The Blog',
           });
      navigate("/Login");
    }
  };

  return (
    <div>
      <div className="bg-gray-800 py-2"> 
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
                  className="text-white text-xl cursor-pointer hover:text-teal-500"
                >
                  Home
                </Link>
              </li>

             
              {authorised ? (
                <li>
                  <Link
                    to={"/Create"}
                    className="text-white text-xl cursor-pointer hover:text-teal-500"
                  >
                    Create Blog
                  </Link>
                </li>
              ) : (
                <li>
                  <button
                    onClick={handleCreateBlogClick}
                    className="text-white text-xl cursor-pointer hover:text-teal-500"
                  >
                    Create Blog
                  </button>
                </li>
              )}

              <li>
                <Link
                  to={"/AllBlogs"}
                  className="text-white text-xl cursor-pointer hover:text-teal-500"
                >
                  All Blogs
                </Link>
              </li>
              {!authorised ? (
                <>
                  <li>
                    <Link
                      to={"/SignUp"}
                      className="text-white text-xl cursor-pointer hover:text-teal-500"
                    >
                      SignUp
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/Login"}
                      className="text-white text-xl cursor-pointer hover:text-teal-500"
                    >
                      Login
                    </Link>
                  </li>
                </>
              ) : (
                <li>
                  <button
                    onClick={logout}
                    className="text-white text-xl cursor-pointer hover:text-teal-500"
                  >
                    Logout
                  </button>
                </li>
              )}

              <li>
                <Link
                  to={"/contact"}
                  className="text-white text-xl cursor-pointer hover:text-teal-500"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
