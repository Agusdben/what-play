import React from 'react'
import useGames from '../../hooks/useGames'

import './Roll.css'
export const Roll = () => {
  const { gamesSelected, setGamesSelected, games } = useGames()

  const handleRoll = () => {
    const roll = Math.floor(Math.random() * gamesSelected.length)
    console.log(gamesSelected[roll])
  }

  const handleAddAllGames = () => {
    setGamesSelected(games)
  }
  return (
    <div className='roll'>
      <div className='roll__gamesSelected'>
        {
          gamesSelected.map(game =>
            <img key={game._id} src={game.url} alt={game.name} />
          )
        }
      </div>
      <div className='roll__controlls'>
        <button onClick={handleRoll}>Roll it</button>
        <button onClick={handleAddAllGames}>Add all games</button>
      </div>
    </div>
  )
}
