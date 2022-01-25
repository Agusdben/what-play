import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import contactServices from '../../services/contact'

import './ContactForm.css'

export const ContactForm = () => {
  const [feedback, setFeedback] = useState('')

  return (
    <div className='contact'>
      <h2 style={{ textAlign: 'center', textDecoration: 'underline', marginTop: 0 }}>Contact</h2>
      <Formik
        initialValues={{
          name: '',
          email: '',
          subject: '',
          message: ''
        }}
        validate={values => {
          const errors = {}
          if (!values.name) {
            errors.name = 'Required name'
          }
          if (!values.email) {
            errors.email = 'Required email'
          }
          if (!values.message) {
            errors.message = 'Required message'
          }
          return errors
        }}
        onSubmit={async (values) => {
          try {
            await contactServices.sendEmail(values)
            setFeedback('Message sent!')
            values.name = ''
            values.email = ''
            values.subject = ''
            values.message = ''
            setTimeout(() => { setFeedback('') }, 3000)
          } catch (e) {
            setFeedback('Error!')
          }
        }}
      >
        {
          ({ isSubmitting }) =>
            <Form className='form'>
              <div className='form__group'>
                <ErrorMessage name='name' component='p' />
                <Field name='name' placeholder='Name*' />
              </div>
              <div className='form__group'>
                <ErrorMessage name='email' component='p' />
                <Field type='email' name='email' placeholder='Email*' />
              </div>

              <div className='form__group'>
                <Field name='subject' placeholder='Subject' />
              </div>

              <div className='form__group'>
                <ErrorMessage name='message' component='p' />
                <Field component='textarea' name='message' placeholder='Hi, Im contacting you because...*' />
              </div>
              <button type='submit' disabled={isSubmitting}>Send!</button>
            </Form>

        }
      </Formik>
      {feedback && <p className='contact__sent'>{feedback}</p>}
    </div>
  )
}
