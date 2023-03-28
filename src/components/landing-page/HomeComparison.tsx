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
        className="my-1 flex h-[60px] w-full items-center border border-solid border-[#273838] bg-[#3B5D66]/10 pl-10"
      >
        <span>{item}</span>
      </div>
    ))
  }
  const blockItemRender = (data: compareItem) => {
    const { logo, logoname, compItems } = data
    return (
      <div
        className="mx-2 flex w-[216px] min-w-[200px] flex-col"
        key={logoname}
      >
        <div className="my-1 flex h-[60px] w-full flex-auto items-center justify-center border border-solid border-[#273838] bg-[#3B5D66]/10">
          <img className="h-[30px]" src={logo} alt={logoname} />
        </div>
        {compItems.map((item, index) => (
          <div
            key={index}
            className="my-1 flex h-[60px] w-full items-center justify-center border border-solid border-[#273838] bg-[#3B5D66]/10 px-6 text-center text-[12px]"
          >
            {item === true ? (
              <img className="h-6" src="/img/icon_yes.svg" alt="Yes" />
            ) : item === false ? (
              <img className="h-7" src="/img/icon_no.svg" alt="No" />
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
      <button
        className={
          `${showing === index ? 'border-[#33F8FF] ' : 'border-white '}` +
          'flex h-[66px] w-[225px] items-center justify-center rounded-[10px] border-[1px]'
        }
        key={logoname}
        onClick={() => changeShowing(index)}
      >
        <img src={logo} alt={logoname} className="h-[30px]" />
      </button>
    )
  }

  return (
    <section className="g-page-height mx-[31px] mt-24 flex justify-center">
      <div className="flex max-w-full flex-col items-center">
        <div className="text-[56px] font-bold tracking-[1.5px]">
          Decentralized Storage{' '}
          <span className="text-[#6EFF89] phone:font-[#ffffff]">
            Comparison
          </span>
        </div>
        <div className="mt-[23px] grid grid-cols-3 gap-x-[15px] phone:hidden">
          {showArr.map((item, index) =>
            renderBtn(item.logo, index, item.logoname)
          )}
        </div>
        <div className="flex w-screen max-w-full justify-center">
          <div className="mt-10 grid grid-cols-3 items-center overflow-auto phone:flex">
            <div className="mr-1 flex w-[216px] min-w-[200px] flex-auto flex-col">
              <div className="my-1 h-[60px] w-full rounded-tl-[40px] border border-solid border-[#273838] bg-[#3B5D66]/10" />
              {blockNameRender(compItems)}
            </div>
            <div className="hidden phone:flex">
              {showArr.map((item) => blockItemRender(item))}
            </div>
            <div className="phone:hidden">
              {blockItemRender(showArr[showing])}
            </div>
            <div className="ml-1 flex w-[222px] min-w-[200px] flex-auto flex-col">
              <div className="my-1 flex h-[60px] w-full items-center justify-center rounded-tr-[40px] border border-solid border-[#314747] bg-[#3B5D66]/10">
                <TopiaLogo className="h-[30px]" />
              </div>
              {compTopia.map((item, index) => (
                <div
                  key={index}
                  className="my-1 flex h-[63.5px] w-full items-center justify-center border border-solid border-[#314747] bg-[#3B5D66]/10 px-6 text-center"
                >
                  {item === true ? (
                    <img className="h-8" src="/img/icon_yes.svg" alt="Yes" />
                  ) : item === false ? (
                    <img className="h-9" src="/img/icon_no.svg" alt="No" />
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
