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
        className={`block px-8 py-2.5 font-thin ${style.navtransition}`}
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
        className={`relative mr-[36px] ml-12 phone:mr-7 ${style.headercommunitygroup}`}
      >
        <div className="flex cursor-pointer items-center justify-between py-3">
          <p
            className={`mr-[10px] phone:mr-[28px] ${style.headertran} text-[29px] phone:text-[15px]`}
          >
            Community
          </p>
          <ArrowDropDownIcon className={`w-5 ${style.headerfill}`} />
        </div>
        <div
          className={`absolute top-full right-0 rounded-[10px] py-[30px] phone:py-2 ${style.headlist} h-auto w-full border border-[#37674A] bg-[#070B0C]/50 text-center text-[29px] phone:h-auto phone:text-[15px]`}
        >
          {renderBtn(TOPIA_TWITTER_LINK, 'Twitter')}
          {renderBtn(TOPIA_DISCORD_LINK, 'Discord')}
          {renderBtn(TOPIA_MEDIUM_LINK, 'Medium')}
        </div>
      </div>
      <a
        className={`ml-0 phone:ml-[81px] ${style.navtransition}`}
        href={TOPIA_GITHUB_LINK}
        target="_blank"
        rel="noreferrer"
      >
        {/* GitHub */}
        <div className="hidden phone:block phone:text-[15px]">GitHub</div>
        <div className="relative top-[-2px] block phone:hidden">
          <GithubIcon className="h-[41px]" />
        </div>
      </a>
      {/* <div className="pl-14">About Us</div> */}
    </nav>
  )
}
