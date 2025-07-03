import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

const GoogleSignIn = () => {
  const handleSuccess = (credentialResponse) => {
    console.log("Google Sign In Success", credentialResponse);
    const decode = jwtDecode(credentialResponse?.credential)
    console.log(decode)
  }

  const handleError = () => {
    console.log("Google Sign In Error");
  }

  return (
    <div className="flex flex-col items-center justify-center mt-8 min-h-[100px] min-w-[250px]">
      <h1 className="text-2xl font-bold text-blue-500 mb-4">Google Sign-In</h1>

      <GoogleOAuthProvider clientId="326727425929-i2fb6lhq2p69u1pr639q3bmieho6c15k.apps.googleusercontent.com">
        <GoogleLogin 
          onSuccess={handleSuccess}
          onError={handleError}
          useOneTap={false}
          prompt="select_account"
          text="signin_with"
        />
      </GoogleOAuthProvider>
    </div>
  );
};

export default GoogleSignIn;
