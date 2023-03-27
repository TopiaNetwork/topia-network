import {
  compArweave,
  compFilecoin,
  compItems,
  compSSTORE,
  compTopia,
} from '../../constants/comparison'
import { TopiaLogo } from '../svg/TopiaLogo'

export const HomeComparison = () => {
  const blockNameRender = (compItems: string[]) => {
    return compItems.map((item, index) => (
      <div
        key={index}
        className="my-1 flex h-[60px] w-full items-center border border-solid border-[#273838] bg-[#3B5D66]/10 pl-10"
      >
        <span>{item}</span>
      </div>
    ))
  }
  const blockItemRender = (
    logo: string,
    logoname: string,
    compItems: (string | boolean)[]
  ) => {
    return (
      <div className="mx-1 flex w-[216px] min-w-[200px] flex-col">
        <div className="my-1 flex h-[60px] w-full flex-auto items-center justify-center border border-solid border-[#273838] bg-[#3B5D66]/10">
          <img className="h-7" src={logo} alt={logoname} />
        </div>
        {compItems.map((item, index) => (
          <div
            key={index}
            className="my-1 flex h-[60px] w-full items-center justify-center border border-solid border-[#273838] bg-[#3B5D66]/10 px-6 text-center text-sm"
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
    )
  }

  return (
    <section className="g-page-height mt-24 flex justify-center">
      <div className="g-body-container flex max-w-full flex-col items-center">
        <div className="text-[56px] font-bold tracking-[1.5px] max-2xl:text-[54px] max-lg:text-[41px] max-md:text-[34px] max-sm:text-[34px]">
          Decentralized Storage Comparison
        </div>
        <div className="flex w-screen max-w-full justify-center">
          <div className="mt-10 flex items-center overflow-auto">
            <div className="mr-1 flex w-[216px] min-w-[200px] flex-auto flex-col">
              <div className="my-1 h-[60px] w-full rounded-tl-[40px] border border-solid border-[#273838] bg-[#3B5D66]/10" />
              {blockNameRender(compItems)}
            </div>
            {blockItemRender(
              '/img/logo_filecoin.svg',
              'Filecoin',
              compFilecoin
            )}
            {blockItemRender('/img/logo_ar.svg', 'Arweave', compArweave)}
            {blockItemRender(
              '/img/logo_eth_sstore.svg',
              'ETH SSTORE',
              compSSTORE
            )}
            <div className="ml-1 flex w-[222px] min-w-[200px] flex-auto flex-col">
              <div className="my-1 flex h-[60px] w-full items-center justify-center rounded-tr-[40px] border border-solid border-[#314747] bg-[#3B5D66]/10">
                <TopiaLogo className="h-8" />
              </div>
              {compTopia.map((item, index) => (
                <div
                  key={index}
                  className="my-1 flex h-[63.5px] w-full items-center justify-center border border-solid border-[#314747] bg-[#3B5D66]/10 px-6 text-center"
                >
                  {item === true ? (
                    <img className="h-8" src="/img/icon_yes.svg" alt="Yes" />
                  ) : item === false ? (
                    <img className="h-9" src="/img/icon_no.svg" alt="No" />
                  ) : (
                    <span className="font-semibold">{item}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
