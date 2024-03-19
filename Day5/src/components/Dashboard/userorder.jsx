import React, { Component } from 'react'
import './userorder.css'
import order1 from '../../../public/image/slider/slide1.jpeg'
import order2 from '../../../public/image/slider/slide2.jpeg'

function Userorders() {
    return ( <div className='userorders-all'>
        <div className='userorders-contents'>
            <br/>
            <h2 style={{margin:'5%'}}>Order History</h2>
            <div className='userorder-product'>
                <div className='userorder-image'>
                    <img src={order1} alt='' height='115%' width='100%'/>
                </div>
                <div className='userorder-right'>
                    <div style={{paddingTop:'2%'}}>
                        <br/>
                        <p><b>ORDER ID:</b>FBHF7564387</p>
                        <p>Butterfly Heart Combo</p>
                        <p style={{color:'red'}}>$380</p><br/>
                    </div>
                    <div style={{paddingTop:'2%'}} className='userorder-check'>
                    <br/>
                        <select>
                            <option>Delivered</option>
                            <option>Pending</option>
                            <option>Cancelled</option>
                        </select><br/>
                        <p style={{color:'grey'}}>Delivered on</p>
                        <p>23.01.2024</p>
                    </div>
                </div>
            </div>

            <div className='userorder-product'>
                <div className='userorder-image'>
                    <img src={order2} alt='' height='115%' width='100%'/>
                </div>
                <div className='userorder-right'>
                    <div style={{paddingTop:'2%'}}>
                        <br/>
                        <p><b>ORDER ID:</b>FDGHF7567387</p>
                        <p>Star Frame</p>
                        <p style={{color:'red'}}>$420</p><br/>
                    </div>
                    <div style={{paddingTop:'2%'}} className='userorder-check'>
                    <br/>
                        <select>
                            <option>Delivered</option>
                            <option>Pending</option>
                            <option>Cancelled</option>
                        </select><br/>
                        <p style={{color:'grey'}}>Delivered on</p>
                        <p>20.01.2024</p>
                    </div>
                </div>
            </div>
        </div>
    </div> );
}

export default Userorders;