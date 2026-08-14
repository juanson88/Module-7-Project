import React from 'react'
import "./Footer.css";

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-links'>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Socials</a>
        <a href="#">Blog</a>
        </div>
        <div className='copyright'>
            <p>&copy; "Movie Search Database" All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer