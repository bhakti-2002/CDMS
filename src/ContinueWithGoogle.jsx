import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const ContinueWithGoogle = () => {
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
        // Optional: Save to localStorage or backend
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
    className="w-full bg-red-200 text-red-700 font-medium py-2 rounded-full hover:bg-red-300 transition"
      onClick={() => login()}
    >
      Sign in with Google
    </button>
  );
};

export default ContinueWithGoogle;
