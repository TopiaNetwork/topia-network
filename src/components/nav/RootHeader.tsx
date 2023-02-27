import { ArrowDropDownIcon } from '../svg/ArrowDropDownIcon'

export const RootHeader = () => {
  return (
    <div className="fixed z-10 flex h-20 w-full items-center justify-center bg-black">
      <div className="mx-4 flex max-w-[1120px] flex-auto items-center justify-between">
        <img className="w-[140px]" src="/img/topia.svg" alt="" />
        <div className="flex items-center justify-between">
          {/*<div className="flex cursor-pointer items-center justify-between pl-12">*/}
          {/*  <p className="mr-3">Build</p>*/}
          {/*  <ArrowDropDownIcon className="w-5" />*/}
          {/*</div>*/}
          {/*<div className="flex cursor-pointer items-center justify-between pl-12">*/}
          {/*  <p className="mr-3">Learn</p>*/}
          {/*  <ArrowDropDownIcon className="w-5" />*/}
          {/*</div>*/}
          <div className="group/0 relative pl-12">
            <div className="group/1 flex cursor-pointer items-center justify-between py-3">
              <p className="mr-3 group-hover/1:text-[#96FA96]">Community</p>
              <ArrowDropDownIcon className="w-5 group-hover/1:fill-[#96FA96]" />
            </div>
            <div className="invisible absolute top-full right-0 rounded-[10px] border border-solid border-[#1A2626] bg-[#070A0A] py-2 opacity-0 transition-all group-hover/0:visible group-hover/0:opacity-100">
              <div className="px-8 py-2 hover:text-[#96FA96]">Twitter</div>
              <div className="px-8 py-2 hover:text-[#96FA96]">Discord</div>
              <div className="px-8 py-2 hover:text-[#96FA96]">Medium</div>
            </div>
          </div>
          <div className="pl-12 hover:text-[#96FA96]">Whitepaper</div>
          {/*<div className="pl-14">About Us</div>*/}
        </div>
      </div>
    </div>
  )
}
