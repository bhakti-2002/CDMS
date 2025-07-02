import { useState } from 'react';
import cowImg from 'file:///C:/Users/promaxsys/Downloads/reg.webp'; 
import './App.css';


function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100 px-4">
      <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl w-full">
        
        {/* Left Image Panel */}
        <div className="md:w-1/2 flex items-center justify-center bg-white p-4 ">
          <img src={cowImg} alt="Cow" className="w-3/4 h-auto rounded-md" />
        </div>

        {/* Right Form Panel */}
        <div className="md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">User Registration</h2>

          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" className="border p-2 rounded-md w-full" />
              <input type="text" placeholder="Last Name" className="border p-2 rounded-md w-full" />
            </div>

            <input type="email" placeholder="Email address" className="border p-2 rounded-md w-full" />
            <input type="text" placeholder="Mobile Number" className="border p-2 rounded-md w-full" />

            <div className="grid grid-cols-2 gap-4">
              <input type="password" placeholder="Password" className="border p-2 rounded-md w-full" />
              <input type="password" placeholder="Confirm Password" className="border p-2 rounded-md w-full" />
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md w-full mt-2" onClick={()=>alert("Create a Account Successfully")}>
              Create Account
            </button>
          </form>

          {/* Login Link */}
          <p className="text-center text-sm mt-4">
            Have an Account?{' '}
            <a href="#" className="text-black font-semibold">
              Go to login
            </a>
          </p>

          {/* Google Button */}
          <button className="mt-4 w-full flex items-center justify-center bg-pink-200 text-black py-2 rounded-md shadow-sm hover:bg-pink-300">
            <img src="https://img.icons8.com/color/24/000000/google-logo.png" alt="Google" className="mr-2" />
            Continue with Google
          </button>

          {/* Back Link */}
          <p className="text-center text-sm mt-4">
            <a href="#" className="text-black underline">Back to Home Page</a>
          </p>
        </div>
      </div>
    </div>
    
  );
}

export default App;


