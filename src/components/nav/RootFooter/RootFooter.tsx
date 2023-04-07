'use client'
import style from './styles.module.css'

export const RootFooter = () => {
  const climbToTop = () => {
    window.scrollTo(0, 0)
  }
  return (
    <footer className="z-0 hidden bg-[#0F171A] pt-[20px] md:block">
      <div className="flex justify-center">
        <div className="mx-4 flex h-[95px] max-w-[1120px] flex-auto items-center justify-between">
          <img
            src="/img/footer_logo.svg"
            alt="footer_logo"
            className="h-[36px]"
          />
          <div
            className={
              style.icongroup +
              ' h-[37px] w-[159px] cursor-pointer rounded-full bg-white text-black'
            }
            onClick={climbToTop}
          >
            <div
              className={
                style.icon + ' flex h-full w-full items-center rounded-full'
              }
            >
              <div className="ml-[4px] flex h-[31px] w-[31px] items-center rounded-full border border-solid border-black">
                <img
                  src="/img/footer_icon_top.svg"
                  alt="footer_icon_top"
                  className="h-[36px]"
                />
              </div>
              <p className="ml-[18px] text-[14px]">Back to top</p>
            </div>
          </div>
          <div className="text-[14px]">© 2023 Topia</div>
        </div>
      </div>
    </footer>
  )
}
