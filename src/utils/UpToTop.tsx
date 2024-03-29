import { BackToTop } from '../components/svg/BackToTop'

export const UpToTop = () => {
  return (
    <a
      href="#"
      className="sticky top-[-52px] right-[20px] z-[999] float-right h-[36px] w-[36px] translate-y-[100vh] transform cursor-pointer lt:h-[50px] lt:w-[50px] md:hidden"
    >
      <BackToTop />
    </a>
  )
}
