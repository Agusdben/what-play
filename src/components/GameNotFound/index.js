import React from 'react'
import './GameNotFound.css'

export const GameNotFound = ({ description }) => {
  return (
    <div className='game-not-found'>
      <h2>🤷‍♂️ oops 🤷‍♂️</h2>
      <h4>" {description.toUpperCase()} "</h4>
      <p>Not found</p>
    </div>
  )
}
