import React from 'react'
import { Card } from '../Card'
import useGames from '../../hooks/useGames'

import './Games.css'

export const Games = () => {
  const { games } = useGames()

  return (
    <div className='games'>
      {
        games.map(game => <Card key={game._id} game={game} />)
      }
    </div>
  )
}
