import React from 'react'
import './Loader.css'

export const Loader = () => {
  const loading = ['L', 'O', 'A', 'D', 'I', 'N', 'G']
  return (
    <div className='loader'>
      <span className='loader__joystick'>🎮</span>
      <div className='loader__letters'>
        {
          loading.map((letter, i) => {
            const delay = 50 * i
            return (
              <span key={i} style={{ animationDelay: `${delay}ms` }}>{letter}</span>
            )
          })
        }
      </div>
    </div>
  )
}
