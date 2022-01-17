import React, { useEffect, useState } from 'react'
import gameServices from './services/games'
import { Header } from './components/Header'
import { Card } from './components/Card'

export const App = () => {
  const [games, setGames] = useState([])
  const [pushGame, setPushGame] = useState(null)
  useEffect(() => {
    const loadGames = async () => {
      const { games } = await gameServices.getAllGames()
      setGames(games)
    }

    loadGames()
  }, [])

  const handleSubmitGame = async (event) => {
    event.preventDefault()

    if (pushGame) {
      const updateGames = {
        games: [...games, pushGame]
      }
      try {
        await gameServices.addGame(updateGames)
      } catch (e) {
        console.log(e)
      }
    }
  }
  const handleInputGame = (event) => {
    setPushGame(event.target.value)
  }

  return (
    <div id='app'>
      <Header />
      <form onSubmit={handleSubmitGame}>
        <input type='text' onChange={handleInputGame} value={pushGame} />
        <button>ENVIAR!</button>
      </form>
      {
        games.map(game => <Card key={game} content={game} />)
      }

    </div>
  )
}
