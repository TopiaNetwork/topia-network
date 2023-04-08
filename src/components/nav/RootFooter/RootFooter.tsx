export const RootFooter = () => {
  return (
    <footer className="z-0 hidden bg-[#0F171A] pt-[20px] md:block">
      <div className="flex justify-center">
        <div className="mx-4 flex h-[95px] max-w-[1120px] flex-auto items-center justify-between">
          <img
            src="/img/footer_logo.svg"
            alt="footer_logo"
            className="h-[36px]"
          />
          <a
            className="group h-[37px] w-[159px] cursor-pointer rounded-full bg-white text-black"
            href="#"
          >
            <div className="flex h-full w-full items-center rounded-full bg-[#fff] transition-all duration-300 ease-in-out group-hover:bg-[#6eff89]">
              <div className="ml-[4px] flex h-[31px] w-[31px] items-center rounded-full border border-solid border-black">
                <img
                  src="/img/footer_icon_top.svg"
                  alt="footer_icon_top"
                  className="h-[36px]"
                />
              </div>
              <p className="ml-[18px] text-[14px]">Back to top</p>
            </div>
          </a>
          <div className="text-[14px]">© 2023 Topia</div>
        </div>
      </div>
    </footer>
  )
}
