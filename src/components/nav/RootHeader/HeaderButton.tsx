import { ArrowDropDownIcon } from '../../svg/ArrowDropDownIcon'
import { GithubIcon } from '../../svg/GithubIcon'
import {
  TOPIA_DISCORD_LINK,
  TOPIA_GITHUB_LINK,
  TOPIA_MEDIUM_LINK,
  TOPIA_TWITTER_LINK,
} from '../../../constants/community'

export const HeaderButton = () => {
  const renderBtn = (href: string, name: string) => {
    return (
      <a
        className="block px-[3px] py-[5px] text-[#fff] transition-colors duration-300 ease-in-out md:px-8 md:py-2.5 md:hover:text-[#6eff89]"
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        {name}
      </a>
    )
  }
  return (
    <nav className="flex h-full items-center">
      <div className="group relative mr-[1px] ml-[1px] h-full md:mr-[36px] md:ml-12">
        <div className="flex h-full cursor-pointer items-center justify-between py-3">
          <p className="mr-[5px] text-[14px] text-[#fff] transition-colors duration-300 ease-in-out sm:text-[16px] md:mr-[10px] md:group-hover:text-[#6eff89]">
            Community
          </p>
          <ArrowDropDownIcon className="w-5 md:group-hover:fill-[#6eff89]" />
        </div>
        <div
          // className={`absolute top-full right-0 rounded-[10px] py-[10px] md:rounded-[9px] md:py-2 ${style.headlist} h-auto w-full border-[1px] border-[#37674A]/50 bg-[#070B0C]/50 text-center text-[15px] md:h-auto md:border-[#1A2626] md:text-[16px]`}
          className="absolute top-full right-0 hidden h-auto w-full rounded-[10px] border-[1px] border-[#37674A]/50 bg-[#070B0C]/50 py-[10px] text-center text-[15px] group-hover:block md:h-auto md:rounded-[9px] md:border-[#1A2626] md:py-2 md:text-[16px]"
        >
          {renderBtn(TOPIA_TWITTER_LINK, 'Twitter')}
          {renderBtn(TOPIA_DISCORD_LINK, 'Discord')}
          {renderBtn(TOPIA_MEDIUM_LINK, 'Medium')}
        </div>
      </div>
      <a
        // className={`ml-0 md:ml-[81px] ${style.navtransition}`}
        className="ml-0 text-[#fff] transition duration-300 ease-in-out md:ml-[81px] md:hover:text-[#6eff89]"
        href={TOPIA_GITHUB_LINK}
        target="_blank"
        rel="noreferrer"
      >
        {/* GitHub */}
        <div className="hidden md:block md:text-[16px]">GitHub</div>
        <div className="relative top-[-2px] right-[-5px] block md:hidden">
          <GithubIcon className="h-[28px] sm:h-[32px] md:h-[41px]" />
        </div>
      </a>
      {/* <div className="pl-14">About Us</div> */}
    </nav>
  )
}
