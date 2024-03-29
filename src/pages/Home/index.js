import React from 'react'
import { Games } from '../../components/Games'
import { Loader } from '../../components/Loader'
import useGames from '../../hooks/useGames'

export const Home = () => {
  const { loading } = useGames()

  if (loading) return <Loader />

  return (
    <>
      <Games />
    </>
  )
}
