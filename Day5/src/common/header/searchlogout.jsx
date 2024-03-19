import React from 'react';
import logo from '../../assets/images/logo4.png';
import { Link } from 'react-router-dom';

const SearchLogout = ({ cartItems }) => {
  // fixed Header
  window.addEventListener('scroll', function () {
    const search = document.querySelector('.search');
    search?.classList.toggle('active', window.scrollY > 100);
  });

  const cartItemsLength = cartItems ? cartItems.length : 0; // Check if cartItems is defined

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
            <Link to='/Login'>
                <button>LogIn</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchLogout;