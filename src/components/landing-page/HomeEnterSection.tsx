import { TOPIA_GITHUB_LINK } from '../../constants/community'
export const HomeEnterSection = () => {
  return (
    <section className="g-page-height flex w-full justify-center">
      <div className="g-body-container h-full">
        <div className="mt-[20%] w-[35rem]">
          <h1 className="text-[6rem] font-medium leading-[6rem]">SCALE TO</h1>
          <h1 className="text-[6rem]">INFINITY</h1>
          <h2 className="text-[1.8rem]">
            The first EVM compatible storage Layer2 Based on OP
          </h2>
          <div className="mt-14 flex w-[168px] items-center justify-center rounded-full bg-[#96FA96]">
            <a
              className="py-2 px-5 text-black"
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
