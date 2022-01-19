import { useContext } from 'react'
import GamesContext from '../context/GamesContext'

const useGames = () => {
  const { games, setGames, gamesSelected, setGamesSelected } = useContext(GamesContext)

  const addGameSelected = gameToAdd => {
    setGamesSelected(prev => prev.concat(gameToAdd))
    console.log(gamesSelected)
  }

  const removeGameSelected = gameToRemove => {
    const gamesSelectedUpdate = gamesSelected.filter(gameSelected => gameSelected !== gameToRemove)
    setGamesSelected(gamesSelectedUpdate)
  }

  return {
    games,
    gamesSelected,
    setGames,
    setGamesSelected,
    addGameSelected,
    removeGameSelected
  }
}

export default useGames
