'use client'
import { useEffect } from 'react'
import { setRem, setDomFontSizeDebounce } from './rem'

export const Utils = () => {
  useEffect(() => {
    setRem()
    window.addEventListener('resize', setDomFontSizeDebounce)
  })
  return <div></div>
}
