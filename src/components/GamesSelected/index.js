import React, { useState } from 'react'
import useGames from '../../hooks/useGames'
import './GamesSelected.css'

export const GamesSelected = () => {
  const { gamesSelected, setGamesSelected } = useGames()
  const [toggle, setToggle] = useState(false)
  const handleToggle = () => {
    setToggle(!toggle)
  }
  const handleRemove = ({ target }) => {
    const gameToRemove = target.parentNode.getAttribute('id')
    const gamesSelectedUpdate = gamesSelected.filter(game => game !== gameToRemove)
    setGamesSelected(gamesSelectedUpdate)
  }
  const handleRemoveAll = () => {
    setGamesSelected([])
  }
  return (
    <>
      <div className='games-selected' onClick={handleToggle}>
        <p>🎮<span>{gamesSelected.length}</span></p>
      </div>
      <div style={toggle ? { display: 'block' } : { display: 'none' }} className='game-selected__info'>
        <h3 className='game-selected__title'>Games Selected</h3>
        <ul>
          {
            gamesSelected.map(game =>
              <li key={game} id={game}>
                <p>{game}</p>
                <button className='game-selectect__remove' onClick={handleRemove}>❌</button>
              </li>
            )
          }
        </ul>
        <button className='game-selectect__remove-all' onClick={handleRemoveAll}>Remove all</button>
      </div>
      {/* <div style={toggle ? { display: 'block' } : { display: 'none' }} className='game-selected__triangle' /> */}
    </>
  )
}
