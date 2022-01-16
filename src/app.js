import React, { useEffect, useState } from 'react'
import gameServices from './services/games'
import { Header } from './components/Header'

export const App = () => {
  const [games, setGames] = useState([])
  useEffect(() => {
    const loadGames = async () => {
      const { games } = gameServices.getAllGames()
      setGames(games)
    }

    loadGames()
  }, [])

  return (
    <div id='app'>
      <Header />
      {
        games.map(game => <h1 key={game}>{game}</h1>)
      }
    </div>
  )
}
