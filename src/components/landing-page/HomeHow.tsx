export const HomeHow = () => {
  const displayHow = (des: string) => {
    return (
      <div className="w-full]">
        <p className="mt-8 text-[19px]">{des}</p>
      </div>
    )
  }
  return (
    <section className="g-page-height flex w-full justify-center">
      <div className="g-body-container h-full justify-center">
        <div className="flex w-[774px] flex-col">
          <h1 className="px-[89px] text-[68px]">
            <b className="text-[#6EFF89]">How</b> to Build
          </h1>
          <h2 className="mb-[5rem] mt-1 ml-[6px] px-[89px]">
            Distributed Storage DeeplyIntegrated with Layer2
          </h2>
          <div className="grid flex-grow grid-cols-1 bg-[#3B5D66]/10 p-[89px]">
            {displayHow('The first evm-compatible storage layer2 based on OP')}
            {displayHow('Storage nodes need to submit storage proofs on-chain')}
            {displayHow(
              'Strong interoperability between storage and smart contracts'
            )}
            {displayHow(
              'Incentives for storage nodes are an integral part of the economic model of the native Topia token'
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
