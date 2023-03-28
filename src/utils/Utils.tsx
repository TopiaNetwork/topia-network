'use client'
import { useEffect } from 'react'
import { setDomFontSizeDebounce } from './rem'

export const Utils = () => {
  useEffect(() => {
    window.addEventListener('resize', setDomFontSizeDebounce)
  })
  return <div></div>
}
