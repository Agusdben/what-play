import React, { createContext, useState, useEffect } from 'react'

import gameServices from '../services/games'

const GameContext = createContext(null)

export const GamesContextProvider = ({ children }) => {
  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(true)
  const [gamesSelected, setGamesSelected] = useState([])

  useEffect(() => {
    const loadGames = async () => {
      try {
        const { games } = await gameServices.getAllGames()
        setGames(games)
        setLoading(false)
      } catch (e) { console.log(e) }
    }
    const gamesSelected = window.localStorage.getItem('storedGamesSelected')
    if (gamesSelected) setGamesSelected(JSON.parse(gamesSelected))
    loadGames()
  }, [])

  return (
    <GameContext.Provider value={{
      games,
      gamesSelected,
      loading,
      setGames,
      setGamesSelected
    }}
    >
      {children}
    </GameContext.Provider>
  )
}

export default GameContext
