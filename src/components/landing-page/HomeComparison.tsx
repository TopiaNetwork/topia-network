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
        className="my-[3px] flex h-[60px] min-h-[36px] w-full items-center bg-[#3B5D66]/10 pl-10 text-[12px]"
      >
        <span>{item}</span>
      </div>
    ))
  }
  const blockItemRender = (data: compareItem) => {
    const { logo, logoname, compItems } = data
    return (
      <div
        className="mx-[1.5px] flex min-w-[150px] flex-col md:w-[216px] md:min-w-[200px]"
        key={logoname}
      >
        <div className="my-[3px] flex h-[60px] w-full flex-auto items-center justify-center bg-[#3B5D66]/10">
          <img className="h-[30px]" src={logo} alt={logoname} />
        </div>
        {compItems.map((item, index) => (
          <div
            key={index}
            className="my-[3px] flex h-[60px] min-h-[36px] w-full items-center justify-center bg-[#3B5D66]/10 px-6 text-center text-[12px]"
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
          'curcor-pointer flex h-[56px] max-w-[280px] flex-auto basis-[180px] items-center justify-center rounded-[10px] border-[1px] lt:h-[86px]'
        }
        key={logoname}
        onClick={() => changeShowing(index)}
      >
        <img src={logo} alt={logoname} className="w-[75%]" />
      </div>
    )
  }

  return (
    <section className="mx-[16px] mt-[100px] flex min-h-[960px] justify-center">
      <div className="absolute z-[-1] h-[1200px] w-full max-w-[2080px]">
        <img
          src="/img/background/pto_07.png"
          alt="Picture 7 of background"
          className="absolute bottom-[150px] left-0 w-[200px] rotate-[35deg] sm:bottom-[100px] sm:left-0 sm:w-[30%] lt:bottom-[150px] lt:left-0 lt:w-[20%] md:bottom-[300px] md:left-[5%] md:w-[15%] mxl:bottom-[200px] mxl:left-[18%] mxl:w-[15%]"
        ></img>
      </div>
      <div className="flex max-w-full flex-col items-center">
        <div className="text-[28px] font-bold tracking-[1.5px] sm:text-[50px] md:text-[56px]">
          Decentralized Storage{' '}
          <span className="text-[#6EFF89] md:font-[#ffffff]">Comparison</span>
        </div>
        <div className="mt-[23px] flex w-full justify-between space-x-[10px] md:hidden">
          {showArr.map((item, index) =>
            renderBtn(item.logo, index, item.logoname)
          )}
        </div>
        <div className="flex w-screen max-w-full justify-center">
          <div className="mt-10 flex max-w-[1120px] flex-grow items-center gap-x-[1.5px] overflow-auto">
            <div className="flex min-w-[200px] flex-auto flex-grow flex-col md:w-[216px] md:min-w-[200px]">
              <div className="my-[3px] h-[60px] w-full bg-[#3B5D66]/10" />
              {blockNameRender(compItems)}
            </div>
            <div className="hidden md:flex">
              {showArr.map((item) => blockItemRender(item))}
            </div>
            <div className="min-w-[200px] flex-auto flex-grow md:hidden">
              {blockItemRender(showArr[showing])}
            </div>
            <div className="flex min-w-[242px] flex-auto flex-grow flex-col md:w-[222px] md:min-w-[200px]">
              <div className="my-[3px] flex h-[60px] w-full items-center justify-center rounded-tr-[40px] border-[2px] border-[#fff]/10 bg-[#3B5D66]/10 md:border-0">
                <TopiaLogo className="h-[30px]" />
              </div>
              {compTopia.map((item, index) => (
                <div
                  key={index}
                  className="my-[3px] flex h-[63.5px] min-h-[36px] w-full items-center justify-center border-[2px] border-[#fff]/10 bg-[#3B5D66]/10 px-6 text-center text-[12px] md:border-0"
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
                    <span className="font-semibold">{item}</span>
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
