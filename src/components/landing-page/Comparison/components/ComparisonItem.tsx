import { compareItem } from '../../../../constants/comparison'

export const ComparisonItem = (data: compareItem) => {
  const { logo, logoname, compItems } = data
  return (
    <div className="flex w-full flex-col" key={logoname}>
      <div className="my-[1.5px] flex h-[40px] w-full flex-auto items-center justify-center bg-[#3B5D66]/10 lt:my-[2px] lt:h-[60px]">
        <img className="h-[20px] lt:h-[30px]" src={logo} alt={logoname} />
      </div>
      {compItems.map((item, index) => (
        <div
          key={index}
          className="my-[1.5px] flex h-[40px] min-h-[36px] w-full items-center justify-center bg-[#3B5D66]/10 px-0 text-center text-[9px] lt:my-[2px] lt:h-[60px] lt:px-6 lt:text-[14px]"
        >
          {item === true ? (
            <img
              className="h-[25px] lt:h-6"
              src="/img/icon_yes.svg"
              alt="Yes"
            />
          ) : item === false ? (
            <img className="h-[30px] lt:h-7" src="/img/icon_no.svg" alt="No" />
          ) : (
            <span>{item}</span>
          )}
        </div>
      ))}
    </div>
  )
}
