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
        className="my-[3px] flex h-[60px] min-h-[36px] w-full items-center bg-[#3B5D66]/10 pl-10 text-[16px] md:text-[12px]"
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
            className="my-[3px] flex h-[60px] min-h-[36px] w-full items-center justify-center bg-[#3B5D66]/10 px-6 text-center text-[16px] md:text-[12px]"
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
          'curcor-pointer flex h-[36px] flex-auto basis-[200px] items-center justify-center rounded-[10px] border-[1px] sm:h-[66px]'
        }
        key={logoname}
        onClick={() => changeShowing(index)}
      >
        <img src={logo} alt={logoname} className="w-[80%]" />
      </div>
    )
  }

  return (
    <section className="mx-[16px] mt-24 flex h-[1200px] min-h-[960px] justify-center md:mt-[-200px] md:h-screen md:max-h-[1300px]">
      <div className="flex max-w-full flex-col items-center">
        <div className="text-[30px] font-bold tracking-[1.5px] sm:text-[56px]">
          Decentralized Storage{' '}
          <span className="text-[#6EFF89] md:font-[#ffffff]">Comparison</span>
        </div>
        <div className="mt-[23px] flex w-full justify-between space-x-1 md:hidden">
          {showArr.map((item, index) =>
            renderBtn(item.logo, index, item.logoname)
          )}
        </div>
        <div className="flex w-screen max-w-full justify-center">
          <div className="mt-10 flex max-w-[1120px] items-center gap-x-[1.5px] overflow-auto">
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
                  className="my-[3px] flex h-[63.5px] min-h-[36px] w-full items-center justify-center border-[2px] border-[#fff]/10 bg-[#3B5D66]/10 px-6 text-center text-[18px] md:border-0 md:text-[12px]"
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
