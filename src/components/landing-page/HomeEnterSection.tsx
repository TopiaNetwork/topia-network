import { TOPIA_GITHUB_LINK } from '../../constants/community'
export const HomeEnterSection = () => {
  return (
    <section className="relative mt-[60px] flex w-full justify-center">
      <div className="absolute top-[-80px] z-[-1] h-screen max-h-[1600px] w-full max-w-[2080px]">
        <img
          src="/img/background/pto_01.png"
          alt="Picture 1 of background"
          className="absolute right-[-30%] top-[10%] w-[400px] rotate-[-25deg] sm:right-[-25%] sm:w-[500px] lt:w-[700px] md:top-[-5%] md:right-[-10%] md:w-[900px] md:rotate-0 mxl:right-[-25%] mxl:top-[-10%] mxl:h-[100%] mxl:w-auto"
        ></img>
        <img
          src="/img/background/pto_02.png"
          alt="Picture 2 of background"
          className="absolute bottom-0 left-[20%] w-[100px] sm:w-[150px] lt:w-[200px] md:left-[15%] md:w-[266px] mxl:left-[25%]"
        ></img>
      </div>
      <div className="flex h-screen max-h-[1600px] min-h-[315px] w-full max-w-[1120px] items-center">
        <div className="relative top-[-10%] ml-[16px] w-[180px] sm:w-[260px] md:ml-0 md:w-[550px]">
          <div className="flex justify-between text-[32px] font-bold leading-[74px] tracking-wide sm:text-[50px] md:text-[108px] md:leading-[95px]">
            <h1>SCALE</h1>
            <h1>TO</h1>
          </div>
          <h1 className="text-[32px] font-bold sm:text-[50px] md:text-[108px]">
            INFINITY
          </h1>
          <h2 className="mt-[22px] w-[289px] text-[15px] font-light leading-[37px] tracking-[1px] sm:text-[28px] md:mt-0 md:w-[602px] md:leading-[40px] md:tracking-[1px]">
            <p className="block md:hidden">The First dStorage</p>
            <p className="block md:hidden">Layer2 solution</p>
            <p className="hidden md:block">
              The first dStorage Layer2 solution
            </p>
          </h2>
          <a
            href={TOPIA_GITHUB_LINK}
            target="_blank"
            rel="noreferrer"
            className="mt-[37px] flex w-[158px] items-center justify-center rounded-full bg-[#6eff89] py-[10px] text-[13px] text-black md:mt-[44px] md:w-[148px] md:py-[10px] md:text-[16px]"
          >
            Start Building
          </a>
        </div>
      </div>
    </section>
  )
}
