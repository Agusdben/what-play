import React, { useState } from 'react'
import { useLocation } from 'wouter'
import useGames from '../../hooks/useGames'

import './GameSearch.css'

export const GameSearch = () => {
  const { games } = useGames()
  const [keyword, setKeyword] = useState('')
  const [gamesFinded, setGamesFinded] = useState([])
  const [, setLocation] = useLocation()

  const handleSearch = async (event) => {
    event.preventDefault()
    if (keyword !== '') setLocation(`/search/${keyword.toLowerCase()}`)
    setKeyword('')
    setGamesFinded([])
  }

  const handleKeyword = ({ target }) => {
    setKeyword(target.value)
    const gamesFinded = games.filter(game => game.name.toLowerCase().includes(target.value.toLowerCase()))
    target.value === '' ? setGamesFinded([]) : setGamesFinded(gamesFinded)
  }

  const handleSearchByClick = (e) => {
    console.log(e.target.innerText.toLowerCase())
    setLocation(`/search/${e.target.innerText.toLowerCase()}`)
    setKeyword('')
    setGamesFinded([])
  }

  return (
    <div className='game-search'>
      <div className='game-search__container'>
        <form onSubmit={handleSearch}>
          <input type='text' onChange={handleKeyword} value={keyword} placeholder='Game name...' autoFocus />
          <button>🔍</button>
        </form>
        <div className='game-search__box-results'>
          {
            gamesFinded.map((game) =>
              <div key={game._id} onClick={handleSearchByClick}>
                <p>{game.name}</p>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}
