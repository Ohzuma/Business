import React from 'react'

const ContactCard = () => {
  return (
    <div className='contactCard'>
      <div className="Card">
        <div className="Card-icon"></div>
        <div className="Card-text">
          <header>
            <h1>Contact</h1>
          </header>
          <article>
            <span>08163686235</span>
            <span>ozumanology@gmail.com</span>
          </article>
        </div>
      </div>
      <div className="Card">
        <div className="Card-icon"></div>
        <div className="Card-text">
          <header>
            <h1>Address</h1>
          </header>
          <article>
            <span>175 5th Ave, New York, NY </span>
            <span>10010</span>
            <span>United States</span>
          </article>
        </div>
      </div>
      <div className="Card">
        <div className="Card-icon"></div>
        <div className="Card-text">
          <header>
            <h1>Schedule</h1>
          </header>
          <article>
            <span>24 Hours / 7 Days Open</span>
            <span>Office time: 10 AM - 5:30 PM</span>
          </article>
        </div>
      </div>
    </div>
  )
}

export default ContactCard