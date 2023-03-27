import { TopiaLogo } from '../../svg/TopiaLogo'
import { HeaderButton } from './HeaderButton'

export const RootHeader = () => {
  return (
    // bg-[#070A0A]
    <header className="fixed z-10 flex h-20 w-full items-center justify-center bg-[#070B0C]/70">
      <div className="g-body-container flex flex-auto items-center justify-between">
        <TopiaLogo className="w-[140px]" />
        <HeaderButton />
      </div>
    </header>
  )
}
