import React, { Component } from 'react'
import './admin.css';
import { Link } from 'react-router-dom';
function Admin({rightContent}) {
    return (<div className='gift-all'>
        <div className='gift-left'>
            <div className='gift-sidebar'>
                <br/>
                <Link to='/admin/admindashboard'>
                    <p className='gift-sidebar-details'>Admin</p><hr/>
                </Link>
                <Link to='/admin/products'>
                    <p className='gift-sidebar-details'>Products</p>
                </Link>
                <Link to='/admin/aduser'>
                    <p className='gift-sidebar-details'>All User</p>
                </Link>
                <p className='gift-sidebar-details'>Themes</p>
                <Link to='/admin/adorders'>
                    <p className='gift-sidebar-details'>Orders</p>
                </Link>
                <Link to='/admin/sitesettings'>
                    <p className='gift-sidebar-details'>Site Settings</p>
                </Link>
                <Link to='/admin/Adprofile'>
                    <p className='gift-sidebar-details'>Profile</p>
                </Link>
                <Link to='/'>
                <p className='gift-sidebar-details'>Logout</p>
                </Link>

            </div>
        </div>
        <div className='gift-right'>
            {rightContent}
        </div>
    </div>  );
}

export default Admin;