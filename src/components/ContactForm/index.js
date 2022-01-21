import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import './ContactForm.css'
export const ContactForm = () => {
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
        onSubmit={(values, { setErrorMessage }) => {
          console.log(values)
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
                <Field name='email' placeholder='Email*' />
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
    </div>
  )
}
