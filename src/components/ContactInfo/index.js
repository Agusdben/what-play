import React from 'react'
import './ContactInfo.css'

export const ContactInfo = () => {
  return (
    <div className='contact-info'>
      <section className='contact-info__section'>
        <h2>FrontEnd</h2>
        <ul>
          <li><a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/agustin-di-benedetto-7509071ba/'>Linkedin</a></li>
          <li><a target='_blank' rel='noreferrer' href='https://github.com/Agusdben'>Github</a></li>
        </ul>
      </section>
      <section className='contact-info__section'>
        <h2>BackEnd</h2>
        <ul>
          <li><a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/jonathanycalderon/'>Linkedin</a></li>
          <li><a target='_blank' rel='noreferrer' href='#'>Github</a></li>
        </ul>
      </section>
    </div>
  )
}
