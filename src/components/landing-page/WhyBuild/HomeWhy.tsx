export const HomeWhy = () => {
  const displayWhy = (title: string, des: string) => {
    return (
      <div>
        <h3 className="g-back-divide-line text-[28px] sm:text-[31px] md:text-[21px]">
          {title}
        </h3>
        <p className="mt-[20px] text-[23px] text-white/[.7] sm:text-[27px] md:text-[14px] md:leading-[26px]">
          {des}
        </p>
      </div>
    )
  }
  return (
    <section className="mt-[100px] flex h-[1500px] w-full justify-center md:h-screen md:max-h-[1300px] md:min-h-[960px]">
      <div className="g-body-container h-full items-start justify-end">
        <div className="flex w-auto flex-col py-0 pl-0 pr-0 sm:max-w-[584px] md:w-[793px] md:rounded-[16px] md:border md:border-white/10 md:bg-[#3B5D66]/10 md:py-[94px] md:pl-[65px] md:pr-[50px]">
          <h1 className="ml-[20px] text-[38px] font-semibold tracking-wide sm:ml-[41px] sm:text-[57px] md:ml-0 md:text-[49px]">
            <b className="text-[#6eff89]">Why</b> Build Topia
          </h1>
          <h2 className="ml-[20px] mt-[19px] mb-[32px] max-w-[426px] text-[20px] sm:ml-[41px] sm:text-[28px] md:ml-0 md:mt-[11px] md:mb-[85px] md:w-auto md:text-[14px]">
            Scaling the data storage capability of Ethereum while significantly
            reducing KV storage costs
          </h2>
          <div className="g-card md:rounded-0 grid flex-grow grid-cols-1 gap-x-[40px] gap-y-[61px] py-[20px] px-[20px] sm:py-[72px] sm:px-[41px] md:grid-cols-2 md:gap-x-[40px] md:gap-y-[78px] md:border-0 md:bg-transparent md:py-0 md:px-0">
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
