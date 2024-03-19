import React, { Component } from 'react'
import './Dashboard.css'
import { Link } from 'react-router-dom';
import Login from '../Login';
function Dashboard({rightContent}) {
    return ( 
        <>
        <div className='usersidebar-all'>
        <div className='usersidebar-left'>
            <div className='usersidebar-data'>
                <br/>
                <p>User</p><hr/>
            <Link to='/Dashboard/Userprofile'>
            <br/>
                <p>My Profile</p>
            </Link>
            <Link to='/Dashboard/userorder'>
                <p>Orders</p>
            </Link>
                <p>Wishlist</p>
                <p>Rewards</p>
            <Link to='/Dashboard/Login'>
                <p>Login</p>
            </Link>
            </div>
        </div>
         </div> 
         <div className='usersidebar-right'>
         {rightContent}
        </div>
         </>
     );
}

export default Dashboard;
