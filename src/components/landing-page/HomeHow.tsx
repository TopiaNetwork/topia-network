export const HomeHow = () => {
  const displayHow = (des: string) => {
    return (
      <div className="flex w-full flex-col justify-between">
        <div className="g-back-divide-line">
          <div className="h-[2px] w-[25px] bg-[#6eff89]"></div>
        </div>
        <p className="mb-[10px] text-[14px]">{des}</p>
        <div></div>
      </div>
    )
  }
  return (
    <section className="g-page-height flex w-full items-center justify-center">
      <div className="g-body-container justify-center">
        <div className="flex w-[585px] flex-col">
          <h1 className="pl-[66px] text-[56px]">
            <b className="text-[#6eff89]">How</b> to Build
          </h1>
          <h2 className="mb-[56px] mt-[30px] pl-[66px]">
            Distributed Storage DeeplyIntegrated with Layer2
          </h2>
          <div className="g-card grid h-[560px] grid-cols-1 py-[77px] pl-[66px]  pr-[85px]">
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
