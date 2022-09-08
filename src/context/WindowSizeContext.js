import React, { createContext, useEffect, useState } from 'react'
import getWindowSize from '../helpers/getWindowSize'

export const WindowSizeContext = createContext(null)

export const WindowSizeContextProvider = ({ children }) => {
  const [windowSize, setWindowSize] = useState(getWindowSize())

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(getWindowSize())
    }

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  return (
    <WindowSizeContext.Provider value={{
      windowSize
    }}
    >
      {children}
    </WindowSizeContext.Provider>
  )
}
