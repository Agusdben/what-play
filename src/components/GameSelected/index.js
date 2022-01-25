import React from 'react'

export const GameSelected = ({ game }) => {
  return (
    <p style={{ width: '100%', textAlign: 'center', color: 'var(--main-color)', fontSize: '1.5rem' }}>{game}</p>
  )
}
