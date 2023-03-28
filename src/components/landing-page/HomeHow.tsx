export const HomeHow = () => {
  const displayHow = (des: string) => {
    return (
      <div className="flex w-full flex-col justify-between">
        <div className="g-back-divide-line">
          <div className="h-[2px] w-[31px] bg-[#6eff89] phone:w-[25px]"></div>
        </div>
        <p className="mb-[10px] text-[29px] font-thin phone:text-[14px] phone:text-[#fff]/90">
          {des}
        </p>
        <div></div>
      </div>
    )
  }
  return (
    <section className="g-page-height flex w-full items-center justify-center">
      <div className="g-body-container justify-center">
        <div className="flex w-[594px] flex-col phone:w-[585px]">
          <h1 className="pl-[63px] text-[56px]">
            <b className="text-[#6eff89]">How</b> to Build
          </h1>
          <h2 className="mb-[26px] mt-[22px] pl-[66px] text-[31px] phone:mb-[56px] phone:mt-[30px] phone:text-[14px]">
            Distributed Storage DeeplyIntegrated with Layer2
          </h2>
          <div className="g-card grid h-[703px] grid-cols-1 py-[73px] pl-[66px] pr-[85px] phone:h-[560px]  phone:py-[77px]">
            {displayHow('The first evm-compatible storage layer2 based on OP')}
            {displayHow(
              'Strong interoperability between storage and smart contracts'
            )}
            {displayHow('Storage nodes need to submit storage proofs on-chain')}
            {displayHow(
              'Incentives for storage nodes are an integral part of the economic model of the native Topia token'
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
