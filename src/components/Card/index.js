import React, { useState } from 'react'
import useGames from '../../hooks/useGames'
import { Modal } from '../Modal'

import './Card.css'

export const Card = ({ game }) => {
  const { gamesSelected, addGameSelected, removeGameSelected } = useGames()
  const [modal, setModal] = useState({ open: false, description: '', handleConfirm: null, handleCancel: null })

  const handleAdd = () => {
    addGameSelected(game)
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
      <img className='card__img' src={game.url} alt={game.name} />
      <div className='card__description'>
        <p>{game.description}</p>
      </div>
      <button className='card__button' onClick={gamesSelected.some(gameSelected => gameSelected.name === game.name) ? handleRemove : handleAdd}>
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
