import React, { Component } from 'react'
import './Valentine.css'
import item1 from '../../assets/images/valentine/val1.jpeg'
import { GoStarFill } from "react-icons/go";

function Items() {
    return ( 
    <div className='item-entire'>
        <div className='item-image'>
            <img src={item1} alt='' style={{height:'25vh', width:'100%'}} />
        </div>
        <div className='item-desc'>
            <p className='item-desc-p1'>Personalized Photo Frame</p>
            <p style={{color:'orange'}}><GoStarFill /><GoStarFill /><GoStarFill /><GoStarFill /></p>
            <p className='item-desc-p2'>Cherish and relive a moment that deserves to be celebrated time and again.  </p><br/>
            <hr></hr>
            <br/>
            <p className='item-desc-p3'>₹ 1000</p>
        </div>
    </div> 
    );
}

export default Items;