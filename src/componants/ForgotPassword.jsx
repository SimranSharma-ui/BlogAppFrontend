import React, { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    const SendPassword = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post(
                'https://blogappbackend-8pw0.onrender.com/Authorisation/ForgetPassword',
                { email } ,{
                    withCredentials:true
                  }
            );
            console.log(response.data);
            alert("Password reset email sent successfully!"); 
        } catch (error) {
            console.error("Error sending password reset email:", error);
            alert("Failed to send reset email. Please try again.");
        }
    };

    const HandleChange = (e) => {
        setEmail(e.target.value);
    };

    return (
        <div className="w-full max-w-7xl mx-auto p-4">
            <form onSubmit={SendPassword} className="w-full md:w-1/2 mx-auto bg-gradient-to-r from-blue-500 to-teal-400 shadow-xl rounded-lg p-8 transform hover:scale-105 transition duration-300 ease-in-out">
                <h1 className="text-4xl font-extrabold text-white text-center mb-6">Forgot Password</h1>
                <div className="mb-6">
                    <label className="text-white font-semibold">Email:</label>
                    <input
                        className="w-full p-4 border-2 border-transparent text-black rounded-md focus:outline-none focus:ring-4 focus:ring-teal-300"
                        type="email"
                        value={email}
                        onChange={HandleChange}
                        required
                    />
                </div>

                <button className="w-full p-4 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition duration-300" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ForgotPassword;
