export const HomeRoadMap = () => {
  const displayRoadMap = (period: string, title: string, des: string[]) => {
    return (
      <div className="g-card flex w-full flex-col p-[20px] sm:px-[35px] sm:pt-[36px] sm:pb-[36px] md:mb-[20px] md:flex-row md:border-0 md:bg-transparent md:p-0">
        <h3 className="hidden w-[230px] flex-shrink-0 text-[21px] md:block">
          {period}
        </h3>
        <h3 className="flex-shrink-0 text-[17px] tracking-wide text-[#6EFF89] md:hidden">
          {title}
        </h3>
        <div className="flex flex-grow flex-col">
          <h3 className="g-back-divide-line relative top-[-3px] mb-[10px] !hidden text-[25px] tracking-wide md:!flex">
            {title}
          </h3>
          <h3 className="g-back-divide-line relative top-[-3px] mt-[10px] mb-[10px] text-[15px] md:mb-[33px] md:hidden">
            {period}
          </h3>
          <ul className="ml-[20px] grid flex-grow grid-cols-1 gap-y-[15px] text-[14px] md:ml-[17px] md:gap-y-[10px]">
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
        className="list-disc leading-[20px] tracking-wide text-white md:leading-[30px]"
      >
        {/* <div className="mr-6 h-1.5 w-1.5 flex-shrink-0 rounded bg-white inline" /> */}
        {des}
      </li>
    )
  }
  return (
    <section className="mt-[200px] flex w-full justify-center px-[16px]">
      <div className="absolute z-[-1] flex h-[1000px] w-full max-w-[2080px] justify-center">
        <picture className="relative top-[-150px] w-[300px] sm:w-[396px] md:top-[-300px] md:w-[684px] mxl:w-[35%]">
          <source srcSet="/img/background/pto_08.avif" type="image/avif" />
          <source srcSet="/img/background/pto_08.webp" type="image/webp" />
          <img src="/img/background/pto_08.png" alt="Picture 8 of background" />
        </picture>
        <picture className="absolute bottom-[-200px] right-0 w-[265px] sm:bottom-[-30%] lt:bottom-[-20%] md:bottom-[-100px] md:right-[10%] mxl:bottom-[-150px] mxl:right-[27%] mxl:w-[20.32%]">
          <source srcSet="/img/background/pto_09.avif" type="image/avif" />
          <source srcSet="/img/background/pto_09.webp" type="image/webp" />
          <img src="/img/background/pto_09.png" alt="Picture 9 of background" />
        </picture>
      </div>
      <div className="h-auto items-end justify-center">
        <div className="flex max-w-[600px] flex-col items-center p-0 md:max-w-[900px] md:items-start md:rounded-[16px] md:border md:border-white/10 md:bg-[#3B5D66]/10 md:pt-[50px] md:pl-[43px] md:pr-[95px] md:pb-[62px]">
          <h1 className="text-[28px] font-semibold tracking-wide sm:text-[50px] md:pl-[228px] md:text-[56px]">
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
