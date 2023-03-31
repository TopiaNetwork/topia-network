import { TOPIA_GITHUB_LINK } from '../../constants/community'
export const HomeEnterSection = () => {
  return (
    <section className="flex w-full justify-center">
      <div className="flex h-screen max-h-[1600px] w-full max-w-[1120px] items-center">
        <div className="ml-[16px] h-[500px] w-[240px] sm:w-[260px] md:ml-0 md:mt-[184px] md:w-[550px]">
          <div className="flex justify-between text-[45px] font-bold leading-[74px] tracking-wide sm:text-[50px] md:text-[108px] md:leading-[95px]">
            <h1>SCALE</h1>
            <h1>TO</h1>
          </div>
          <h1 className="text-[45px] font-bold sm:text-[50px] md:text-[108px]">
            INFINITY
          </h1>
          <h2 className="mt-[22px] w-[289px] text-[24px] font-light leading-[37px] tracking-[1px] sm:text-[28px] md:mt-0 md:w-[602px] md:leading-[40px] md:tracking-[1px]">
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
