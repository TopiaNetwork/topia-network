'use client'
import { useEffect, useState } from 'react'
import { BackToTop } from '../components/svg/BackToTop'

export const UpToTop = () => {
  const [visibleBackTopBtn, setVisibleBackTopBtn] = useState(false)
  const throttle = (fn: () => void, time: number) => {
    let timer: ReturnType<typeof setTimeout> | null = null
    return (...args: []) => {
      if (!timer) {
        fn.apply(this, args)
        timer = setTimeout(() => {
          timer = null
        }, time)
      }
    }
  }
  const climbToTop = () => {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: 'smooth',
    })
  }
  const detectScroll = () => {
    const scrollTop =
      window.pageXOffset ||
      document.body.scrollTop ||
      document.documentElement.scrollTop ||
      0

    if (scrollTop > 1000) {
      setVisibleBackTopBtn(true)
      return
    }
    setVisibleBackTopBtn(false)
  }
  const handleScroll = throttle(detectScroll, 300)
  useEffect(() => {
    detectScroll()
    window.addEventListener('scroll', handleScroll, true)
  })

  return (
    <>
      {visibleBackTopBtn && (
        <BackToTop
          className={
            'fixed bottom-[16px] right-[16px] z-[999] flex h-[35px] w-[35px] cursor-pointer lt:h-[50px] lt:w-[50px] md:hidden'
          }
          onClick={climbToTop}
        />
      )}
    </>
  )
}
