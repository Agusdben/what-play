import React, { useEffect, useState } from 'react'
import { Card } from '../../components/Card'
import { GameNotFound } from '../../components/GameNotFound'
import useGames from '../../hooks/useGames'
import './Search.css'
export const Search = ({ keyword }) => {
  const { games } = useGames()
  console.log(keyword)
  const [gamesFinded, setGameFinded] = useState([])
  useEffect(() => {
    const gamesFinded = games.filter(game => game.name.toLowerCase().replace(/\s/g, '').includes(keyword.replace(/["%20"]/g, '')))
    setGameFinded(gamesFinded)
  }, [keyword])
  return (
    <div className='search'>
      {gamesFinded.length > 0 && gamesFinded.map(game => <Card key={game._id} game={game} />)}
      {gamesFinded.length === 0 && <GameNotFound description={keyword} />}
    </div>
  )
}
