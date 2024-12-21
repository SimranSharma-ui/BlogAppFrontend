import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useBlog } from "../contaxt/BlogProvider"; // Corrected typo for 'context'

const AllBlogs = () => {
  const { blogs, toggleLike, deleteBlog } = useBlog();

  return (
    <div className="w-full max-w-7xl p-6 mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">All Blogs Are Here</h1>
      {blogs.length === 0 ? (
        <p className="text-xl font-semibold text-center">No blogs available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((element) => (
            <div
              key={element._id}
              className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105"
            >
              {/* Wrap the entire blog card in a Link to navigate to the OneBlog component */}
              <Link to={`/OneBlog/${element._id}`} className="block">
                <img src={element?.Image} className="h-auto w-full" alt="blog" />
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  {element.Name}
                </h2>
                <p className="text-gray-600 mb-4">{element.Description}</p>
              </Link>

              {/* Like Button */}
              <div className="flex items-center space-x-2">
                <span
                  onClick={() => toggleLike(element._id)}
                  className={`cursor-pointer text-xl ${
                    element.liked ? "text-red-500" : "text-gray-400"
                  }`}
                >
                  {element.liked ? <FaHeart /> : <FaRegHeart />}
                </span>
                <span className="text-gray-500 text-sm">
                  {element.liked ? "Liked" : "Not Liked"}
                </span>
              </div>

              {/* Delete Button */}
              <button
                onClick={() => deleteBlog(element._id)}
                className="mt-4 p-2 bg-red-500 text-white rounded hover:bg-red-700"
              >
                Delete Blog
              </button>
            </div>
          ))}
        </div>
      )}
      <div className="flex justify-center mt-4">
        <Link to={"/"}>
          <button className="p-3 bg-blue-400 rounded-lg shadow-lg mt-4 hover:bg-blue-700">
            Create Blogs
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AllBlogs;
