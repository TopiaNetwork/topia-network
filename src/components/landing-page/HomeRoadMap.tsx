export const HomeRoadMap = () => {
  const displayRoadMap = (period: string, title: string, des: string[]) => {
    return (
      <div className="mb-[20px] flex w-full">
        <h3 className="w-[230px] flex-shrink-0 text-[21px]">{period}</h3>
        <div className="flex flex-grow flex-col">
          <h3 className="g-back-divide-line relative left-[-17px] top-[-3px] mb-[10px] text-[25px] ">
            {title}
          </h3>
          <ul className="grid flex-grow grid-cols-1 text-[14px]">
            {des.map((item, index) => displayLi(index, item))}
          </ul>
        </div>
      </div>
    )
  }
  const displayLi = (index: number, des: string) => {
    return (
      <li key={index} className="list-disc leading-[30px] text-white/[.7]">
        {/* <div className="mr-6 h-1.5 w-1.5 flex-shrink-0 rounded bg-white inline" /> */}
        {des}
      </li>
    )
  }
  return (
    <section className="g-page-height mt-[200px] flex w-full justify-center">
      <div className="g-body-container h-full items-end justify-center">
        <div className="g-card flex w-[900px] flex-col pt-[50px] pl-[43px] pr-[95px] pb-[62px]">
          <h1 className="pl-[211px] text-[56px] font-semibold">RoadMap</h1>
          <div className="mt-[45px] grid flex-grow grid-cols-1 gap-y-[30px]">
            {displayRoadMap('Q4 2021 - Q4 2023', 'Mainnet', [
              'Conducting research and designing technical solutions',
              'Developing OP contracts and Topia dStorage contracts',
              'Developing decentralized storage and key-value databases',
              'Developing the OVM which will enable direct interaction with dStorage',
              'Launch the testnet in mid-2023 and mainnet by the end of 2023',
              'Begin building the Topia ecosystem',
            ])}
            {displayRoadMap('Q4 2023 - Q4 2024', 'ZK & Data Privacy', [
              'Upgrading the Layer 2 solution by combining OP and ZK',
              'Developing privacy data management and transaction solutions',
              'Achieve on-chain governance and optimize the Topia network.',
            ])}
            {displayRoadMap('Q4 2024+', 'Topia Decentralized Cloud Server', [
              'Upgrading the EVM to Wasm, which will enable support for more complex smart contracts and additional smart contract languages',
              'Upgrading the Topia Layer 2 solution to better support the personal data market',
              'Exploring the development of a Topia decentralized cloud server based on blockchain technology',
            ])}
          </div>
        </div>
      </div>
    </section>
  )
}
