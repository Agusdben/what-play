import React, { useState } from 'react'
import { useLocation } from 'wouter'

import './GameSearch.css'

export const GameSearch = () => {
  const [keyword, setKeyword] = useState('')
  const [, setLocation] = useLocation()

  const handleSearch = async (event) => {
    event.preventDefault()
    setKeyword('')
    setLocation(`/search/${keyword.toLowerCase()}`)
  }

  const handleKeyword = ({ target }) => {
    setKeyword(target.value)
  }
  return (
    <div className='game-search'>
      <form onSubmit={handleSearch}>
        <input type='text' onChange={handleKeyword} value={keyword} placeholder='Game name...' autoFocus />
        <button>🔍</button>
      </form>
    </div>
  )
}
