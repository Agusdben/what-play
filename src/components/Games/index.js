import React from 'react'
import { Card } from '../Card'
import { Loader } from '../Loader'
import useGames from '../../hooks/useGames'

import './Games.css'
import { Roll } from '../Roll'

export const Games = () => {
  const { games, loading } = useGames()

  return (
    <>
      {loading && <Loader />}
      {!loading &&
        <>
          <Roll />
          <div className='games'>

            {
              games.map(game => <Card key={game._id} game={game} />)
            }
          </div>
        </>}
    </>
  )
}
