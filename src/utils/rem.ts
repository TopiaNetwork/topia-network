import 'client-only'
const baseSize = 10
const setRem = () => {
  // console.log(document.documentElement.clientWidth)
  const scale = document.documentElement.clientWidth / 2031
  if (scale < 0.7) {
    return
  }
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
