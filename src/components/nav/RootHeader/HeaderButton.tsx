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
        className={`block px-8 py-2.5 ${style.navtransition}`}
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
        className={`relative mr-7 ml-12 max-sm:hidden ${style.headercommunitygroup}`}
      >
        <div className="flex cursor-pointer items-center justify-between py-3">
          <p className={`mr-[28px] ${style.headertran}`}>Community</p>
          <ArrowDropDownIcon className={`w-5 ${style.headerfill}`} />
        </div>
        <div
          className={`absolute top-full right-0 py-2 ${style.headlist} g-card`}
        >
          {renderBtn(TOPIA_TWITTER_LINK, 'Twitter')}
          {renderBtn(TOPIA_DISCORD_LINK, 'Discord')}
          {renderBtn(TOPIA_MEDIUM_LINK, 'Medium')}
        </div>
      </div>
      <a
        className={`ml-[81px] max-sm:ml-0 ${style.navtransition}`}
        href={TOPIA_GITHUB_LINK}
        target="_blank"
        rel="noreferrer"
      >
        {/* GitHub */}
        <div className="max-sm:hidden">GitHub</div>
        <div className="relative top-[-2px] hidden max-sm:block">
          <GithubIcon />
        </div>
      </a>
      {/* <div className="pl-14">About Us</div> */}
    </nav>
  )
}
