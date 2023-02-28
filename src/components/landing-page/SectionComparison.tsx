import {
  compArweave,
  compFilecoin,
  compItems,
  compSSTORE,
  compTopia,
} from '../../constants/comparison'

export const SectionComparison = () => {
  return (
    <div className="mt-24 flex justify-center">
      <div className="mx-4 flex w-[1128px] max-w-[1128px] flex-col items-center">
        <div className="text-[40px] font-bold">COMPARISON</div>
        <div className="mt-10 flex w-full items-center">
          <div className="mx-1 flex w-[216px] flex-auto flex-col">
            <div className="my-1 h-[60px] w-full rounded-tl-[40px] border border-solid border-[#273838] bg-[#0E1414]" />
            {compItems.map((item, index) => (
              <div
                key={index}
                className="my-1 flex h-[60px] w-full items-center border border-solid border-[#273838] bg-[#0E1414] pl-10"
              >
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="mx-1 flex w-[216px] flex-auto flex-col">
            <div className="my-1 flex h-[60px] w-full items-center justify-center border border-solid border-[#273838] bg-[#0E1414]">
              <img
                className="h-7"
                src="/img/logo_filecoin.svg"
                alt="Filecoin"
              />
            </div>
            {compFilecoin.map((item, index) => (
              <div
                key={index}
                className="my-1 flex h-[60px] w-full items-center justify-center border border-solid border-[#273838] bg-[#0E1414] px-6 text-center text-sm"
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
            <div className="my-1 flex h-[60px] w-full items-center justify-center border border-solid border-[#273838] bg-[#0E1414]">
              <img className="h-7" src="/img/logo_ar.svg" alt="Arweave" />
            </div>
            {compArweave.map((item, index) => (
              <div
                key={index}
                className="my-1 flex h-[60px] w-full items-center justify-center border border-solid border-[#273838] bg-[#0E1414] px-6 text-center text-sm"
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
            <div className="my-1 flex h-[60px] w-full items-center justify-center border border-solid border-[#273838] bg-[#0E1414]">
              <img
                className="h-8"
                src="/img/logo_eth_sstore.svg"
                alt="ETH SSTORE"
              />
            </div>
            {compSSTORE.map((item, index) => (
              <div
                key={index}
                className="my-1 flex h-[60px] w-full items-center justify-center border border-solid border-[#273838] bg-[#0E1414] px-6 text-center text-sm"
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
            <div className="my-1 flex h-[60px] w-full items-center justify-center rounded-tr-[40px] border border-solid border-[#314747] bg-[#151F1F]">
              <img className="h-8" src="/img/topia.svg" alt="Topia" />
            </div>
            {compTopia.map((item, index) => (
              <div
                key={index}
                className="my-1 flex h-[63.5px] w-full items-center justify-center border border-solid border-[#314747] bg-[#151F1F] px-6 text-center"
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
