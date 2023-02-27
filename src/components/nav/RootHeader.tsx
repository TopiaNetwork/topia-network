import { ArrowDropDownIcon } from '../svg/ArrowDropDownIcon'

export const RootHeader = () => {
  return (
    <div className="absolute z-10 flex h-20 w-full items-center justify-center bg-[#0C1414]">
      <div className="mx-4 flex max-w-[1120px] flex-auto items-center justify-between">
        <img className="w-[140px]" src="/img/topia.svg" alt="" />
        <div className="flex justify-between">
          {/*<div className="flex cursor-pointer items-center justify-between pl-12">*/}
          {/*  <p className="mr-3">Build</p>*/}
          {/*  <ArrowDropDownIcon className="w-5" />*/}
          {/*</div>*/}
          {/*<div className="flex cursor-pointer items-center justify-between pl-12">*/}
          {/*  <p className="mr-3">Learn</p>*/}
          {/*  <ArrowDropDownIcon className="w-5" />*/}
          {/*</div>*/}
          <div className="flex cursor-pointer items-center justify-between pl-12">
            <p className="mr-3">Community</p>
            <ArrowDropDownIcon className="w-5" />
          </div>
          <div className="pl-12">Whitepaper</div>
          {/*<div className="pl-14">About Us</div>*/}
        </div>
      </div>
    </div>
  )
}
