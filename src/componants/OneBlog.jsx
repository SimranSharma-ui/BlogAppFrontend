import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useBlog } from "../contaxt/BlogProvider";
import image from '../assets/image.png';

const OneBlog = () => {
  const { id } = useParams();
  const { oneBlog, fetchOneBlog } = useBlog();
  useEffect(() => {
    fetchOneBlog(id);
  }, [id, fetchOneBlog]);

  if (!oneBlog) {
    return (
      <div className="w-full max-w-7xl p-6 mx-auto">
        <p className="text-xl font-semibold text-center">Loading...</p>
      </div>
    );
  }

  if (!oneBlog.Name) {
    return (
      <div className="w-full max-w-7xl p-6 mx-auto">
        <p className="text-xl font-semibold text-center">Blog not found!</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl p-6 mx-auto">
      <div className="flex flex-row justify-center content-center">
      <img src={image} className="w-24 h-auto object-contain"/>
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Blog Details
      </h1>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 space-y-6 transition-transform transform hover:scale-105">
        <div className="flex justify-center">
          <img
            src={oneBlog.Image}
            className="h-96 w-auto object-cover rounded-lg"
            alt="blog"
          />
        </div>

        <h2 className="text-3xl font-semibold text-gray-800">{oneBlog.Name}</h2>

        <p className="text-gray-800 mb-4">{oneBlog.Description}</p>

        <div className="flex items-center space-x-3">
          <span
            className={`cursor-pointer text-2xl ${
              oneBlog.liked ? "text-red-500" : "text-gray-400"
            }`}
          >
            {oneBlog.liked ? "❤️" : "🤍"}
          </span>
          <span className="text-gray-500 text-sm">
            {oneBlog.liked ? "Liked" : "Not Liked"}
          </span>
        </div>
      </div>

     
    </div>
  );
};

export default OneBlog;
