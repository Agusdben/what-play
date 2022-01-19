import React, { useEffect, useState } from 'react'
import { Card } from '../../components/Card'
import useGames from '../../hooks/useGames'

export const Search = ({ keyword }) => {
  const { games } = useGames()
  console.log(keyword)
  const [game, setGame] = useState([])
  useEffect(() => {
    const [game] = games.filter(game => game.name.toLowerCase().replace(/\s/g, '') === keyword.replace(/["%20"]/g, ''))
    console.log(game)
    setGame(game)
  }, [keyword])
  return (
    <>
      {game && <Card game={game} />}
      {!game && <p>Not Found</p>}
    </>
  )
}
