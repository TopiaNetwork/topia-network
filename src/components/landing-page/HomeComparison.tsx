export const HomeComparison = () => {
  const displayComparison = (des: string) => {
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
    <section className="mt-[200px] flex w-full justify-start px-[16px] md:mt-[250px] md:justify-center mxl:mt-[100px]">
      <div className="absolute z-[-1] h-[1100px] max-w-[2080px] sm:w-[calc(100%-32px)] md:w-full">
        <picture className="absolute bottom-[380px] left-0 w-[200px] rotate-[35deg] sm:bottom-[300px] sm:left-0 sm:w-[30%] lt:bottom-[280px] lt:left-0 lt:w-[20%] md:bottom-[300px] md:left-[5%] md:w-[15%] mxl:bottom-[200px] mxl:left-[10%] mxl:w-[25%]">
          <source srcSet="/img/background/pto_07.avif" type="image/avif" />
          <source srcSet="/img/background/pto_07.webp" type="image/webp" />
          <img src="/img/background/pto_07.png" alt="Picture 7 of background" />
        </picture>
      </div>
      <div className="h-[1100px] w-full sm:h-[1350px] md:h-[900px] md:w-auto">
        <div className="mx-auto max-w-[600px] sm:w-full md:w-[993px] md:max-w-max">
          <h1 className="text-center text-[28px] font-bold tracking-wide sm:text-[40px] md:text-[56px]">
            COMPARISON
          </h1>
          <div className="mt-[55px] flex flex-col gap-[30px] md:flex-row md:justify-between md:gap-5">
            <div className="g-card grid flex-1 grid-cols-1 px-[20px] pt-[20px] sm:p-[40px] sm:pb-0 md:h-[450px] md:px-[26px] md:pt-[57px] md:pb-[50px]">
              <h2 className="pb-10 text-[16px] font-medium">
                TopiaDA Vs Danksharding
              </h2>
              {displayComparison(
                'Less technical debt, shorter development time'
              )}
              {displayComparison('Higher throughputs and lower DA cost')}
            </div>
            <div className="g-card grid flex-[1.6] grid-cols-1 px-[20px] pt-[20px] pt-[20px] sm:p-[40px] sm:pb-0 md:h-[450px] md:px-[26px] md:pt-[57px] md:pb-[10px]">
              <h2 className="pb-8 text-[16px] font-medium">
                TopiaDA Vs Celestia, Polygon Avail, ZkPorter
              </h2>
              {displayComparison(
                'Higher security, reuse the decentralized trust of Ethereum network'
              )}
              {displayComparison(
                'Lower cost barriers to kick-start when they are able to leverage on Ethereum’s highly robust security layer'
              )}
              {displayComparison(
                'Pay directly using ETH and other L2 native tokens'
              )}
            </div>
            <div className="g-card grid flex-1 grid-cols-1 px-[20px] pt-[20px] pt-[20px] sm:p-[40px] sm:pb-0 md:h-[450px] md:px-[26px] md:pt-[57px] md:pb-[30px]">
              <h2 className="pb-8 text-[16px] font-medium md:pb-0">
                L2 Integrated TopiaDA Vs Current L2
              </h2>
              {displayComparison('Very high TPS and very low gas fee')}
              {displayComparison('Pay DA fees in native token')}
              {displayComparison('New VMs for the rollup')}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
