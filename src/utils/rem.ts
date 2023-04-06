import 'client-only'
const baseSize = 10
export const setRem = () => {
  const width = document.documentElement.clientWidth
  // console.log(width)
  if (width < 769) {
    const scale = document.documentElement.clientWidth / 768
    document.getElementsByTagName('html')[0].style.fontSize = `${
      baseSize * scale
    }px`
    return
  }
  if (width < 1350) {
    document.getElementsByTagName('html')[0].style.fontSize = '8px'
    return
  }
  const scale = document.documentElement.clientWidth / 2031
  document.getElementsByTagName('html')[0].style.fontSize = `${
    baseSize * Math.min(scale, 3)
  }px`
}

const debounce = (fn: () => void, wait: number) => {
  let timer: ReturnType<typeof setTimeout> | null = null
  return function () {
    if (timer !== null) {
      clearTimeout(timer)
    }
    timer = setTimeout(fn, wait)
  }
}

export const setDomFontSizeDebounce = debounce(setRem, 100)
// window.addEventListener('resize', setDomFontSizeDebounce)
