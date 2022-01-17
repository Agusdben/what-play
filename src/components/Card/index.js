import React from 'react'

import './Card.css'

export const Card = ({ content }) => {
  return (
    <div className='card' style={{ backgroundImage: 'url("https://media.discordapp.net/attachments/242068588628803584/932139592902148096/unknown.png?width=551&height=559")' }}>
      <div className='card__description'>
        <h4 className='card__title'>{content}</h4>
      </div>
    </div>
  )
}
