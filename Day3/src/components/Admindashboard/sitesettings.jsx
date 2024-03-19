import React, { Component } from 'react'
import './sitesettings.css'
function Sitesettings() {
    return ( 
    <div className='site-settings-entire'>
        <div className='site-settings-contents'>
            <br/>
        <div className='sitesetting-aboutus'><h2>About Us</h2>
        <br/> 
            <textarea value='About Us
            Welcome to Gift Town,
                At Gift Town, we believe that every gift tells a story. Our passion for creating memorable, personalized gifts led us to establish a platform where you can turn ordinary moments into extraordinary memories. We are more than just a gift customization website; we are curators of joy, dedicated to transforming your heartfelt sentiments into tangible, one-of-a-kind treasures.
                Our Mission
                Our mission is to celebrate the art of gifting by providing a seamless and enjoyable customization experience. We understand that each person is unique, and so are the relationships we cherish. Our goal is to help you express your love, appreciation, and warmth through thoughtfully personalized gifts that leave a lasting impression.
                Join Us in the Journey
                Whether you re celebrating a special occasion or simply expressing your love, we invite you to join us in the art of gift customization. Explore our collection, unleash your creativity, and let us help you create moments that last a lifetime. Thank you for choosing Gift Town. We look forward to being part of your cherished memories.'/><br/>
             <br/>
            <button className='sitesetting-btn1'>Edit</button>  
            <button className='sitesetting-btn2'>Save Changes</button>
        </div><br/>
        <div className='sitesetting-contactus'><h2>Contact Us</h2>
        <br/>
            <textarea value='Contact Us
            Wed Love to Hear from You!
            At Gift Town, we value communication and are here to assist you in any way possible. Whether you have questions about our products, need assistance with customization, or want to explore partnership opportunities, were just a message away.
            Customer Support
            Our dedicated customer support team is available to answer your queries and provide assistance. Feel free to reach out via email, and well get back to you as soon as possible:
            Email: support@gifttown.com
            Business Inquiries
            For business-related inquiries, collaboration proposals, or any other partnerships, please contact our business development team:
            Email: partnerships@gifttown.com'/>
        </div>
        <br/>
        <button className='sitesetting-btn1'>Edit</button> 
        <button className='sitesetting-btn2'>Save Changes</button> 
        </div>
    </div> );
}

export default Sitesettings;