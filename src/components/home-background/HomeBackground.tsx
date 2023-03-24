import Image from 'next/image'
import proto1 from '../../../public/img/background/pto_01.png'
import proto2 from '../../../public/img/background/pto_02.png'
import proto3 from '../../../public/img/background/pto_03.png'
import proto4 from '../../../public/img/background/pto_04.png'
export const HomeBackground = () => {
  return (
    <div className="absolute z-[-1] flex h-full w-full flex-col overflow-hidden bg-[#070B0C]">
      <div className="g-page-height relative w-full">
        <Image
          src={proto1}
          alt="Picture 1 of background"
          className="absolute top-[-2%] right-[-10%] w-[56.13%]"
        ></Image>
        <Image
          src={proto2}
          alt="Picture 2 of background"
          className="absolute top-[78%] left-[23.58%] w-[12.8%]"
        ></Image>
      </div>
      <div className="g-page-height relative w-full min-w-[1680px]">
        <Image
          src={proto3}
          alt="Picture 3 of background"
          className="absolute left-[-2%] top-[21.2%] w-[39.64%]"
        ></Image>
        <Image
          src={proto4}
          alt="Picture 4 of background"
          className="absolute top-[69.17%] right-[8%] w-[16%]"
        ></Image>
      </div>
    </div>
  )
}
