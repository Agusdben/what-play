import React from 'react'
import { GamesSelected } from '../GamesSelected'
import { Logo } from '../Logo'

import './Header.css'

export const Header = () => {
  return (
    <header className='header'>
      <Logo />
      <GamesSelected />
    </header>
  )
}
