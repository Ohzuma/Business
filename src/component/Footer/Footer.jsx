import React from 'react'
import Logo from '../../assets/image/logo.svg'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className="footer-grid">
        <div className="footer-item">
          <img src={Logo} alt="Logo" />
          <p>Making the world a better
             place through constructing 
             elegant hierarchies. </p>
             <p>
              <span>© 2024 Ayro UI.</span>
             <span> Designed and Developed by Ayro UI </span>
             </p>
      </div>
        <div className="footer-item">
         <header>
          <h1>solutions</h1>
         </header>
            <ul>
              <li>Marketing</li>
              <li>Analytics</li>
              <li>Commerce</li>
              <li>Insight</li>
            </ul>
        </div>
        <div className="footer-item">
         <header>
          <h1>Support</h1>
         </header>
            <ul>
              <li>Pricing</li>
              <li>Documentation</li>
              <li>Guide</li>
              <li>Api Status</li>
            </ul>
        </div>
    
   
      <div className="footer-item">
         <header>
          <h1>Subscribe</h1>
         </header>
          <p>Subscribe to our 
            newsletter for the latest updates</p>
        </div>


    </div>
    </div>
  )
}

export default Footer