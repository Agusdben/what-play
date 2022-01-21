import React, { useState } from 'react'
import { useLocation } from 'wouter'
import useGames from '../../hooks/useGames'
import { Modal } from '../Modal'

import './Card.css'

export const Card = ({ game }) => {
  const { gamesSelected, addGameSelected, removeGameSelected } = useGames()
  const [modal, setModal] = useState({ open: false, description: '', handleConfirm: null, handleCancel: null })
  const [, setLocation] = useLocation()

  const handleAdd = () => {
    addGameSelected(game)
    console.log(gamesSelected)
  }

  const handleRemove = () => {
    setModal({
      open: true,
      description: `Remove ${game.name} from the list?`,
      handleConfirm: () => {
        removeGameSelected(game)
        setModal({
          ...modal,
          open: false
        })
      },
      handleCancel: () => { setModal({ ...modal, open: false }) }
    })
  }

  return (
    <div style={gamesSelected.some(gameSelected => gameSelected.name === game.name) ? { border: '3px solid #0f0' } : {}} className='card' id={game.name}>
      <div className='card__img' style={{ backgroundImage: `url(${game.url})` }} />
      <div className='card__description'>
        <p>{game.description}</p>
        <button onClick={() => { setLocation(`/game/${game.name}`) }}>More info</button>
      </div>
      <button className='card__button' onClick={gamesSelected.includes(game) ? handleRemove : handleAdd}>
        {
          gamesSelected.some(gameSelected => gameSelected.name === game.name) ? 'Remove' : 'Add'
        }
      </button>
      {modal.open &&
        <Modal
          {...modal}
        />}
    </div>
  )
}
