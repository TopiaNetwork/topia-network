export const HomeHow = () => {
  const displayHow = (des: string) => {
    return (
      <div className="flex w-full flex-col justify-between">
        <div className="g-back-divide-line">
          <div className="h-[2px] w-[31px] bg-[#6eff89] md:w-[25px]"></div>
        </div>
        <p className="mt-[25px] mb-[50px] text-[14px] font-thin md:mb-[10px] md:mt-0 md:text-[#fff]/90">
          {des}
        </p>
        <div></div>
      </div>
    )
  }
  return (
    <section className="mt-[400px] flex w-full justify-center px-[16px]">
      <div className="absolute z-[-1] h-[1000px] w-full max-w-[2080px]">
        <img
          src="/img/background/pto_10.png"
          alt="Picture 10 of background"
          className="absolute bottom-0 right-[-40%] w-[500px] sm:bottom-[-20%] sm:right-[-30%] sm:w-[600px] lt:right-[-30%] lt:bottom-[-20%] lt:w-[700px] md:right-[-24%] md:bottom-[-20%] md:w-[900px] mxl:right-[-12%] mxl:bottom-[-25%] mxl:w-[952px]"
        ></img>
      </div>
      <div className="h-[1000px] justify-start md:justify-center">
        <div className="w-[290px] sm:w-auto sm:max-w-[504px] md:w-[585px] md:max-w-max">
          <h1 className="pl-[20px] text-[28px]  sm:pl-[63px] sm:text-[50px] md:text-[56px]">
            <b className="text-[#6eff89]">How</b> to Build
          </h1>
          <h2 className="mb-[26px] mt-[22px] max-w-[382px] pl-[20px] text-[15px] sm:pl-[66px] md:mb-[56px] md:mt-[30px] md:w-auto md:text-[14px]">
            Distributed Storage DeeplyIntegrated with Layer2
          </h2>
          <div className="g-card grid grid-cols-1 py-[20px] pl-[20px] pr-[20px] sm:py-[80px] sm:px-[66px] md:h-[560px] md:py-[77px] md:pl-[66px]  md:pr-[85px]">
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
