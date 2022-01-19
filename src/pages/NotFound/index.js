import React from 'react'
import './NotFound.css'

export const NotFound = () => {
  return (
    <div className='not-found'>
      <h2 className='not-found__404'>404</h2>
      <h3 className='not-found__description'>oops! Page not found</h3>
      <p className='not-found__msg'>Opps! The page you are looking for does not exist.</p>
    </div>
  )
}
