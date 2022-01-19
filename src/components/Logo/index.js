import React from 'react'
import { Link } from 'wouter'

import './Logo.css'

export const Logo = () => {
  return (
    <Link href='/'>
      <a>
        <div className='logo'>
          <div><span>What</span></div>
          <div><span>Play?</span></div>
        </div>
      </a>
    </Link>
  )
}
