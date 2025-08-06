// src/ContinueWithGoogle.jsx
import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ContinueWithGoogle = () => {
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const res = await axios.get(
          'https://www.googleapis.com/oauth2/v3/userinfo',
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
            },
          }
        );
        console.log("Google User Info:", res.data);
        alert(`Welcome, ${res.data.name}`);
        localStorage.setItem("user", JSON.stringify(res.data));
        navigate("/dashboard"); // Change to your route
      } catch (err) {
        console.error("Failed to fetch user info", err);
      }
    },
    onError: (err) => {
      console.log("Google Login Failed:", err);
      alert("Google Sign-In failed. Try again.");
    },
  });

  return (
    <button
      className="w-full flex items-center justify-center gap-2 bg-red-200 text-red-700 font-medium py-2 rounded-full hover:bg-red-300 transition"
      onClick={() => login()}
    >
      <img
        src="https://img.icons8.com/color/24/000000/google-logo.png"
        alt="Google"
        className="w-5 h-5"
      />
      Sign in with Google
    </button>
  );
};

export default ContinueWithGoogle;
