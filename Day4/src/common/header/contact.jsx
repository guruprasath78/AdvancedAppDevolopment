// ContactUs.jsx
import React from 'react';
import './contact.css';

function ContactUs() {
  return (
        <div className='contact-entire'>
            <div className='contact-left'>
                <div className='contactleft-image'></div>
          </div>
            <div className='contact-right'>
                <div className='contact-content'>
                <h1>Contact Us</h1><br/>
                <h2>We'd Love to Hear from You!</h2>
                <p>At Gift Town, we value communication and are here to assist you in any way possible. Whether you have questions about our products, need assistance with customization, or want to explore partnership opportunities, we're just a message away.</p>
                <br/><h2>Customer Support</h2>
                <p>Our dedicated customer support team is available to answer your queries and provide assistance. Feel free to reach out via email, and we'll get back to you as soon as possible:
                <br/><br/><b>Email: support@gifttown.com</b>
                </p> 
                <br/><h2>Business Inquiries</h2>
                <p>For business-related inquiries, collaboration proposals, or any other partnerships, please contact our business development team:
                <br/> <br/>
                <b>Email: partnerships@gifttown.com</b></p>
                </div> 
            </div>
           
        </div> );
}

export default ContactUs;
