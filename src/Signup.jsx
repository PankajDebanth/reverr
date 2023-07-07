import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignUp = (event) => {
    event.preventDefault();

    const user = {
      email,
    };

    localStorage.setItem('user', JSON.stringify(user));

    setLoggedIn(true);
    navigate('/home'); // Redirect to Home component
  };

  const handleSignOut = () => {
    localStorage.removeItem('user');
    setLoggedIn(false);
  };

  const renderForm = () => {
    return (
      <form className="signup-form" onSubmit={handleSignUp}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn">Sign Up</button>
      </form>
    );
  };

  const renderLoggedIn = () => {
    return (
      <div className="loggedIn-container">
        <p>Welcome, {email}!</p>
        <button onClick={handleSignOut} className="btn">Sign Out</button>
      </div>
    );
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      {loggedIn ? renderLoggedIn() : renderForm()}
    </div>
  );
};

export default SignUp;
