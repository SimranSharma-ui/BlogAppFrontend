
import { useAuth } from '../contaxt/AuthProvider';

const Login = () => {
   const {loginData ,loginmessage,handleChangeLogin, handleSubmitLogin} = useAuth()

  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      
      <form onSubmit={handleSubmitLogin} className="w-full md:w-1/2 mx-auto bg-gradient-to-r from-blue-500 to-teal-400 shadow-xl rounded-lg p-8 transform hover:scale-105 transition duration-300 ease-in-out">
      <h1 className="text-4xl font-extrabold text-white text-center mb-6">Login</h1>
        <div className="mb-6">
          <label>Email:</label>
          <input
            className="w-full p-4 border-2 border-transparent rounded-md focus:outline-none focus:ring-4 focus:ring-teal-300"
            type="email"
            name="Email"
            value={loginData.Email}
            onChange={handleChangeLogin}
            required
          />
        </div>
        <div className="mb-6">
          <label>Password:</label>
          <input
           className="w-full p-4 border-2 border-transparent rounded-md focus:outline-none focus:ring-4 focus:ring-teal-300"
            type="password"
            name="Password"
            value={loginData.Password}
            onChange={handleChangeLogin}
            required
          />
        </div>
        <button className="w-full p-4 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition duration-300" type="submit">Login</button>
      </form>
      {loginmessage && <p >{loginmessage}</p>} 
    </div>
  );
};

export default Login;
