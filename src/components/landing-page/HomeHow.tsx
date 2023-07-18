export const HomeHow = () => {
  const displayHow = (des: string) => {
    return (
      <div className="flex w-full flex-col justify-between">
        <div className="g-back-divide-line">
          <div className="h-[2px] w-[31px] bg-[#6eff89] md:w-[25px]"></div>
        </div>
        <p className="mt-[10px] mb-[36px] text-[14px] tracking-wide sm:mt-[20px] sm:mb-[40px] md:mb-[30px] md:mt-0  md:text-[#fff]/90">
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
          <h1 className="pl-[20px] text-[28px] tracking-wide sm:px-[41px] sm:text-[50px] md:text-[56px]">
            <b className="text-[#6eff89]">How</b> to Build
          </h1>
          <h2 className="mb-[26px] mt-[22px] w-[170px] pl-[20px] text-[15px] tracking-wide sm:w-auto sm:px-[41px] md:mb-[56px] md:mt-[30px] md:text-[16px]">
            Provides Ethereum-level security and stability
          </h2>
          <div className="g-card grid grid-cols-1 px-[20px] pt-[20px] sm:px-[41px] sm:pt-[72px] sm:pb-[32px] md:h-[560px] md:pt-[77px] md:pb-[10px] md:pl-[66px] md:pr-[85px]">
            {displayHow(
              'Restaking offers Ethereum-level security and stability, enhancing rewards for Ethereum validators, thus favoring the initial launch of the DA network'
            )}
            {displayHow(
              'Introduction of DAS (Data Availability Sampling) technology ensures data availability and reduces node resource requirements'
            )}
            {displayHow(
              'The use of KZG Commitments, a core technology, provides greater efficiency and prevents fraudulent proofs'
            )}
            {displayHow(
              'Implementation of Proof of Custody ensures proactive and accurate data storage by DA nodes'
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
