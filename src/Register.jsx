
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ContinueWithGoogle from './Continuewithgoogle'; 

import cowImg from 'file:///C:/Users/promaxsys/Downloads/reg.webp'; 

const Register = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic password match check
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert("Account Created Successfully!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100 px-4">
      <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl w-full">
        
        {/* Left image */}
        <div className="md:w-1/2 flex items-center justify-center bg-white p-4">
          <img src={cowImg} alt="Cow" className="w-3/4 h-auto rounded-md" />
        </div>

        {/* Right form */}
        <div className="md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">User Registration</h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={form.firstName}
                onChange={handleChange}
                className="border p-2 rounded-md w-full"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={form.lastName}
                onChange={handleChange}
                className="border p-2 rounded-md w-full"
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={form.email}
              onChange={handleChange}
              className="border p-2 rounded-md w-full"
            />
            <input
              type="text"
              name="mobile"
              placeholder="Mobile Number"
              value={form.mobile}
              onChange={handleChange}
              className="border p-2 rounded-md w-full"
            />

            <div className="grid grid-cols-2 gap-4">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                className="border p-2 rounded-md w-full"
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={form.confirmPassword}
                onChange={handleChange}
                className="border p-2 rounded-md w-full"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md w-full mt-2"
            >
              Create Account
            </button>
          </form>

          <p className="text-center text-sm mt-4">
            Have an Account?{' '}
            <Link to="/login" className="text-black underline font-semibold">
              Go to login
            </Link>
          </p>

          <div className="mt-4">
            <ContinueWithGoogle />
          </div>

          <p className="text-center text-sm mt-4">
            <Link to="/" className="text-black underline">
              Back to Home Page
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
