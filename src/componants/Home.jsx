import React from "react";
import logo from "../assets/logo.png";

const Home = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      {/* Logo */}
      <div className="mb-10 md:mb-12">
        <img
          className="w-40 md:w-56 lg:w-64 h-auto object-contain animate-bounce"
          src={logo}
          alt="Cartoon Cravings"
        />
      </div>

      {/* Main Text */}
      <div className="text-center">
        <h1 className="text-6xl md:text-7xl lg:text-9xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-fade-right">
          Cartoon Cravings
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mt-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-fade-right">
          The World of Food & Cartoons
        </h2>
      </div>
    </div>
  );
};

export default Home;
