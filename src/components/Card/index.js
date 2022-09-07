import React from 'react'
import useGames from '../../hooks/useGames'
import { useModal } from '../../hooks/useModal'
import { Modal } from '../Modal'

import './Card.css'

export const Card = ({ game }) => {
  const { gamesSelected, addGameSelected, removeGameSelected } = useGames()
  const { isModalOpen, description, handleConfirm, setDescription, setConfirm, openModal, closeModal } = useModal()

  const handleAdd = () => {
    addGameSelected(game)
  }

  const handleRemove = () => {
    setConfirm(() => {
      removeGameSelected(game)
      closeModal()
    })
    setDescription(game.name)
    openModal()
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
      {isModalOpen &&
        <Modal
          description={description}
          handleConfirm={handleConfirm}
          handleCancel={closeModal}
        />}
    </div>
  )
}
