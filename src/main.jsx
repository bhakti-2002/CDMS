import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; 
import { GoogleOAuthProvider } from '@react-oauth/google';
import DairyRegistration from './DairyRegistration.jsx'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <App />
      <DairyRegistration />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
