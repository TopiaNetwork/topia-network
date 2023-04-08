import { ComparisonTable } from './components/ComparisonTable'
export const HomeComparison = () => {
  return (
    <section className="mx-[16px] mt-[100px] flex min-h-[960px] justify-center">
      <div className="absolute z-[-1] h-[1200px] w-full max-w-[2080px]">
        <picture className="absolute bottom-[380px] left-0 w-[200px] rotate-[35deg] sm:bottom-[300px] sm:left-0 sm:w-[30%] lt:bottom-[280px] lt:left-0 lt:w-[20%] md:bottom-[300px] md:left-[5%] md:w-[15%] mxl:bottom-[200px] mxl:left-[18%] mxl:w-[15%]">
          <source srcSet="/img/background/pto_07.avif" type="image/avif" />
          <source srcSet="/img/background/pto_07.webp" type="image/webp" />
          <img src="/img/background/pto_07.png" alt="Picture 7 of background" />
        </picture>
      </div>
      <div className="flex max-w-full flex-col items-center">
        <div className="text-[28px] font-bold tracking-[1.5px] sm:text-[50px] md:text-[56px]">
          Decentralized Storage{' '}
          <span className="text-[#6EFF89] md:text-[#fff]">Comparison</span>
        </div>
        <div className="flex w-screen max-w-full justify-center">
          <ComparisonTable />
        </div>
      </div>
    </section>
  )
}
