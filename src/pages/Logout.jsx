import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear user login info (adjust as needed)
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user'); // if you stored user data

    // Redirect to login after 1 second
    setTimeout(() => {
      navigate('/login');
    }, 1000);
  }, [navigate]);

  return (
    <div style={{
      height: '100vh',
      backgroundColor: '#f0f2f5',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    }}>
      <h2>Logging you out...</h2>
    </div>
  );
};

export default Logout;
