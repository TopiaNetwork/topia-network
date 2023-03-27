export const HomeWhy = () => {
  const displayWhy = (title: string, des: string) => {
    return (
      <div>
        <h3 className="g-back-divide-line text-[21px]">{title}</h3>
        <p className="mt-[20px] text-[14px] leading-[26px] text-white/[.7]">
          {des}
        </p>
      </div>
    )
  }
  return (
    <section className="g-page-height flex w-full justify-center">
      <div className="g-body-container h-full items-center justify-end">
        <div className="g-card flex w-[793px] flex-col py-[94px] pl-[65px] pr-[50px]">
          <h1 className="text-[49px] font-semibold tracking-wide">
            <b className="text-[#6eff89]">Why</b> Build Topia
          </h1>
          <h2 className="mt-[11px] mb-[85px] text-[14px]">
            Scaling the data storage capability of Ethereum while significantly
            reducing KV storage costs
          </h2>
          <div className="grid flex-grow grid-cols-2 gap-x-[50px] gap-y-[78px]">
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
