import { TwitterIcon } from '../../svg/TwitterIcon'
import { DiscordIcon } from '../../svg/DiscordIcon'
import { MediumIcon } from '../../svg/MediumIcon'
import { TopiaIcon } from '../../svg/TopiaIcon'
import {
  TOPIA_DISCORD_LINK,
  TOPIA_MEDIUM_LINK,
  TOPIA_TWITTER_LINK,
} from '../../../constants/community'
import style from './styles.module.css'

export const RootFooterPhone = () => {
  const communityBtn = (
    Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
    href: string
  ) => {
    return (
      <div className="group flex flex-col items-center">
        <a
          href={href}
          className={`flex flex-col items-center justify-center ${style.icongroup}`}
          target="_blank"
          rel="noreferrer"
        >
          <div
            className={`flex h-[56px] w-[56px] items-center justify-center rounded-[5px] bg-white`}
          >
            <div
              className={`flex h-full w-full items-center justify-center rounded-[5px] ${style.icon}`}
            >
              <Icon width={40} height={40} className="fill-black" />
            </div>
          </div>
          {/* <div className={`mt-1 text-[10px] text-[#6eff89] ${style.iconname}`}>
            {name}
          </div> */}
        </a>
      </div>
    )
  }
  return (
    <section className="relative z-10 mt-[100px] flex h-[800px] w-full flex-col items-center justify-center md:hidden">
      {/* <div className="flex flex-col items-center justify-center rounded-[16px] bg-[#070B0C] pb-[26px]">
      </div> */}
      <TopiaIcon className="h-[102px]" />
      <h1 className="mt-[34px] flex flex-col items-center justify-center text-[40px] tracking-[2px] sm:flex-row sm:space-x-4 md:text-[57px]">
        <b className="text-[#6eff89]">Join</b>
        <span>the</span>
        <span>Community</span>
      </h1>
      <h2 className="text-center text-[24px] font-thin">
        <p>Get involved, Take part in community</p>
        <p>discussions and keep up with</p>
        <p>important updates</p>
      </h2>
      <div className="mt-[45px] grid grid-cols-3 gap-x-[35px]">
        {/* <div className="grid"> */}
        {communityBtn(TwitterIcon, TOPIA_TWITTER_LINK)}
        {communityBtn(DiscordIcon, TOPIA_DISCORD_LINK)}
        {communityBtn(MediumIcon, TOPIA_MEDIUM_LINK)}
      </div>
      <p className="absolute bottom-[30px] text-[20px] font-thin">
        @copyright 2023
      </p>
    </section>
  )
}
