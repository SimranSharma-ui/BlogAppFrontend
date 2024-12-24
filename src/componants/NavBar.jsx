import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const NavBar = () => {
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
                  className="text-white text-lg cursor-pointer hover:text-teal-500"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/Create"}
                  className="text-white text-lg cursor-pointer hover:text-teal-500"
                >
                  Create Blog
                </Link>
              </li>

              <li>
                <Link
                  to={"/AllBlogs"}
                  className="text-white text-lg cursor-pointer hover:text-teal-500"
                >
                  All Blogs
                </Link>
              </li>

              <li>
                <Link
                  to={"/contact"}
                  className="text-white text-lg cursor-pointer hover:text-teal-500"
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
