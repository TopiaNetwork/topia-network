export const HomeWhy = () => {
  const displayWhy = (title: string, des: string) => {
    return (
      <div>
        <h3 className="g-back-divide-line text-[31px] phone:text-[21px]">
          {title}
        </h3>
        <p className="mt-[20px] text-[29px] text-white/[.7] phone:text-[14px] phone:leading-[26px]">
          {des}
        </p>
      </div>
    )
  }
  return (
    <section className="flex h-[1500px] w-full justify-center phone:h-screen phone:min-h-[960px]">
      <div className="g-body-container h-full items-start justify-end">
        <div className="flex w-[584px] flex-col py-0 pl-0 pr-0 phone:w-[793px] phone:rounded-[16px] phone:border phone:border-white/10 phone:bg-[#3B5D66]/10 phone:py-[94px] phone:pl-[65px] phone:pr-[50px]">
          <h1 className="ml-[41px] text-[57px] font-semibold tracking-wide phone:ml-0 phone:text-[49px]">
            <b className="text-[#6eff89]">Why</b> Build Topia
          </h1>
          <h2 className="ml-[41px] mt-[19px] mb-[32px] w-[426px] text-[31px] phone:ml-0 phone:mt-[11px] phone:mb-[85px] phone:w-auto phone:text-[14px]">
            Improve the interoperability of smart contracts and distributed
            storage
          </h2>
          <div className="g-card phone:rounded-0 grid flex-grow grid-cols-1 gap-x-[40px] gap-y-[61px] py-[72px] px-[41px] phone:grid-cols-2 phone:gap-x-[40px] phone:gap-y-[78px] phone:border-0 phone:bg-transparent phone:py-0 phone:px-0">
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
