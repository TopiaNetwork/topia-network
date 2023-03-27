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
      <div className="g-page-height relative w-full min-w-[1680px]">
        <img
          src="/img/background/pto_01.png"
          alt="Picture 1 of background"
          className="absolute top-[-2%] right-[-10%] h-[121.4%]"
        ></img>
        <img
          src="/img/background/pto_02.png"
          alt="Picture 2 of background"
          className="absolute right-[65%] bottom-0 h-[18.73%]"
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
      <div className="g-page-height relative w-full min-w-[1280px]">
        <img
          src="/img/background/pto_03.png"
          alt="Picture 3 of background"
          className="absolute left-[-10%] top-[416px] h-[110.11%]"
        ></img>
        <img
          loading="lazy"
          src="/img/background/pto_04.png"
          alt="Picture 4 of background"
          className="absolute top-[69.17%] right-[8%] h-[24.97%]"
        ></img>
      </div>
      <div className="g-page-height relative w-full min-w-[1280px]">
        <img
          loading="lazy"
          src="/img/background/pto_05.png"
          alt="Picture 5 of background"
          className="absolute bottom-[0%] right-[18%] h-[47.77%]"
        ></img>
      </div>
      <div className="g-page-height relative w-full min-w-[1280px]">
        <img
          loading="lazy"
          src="/img/background/pto_06.png"
          alt="Picture 6 of background"
          className="absolute bottom-[-15%] right-[5%] h-[65.48%]"
        ></img>
      </div>
      <div className="g-page-height relative w-full min-w-[1280px]">
        <img
          loading="lazy"
          src="/img/background/pto_07.png"
          alt="Picture 7 of background"
          className="absolute bottom-0 left-[15%] h-[27.05%]"
        ></img>
      </div>
      <div className="g-page-height relative w-full min-w-[1380px]">
        <img
          loading="lazy"
          src="/img/background/pto_08.png"
          alt="Picture 8 of background"
          className="absolute top-[20px] left-[35%] h-[56.29%]"
        ></img>
        <img
          loading="lazy"
          src="/img/background/pto_09.png"
          alt="Picture 8 of background"
          className="absolute bottom-[-405px] right-[22%] h-[20.32%]"
        ></img>
      </div>
    </div>
  )
}
