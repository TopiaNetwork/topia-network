export const HomeRoadMap = () => {
  const displayRoadMap = (period: string, title: string, des: string[]) => {
    return (
      <div className="g-card flex w-full flex-col px-[10px] pt-[10px] pb-[10px] sm:px-[35px] sm:pt-[48px] sm:pb-[36px] md:mb-[20px] md:flex-row md:border-0 md:bg-transparent md:p-0">
        <h3 className="hidden w-[230px] flex-shrink-0 text-[21px] md:block">
          {period}
        </h3>
        <h3 className="flex-shrink-0 text-[25px] text-[#6EFF89] md:hidden">
          {title}
        </h3>
        <div className="flex flex-grow flex-col">
          <h3 className="g-back-divide-line relative top-[-3px] mb-[10px] !hidden text-[25px] md:!flex">
            {title}
          </h3>
          <h3 className="g-back-divide-line relative top-[-3px] mt-[23px] mb-[33px] text-[20px] md:hidden">
            {period}
          </h3>
          <ul className="ml-[25px] grid flex-grow grid-cols-1 gap-y-[15px] text-[18px] sm:text-[20px] md:ml-[17px] md:gap-y-[10px] md:text-[14px]">
            {des.map((item, index) => displayLi(index, item))}
          </ul>
        </div>
      </div>
    )
  }
  const displayLi = (index: number, des: string) => {
    return (
      <li
        key={index}
        className="list-disc leading-[35px] text-white/[.7] md:leading-[30px]"
      >
        {/* <div className="mr-6 h-1.5 w-1.5 flex-shrink-0 rounded bg-white inline" /> */}
        {des}
      </li>
    )
  }
  return (
    <section className="mt-[650px] flex h-auto min-h-[960px] w-full justify-center sm:h-[1800px] md:mt-[250px] md:h-screen md:max-h-[1300px]">
      <div className="g-body-container h-full items-end justify-center">
        <div className="flex flex-col items-center p-0 md:max-w-[900px] md:items-start md:rounded-[16px] md:border md:border-white/10 md:bg-[#3B5D66]/10 md:pt-[50px] md:pl-[43px] md:pr-[95px] md:pb-[62px]">
          <h1 className="text-[45px] font-semibold md:pl-[228px] md:text-[56px]">
            RoadMap
          </h1>
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
