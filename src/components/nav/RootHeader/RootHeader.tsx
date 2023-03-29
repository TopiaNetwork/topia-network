import { TopiaLogo } from '../../svg/TopiaLogo'
import { HeaderButton } from './HeaderButton'

export const RootHeader = () => {
  return (
    // bg-[#070A0A]
    <header className="fixed top-0 z-10 flex h-[90px] w-full items-center justify-center bg-[#070B0C]/70 phone:h-20">
      <div className="g-body-container flex h-full flex-auto items-center justify-between">
        <TopiaLogo className="mt-[2px] w-[200px] phone:mt-0 phone:w-[140px]" />
        <HeaderButton />
      </div>
    </header>
  )
}
