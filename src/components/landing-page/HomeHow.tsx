export const HomeHow = () => {
  const displayHow = (des: string) => {
    return (
      <div className="flex w-full flex-col justify-between">
        <div className="g-back-divide-line">
          <div className="h-[2px] w-[31px] bg-[#6eff89] md:w-[25px]"></div>
        </div>
        <p className="mt-[10px] mb-[20px] text-[23px] font-thin sm:mb-[10px] md:mt-0 md:text-[14px] md:text-[#fff]/90">
          {des}
        </p>
        <div></div>
      </div>
    )
  }
  return (
    <section className="g-page-height flex w-full justify-center">
      <div className="g-body-container justify-center">
        <div className="flex max-w-[594px] flex-col md:w-[585px]">
          <h1 className="pl-[20px] text-[38px]  sm:pl-[63px] sm:text-[56px]">
            <b className="text-[#6eff89]">How</b> to Build
          </h1>
          <h2 className="mb-[26px] mt-[22px] max-w-[382px] pl-[20px] text-[25px] sm:pl-[66px] sm:text-[31px] md:mb-[56px] md:mt-[30px] md:w-auto md:text-[14px]">
            Distributed Storage DeeplyIntegrated with Layer2
          </h2>
          <div className="g-card grid grid-cols-1 py-[20px] pl-[20px] pr-[20px] sm:py-[73px] sm:pl-[66px] sm:pr-[85px] md:h-[560px]  md:py-[77px]">
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
