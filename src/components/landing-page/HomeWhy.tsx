export const HomeWhy = () => {
  const displayWhy = (title: string, des: string) => {
    return (
      <div className="w-[420px]">
        <h3 className="text-[29px]">{title}</h3>
        <p className="mt-8 text-[19px] text-[#C4C5C5]">{des}</p>
      </div>
    )
  }
  return (
    <section className="g-page-height flex w-full justify-center">
      <div className="g-body-container h-full items-center justify-end">
        <div className="flex h-[783px] w-[1064px] flex-col rounded-[22px] bg-[#3B5D66]/10 p-[89px]">
          <h1 className="text-[68px]">
            <b className="text-[#6EFF89]">Why</b> Build Topia
          </h1>
          <h2 className="mt-1 mb-28">
            Improve the interoperability of smart contracts and distributed
            storage
          </h2>
          <div className="grid flex-grow grid-cols-2">
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
              'Significantly reducing on-chain storage costs'
            )}
            {displayWhy(
              'EXPAND',
              'Expand Ethereum&#39;s data storage capabilities'
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
