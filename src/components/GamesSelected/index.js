import React, { useState } from 'react'
import useGames from '../../hooks/useGames'
import { useModal } from '../../hooks/useModal'
import { Modal } from '../Modal'
import './GamesSelected.css'

export const GamesSelected = () => {
  const { gamesSelected, setGamesSelected, removeGameSelected } = useGames()
  const {
    isModalOpen,
    description,
    handleConfirm,
    setDescription,
    setConfirm,
    openModal,
    closeModal
  } = useModal()

  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle(!toggle)
  }

  const handleRemoveAll = () => {
    setDescription('All games selected')
    setConfirm(() => {
      setGamesSelected([])
      window.localStorage.removeItem('storedGamesSelected')
      closeModal()
      setToggle(false)
    })
    openModal()
  }

  const handleRemove = (game) => {
    setConfirm(() => {
      removeGameSelected(game)
      closeModal()
    })
    setDescription(game.name)
    openModal()
  }

  return (
    <>
      <div className='games-selected' onClick={handleToggle}>
        <p>🎮<span>{gamesSelected.length}</span></p>
      </div>
      <div style={toggle ? { right: '0' } : { right: '-100%' }} className='game-selected__info'>
        <ul>
          {
            gamesSelected.map(game =>
              <li key={game._id} id={game.name} style={{ backgroundImage: `url(${game.url})` }}>
                <p>{game.name}</p>
                <button className='game-selectect__remove' onClick={() => { handleRemove(game) }}>❌</button>
              </li>
            )
          }
        </ul>
        <button className='game-selectect__remove-all' onClick={handleRemoveAll}>Remove all</button>
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
