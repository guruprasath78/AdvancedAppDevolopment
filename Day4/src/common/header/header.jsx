import React from 'react'
import './header.css'
import Head from './head'
import Search from './search'
import Navbarr from './navbarr'
import SearchLogout from './searchlogout'

const Header = ({login}) => {
  return (
   <>
    {/* <Head /> */}
    <Search login={login}/>
    <Navbarr/>
   </>
  )
}

export default Header
