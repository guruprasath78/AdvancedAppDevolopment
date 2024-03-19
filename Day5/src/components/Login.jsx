import React, { useState, useEffect } from 'react';
import '../assets/css/login.css';
import { Link, useNavigate } from 'react-router-dom';
import PopupMessage from './popupmessage.jsx';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false); // State for showing/hiding popup
  const [loggedInUser, setLoggedInUser] = useState(null);
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    const user = localStorage.getItem('loggedInUser');
    if (user) {
      setLoggedInUser(JSON.parse(user));
    }
  }, []);

  const handleLogin = () => {
    const storedUser = localStorage.getItem('registeredUser');
    if (storedUser) {
      const storedUserData = JSON.parse(storedUser);
      if (storedUserData.email === email && storedUserData.password === password) {
        console.log('Login successful!');
        localStorage.setItem('logged','true');
        setLoggedInUser(storedUserData);
        setErrors({});
        setShowPopup(true);
        setTimeout(() => {
          navigate('/');
        }, 1000);
        return;
      }
    }
    // If login fails, set error
    setErrors({ login: 'Invalid email or password' });
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser'); // Remove user from local storage
    setLoggedInUser(null); // Update logged in user state
  };

  return (
    <div className='login-all'>
      <div className='login-container'>
        <h1>Sign In</h1>
        {loggedInUser ? (
          <div>
            <br/><br/>
            <p>Welcome, {loggedInUser.username}!</p><br/><br/>
            <p>Email: {loggedInUser.email}</p><br/><br/>
            <button onClick={handleLogout}>Logout</button>
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

            {errors.login && <span className='error'>{errors.login}</span>}
            <button onClick={handleLogin}>Login</button>
            <br/><br/>
            <Link to='/Register'>
              <p>New User? Register</p>
            </Link>
            <Link to='/admin/admindashboard'><p>Admin</p></Link>
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
