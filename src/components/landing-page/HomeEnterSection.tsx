import { TOPIA_GITHUB_LINK } from '../../constants/community'
export const HomeEnterSection = () => {
  return (
    <section className="g-page-height flex w-full justify-center">
      <div className="g-body-container h-full">
        <div className="ml-[10px] mt-[207px] w-[339px] phone:ml-0 phone:mt-[184px] phone:w-[408px]">
          <div className="flex justify-between text-[66px] font-medium leading-[74px] tracking-wide phone:text-[79px] phone:leading-[95px]">
            <h1>SCALE</h1>
            <h1>TO</h1>
          </div>
          <h1 className="text-[66px] phone:text-[79px]">INFINITY</h1>
          <h2 className="mt-[22px] w-[299px] text-[31px] font-thin leading-[37px] tracking-[1px] phone:mt-0 phone:w-[362px] phone:text-[21px] phone:font-normal phone:leading-[32px] phone:tracking-[1px]">
            <p>The First dStorage</p>
            <p>Layer2 Based</p>
            <p>on OP</p>
          </h2>
          <div className="mt-[37px] flex w-[233px] items-center justify-center rounded-full bg-[#6eff89] phone:mt-[44px] phone:w-[148px]">
            <a
              className="py-[20px] text-[27px] text-black phone:py-[10px] phone:text-[16px]"
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
