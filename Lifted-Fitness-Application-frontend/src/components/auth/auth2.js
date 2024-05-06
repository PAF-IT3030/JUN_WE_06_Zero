// src/Login.js
import React from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';


const GoogleLogin = () => {
  const handleGoogleLogin = async () => {
    try {
      // Make a request to the backend server to initiate the Google OAuth2 flow
      const response = await axios.get('/auth/google');
      window.location.href = response.data.redirectUrl;
    } catch (error) {
      console.error('Error initiating Google login:', error);
    }
  };

  return (
    <div>
  <Button variant="primary" onClick={handleGoogleLogin} >Login with Google</Button> 
</div>
  );
};

export default GoogleLogin;