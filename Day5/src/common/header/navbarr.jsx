import React, { useState } from "react"
import { Link } from "react-router-dom"

const Navbarr = () => {
  // Toogle Menu
  const [MobileMenu, setMobileMenu] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          

          <div className='navlink'>
            <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
              {/* <ul className='link f_flex uppercase {MobileMenu ? "nav-links-MobileMenu" : "nav-links"} onClick={() => setMobileMenu(false)}'> */}
              <li>
                <Link to='/'>Home</Link>
              </li>
              {/* <li>
                <Link to='/Login'>user account</Link>
              </li>
              <li>
                <Link to='/orders'>orders</Link>
              </li> */}
              <li>
                <Link to='/contact'>contact</Link>
              </li>
              <li>
                <Link to='/aboutus'>about us</Link>
              </li>
              {/* <li>
                <Link to='/Dashboard'>dashboard</Link>
              </li> */}
            </ul>
            <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
              {MobileMenu ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbarr