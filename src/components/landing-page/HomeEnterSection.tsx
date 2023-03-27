import { TOPIA_GITHUB_LINK } from '../../constants/community'
export const HomeEnterSection = () => {
  return (
    <section className="g-page-height flex w-full justify-center">
      <div className="g-body-container h-full">
        <div className="mt-[184px] w-[408px]">
          <div className="flex justify-between text-[79px] font-medium leading-[95px] tracking-wide">
            <h1>SCALE</h1>
            <h1>TO</h1>
          </div>
          <h1 className="text-[79px]">INFINITY</h1>
          <h2 className="w-[362px] text-[21px] font-normal leading-[32px] tracking-[44]">
            The first dStorage Layer2 solution
          </h2>
          <div className="mt-[44px] flex w-[148px] items-center justify-center rounded-full bg-[#6eff89]">
            <a
              className="py-[10px] text-[16px] text-black"
              href={TOPIA_GITHUB_LINK}
              target="_blank"
              rel="noreferrer"
            >
              Start Building
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
