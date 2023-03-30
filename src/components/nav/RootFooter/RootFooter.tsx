'use client'
import { FooterLogo } from '../../svg/FooterLogo'
import { ArrowUp } from '../../svg/ArrowUp'

export const RootFooter = () => {
  const climbToTop = () => {
    window.scrollTo(0, 0)
  }
  return (
    <footer className="z-0 hidden bg-[#0F171A] pt-[20px] md:block">
      <div className="flex justify-center">
        <div className="mx-4 flex h-[95px] max-w-[1120px] flex-auto items-center justify-between">
          <FooterLogo className="h-[36px]" />
          <div
            className="flex h-[37px] w-[159px] cursor-pointer items-center rounded-full bg-[#6eff89] text-black"
            onClick={climbToTop}
          >
            <div className="ml-[4px] h-[31px] w-[31px] rounded-full border border-solid border-black bg-[#4CFF6D]">
              <ArrowUp height="100%" />
            </div>
            <p className="ml-[18px] text-[14px]">Back to top</p>
          </div>
          <div className="text-[14px]">@copyright 2023</div>
        </div>
      </div>
    </footer>
  )
}
