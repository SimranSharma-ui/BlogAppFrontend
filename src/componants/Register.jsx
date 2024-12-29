import React from 'react';
import { useAuth } from '../contaxt/AuthProvider';

const Register = () => {
  const { registerData,handleChangeRegister, handleSubmitRegister, registerMessage } = useAuth(); 

  return (
    <div className="w-full max-w-7xl mx-auto p-4">
     
      <form onSubmit={handleSubmitRegister} className="w-full md:w-1/2 mx-auto bg-gradient-to-r from-blue-500 to-teal-400 shadow-xl rounded-lg p-8 transform hover:scale-105 transition duration-300 ease-in-out">
           
      <h1 className="text-4xl font-extrabold text-white text-center mb-6">Register</h1>
        <div className="mb-6">
          <label>Name:</label>
          <input 
          className="w-full p-4 border-2 border-transparent rounded-md focus:outline-none focus:ring-4 focus:ring-teal-300"
            type="text"
            name="Name" 
            value={registerData.Name}
            onChange={handleChangeRegister}
            required
          />
        </div>
        <div className="mb-6">
          <label>Email:</label>
          <input
             className="w-full p-4 border-2 border-transparent rounded-md focus:outline-none focus:ring-4 focus:ring-teal-300"
            type="email"
            name="Email" 
            value={registerData.Email}
            onChange={handleChangeRegister}
            required
          />
        </div>
        <div className="mb-6">
          <label>Password:</label>
          <input
           className="w-full p-4 border-2 border-transparent rounded-md focus:outline-none focus:ring-4 focus:ring-teal-300"
            type="password"
            name="Password" 
            value={registerData.Password}
            onChange={handleChangeRegister}
            required
          />
        </div>
        <button 
          className="w-full p-4 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition duration-300" type="submit">Register</button>
      </form>
      {registerMessage && <p>{registerMessage}</p>} 
    </div>
  );
};

export default Register;
