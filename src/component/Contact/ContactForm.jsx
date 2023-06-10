import React from 'react'

const ContactForm = () => {
  return (
    <div className='form'>
      <header>
        <h2>Get In Touch</h2>
        <h1>Ready to Get Started </h1>
        <p>At vero eos et accusamus 
          et iusto odio dignissimos ducimus 
          quiblanditiis praesentium </p>
      </header>
      <form action="/">
        <div className="form-grid">
          <div className="form-item">
            <input type="text" name='name'placeholder='Name' />
          </div>
          <div className="form-item">
            <input type="email" name='Email' placeholder='Email' />
          </div>
          <div className="form-item">
            <input type="number" name='number' placeholder='Phone' />
          </div>
          <div className="form-item">
            <input type="text" name='subject' placeholder='Subject' />
          </div>
          </div>
          <div className="form-textarea">
            <textarea name="feedback" id="feedback" 
            cols="30" rows="5" placeholder='Type a Message'></textarea>
          </div>
          <div className="form-button">
            <button type="submit">Send Message</button>
          </div>
      </form>
    </div>
  )
}

export default ContactForm