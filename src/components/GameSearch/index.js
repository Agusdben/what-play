import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'wouter'
import useGames from '../../hooks/useGames'

import './GameSearch.css'

export const GameSearch = () => {
  const { games } = useGames()
  const [keyword, setKeyword] = useState('')
  const [gamesFinded, setGamesFinded] = useState([])
  const [location, setLocation] = useLocation()

  useEffect(() => {
    setGamesFinded([])
  }, [location])

  const handleSearch = async (event) => {
    event.preventDefault()
    if (keyword !== '') setLocation(`/search/${keyword.toLowerCase()}`)
    setGamesFinded([])
  }

  const handleKeyword = ({ target }) => {
    setKeyword(target.value)
    const gamesFinded = games.filter(game => game.name.toLowerCase().includes(target.value.toLowerCase()))
    target.value === '' ? setGamesFinded([]) : setGamesFinded(gamesFinded)
  }

  return (
    <section className='game-search'>
      <form className='game-search__form' onSubmit={handleSearch}>
        <button>🔍</button>
        <label className='game-search__input'>
          <input type='text' onChange={handleKeyword} value={keyword} placeholder='Game name...' autoFocus />
          <ul className='game-search__box-results'>
            {
              gamesFinded.map((game) =>
                <li key={game._id}>
                  <Link to={`/search/${game.name.toLowerCase()}`}>{game.name}</Link>
                  <img src={game.url} alt={game.name} />
                </li>
              )
            }
          </ul>
        </label>
      </form>

    </section>
  )
}
