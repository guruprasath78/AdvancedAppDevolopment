import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Dashboard.css';

function Dashboard({ rightContent }) {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Show confirmation popup
    setShowPopup(true);
  };

  const confirmLogout = () => {
    // Remove loggedInUser from local storage
    localStorage.removeItem('logged');
    
    // Navigate to home page
    navigate('/');
  };
  

  const cancelLogout = () => {
    // Hide the popup
    setShowPopup(false);
  };

  return (
    <>
      <div className='usersidebar-all'>
        <div className='usersidebar-left'>
          <div className='usersidebar-data'>
            <br />
            <p>User</p>
            <hr />
            <Link to='/Dashboard/Userprofile'>
              <br />
              <p>My Profile</p>
            </Link>
            <Link to='/Dashboard/userorder'>
              <p>Orders</p>
            </Link>
            <p>Wishlist</p>
            <p>Rewards</p>
            <button onClick={handleLogout} className="btn btn-danger">Logout</button>
          </div>
        </div>
      </div>
      <div className='usersidebar-right'>
        {rightContent}
      </div>
      {/* Popup */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>Are you sure you want to logout?</p>
            <button onClick={confirmLogout} className="btn btn-danger mr-2">Yes</button>
            <button onClick={cancelLogout} className="btn btn-secondary">No</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Dashboard;
