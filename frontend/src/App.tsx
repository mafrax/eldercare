// src/App.tsx
import React, { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleRegisterSuccess = () => {
    setShowRegister(false);
    setIsLoggedIn(true); // Optionally log in the user immediately after registration
  };

  return (
      <div>
        {isLoggedIn ? (
            <h1>Welcome to the application!</h1>
        ) : (
            <>
              {showRegister ? (
                  <Register onRegisterSuccess={handleRegisterSuccess} />
              ) : (
                  <Login onLoginSuccess={handleLoginSuccess} />
              )}
              <button onClick={() => setShowRegister(!showRegister)}>
                {showRegister ? 'Go to Login' : 'Go to Register'}
              </button>
            </>
        )}
      </div>
  );
};

export default App;
