import { useContext } from 'react'
import GamesContext from '../context/GamesContext'

const useGames = () => {
  const { games, loading, setGames, gamesSelected, setGamesSelected } = useContext(GamesContext)

  const addGameSelected = gameToAdd => {
    setGamesSelected(prev => prev.concat(gameToAdd))
    window.localStorage.setItem('storedGamesSelected', JSON.stringify(gamesSelected.concat(gameToAdd)))
  }

  const removeGameSelected = gameToRemove => {
    console.log(gameToRemove, gamesSelected)
    const index = gamesSelected.indexOf(gameToRemove)
    gamesSelected.splice(index, 1)
    setGamesSelected(gamesSelected)
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
