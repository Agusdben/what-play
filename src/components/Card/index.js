import React, { useRef } from 'react'
import { Link } from 'wouter'
import useGames from '../../hooks/useGames'
import useInView from '../../hooks/useInView'
import { useModal } from '../../hooks/useModal'
import { Modal } from '../Modal'

import './Card.css'

const Card = ({ game }) => {
  const { gamesSelected, addGameSelected, removeGameSelected } = useGames()
  const { isModalOpen, description, handleConfirm, setDescription, setConfirm, openModal, closeModal } = useModal()
  const imgRef = useRef()
  const isInView = useInView(imgRef)
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

  const idAded = () => gamesSelected.some(gameSelected => gameSelected.name === game.name)

  return (
    <>
      <div className='card'>
        <img ref={imgRef} className='card__img' src={isInView ? game.url : ''} alt={game.name} />
        <div className='card__description'>
          <p className='card__game-name'>{game.name}</p>
          <p className='card__game-description'>{game.description}</p>
          <Link className='card__learn-more' to={`/description/${game._id}`}>Learn more</Link>
        </div>
        <button className='card__button' onClick={idAded() ? handleRemove : handleAdd}>
          {
            idAded() ? '✔' : '📌'
          }
        </button>
        {idAded() && <div className='card__game-added'>ADDED</div>}
      </div>
      {isModalOpen &&
        <Modal
          description={description}
          handleConfirm={handleConfirm}
          handleCancel={closeModal}
        />}
    </>
  )
}

export default Card
