import React from 'react'
import { Link, useLocation } from 'wouter'

import './Logo.css'

export const Logo = () => {
  const [location] = useLocation()
  return (
    <Link
      href='/'
      onClick={() => {
        if (location === '/') {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      }}
    >
      <a>
        <div className='logo'>
          <div><span>What</span></div>
          <div><span>Play?</span></div>
        </div>
      </a>
    </Link>
  )
}
