import React, { useState } from 'react'
import '../assets/css/navbar.css'
import logo from '../assets/images/logo2.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
export const Navbar = () => {
    const[menu,setMenu]=useState("anniversary");
    return (<>
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo}alt=''width='30%'/>
            <p>GOLDEN <br/> WRAP</p>
        </div>
        <ul className='nav-menu'>
        <li >Home</li>
        <li >Occasions</li>
        <li>Recipients</li>
        <li>Cakes</li>
        <li>Flowers</li>
            {/* <li onClick={()=>{setMenu("anniversary")}}>Anniversary{menu==="anniversary"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("birthday")}}>Birthday{menu==="birthday"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("corperate")}}>Corperate{menu==="corperate"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("flowers")}}>Flowers{menu==="flowers"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("personalised")}}>Personalised{menu==="personalised"?<hr/>:<></>}</li> */}
        </ul>
        <div className='nav-login-cart'>
            <Link to="/Login">
                <button>Login</button>
            </Link>
            <ShoppingCartIcon/>
            <div className='nav-cart-count'>
                0
            </div>
        </div>
    </div>
    </>
  )
}