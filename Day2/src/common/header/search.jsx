import React from 'react'
import logo from '../../assets/images/logo2.png'
import { Link } from 'react-router-dom'

const Search = ({ CartItem }) => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })
  return (
    <>
    <section className='search'>
      <div className='container c_flex'>
        <div className='logo width '>
          <img src={logo} alt='' />
          <span style={{color:'maroon'}}><b>GOLDEN WRAP</b></span>
        </div>

        <div className='search-box f_flex'>
          <i className='fa fa-search'></i>
          <input type='text' placeholder='Search and hit enter...' />
          <span>All Category</span>
        </div>

        <div className='icon f_flex width'>
          <Link to='/Login'>
            <i className='fa fa-user icon-circle'></i>
          </Link>
          <div className='cart'>
            <Link to='/cart'>
              <i className='fa fa-shopping-bag icon-circle'></i>
              <span> 0 </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}

export default Search
