import { useContext } from 'react'
import { WindowSizeContext } from '../context/WindowSizeContext'

const useWindowSize = () => {
  const { windowSize } = useContext(WindowSizeContext)

  return { windowSize }
}

export default useWindowSize
