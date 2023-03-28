// import proto1 from '../../../public/img/background/pto_01.png'
// import proto2 from '../../../public/img/background/pto_02.png'
// import proto3 from '../../../public/img/background/pto_03.png'
// import proto4 from '../../../public/img/background/pto_04.png'
// import proto5 from '../../../public/img/background/pto_05.png'
// import proto6 from '../../../public/img/background/pto_06.png'
// import proto7 from '../../../public/img/background/pto_07.png'
// import proto8 from '../../../public/img/background/pto_08.png'
export const HomeBackground = () => {
  return (
    <div className="absolute z-[-1] flex h-full w-full flex-col overflow-hidden bg-[#070B0C]">
      <div className="g-page-height relative w-full phone:max-h-[1080px] phone:min-w-[1680px]">
        <img
          src="/img/background/pto_01.png"
          alt="Picture 1 of background"
          className="absolute right-[-203px] top-[53px] h-[688px] rotate-[-20deg] phone:top-[-2%] phone:right-[-10%] phone:h-[121.4%] phone:rotate-0"
        ></img>
        <img
          src="/img/background/pto_02.png"
          alt="Picture 2 of background"
          className="absolute left-[231px] bottom-[20px] h-[155px] phone:right-[65%] phone:bottom-0 phone:h-[18.73%]"
        ></img>
        {/* <div className="flex h-full w-screen justify-center">
          <div className="g-body-container">
            <div className="flex h-full flex-col">
              <img
                src="/img/background/pto_02.png"
                alt="Picture 2 of background"
                className="relative h-[18.73%] object-scale-down"
              ></img>
            </div>
          </div>
        </div> */}
      </div>
      <div className="g-page-height relative max-h-[1080px] w-full phone:min-w-[1280px]">
        <img
          src="/img/background/pto_03.png"
          alt="Picture 3 of background"
          className="absolute left-[-250px] top-[250px] h-[733px] rotate-[-20deg] phone:left-[-10%] phone:top-[416px] phone:h-[110.11%]"
        ></img>
        <img
          src="/img/background/pto_04.png"
          alt="Picture 4 of background"
          className="absolute right-[30px] top-[1200px] h-[206px] phone:top-[69.17%] phone:right-[8%] phone:h-[24.97%]"
        ></img>
      </div>
      <div className="g-page-height relative mt-[520px] w-full phone:mt-0 phone:min-w-[1280px]">
        <img
          src="/img/background/pto_10.png"
          alt="Picture 10 of background"
          className="absolute bottom-[-400px] right-[-400px] h-[960px] phone:bottom-[-30%] phone:right-[-20%] phone:h-[100%]"
        ></img>
      </div>
      <div className="g-page-height relative w-full phone:min-w-[1280px]">
        <img
          src="/img/background/pto_07.png"
          alt="Picture 7 of background"
          className="absolute bottom-[-5%] left-[15%] h-[27.05%] rotate-[30deg]"
        ></img>
      </div>
      <div className="g-page-height relative w-full phone:min-w-[1280px]">
        <img
          src="/img/background/pto_06.png"
          alt="Picture 6 of background"
          className="absolute bottom-0 right-[-5%] h-[65.48%]"
        ></img>
      </div>
      <div className="g-page-height relative w-full min-w-[1380px]">
        <img
          src="/img/background/pto_08.png"
          alt="Picture 8 of background"
          className="absolute top-[220px] left-[35%] h-[56.29%]"
        ></img>
        <img
          src="/img/background/pto_09.png"
          alt="Picture 9 of background"
          className="absolute bottom-[-405px] right-[22%] h-[20.32%]"
        ></img>
      </div>
    </div>
  )
}
