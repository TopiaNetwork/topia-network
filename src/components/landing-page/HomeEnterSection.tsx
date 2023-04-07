import { TOPIA_GITHUB_LINK } from '../../constants/community'
export const HomeEnterSection = () => {
  return (
    <section className="relative mt-[60px] flex w-full justify-center">
      <div className="absolute top-[-80px] z-[-1] h-screen  max-h-[600px] w-full max-w-[1880px] sm:max-h-[800px] lt:max-h-[900px] md:max-h-[1000px] mxl:max-h-[1600px]">
        {/* <img
          src="/img/background/pto_01.png"
          alt="Picture 1 of background"
          className="absolute right-[-30%] top-[10%] w-[400px] rotate-[-25deg] sm:right-[-30%] sm:w-[500px] lt:w-[700px] md:top-[-5%] md:right-[-15%] md:w-[850px] md:rotate-0 mxl:right-[-15%] mxl:top-[-1%] mxl:h-[100%] mxl:w-auto"
        ></img> */}
        <picture className="absolute right-[-30%] top-[10%] w-[400px] rotate-[-25deg] sm:right-[-30%] sm:w-[500px] lt:w-[700px] md:top-[-5%] md:right-[-15%] md:w-[850px] md:rotate-0 mxl:right-[-15%] mxl:top-[-1%] mxl:h-[100%] mxl:w-auto">
          <source srcSet="/img/background/pto_01.avif" type="image/avif" />
          <source srcSet="/img/background/pto_01.webp" type="image/webp" />
          <img src="/img/background/pto_01.png" alt="Picture 1 of background" />
        </picture>
        <picture className="absolute bottom-0 left-[20%] w-[80px] sm:w-[120px] lt:w-[160px] md:left-[10%] md:bottom-[-80px] md:w-[206px] mdl:left-[25%] mxl:bottom-0 mxl:left-[25%] mxl:w-[256px]">
          <source srcSet="/img/background/pto_02.avif" type="image/avif" />
          <source srcSet="/img/background/pto_02.webp" type="image/webp" />
          <img src="/img/background/pto_02.png" alt="Picture 2 of background" />
        </picture>
      </div>
      <div className="ml-[16px] flex h-screen max-h-[600px] min-h-[315px] w-full max-w-[1120px] items-center sm:max-h-[800px] lt:max-h-[900px] md:max-h-[1000px] md:min-h-[900px] mxl:max-h-[1600px]">
        <div className="relative top-[-15%] w-[180px] sm:w-[260px] md:ml-0 md:w-[500px] mxl:w-[550px]">
          <div className="flex justify-between text-[32px] font-bold leading-[74px] tracking-wide sm:text-[50px] md:text-[90px] md:leading-[95px] mxl:text-[108px]">
            <h1>SCALE</h1>
            <h1>TO</h1>
          </div>
          <h1 className="text-[32px] font-bold sm:text-[50px] md:text-[90px] mxl:text-[108px]">
            INFINITY
          </h1>
          <h2 className="mt-[22px] w-[289px] text-[15px] leading-[37px] tracking-[1px] sm:text-[27px] md:mt-0 md:w-[602px] md:font-light md:leading-[40px] md:tracking-[1px]">
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
            className="mt-[37px] flex w-[128px] items-center justify-center rounded-full bg-[#6eff89] py-[10px] text-[13px] text-black md:mt-[44px] md:w-[148px] md:py-[10px] md:text-[16px]"
          >
            Start Building
          </a>
        </div>
      </div>
    </section>
  )
}
