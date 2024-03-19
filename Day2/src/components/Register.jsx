import React, { Component } from 'react'
import '../assets/css/register.css'
import { Link } from 'react-router-dom';

function Register() {
    return ( <div className='register-all'>
        <div className='reg-container'>
        <h1>Register</h1>
        <div className='reg-fields'>
                <input type='text' placeholder='Username'/><br/><br/>
                <input type='email' placeholder='Email Address'/><br/><br/>
                <input type='password' placeholder='Password'/><br/><br/>
                <input type='number' placeholder='Phone Number'/><br/><br/>
                <Link to='/Login'><button>Register</button></Link>
            </div>
        </div>

    </div> );
}

export default Register;