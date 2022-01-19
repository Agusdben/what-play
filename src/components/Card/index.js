import React from 'react'
import useGames from '../../hooks/useGames'

import './Card.css'

export const Card = ({ game }) => {
  const { gamesSelected, setGamesSelected } = useGames()

  const handleAdd = ({ target }) => {
    const gameToAdd = target.parentNode.getAttribute('id')
    setGamesSelected(prev => prev.concat(gameToAdd))
    console.log(gamesSelected)
  }

  const handleRemove = ({ target }) => {
    const gameToRemove = target.parentNode.getAttribute('id')
    const gamesSelectedUpdate = gamesSelected.filter(game => game !== gameToRemove)
    setGamesSelected(gamesSelectedUpdate)
  }

  return (
    <div style={gamesSelected.includes(game.name) ? { border: '3px solid #0f0' } : {}} className='card' id={game.name}>
      <div className='card__img' style={{ backgroundImage: `url(${game.url})` }} />
      <button className='card__button' onClick={gamesSelected.includes(game.name) ? handleRemove : handleAdd}>
        {
          gamesSelected.includes(game.name) ? 'Remove' : 'Add'
        }
      </button>
    </div>
  )
}
