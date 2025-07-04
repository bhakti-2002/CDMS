import React from 'react';
import { Link } from "react-router-dom";
import phoneImage from 'file:///C:/Users/promaxsys/Downloads/login.webp'; 

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100 px-4">
      <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl w-full">
        
        <div className="md:w-1/2 flex items-center justify-center bg-white p-4">
          <img src={phoneImage} alt="Phone Illustration" className="w-3/4 h-auto" />
        </div>

        <div className="md:w-1/2 p-6">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>

          <form className="flex flex-col space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email/Mobile Number
              </label>
              <input
                id="email"
                type="text"
                placeholder="Email/Mobile Number"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2 rounded" />
                Remember me
              </label>
              <Link to="/forgot-password" className="text-blue-500 hover:underline">
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-full font-semibold hover:bg-blue-700 transition"
              onClick={() => alert("Login Successful")}
            >
              Sign in
            </button>

             <p className="text-center text-sm ">
                     Don't have an Account?{' '}
                      <Link to="/register" className="text-black underline font-semibold">
                        Register
                      </Link>
                    </p>

            <button className="w-full bg-red-200 text-red-700 font-medium py-2 rounded-full hover:bg-red-300 transition">
              Sign in with Google
            </button>
           
          </form>
          
        </div>
      </div>
    </div>
  );
}

export default Login;
