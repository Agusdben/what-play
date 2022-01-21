import React from 'react'
import { ContactForm } from '../ContactForm'
import { ContactInfo } from '../ContactInfo'
import './Footer.css'

export const Footer = () => {
  return (
    <footer className='footer'>
      <ContactForm />
      <ContactInfo />
    </footer>
  )
}
