import React, { Component } from 'react'
import './Adprofile.css'

function Adminprofile() {
    return ( 
    <div className='adminprofile-all'>
        <div className='adminprofile-image'>
            <h3>Profile</h3><br/>
            <div className='admin-image'></div><br/>
            <button className='admin-button'>Admin
            </button>
        </div>
        <div className='adminprofile-details'>
            <div className='admin-details'>

                    <h2>Edit Details</h2><br/>
                    <label>First Name</label><br/>
                    <input type='text' value=' Subbulakshmi'/><br/><br/>
                    <label>Last Name</label><br/>
                    <input type='text' value=' L'/><br/><br/>
                    <label>Email Address</label><br/>
                    <input type='text'value=' 727721euit162@skcet.ac.in'/><br/><br/>
                    <h3>Change Password</h3><br/>
                    <label>Password</label><br/>
                    <input type='password' value=' subbu123'/><br/><br/>
                    <label> Confirm Password</label><br/>
                    <input type='password'value=' subbu123'/><br/><br/>
                    <button>Save</button>
            </div>

        </div>
    </div> );
}

export default Adminprofile;