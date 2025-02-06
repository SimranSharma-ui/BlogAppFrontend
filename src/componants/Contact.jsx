import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { send } from "emailjs-com"; 
import Swal from "sweetalert2";

const Contact = () => {
  const [fromName, setFromName] = useState('');
  const [toName, setToName] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
  
    const templateParams = {
      from_name: fromName,
      to_name: toName,
      message: message,
    };
  
    send('service_46lgfhr', 'template_lo17psr', templateParams, 'COWkpNVhANHcmILft')
      .then(
        (response) => {
          console.log('SUCCESS!', response);
          Swal.fire({
            title: 'Message Sent!',
            text: 'Your message has been successfully sent.',
            icon: 'success',
            confirmButtonText: 'Okay',
          });
          setFromName("");
          setMessage("");
        },
        (error) => {
          console.log('FAILED...', error);
          alert('Error sending email. Please try again.');
        }
      );
  };

  return (
    <div className="bg-slate-700 p-6 font-serif">
      <div className="flex justify-center items-center h-screen text-white">
        <div className="flex flex-col lg:flex-row w-full lg:w-3/4">
          <div className="lg:w-1/2 p-4 animate-slideLeftToRight">
            <h1 className="text-3xl font-bold mb-8 mt-6">CONTACT ME</h1>
            <div className="border-b-2 border-blue-500 w-16 ml-10 mb-4 mt-0"></div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 flex justify-center items-center border-2 border-white rounded-full mr-4">
                <FaPhoneAlt />
              </div>
              <span>6284415949</span>
            </div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 flex justify-center items-center border-2 border-white rounded-full mr-4">
                <MdEmail />
              </div>
              <span>sharmasimran@gmail.com</span>
            </div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 flex justify-center items-center border-2 border-white rounded-full mr-4">
                <IoLocation />
              </div>
              <span>#1244 Sector-52, D Chandigarh</span>
            </div>
          </div>

          <div className="lg:w-1/2 p-4 animate-slideRightToLeft">
            <form className="space-y-4" onSubmit={sendEmail}>
              <input
                type="text"
                name="username"
                onChange={(e) => setFromName(e.target.value)}
                placeholder="Your Name"
                required
                className="w-full p-4 border border-gray-300 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                value={fromName}
              />

              <input
                type="text"
                placeholder="Recipient's Name"
                value={toName}
                onChange={(e) => setToName(e.target.value)}
                required
                className="w-full p-4 border border-gray-300 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full p-4 h-32 border border-gray-300 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
              ></textarea>

              <button
                type="submit"
                className="w-full py-3 bg-teal-600 text-white font-bold rounded-lg hover:bg-teal-500 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
