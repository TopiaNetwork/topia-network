/*
 * @Date: 2023-03-14 11:26:17
 * @LastEditTime: 2023-03-14 17:53:04
 */
import { TopiaLogo } from '../svg/TopiaLogo'
import { HeaderButton } from './HeaderButton'

export const RootHeader = () => {
  return (
    <header className="fixed z-10 flex h-20 w-full items-center justify-center bg-[#070A0A]">
      <div className="mx-4 flex max-w-[1120px] flex-auto items-center justify-between">
        <TopiaLogo className="w-[140px]" />
        <HeaderButton />
      </div>
    </header>
  )
}
