import React, { Component } from 'react'
import '../assets/css/login.css'
import { Link } from 'react-router-dom';

function Login() {
    return (<div className='login-all'>
        <div className='login-container'>
        <h1>Sign In</h1>
        <div className='login-fields'>
                <input type='email' placeholder='Email Address'/><br/><br/>
                <input type='password' placeholder='Password'/><br/><br/>
                <Link to='/'><button>Login</button></Link>
                <br/><br/>
                <Link to='/Register'>
                <p>New User? Register</p>
                </Link>
                {/* <Link to='/Admindash'><p>Admin</p></Link> */}
            </div>
        </div>
    </div> );
}

export default Login;