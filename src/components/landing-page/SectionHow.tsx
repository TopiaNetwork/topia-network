export const SectionHow = () => {
  return (
    <>
      <div className="flex justify-center bg-[#121A1A]">
        <div className="mx-4 mt-8 mb-32 flex w-[1120px] max-w-[1120px] flex-wrap justify-between">
          <div className="mr-4 mt-6 max-sm:w-full">
            <div className="flex max-sm:flex-col max-sm:text-center">
              <span className="pr-1.5 text-[40px] font-bold text-[#96FA96]">
                HOW
              </span>
              <span className="px-1.5 text-[40px] font-bold">TO</span>
              <span className="px-1.5 text-[40px] font-bold">BUILD</span>
            </div>
            <div className="mt-2.5 max-w-sm px-1 text-sm leading-9 tracking-wide max-sm:max-w-full max-sm:text-center">
              Distributed Storage Deeply Integrated with Layer2
            </div>
          </div>
          <ul className="mt-6 max-w-[720px] flex-auto basis-[560px] list-inside list-none text-sm tracking-wide">
            <li className="flex flex-nowrap items-center py-2">
              <div className="mr-6 h-1.5 w-1.5 flex-shrink-0 rounded bg-white" />
              <span>
                Strong interoperability between storage and smart contracts
              </span>
            </li>
            <li className="flex flex-nowrap items-center py-2">
              <div className="mr-6 h-1.5 w-1.5 flex-shrink-0 rounded bg-white" />
              <span>Storage nodes need to submit storage proofs on-chain</span>
            </li>
            <li className="flex flex-nowrap items-center py-2">
              <div className="mr-6 h-1.5 w-1.5 flex-shrink-0 rounded bg-white" />
              <span>
                Incentives for storage nodes are an integral part of the
                economic model of the native Topia token
              </span>
            </li>
            <li className="flex flex-nowrap items-center py-2">
              <div className="mr-6 h-1.5 w-1.5 flex-shrink-0 rounded bg-white" />
              <span>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                The nodes' effective storage proof data determines their
                corresponding contribution to storage
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="mx-4 w-[1120px] max-w-[1120px] rounded-lg border border-solid border-[#273838] bg-[#0E1414] py-12 px-16 [transform:translateY(-92px)] max-lg:py-3 max-lg:px-4">
          <img src="/img/architecture.svg" alt="" />
        </div>
      </div>
    </>
  )
}
