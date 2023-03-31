import { TopiaLogo } from '../../svg/TopiaLogo'
import { HeaderButton } from './HeaderButton'

export const RootHeader = () => {
  return (
    // bg-[#070A0A]
    <header className="fixed top-0 z-10 flex h-[60px] w-full items-center justify-center bg-[#070B0C]/70 md:h-20">
      <div className="g-body-container flex h-full flex-auto items-center justify-between">
        <TopiaLogo className="mt-[2px] w-[100px] sm:w-[140px] md:mt-0" />
        <HeaderButton />
      </div>
    </header>
  )
}
