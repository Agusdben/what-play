import React, { useState } from 'react'
import useGames from '../../hooks/useGames'
import { GameSelected } from '../GameSelected'

import './Roll.css'
export const Roll = () => {
  const { gamesSelected, setGamesSelected, games } = useGames()
  const [gameSelected, setGameSelected] = useState({})

  const handleRoll = () => {
    const roll = Math.floor(Math.random() * gamesSelected.length)
    setGameSelected(gamesSelected[roll])
  }

  const handleAddAllGames = () => {
    setGamesSelected(games)
    window.localStorage.setItem('storedGamesSelected', JSON.stringify(games))
  }

  return (
    <>
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
      <GameSelected game={gameSelected ? gameSelected.name : ' '} />
    </>
  )
}
