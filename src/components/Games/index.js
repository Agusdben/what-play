import React from 'react'
import Card from '../Card'

import './Games.css'

export const Games = ({ games }) => {
  return (
    <article className='games'>
      {
        games.map(game => <Card key={game._id} game={game} />)
      }
    </article>
  )
}
