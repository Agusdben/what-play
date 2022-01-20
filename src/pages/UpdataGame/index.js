import React, { useState } from 'react'
import gameServices from '../../services/games'
import './UpdateGame.css'
export const UpdateGame = () => {
  const [gameId, setGameId] = useState('')
  const [gameName, setGameName] = useState('')
  const [gameUrl, setGameUrl] = useState('')
  const [gameDescription, setGamedescription] = useState('')

  const handleId = ({ target }) => { setGameId(target.value) }
  const handleName = ({ target }) => { setGameName(target.value) }
  const handleURL = ({ target }) => { setGameUrl(target.value) }
  const handleDescription = ({ target }) => { setGamedescription(target.value) }

  const buildGameObject = () => {
    const gameUpdate = {
      name: gameName,
      url: gameUrl,
      description: gameDescription
    }
    return gameUpdate
  }

  const handleGameCUD = async (action, event) => {
    event.preventDefault()

    const gameObj = buildGameObject()

    try {
      if (action === 'put') await gameServices.updateGame(gameId, gameObj)
      if (action === 'post') await gameServices.addGame(gameObj)
      if (action === 'delete') await gameServices.deleteGame(gameId)
    } catch (e) { console.log({ e }) }
  }
  return (
    <div className='update-game'>
      <form>
        <input type='text' onChange={handleId} value={gameId} placeholder='Game ID' />
        <input type='text' onChange={handleName} value={gameName} placeholder='Game Name' />
        <input type='text' onChange={handleURL} value={gameUrl} placeholder='Game Url' />
        <textarea type='text' onChange={handleDescription} value={gameDescription} placeholder='Game Description' />
        <button onClick={(e) => { handleGameCUD('post', e) }}>Post Game</button>
        <button onClick={(e) => { handleGameCUD('put', e) }}>Update Game</button>
        <button onClick={(e) => { handleGameCUD('delete', e) }}>Delete Game</button>
      </form>
    </div>
  )
}
