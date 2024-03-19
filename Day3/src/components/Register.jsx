import React, { useState } from 'react';
import '../assets/css/register.css';
import { Link } from 'react-router-dom';
import PopupMessage from './popupmessage.jsx'

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errors, setErrors] = useState({});
  const [registeredUser, setRegisteredUser] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleRegister = () => {
    const newErrors = {};
    // Username validation
    if (!username) {
      newErrors.username = 'Username is required';
    }

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

    // Phone number validation
    if (!phoneNumber) {
      newErrors.phoneNumber = 'Phone Number is required';
    } else if (!/^\d{10}$/.test(phoneNumber)) {
      newErrors.phoneNumber = 'Invalid phone number (10 digits)';
    }
    if (Object.keys(newErrors).length === 0) {
      const user = { username, email, phoneNumber };
      setRegisteredUser(user);
      setErrors({});
      setShowPopup(true); // Show the popup
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className='register-all'>
      <div className='reg-container'>
        <h1>Register</h1>
        {registeredUser ? (
          <div><br/>
            <p>Registration successful!</p><br/>
            <p>Welcome, {registeredUser.username}!</p><br/>
            <p>Email: {registeredUser.email}</p><br/>
            <p>Phone Number: {registeredUser.phoneNumber}</p><br/>
          </div>
        ) : (
          <div className='reg-fields'>
            <input
              type='text'
              placeholder='Username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            /><br/>
            <span className='error'>{errors.username}</span>
            <br/><br/>
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
            <input
              type='number'
              placeholder='Phone Number'
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            /><br/>
            <span className='error'>{errors.phoneNumber}</span>
            <br/><br/>
            <button onClick={handleRegister}>Register</button>
            <Link to='/Login'><p>Already have an account? Login</p></Link>
          </div>
        )}
      </div>
      <PopupMessage
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        message={`Registration successful! Welcome, ${registeredUser?.username}!`}
      />
    </div>
  );
}

export default Register;
