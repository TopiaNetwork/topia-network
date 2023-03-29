'use client'
import { useEffect, useState } from 'react'
import { ArrowUp } from '../components/svg/ArrowUp'

export const UpToTop = () => {
  const [visibleBackTopBtn, setVisibleBackTopBtn] = useState(false)
  const throttle = (fn: () => void, time: number) => {
    let timer: ReturnType<typeof setTimeout> | null = null
    return (...args: []) => {
      // 若timer === false，则执行，并在指定时间后将timer重制
      if (!timer) {
        fn.apply(this, args)
        timer = setTimeout(() => {
          timer = null
        }, time)
      }
    }
  }
  const climbToTop = () => {
    // window.scrollTo(0, 0)
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

    // console.log(scrollTop)
    // console.log(visibleBackTopBtn)
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
        <div
          className={
            'fixed bottom-[31px] right-[31px] z-[999] flex h-[100px] w-[100px] cursor-pointer flex-col items-center rounded-full border-[2px] border-[#E6E6E6] bg-[#00FF7A]'
          }
          onClick={climbToTop}
        >
          <div className="relative top-[20px] left-[1px] mt-[8px] h-[4px] w-[34px] bg-black"></div>
          <ArrowUp height="100%" />
        </div>
      )}
    </>
  )
}
