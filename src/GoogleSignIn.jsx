import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

const GoogleSignIn = () => {
  const handleSuccess = (credentialResponse) => {
    console.log("Google Sign In Success", credentialResponse);
    const decode = jwtDecode(credentialResponse?.credential);
    console.log("Decoded token:", decode);
  };

  const handleError = () => {
    console.log("Google Sign In Error");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold text-blue-500 mb-4">Google Sign-In</h1>
      <GoogleLogin 
        onSuccess={handleSuccess}
        onError={handleError}
        useOneTap={false}
      />
    </div>
  );
};

export default GoogleSignIn;
