'use client'
import { useState } from 'react'
import {
  compArweave,
  compFilecoin,
  compItems,
  compSSTORE,
  compTopia,
} from '../../constants/comparison'
import { TopiaLogo } from '../svg/TopiaLogo'

type compareItem = {
  logo: string
  logoname: string
  compItems: (string | boolean)[]
}

export const HomeComparison = () => {
  const [showing, setShowing] = useState(0)
  const showArr: compareItem[] = [
    {
      logo: '/img/logo_filecoin.svg',
      logoname: 'Filecoin',
      compItems: compFilecoin,
    },
    {
      logo: '/img/logo_ar.svg',
      logoname: 'Arweave',
      compItems: compArweave,
    },
    {
      logo: '/img/logo_eth_sstore.svg',
      logoname: 'ETH SSTORE',
      compItems: compSSTORE,
    },
  ]
  const blockNameRender = (compItems: string[]) => {
    return compItems.map((item, index) => (
      <div
        key={index}
        className="my-[1.5px] flex h-[40px] min-h-[36px] w-full items-center bg-[#3B5D66]/10 pl-[6px] text-[9px] tracking-wide sm:pl-[15px] lt:pl-[20px] md:my-[2px] md:h-[60px] md:pl-10 md:text-[14px]"
      >
        <span>{item}</span>
      </div>
    ))
  }
  const blockItemRender = (data: compareItem) => {
    const { logo, logoname, compItems } = data
    return (
      <div className="flex w-full flex-col md:mx-[2px]" key={logoname}>
        <div className="my-[1.5px] flex h-[40px] w-full flex-auto items-center justify-center bg-[#3B5D66]/10 md:my-[2px] md:h-[60px]">
          <img className="h-[20px] md:h-[30px]" src={logo} alt={logoname} />
        </div>
        {compItems.map((item, index) => (
          <div
            key={index}
            className="my-[1.5px] flex h-[40px] min-h-[36px] w-full items-center justify-center bg-[#3B5D66]/10 px-0 text-center text-[9px] lt:text-[12px] md:my-[2px] md:h-[60px] md:px-6 md:text-[14px]"
          >
            {item === true ? (
              <img
                className="h-[25px] md:h-6"
                src="/img/icon_yes.svg"
                alt="Yes"
              />
            ) : item === false ? (
              <img
                className="h-[30px] md:h-7"
                src="/img/icon_no.svg"
                alt="No"
              />
            ) : (
              <span>{item}</span>
            )}
          </div>
        ))}
      </div>
    )
  }

  const changeShowing = (index: number) => {
    setShowing(index)
  }

  const renderBtn = (logo: string, index: number, logoname: string) => {
    return (
      <div
        className={
          `${showing === index ? 'border-[#33F8FF] ' : 'border-white '}` +
          'curcor-pointer flex h-[30px] max-w-[280px] flex-auto basis-[180px] items-center justify-center rounded-[5px] border-[1px] sm:h-[40px] lt:h-[56px]'
        }
        key={logoname}
        onClick={() => changeShowing(index)}
      >
        <img src={logo} alt={logoname} className="h-[50%]" />
      </div>
    )
  }

  return (
    <section className="mx-[16px] mt-[100px] flex min-h-[960px] justify-center">
      <div className="absolute z-[-1] h-[1200px] w-full max-w-[2080px]">
        <img
          src="/img/background/pto_07.png"
          alt="Picture 7 of background"
          className="absolute bottom-[380px] left-0 w-[200px] rotate-[35deg] sm:bottom-[300px] sm:left-0 sm:w-[30%] lt:bottom-[280px] lt:left-0 lt:w-[20%] md:bottom-[300px] md:left-[5%] md:w-[15%] mxl:bottom-[200px] mxl:left-[18%] mxl:w-[15%]"
        ></img>
      </div>
      <div className="flex max-w-full flex-col items-center">
        <div className="text-[28px] font-bold tracking-[1.5px] sm:text-[50px] md:text-[56px]">
          Decentralized Storage{' '}
          <span className="text-[#6EFF89] md:text-[#fff]">Comparison</span>
        </div>
        <div className="mt-[23px] flex w-full justify-between space-x-[10px] lt:mt-[80px] md:hidden">
          {showArr.map((item, index) =>
            renderBtn(item.logo, index, item.logoname)
          )}
        </div>
        <div className="flex w-screen max-w-full justify-center">
          <div className="mt-10 grid max-w-[1120px] flex-grow grid-cols-3 items-center gap-x-[3px] overflow-auto md:grid-cols-5 md:gap-x-[2px]">
            <div className="flex flex-grow flex-col">
              <div className="my-[1.5px] h-[40px] w-full bg-[#3B5D66]/10 md:my-[2px] md:h-[60px]" />
              {blockNameRender(compItems)}
            </div>
            <div className="col-span-3 hidden md:flex">
              {showArr.map((item) => blockItemRender(item))}
            </div>
            <div className="flex md:hidden">
              {blockItemRender(showArr[showing])}
            </div>
            <div className="flex flex-col">
              <div className="my-[1.5px] flex h-[40px] w-full items-center justify-center rounded-tr-[28px] border-[1px] border-[#fff]/10 bg-[#3B5D66]/10 md:my-[2px] md:h-[60px] md:rounded-tr-[40px] md:border-0">
                <TopiaLogo className="h-[20px] md:h-[30px]" />
              </div>
              {compTopia.map((item, index) => (
                <div
                  key={index}
                  className="my-[1.5px] flex h-[41px] min-h-[36px] w-full items-center justify-center border-[1px] border-[#fff]/10 bg-[#3B5D66]/10 px-0 text-center text-[9px] lt:text-[12px] md:my-[2px] md:h-[63.5px] md:border-0 md:px-6 md:text-[15px]"
                >
                  {item === true ? (
                    <img
                      className="h-[28px] md:h-8"
                      src="/img/icon_yes.svg"
                      alt="Yes"
                    />
                  ) : item === false ? (
                    <img
                      className="h-[33px] md:h-9"
                      src="/img/icon_no.svg"
                      alt="No"
                    />
                  ) : (
                    <span>{item}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
