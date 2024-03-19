import React, { useEffect, useState } from 'react'
import './aboutus.css';

function Aboutus() {
    
    return ( 
        <div className="about-container">
            <div className='about-outer'>
            <div className='about-left'>

            </div>
            <div className='about-right'>
            <h1>About Us</h1><br/>
            <p>
            &emsp; Welcome to Golden Wrap, your go-to destination for personalized and custom gifts! At Golden Wrap, we believe that every gift should be as unique as the person receiving it.
      </p>
      <p><br/>
      &emsp;Our mission is to bring joy and warmth to your special moments by offering a wide range of customizable gifts that cater to every occasion. Whether it's a birthday, anniversary, wedding, or any other celebration, we are here to make your gifts truly special and memorable.
      </p>
      <p><br/>
       <u><b>What sets us apart:</b></u> <br/>
      </p>
      <ul>
        <li><b>Personalization:</b> We specialize in personalized gifts that reflect your unique style and sentiments. Choose from a variety of customization options to create one-of-a-kind gifts.</li>
        <li><b>Quality:</b> Our commitment to quality ensures that every product is crafted with attention to detail, using the finest materials.</li>
        <li><b>Diverse Selection:</b> Explore our extensive collection of customizable gifts, ranging from custom jewelry and home decor to personalized accessories.</li>
        <li><b>Customer Experience:</b> We value our customers and strive to provide an exceptional shopping experience.</li>
      </ul>
      <p><br/>
        Thank you for choosing Golden Wrap for your gift-giving needs. We look forward to being a part of your special moments and helping you create cherished memories.
      </p>
            </div>
            </div>
        </div>
     );
}

export default Aboutus;