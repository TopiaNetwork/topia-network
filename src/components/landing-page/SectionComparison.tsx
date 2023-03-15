import {
  compArweave,
  compFilecoin,
  compItems,
  compSSTORE,
  compTopia,
} from '../../constants/comparison'
import { TopiaLogo } from '../svg/TopiaLogo'

export const SectionComparison = () => {
  return (
    <div className="mt-24 flex justify-center">
      <div className="container mx-4 flex max-w-[1128px] flex-col items-center max-sm:mx-0">
        <div className="text-[40px] font-bold max-sm:text-[36px]">
          COMPARISON
        </div>
        <div className="mt-10 flex w-full items-center overflow-auto">
          <div className="mx-1 flex w-[216px] flex-auto flex-col">
            <div className="my-1 h-[60px] w-full rounded-tl-[40px] border border-solid border-[#273838] bg-[#0E1414] max-lg:h-[93px]" />
            {compItems.map((item, index) => (
              <div
                key={index}
                className="my-1 flex h-[60px] w-full items-center border border-solid border-[#273838] bg-[#0E1414] pl-10 max-lg:h-[93px] max-lg:p-2"
              >
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="mx-1 flex w-[216px] flex-auto flex-col">
            <div className="my-1 flex h-[60px] w-full items-center justify-center border border-solid border-[#273838] bg-[#0E1414] max-lg:h-[93px]">
              <img
                className="h-7"
                src="/img/logo_filecoin.svg"
                alt="Filecoin"
              />
            </div>
            {compFilecoin.map((item, index) => (
              <div
                key={index}
                className="my-1 flex h-[60px] w-full items-center justify-center border border-solid border-[#273838] bg-[#0E1414] px-6 text-center text-sm max-lg:h-[93px]"
              >
                {item === true ? (
                  <img className="h-6" src="/img/icon_yes.svg" alt="Yes" />
                ) : item === false ? (
                  <img className="h-7" src="/img/icon_no.svg" alt="No" />
                ) : (
                  <span>{item}</span>
                )}
              </div>
            ))}
          </div>
          <div className="mx-1 flex w-[216px] flex-auto flex-col">
            <div className="my-1 flex h-[60px] w-full items-center justify-center border border-solid border-[#273838] bg-[#0E1414] max-lg:h-[93px]">
              <img className="h-7" src="/img/logo_ar.svg" alt="Arweave" />
            </div>
            {compArweave.map((item, index) => (
              <div
                key={index}
                className="my-1 flex h-[60px] w-full items-center justify-center border border-solid border-[#273838] bg-[#0E1414] px-6 text-center text-sm max-lg:h-[93px]"
              >
                {item === true ? (
                  <img className="h-6" src="/img/icon_yes.svg" alt="Yes" />
                ) : item === false ? (
                  <img className="h-7" src="/img/icon_no.svg" alt="No" />
                ) : (
                  <span>{item}</span>
                )}
              </div>
            ))}
          </div>
          <div className="mx-1 flex w-[216px] flex-auto flex-col">
            <div className="my-1 flex h-[60px] w-full items-center justify-center border border-solid border-[#273838] bg-[#0E1414] max-lg:h-[93px]">
              <img
                className="h-8"
                src="/img/logo_eth_sstore.svg"
                alt="ETH SSTORE"
              />
            </div>
            {compSSTORE.map((item, index) => (
              <div
                key={index}
                className="my-1 flex h-[60px] w-full items-center justify-center border border-solid border-[#273838] bg-[#0E1414] px-6 text-center text-sm max-lg:h-[93px]"
              >
                {item === true ? (
                  <img className="h-6" src="/img/icon_yes.svg" alt="Yes" />
                ) : item === false ? (
                  <img className="h-7" src="/img/icon_no.svg" alt="No" />
                ) : (
                  <span>{item}</span>
                )}
              </div>
            ))}
          </div>
          <div className="mx-1 flex w-[252px] flex-auto flex-col">
            <div className="my-1 flex h-[60px] w-full items-center justify-center rounded-tr-[40px] border border-solid border-[#314747] bg-[#151F1F] max-lg:h-[93px]">
              <TopiaLogo className="h-8" />
            </div>
            {compTopia.map((item, index) => (
              <div
                key={index}
                className="my-1 flex h-[63.5px] w-full items-center justify-center border border-solid border-[#314747] bg-[#151F1F] px-6 text-center max-lg:h-[95px]"
              >
                {item === true ? (
                  <img className="h-8" src="/img/icon_yes.svg" alt="Yes" />
                ) : item === false ? (
                  <img className="h-9" src="/img/icon_no.svg" alt="No" />
                ) : (
                  <span>{item}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
