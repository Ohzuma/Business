import React from 'react'
import ContactCard from './ContactCard'
import ContactForm from './ContactForm'
import './Contact.css'

const Index = () => {
  return (
    <div className='contact'>
      <ContactCard/>
      <ContactForm/>
    </div>
  )
}

export default Index