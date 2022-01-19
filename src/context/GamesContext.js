import React, { createContext, useState, useEffect } from 'react'

import gameServices from '../services/games'

const GameContext = createContext(null)

export const GamesContextProvider = ({ children }) => {
  const [games, setGames] = useState([])
  const [gamesSelected, setGamesSelected] = useState([])

  useEffect(() => {
    const loadGames = async () => {
      const { games } = await gameServices.getAllGames()
      setGames(games)
    }
    const gamesSelected = window.localStorage.getItem('storedGamesSelected')
    if (gamesSelected) setGamesSelected(JSON.parse(gamesSelected))
    loadGames()
  }, [])

  return (
    <GameContext.Provider value={{
      games,
      gamesSelected,
      setGames,
      setGamesSelected
    }}
    >
      {children}
    </GameContext.Provider>
  )
}

export default GameContext
