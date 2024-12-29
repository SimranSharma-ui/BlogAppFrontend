import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { useBlog } from "../contaxt/BlogProvider"; 

const AllBlogs = () => {
  const { blogs, fetchBlogs, deleteBlog } = useBlog();

  useEffect(()=>{
    fetchBlogs();
  })
 
  const truncateDescription = (description, length) => {
    if (description.length > length) {
      return `${description.substring(0, length)}...`;
    }
    return description;
  };

  return (
    <div className="w-full max-w-7xl p-6 mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">
        All Blogs Are Here
      </h1>
      {blogs.length === 0 ? (
        <p className="text-xl font-semibold text-center">No blogs available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((element) => (
            <div
              key={element._id}
              className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105"
            >
              <Link to={`/OneBlog/${element._id}`} className="block">
                <img
                  src={element?.Image}
                  className="h-auto w-full"
                  alt="blog"
                />
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  {element.Name}
                </h2>

                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                   Category : {element?.Category}
                </h2>
                <p className="text-gray-600 mb-4">
                  {truncateDescription(element.Description, 200)} 
                </p>
              </Link>

              <div className="flex items-center space-x-2">
                <span
                  className={`cursor-pointer text-2xl mt-2 ${
                    element.liked ? "text-red-500" : "text-gray-400"
                  }`}
                >
                  {element.liked ? <FaHeart /> : <FaRegHeart />}
                </span>
            
                <Link to={`/Update/${element._id}`}>
                  <button className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-700">
                    <FaEdit />
                  </button>
                </Link>

                <button
                  onClick={() => deleteBlog(element._id)}
                  className="mt-4 p-2 bg-red-500 text-white rounded hover:bg-red-700"
                >
                  <FaDeleteLeft />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
     
    </div>
  );
};

export default AllBlogs;
