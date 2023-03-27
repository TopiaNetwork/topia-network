import { FooterLogo } from '../svg/FooterLogo'
import { ArrowUp } from '../svg/ArrowUp'

export const RootFooter = () => {
  return (
    <footer className="z-0 bg-[#0F171A] pt-[20px]">
      <div className="flex justify-center">
        <div className="mx-4 flex h-[95px] max-w-[1120px] flex-auto items-center justify-between">
          <FooterLogo className="h-[36px]" />
          <button className="flex h-[37px] w-[139px] items-center rounded-full bg-[#6eff89] text-black">
            <div className="ml-[4px] h-[31px] rounded-full border border-solid border-black bg-[#4CFF6D]">
              <ArrowUp height={31} />
            </div>
            <p className="ml-[8px] text-[14px]">Back to top</p>
          </button>
          <div className="text-[14px]">@copyright 2023</div>
        </div>
      </div>
    </footer>
  )
}
