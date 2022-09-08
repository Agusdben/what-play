import React, { useEffect, useState } from 'react'
import Card from '../../components/Card'
import { GameNotFound } from '../../components/GameNotFound'
import useGames from '../../hooks/useGames'
import './Search.css'
export const Search = ({ keyword }) => {
  const { games } = useGames()
  const [gamesFinded, setGameFinded] = useState([])
  useEffect(() => {
    const gamesFinded = games.filter(game => game.name.toLowerCase().replace(/\s/g, '').includes(keyword.replace(/["%20"]/g, '')))
    setGameFinded(gamesFinded)
  }, [keyword])
  return (
    <>
      {gamesFinded.length > 0 &&
        <div className='games'>
          {
            gamesFinded.map(game => <Card key={game._id} game={game} />)
          }
        </div>}
      {gamesFinded.length === 0 && <GameNotFound description={keyword} />}
    </>
  )
}
