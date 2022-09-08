/* global IntersectionObserver */

import { useState, useEffect } from 'react'

const useInView = (ref) => {
  const [isInView, setIsInView] = useState(false)

  const observer = new IntersectionObserver(
    ([entry]) => {
      setIsInView(entry.isIntersecting)
      if (entry.isIntersecting) {
        observer.unobserve(ref.current)
      }
    })

  useEffect(() => {
    observer.observe(ref.current)
    return () => { observer.disconnect() }
  }, [])

  return isInView
}

export default useInView
