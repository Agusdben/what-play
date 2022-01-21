import React, { useState } from 'react'
import useGames from '../../hooks/useGames'
import { Modal } from '../Modal'
import './GamesSelected.css'

export const GamesSelected = () => {
  const { gamesSelected, setGamesSelected, removeGameSelected } = useGames()
  const [toggle, setToggle] = useState(false)
  const [modal, setModal] = useState({ open: false, description: '', handleConfirm: null, handleCancel: null })
  const handleToggle = () => {
    setToggle(!toggle)
  }

  const handleRemoveAll = () => {
    setModal({
      open: true,
      description: 'Remove all games from the list?',
      handleConfirm: () => {
        setModal({
          ...modal,
          open: false
        })
        setGamesSelected([])
        setToggle(false)
      },
      handleCancel: () => { setModal({ ...modal, open: false }) }
    })
  }

  const handleRemove = (game) => {
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
    <>
      <div className='games-selected' onClick={handleToggle}>
        <p>🎮<span>{gamesSelected.length}</span></p>
      </div>
      <div style={toggle ? { display: 'block' } : { display: 'none' }} className='game-selected__info'>
        <h3 className='game-selected__title'>Games Selected</h3>
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
      {
        modal.open &&
          <Modal
            {...modal}
          />
      }
      <div style={toggle ? { display: 'block' } : { display: 'none' }} className='game-selected__triangle' />
    </>
  )
}
