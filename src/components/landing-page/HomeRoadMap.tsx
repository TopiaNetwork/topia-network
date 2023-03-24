export const HomeRoadMap = () => {
  const displayRoadMap = (period: string, title: string, des: string[]) => {
    return (
      <div className="flex w-full">
        <h3>{period}</h3>
        <div>
          <h3>{title}</h3>
          <ul>{des.map((item) => displayLi(item))}</ul>
        </div>
      </div>
    )
  }
  const displayLi = (des: string) => {
    return <li>{des}</li>
  }
  return (
    <section className="g-page-height flex w-full justify-center">
      <div className="g-body-container h-full justify-center">
        <div className="flex w-[774px] flex-col bg-[#3B5D66]/10 p-[89px]">
          <h1 className="px-[89px] text-[68px]">RoadMap</h1>
          <div>
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
