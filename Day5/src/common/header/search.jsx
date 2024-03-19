import React from 'react';
import logo from '../../assets/images/logo4.png';
import { Link, useNavigate } from 'react-router-dom';

const Search = ({ login, cartItems }) => {
  // fixed Header
  window.addEventListener('scroll', function () {
    const search = document.querySelector('.search');
    search?.classList.toggle('active', window.scrollY > 100);
  });

  const cartItemsLength = cartItems ? cartItems.length : 0; // Check if cartItems is defined
  const isLoggedIn = localStorage.getItem('logged') ? true : false; // Check if user is logged in
  const navigate = useNavigate();

  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo width '>
            <img src={logo} alt='' />
            {/* <span style={{color:'maroon'}}><b>GOLDEN WRAP</b></span> */}
          </div>

          <div className='search-box f_flex'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Search and hit enter...' />
            <span>All Category</span>
          </div>

          <div className='icon f_flex width'>
            {isLoggedIn ? (
              <Link to='/Dashboard/Userprofile'>
                <i className='fa fa-user icon-circle'></i>
              </Link>
            ) : (
              <Link to='/Login'>
                <i className='fa fa-user icon-circle'></i>
              </Link>
            )}

            <div className='cart-ser'>
              <Link to='/cart'>
                <i className='fa fa-shopping-bag icon-circle'></i>
                <span className='cart-length-ser'> {cartItemsLength === 0 ? "" : cartItemsLength} </span>
              </Link>
            </div>
          </div>
        </div>
</section>
    </>
  );
};

export default Search;