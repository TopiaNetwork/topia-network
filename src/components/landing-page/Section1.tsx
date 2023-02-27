import { UniverseBg1 } from '../svg/Universe-bg1'

export const Section1 = () => {
  return (
    <div className="overflow-hidden">
      <div className="h-[1000px] min-h-screen">
        <div className="flex min-h-screen items-center justify-center">
          <div className="relative flex flex-col items-center">
            <div className="absolute z-[-1] flex w-full justify-center">
              <div>
                <UniverseBg1 className="w-[1680px]" />
              </div>
            </div>
            <div className="font-bold">
              <span className="px-3.5 text-[76px] text-[#33F8FF]">SCALE</span>
              <span className="px-3.5 text-[76px]">TO</span>
              <span className="px-3.5 text-[76px] text-[#96FA96]">
                INFINITY
              </span>
            </div>
            <div className="mt-3 text-3xl font-light">
              EVM Compatible Storage Layer2
            </div>
            <div className="my-16 flex items-center justify-center rounded-full bg-[#96FA96]">
              <span className="py-2 px-5 text-black">Start Building</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[rgba(0,0,0,0.8)] pb-[340px]">
        <div className="flex justify-center pt-[68px]">
          <span className="px-1.5 text-[40px] font-bold text-[#96FA96]">
            WHY
          </span>
          <span className="px-1.5 text-[40px] font-bold">BUILD</span>
          <span className="px-1.5 text-[40px] font-bold">TOPIA</span>
        </div>
        <div className="mx-4 mt-6 flex justify-center tracking-wide">
          Scaling the data storage capability of Ethereum for fully on-chain
          Dapps and personal data sovereignty.
        </div>
        <div className="flex justify-center">
          <div className="mx-4 mt-10 grid w-[1120px] min-w-0 max-w-[1120px] grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-7">
            <div className="flex h-[216px] items-center justify-between rounded-lg border border-solid border-[#273838] bg-[#0E1414] py-4 pl-10 pr-7 shadow-[0_3px_5px_0px_rgba(150,250,150,0.1)]">
              <div>
                <div className="text-xl font-bold tracking-wide">IMPROVE</div>
                <div className="mt-4 max-w-xs leading-8 tracking-wide">
                  Improve the interoperability of smart contracts and
                  distributed storage
                </div>
              </div>
              <img
                className="w-[90px] pt-6"
                src="/img/feature_improve.svg"
                alt=""
              />
            </div>
            <div className="flex h-[216px] items-center justify-between rounded-lg border border-solid border-[#273838] bg-[#0E1414] py-4 pl-10 pr-7 shadow-[0_3px_5px_0px_rgba(150,250,150,0.1)]">
              <div>
                <div className="text-xl font-bold tracking-wide">EXPAND</div>
                <div className="mt-4 max-w-xs leading-8 tracking-wide">
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  Expand Ethereum's data storage capabilities
                </div>
              </div>
              <img
                className="w-[90px] pt-6"
                src="/img/feature_expand.svg"
                alt=""
              />
            </div>
            <div className="flex h-[216px] items-center justify-between rounded-lg border border-solid border-[#273838] bg-[#0E1414] py-4 pl-10 pr-7 shadow-[0_3px_5px_0px_rgba(150,250,150,0.1)]">
              <div>
                <div className="text-xl font-bold tracking-wide">REDUCING</div>
                <div className="mt-4 max-w-[280px] leading-8 tracking-wide">
                  Significantly reducing on-chain storage costs
                </div>
              </div>
              <img
                className="w-[90px] pt-6"
                src="/img/feature_reducing.svg"
                alt=""
              />
            </div>
            <div className="flex h-[216px] items-center justify-between rounded-lg border border-solid border-[#273838] bg-[#0E1414] py-4 pl-10 pr-7 shadow-[0_3px_5px_0px_rgba(150,250,150,0.1)]">
              <div>
                <div className="text-xl font-bold tracking-wide">ACHIEVE</div>
                <div className="mt-4 max-w-[368px] leading-8 tracking-wide">
                  Ultimately achieve full on-chain applications and personal
                  data sovereignty
                </div>
              </div>
              <img
                className="w-[90px] pt-6"
                src="/img/feature_achieve.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}