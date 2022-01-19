import { useContext } from 'react'
import GamesContext from '../context/GamesContext'

const useGames = () => {
  const { games, setGames, gamesSelected, setGamesSelected } = useContext(GamesContext)
  return {
    games,
    gamesSelected,
    setGames,
    setGamesSelected
  }
}

export default useGames
