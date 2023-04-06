import { ArrowDropDownIcon } from '../../svg/ArrowDropDownIcon'
import { GithubIcon } from '../../svg/GithubIcon'
import {
  TOPIA_DISCORD_LINK,
  TOPIA_GITHUB_LINK,
  TOPIA_MEDIUM_LINK,
  TOPIA_TWITTER_LINK,
} from '../../../constants/community'
import style from './styles.module.css'

export const HeaderButton = () => {
  const renderBtn = (href: string, name: string) => {
    return (
      <a
        className={`block px-[3px] py-[5px] md:px-8 md:py-2.5 ${style.navtransition}`}
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        {name}
      </a>
    )
  }
  return (
    <nav className="flex items-center">
      <div
        className={`relative mr-[1px] ml-[1px] md:mr-[36px] md:ml-12 ${style.headercommunitygroup}`}
      >
        <div className="flex cursor-pointer items-center justify-between py-3">
          <p
            className={`mr-[5px] md:mr-[10px] ${style.headertran} text-[14px] sm:text-[16px]`}
          >
            Community
          </p>
          <ArrowDropDownIcon className={`w-5 ${style.headerfill}`} />
        </div>
        <div
          className={`absolute top-full right-0 mt-[6px] rounded-[10px] py-[10px] md:mt-[15px] md:rounded-[9px] md:py-2 ${style.headlist} h-auto w-full border-[1px] border-[#37674A]/50 bg-[#070B0C]/50 text-center text-[15px] md:h-auto md:border-[#1A2626] md:text-[16px]`}
        >
          {renderBtn(TOPIA_TWITTER_LINK, 'Twitter')}
          {renderBtn(TOPIA_DISCORD_LINK, 'Discord')}
          {renderBtn(TOPIA_MEDIUM_LINK, 'Medium')}
        </div>
      </div>
      <a
        className={`ml-0 md:ml-[81px] ${style.navtransition}`}
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
