import { compItems, compTopia, showArr } from '../../../../constants/comparison'
import { TopiaLogo } from '../../../svg/TopiaLogo'
import { ComparisonItem } from './ComparisonItem'

export const ComparisonTable = () => {
  const blockNameRender = (compItems: string[]) => {
    return compItems.map((item, index) => (
      <div
        key={index}
        className="my-[1.5px] flex h-[40px] min-h-[36px] w-full items-center bg-[#3B5D66]/10 pl-[6px] text-[9px] tracking-wide sm:pl-[15px] lt:my-[2px] lt:h-[60px] lt:pl-[20px] lt:text-[14px]"
      >
        <span>{item}</span>
      </div>
    ))
  }
  return (
    <div className="mt-10 grid max-w-[1120px] flex-grow grid-cols-3 items-center gap-x-[3px] gap-y-[20px] overflow-auto lt:grid-cols-5 lt:gap-x-[3px]">
      <input
        id="filecoin"
        type="radio"
        name="status"
        className="peer/filecoin hidden"
        defaultChecked
      />
      <label
        htmlFor="filecoin"
        className="curcor-pointer flex h-[30px] flex-auto basis-[180px] items-center justify-center rounded-[5px] border-[1px] border-white peer-checked/filecoin:border-[#33F8FF] sm:mx-[5px] sm:h-[40px] lt:hidden lt:h-[56px]"
      >
        <img src="/img/logo_filecoin.svg" alt="filecoin" className="h-[50%]" />
      </label>
      <input
        id="arweave"
        type="radio"
        name="status"
        className="peer/arweave hidden"
      />
      <label
        htmlFor="arweave"
        className="curcor-pointer flex h-[30px] flex-auto basis-[180px] items-center justify-center rounded-[5px] border-[1px] border-white peer-checked/arweave:border-[#33F8FF] sm:mx-[5px] sm:h-[40px] lt:hidden lt:h-[56px]"
      >
        <img src="/img/logo_ar.svg" alt="arweave" className="h-[50%]" />
      </label>
      <input
        id="ethsstore"
        type="radio"
        name="status"
        className="peer/ethsstore hidden"
      />
      <label
        htmlFor="ethsstore"
        className="curcor-pointer flex h-[30px] flex-auto basis-[180px] items-center justify-center rounded-[5px] border-[1px] border-white peer-checked/ethsstore:border-[#33F8FF] sm:mx-[5px] sm:h-[40px] lt:hidden lt:h-[56px]"
      >
        <img
          src="/img/logo_eth_sstore.svg"
          alt="ethsstore"
          className="h-[50%]"
        />
      </label>
      <div className="flex flex-grow flex-col">
        <div className="my-[1.5px] h-[40px] w-full bg-[#3B5D66]/10 lt:my-[2px] lt:h-[60px]" />
        {blockNameRender(compItems)}
      </div>
      <div className="hidden peer-checked/filecoin:block lt:block">
        {ComparisonItem(showArr[0])}
      </div>
      <div className="hidden peer-checked/arweave:block lt:block">
        {ComparisonItem(showArr[1])}
      </div>
      <div className="hidden peer-checked/ethsstore:block lt:block">
        {ComparisonItem(showArr[2])}
      </div>
      <div className="flex flex-col">
        <div className="my-[1.5px] flex h-[40px] w-full items-center justify-center rounded-tr-[28px] border-[1px] border-[#fff]/10 bg-[#3B5D66]/10 lt:my-[2px] lt:h-[60px] lt:rounded-tr-[40px] lt:border-0">
          <TopiaLogo className="h-[20px] lt:h-[30px]" />
        </div>
        {compTopia.map((item, index) => (
          <div
            key={index}
            className="my-[1.5px] flex h-[41px] min-h-[36px] w-full items-center justify-center border-[1px] border-[#fff]/10 bg-[#3B5D66]/10 px-0 text-center text-[9px] lt:my-[2px] lt:h-[63.5px] lt:border-0 lt:px-6 lt:text-[15px]"
          >
            {item === true ? (
              <img
                className="h-[28px] lt:h-8"
                src="/img/icon_yes.svg"
                alt="Yes"
              />
            ) : item === false ? (
              <img
                className="h-[33px] lt:h-9"
                src="/img/icon_no.svg"
                alt="No"
              />
            ) : (
              <span>{item}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
