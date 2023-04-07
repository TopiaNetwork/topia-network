export const HomeHow = () => {
  const displayHow = (des: string) => {
    return (
      <div className="flex w-full flex-col justify-between">
        <div className="g-back-divide-line">
          <div className="h-[2px] w-[31px] bg-[#6eff89] md:w-[25px]"></div>
        </div>
        <p className="mt-[10px] mb-[20px] text-[14px] tracking-wide sm:mt-[20px] sm:mb-[40px] md:mb-[30px] md:mt-0  md:text-[#fff]/90">
          {des}
        </p>
        <div></div>
      </div>
    )
  }
  return (
    <section className="mt-[200px] flex w-full justify-start px-[16px] md:mt-[400px] md:justify-center">
      <div className="absolute z-[-1] h-[1000px] w-full max-w-[2080px]">
        <picture className="absolute bottom-[100px] right-[-40%] w-[500px] sm:bottom-[-2%] sm:right-[-30%] sm:w-[600px] lt:right-[-30%] lt:bottom-[-20%] lt:w-[700px] md:right-[-24%] md:bottom-[-20%] md:w-[900px] mxl:right-[-12%] mxl:bottom-[-25%] mxl:w-[952px]">
          <source srcSet="/img/background/pto_10.avif" type="image/avif" />
          <source srcSet="/img/background/pto_10.webp" type="image/webp" />
          <img
            src="/img/background/pto_10.png"
            alt="Picture 10 of background"
          />
        </picture>
      </div>
      <div className="h-[800px] md:h-[1000px]">
        <div className="w-[290px] sm:w-auto sm:max-w-[504px] md:w-[585px] md:max-w-max">
          <h1 className="pl-[20px] text-[28px] tracking-wide sm:px-[63px] sm:text-[50px] md:text-[56px]">
            <b className="text-[#6eff89]">How</b> to Build
          </h1>
          <h2 className="mb-[26px] mt-[22px] w-[170px] pl-[20px] text-[15px] tracking-wide sm:w-auto sm:px-[66px] md:mb-[56px] md:mt-[30px] md:text-[16px]">
            Distributed Storage DeeplyIntegrated with Layer2
          </h2>
          <div className="g-card grid grid-cols-1 px-[20px] pt-[20px] sm:px-[66px] sm:pt-[80px] sm:pb-[30px] md:h-[560px] md:pt-[77px] md:pb-[10px] md:pl-[66px] md:pr-[85px]">
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
