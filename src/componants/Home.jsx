import React from 'react';
import logo from '../assets/logo.png';

const Home = () => {
  return (
    <div className="h-screen  flex flex-col justify-center items-center ">

      <div className="absolute mb-56">
        <img
          className="w-64 h-auto object-contain animate-jump"
          src={logo}
          alt="Cartoon Cravings"
        />
      </div>
      <div className="text-center mt-10 ">
        <h1 className="text-9xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-fade-right">
          Cartoon Cravings
        </h1>
        <h2 className="text-4xl font-semibold  mt-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
           The World Of Food & Cartoons
        </h2>
      </div>
    </div>
  );
};

export default Home;
