import React, { useEffect, useState } from 'react'
import { GameNotFound } from '../../components/GameNotFound'
import { Games } from '../../components/Games'
import useGames from '../../hooks/useGames'
import './Search.css'

export const Search = ({ keyword }) => {
  const { games } = useGames()
  const [gamesFinded, setGameFinded] = useState(null)

  useEffect(() => {
    const gameDecoded = decodeURIComponent(keyword)
    const gamesFinded = games.filter(game => game.name.toLowerCase().includes(gameDecoded))

    gamesFinded.length === 0
      ? setGameFinded(null)
      : setGameFinded(gamesFinded)
  }, [keyword])

  return (
    <>
      {gamesFinded &&
        <Games games={gamesFinded} />}
      {!gamesFinded && <GameNotFound description={keyword} />}
    </>
  )
}
