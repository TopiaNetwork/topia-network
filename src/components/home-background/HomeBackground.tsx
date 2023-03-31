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
    <div className="absolute z-[-1] flex h-full w-full flex-col items-center overflow-hidden bg-[#070B0C]">
      <div className="g-page-height relative w-[768px] md:max-h-[1080px] md:w-[2280px]">
        <img
          src="/img/background/pto_01.png"
          alt="Picture 1 of background"
          className="absolute right-[-200px] top-[100px] w-[600px] rotate-[-20deg] md:top-[-2%] md:right-[-10%] md:h-auto md:w-[55.4%] md:rotate-0"
        ></img>
        <img
          src="/img/background/pto_02.png"
          alt="Picture 2 of background"
          className="absolute left-[231px] bottom-[220px] h-[155px] md:left-[35%] md:bottom-[-120px] md:h-[23.73%]"
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
      <div className="relative h-[1500px] max-h-[1080px] w-full md:min-w-[1280px] md:max-w-[2320px]">
        <img
          src="/img/background/pto_03.png"
          alt="Picture 3 of background"
          className="absolute left-[-150px] top-[450px] h-[400px] rotate-[-10deg] sm:left-[-250px] sm:h-[733px] md:left-[-10%] md:top-[416px] md:h-auto md:w-[52.11%] md:rotate-0"
        ></img>
        <img
          src="/img/background/pto_04.png"
          alt="Picture 4 of background"
          className="absolute right-[30px] top-[1350px] h-[206px] md:top-[64.17%] md:right-[18%] md:h-[24.97%]"
        ></img>
      </div>
      <div className="g-page-height relative mt-[600px] w-full md:mt-0 md:min-w-[1280px] md:max-w-[2580px]">
        <img
          src="/img/background/pto_10.png"
          alt="Picture 10 of background"
          className="absolute bottom-[400px] right-[-200px] h-[600px] sm:bottom-0 sm:right-[-300px] sm:h-[660px] md:bottom-[-30%] md:right-[-10%] md:h-[90%]"
        ></img>
      </div>
      <div className="g-page-height relative mt-[300px] w-full md:mt-[-200px] md:min-w-[1280px] md:max-w-[2580px]">
        <img
          src="/img/background/pto_07.png"
          alt="Picture 7 of background"
          className="absolute bottom-[350px] left-0 h-[289px] rotate-[30deg] md:bottom-[-5%] md:left-[18%] md:h-[27.05%]"
        ></img>
      </div>
      <div className="g-page-height relative w-full md:mt-[-220px] md:min-w-[1280px] md:max-w-[2580px]">
        <img
          src="/img/background/pto_06.png"
          alt="Picture 6 of background"
          className="absolute bottom-[-200px] right-[-200px] h-[400px] sm:h-[623px] md:right-[6%] md:h-[65.48%]"
        ></img>
      </div>
      <div className="relative mt-[1260px] h-[1800px] min-h-[960px] w-full sm:mt-[650px] md:mt-[400px] md:h-screen md:max-h-[1300px] md:min-w-[1380px]  md:max-w-[2580px]">
        <img
          src="/img/background/pto_08.png"
          alt="Picture 8 of background"
          className="absolute top-[-400px] right-[-150px] h-[300px] sm:h-[496px] md:top-[-50px] md:left-[35%] md:h-[56.29%]"
        ></img>
        <img
          src="/img/background/pto_09.png"
          alt="Picture 9 of background"
          className="absolute bottom-[600px] right-0 h-[265px] sm:bottom-[250px] md:bottom-[-250px] md:right-[17%] md:h-[20.32%]"
        ></img>
      </div>
    </div>
  )
}
