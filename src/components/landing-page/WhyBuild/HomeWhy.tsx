export const HomeWhy = () => {
  const displayWhy = (title: string, des: string) => {
    return (
      <div>
        <h3 className="g-back-divide-line text-[16px] md:text-[21px]">
          {title}
        </h3>
        <p className="mt-[10px] text-[14px] tracking-wide text-white/[.9] md:text-[14px] md:leading-[26px]">
          {des}
        </p>
      </div>
    )
  }
  return (
    <section className="relative flex w-full justify-center lt:mt-[200px]">
      <div className="absolute z-[-1] h-full w-full max-w-[2080px]">
        <picture className="absolute left-[-50%] top-[30%] w-[400px] rotate-[-10deg] sm:top-[40%] sm:left-[-35%] sm:w-[400px] lt:w-[523px] md:left-[-20%] md:w-[834px] md:rotate-0 mxl:top-[20%] mxl:left-[5%] mxl:w-[825px]">
          <source srcSet="/img/background/pto_03.avif" type="image/avif" />
          <source srcSet="/img/background/pto_03.webp" type="image/webp" />
          <img src="/img/background/pto_03.png" alt="Picture 3 of background" />
        </picture>
        <picture className="absolute right-0 bottom-[-10%] w-[150px] sm:right-0 sm:bottom-[-10%] sm:w-[180px] lt:right-0 lt:bottom-[-15%] lt:w-[200px] md:bottom-[-15%] md:right-0 md:w-[262px] mxl:right-[15%] mxl:bottom-[-10%] mxl:w-[340px]">
          <source srcSet="/img/background/pto_04.avif" type="image/avif" />
          <source srcSet="/img/background/pto_04.webp" type="image/webp" />
          <img src="/img/background/pto_04.png" alt="Picture 4 of background" />
        </picture>
      </div>
      <div className="g-body-container h-full items-start justify-end">
        <div className="flex w-[285px] flex-col py-0 pl-0 pr-0 sm:w-auto sm:max-w-[584px] md:w-[893px] md:max-w-max md:rounded-[16px] md:border md:border-white/10 md:bg-[#3B5D66]/10 md:pt-[90px] md:pb-[95px] md:pl-[65px] md:pr-[50px]">
          <h1 className="ml-[20px] text-[28px] font-semibold tracking-wide sm:ml-[41px] sm:text-[50px] md:ml-0 md:text-[56px]">
            <b className="text-[#6eff89]">Why</b> Build Topia
          </h1>
          <h2 className="ml-[20px] mt-[19px] mb-[32px] text-[15px] tracking-wide sm:ml-[41px] md:ml-0 md:mt-[11px] md:mb-[85px] md:w-auto md:text-[16px]">
            Scaling the data storage capability of Ethereum while significantly
            reducing KV storage costs
          </h2>
          <div className="g-card md:rounded-0 grid flex-grow grid-cols-1 gap-x-[40px] gap-y-[26px] py-[20px] px-[20px] sm:gap-y-[61px] sm:py-[72px] sm:px-[41px] md:grid-cols-2 md:gap-x-[40px] md:gap-y-[78px] md:border-0 md:bg-transparent md:py-0 md:px-0">
            {displayWhy(
              'IMPROVE',
              'Improve the interoperability of smart contracts and distributed storage'
            )}
            {displayWhy(
              'ACHIEVE',
              'Ultimately achieve full on-chain applications and personal data sovereignty'
            )}
            {displayWhy(
              'REDUCING',
              'Significantly reducing data storage costs'
            )}
            {displayWhy(
              'EXPAND',
              "Expand Ethereum's data storage capabilities"
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
