import { useContext } from 'react'
import GamesContext from '../context/GamesContext'

const useGames = () => {
  const { games, loading, setGames, gamesSelected, setGamesSelected } = useContext(GamesContext)

  const addGameSelected = gameToAdd => {
    setGamesSelected(prev => prev.concat(gameToAdd))
    window.localStorage.setItem('storedGamesSelected', JSON.stringify(gamesSelected.concat(gameToAdd)))
  }

  const removeGameSelected = gameToRemove => {
    const gamesSelectedUpdate = gamesSelected.filter(games => games !== gameToRemove)
    setGamesSelected(gamesSelectedUpdate)
    window.localStorage.setItem('storedGamesSelected', JSON.stringify(gamesSelected))
  }

  return {
    games,
    loading,
    gamesSelected,
    setGames,
    setGamesSelected,
    addGameSelected,
    removeGameSelected
  }
}

export default useGames
