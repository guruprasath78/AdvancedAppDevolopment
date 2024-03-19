import React, { useState } from 'react';
import '../assets/css/login.css';
import { Link } from 'react-router-dom';
import PopupMessage from './popupmessage.jsx';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [showPopup, setShowPopup] = useState(false); // State for showing/hiding popup

  const handleLogin = () => {
    const newErrors = {};

    // Email validation
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Invalid email address';
    }

    // Password validation
    if (!password) {
      newErrors.password = 'Password is required';
    }
    if (Object.keys(newErrors).length === 0) {
      console.log('Login successful!');
      const user = { username: 'DemoUser', email: email };
      setLoggedInUser(user);
      setErrors({});
      setShowPopup(true); // Show the popup
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className='login-all'>
      <div className='login-container'>
        <h1>Sign In</h1>
        {loggedInUser ? (
          <div><br/><br/>
            <p>Welcome, {loggedInUser.username}!</p><br/><br/>
            <p>Email: {loggedInUser.email}</p><br/><br/>
          </div>
        ) : (
          <div className='login-fields'>
            <input
              type='email'
              placeholder='Email Address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            /><br/>
            <span className='error'>{errors.email}</span>
            <br/><br/>
            <input
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            /><br/>
            <span className='error'>{errors.password}</span>
            <br/><br/>
              <button onClick={handleLogin}>Login</button>
            <br/><br/>
            <Link to='/Register'>
              <p>New User? Register</p>
            </Link>
            <Link to='/admin'><p>Admin</p></Link>
          </div>
        )}
      </div>
      <PopupMessage
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        message={`Welcome, ${loggedInUser?.username}!`}
      />
    </div>
  );
}

export default Login;
