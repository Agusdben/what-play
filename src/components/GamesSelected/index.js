import React, { useState } from 'react'
import useGames from '../../hooks/useGames'
import './GamesSelected.css'

export const GamesSelected = () => {
  const { gamesSelected } = useGames()
  const [toggle, setToggle] = useState(false)
  const handleToggle = () => {
    setToggle(!toggle)
  }
  return (
    <>
      <div className='games-selected' onClick={handleToggle}>
        <p>🎮<span>{gamesSelected.length}</span></p>
      </div>
      {
        gamesSelected.length > 0 &&
          <>
            <div style={toggle ? { display: 'block' } : { display: 'none' }} className='game-selected__info'>
              <ul>
                {
                  gamesSelected.map(game =>
                    <li key={game} id={game}>
                      <p>{game}</p>
                      <button>❌</button>
                    </li>
                  )
                }
              </ul>
            </div>
            <div style={toggle ? { display: 'block' } : { display: 'none' }} className='game-selected__triangle' />
          </>
      }
    </>

  )
}
