import React, { useState } from 'react';
import './Userprofile.css';

function Userprofile() {
    // State variables to manage input values
    const [firstName, setFirstName] = useState('Guruprasath');
    const [lastName, setLastName] = useState('Selvaraj');
    const [email, setEmail] = useState('727821tuit025@skct.edu.in');
    const [password, setPassword] = useState('guru@123');
    const [confirmPassword, setConfirmPassword] = useState('guru@123');

    // Function to handle saving profile details
    const handleSave = () => {
        // Add logic to save the profile details
        console.log('Profile details saved');
    };

    return (
        <div className='adminprofile-all'>
            <div className='adminprofile-image'>
                <h3>Profile</h3><br/>
                <div className='admin-image'></div><br/>
                <button className='admin-button'>User</button>
            </div>
            <div className='adminprofile-details'>
                <div className='admin-details'>
                    <h2>Edit Details</h2><br/>
                    <label>First Name</label><br/>
                    <input 
                        type='text' 
                        value={firstName} 
                        onChange={(e) => setFirstName(e.target.value)}
                    /><br/><br/>
                    <label>Last Name</label><br/>
                    <input 
                        type='text' 
                        value={lastName} 
                        onChange={(e) => setLastName(e.target.value)}
                    /><br/><br/>
                    <label>Email Address</label><br/>
                    <input 
                        type='text' 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                    /><br/><br/>
                    <h3>Change Password</h3><br/>
                    <label>Password</label><br/>
                    <input 
                        type='password' 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                    /><br/><br/>
                    <label> Confirm Password</label><br/>
                    <input 
                        type='password' 
                        value={confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    /><br/><br/>
                    <button onClick={handleSave}>Save</button>
                </div>
            </div>
        </div>
    );
}

export default Userprofile;
