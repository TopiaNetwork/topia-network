import 'client-only'
const baseSize = 10
export const setRem = () => {
  const width = document.documentElement.clientWidth
  console.log(width)
  if (width < 1300) {
    if (width < 769) {
      document.getElementsByTagName('html')[0].style.fontSize = '10px'
      return
    }
    document.getElementsByTagName('html')[0].style.fontSize = '6.5px'
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
