import { TwitterIcon } from '../../svg/TwitterIcon'
import { DiscordIcon } from '../../svg/DiscordIcon'
import { MediumIcon } from '../../svg/MediumIcon'
import {
  TOPIA_DISCORD_LINK,
  TOPIA_MEDIUM_LINK,
  TOPIA_TWITTER_LINK,
} from '../../../constants/community'
import style from './styles.module.css'

export const HomeCommunity = () => {
  const communityBtn = (
    Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
    href: string,
    name: string
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
            className={`flex h-[40px] w-[40px] items-center justify-center rounded-[5px] bg-white`}
          >
            <div
              className={`flex h-full w-full items-center justify-center rounded-[5px] ${style.icon}`}
            >
              <Icon className="w-[28px] fill-black" />
            </div>
          </div>
          <div className={`mt-1 text-[10px] text-[#6eff89] ${style.iconname}`}>
            {name}
          </div>
        </a>
      </div>
    )
  }
  return (
    <section className="relative bottom-[-20px] z-10 mt-[200px] flex w-full items-end justify-between">
      <div className="h-[90px] flex-grow rounded-[16px] bg-[#0F171A]"></div>
      <div className="flex basis-[1172px] items-center justify-center rounded-[16px] bg-[#070B0C] pb-[26px]">
        <div className="g-card flex max-w-[1120px] flex-grow items-center justify-between px-[52px] py-[36px]">
          <div className="w-[409px]">
            <h1 className="text-[40px]">
              <b className="text-[#6eff89]">Join</b> the Community
            </h1>
            <h2 className="text-[16px]">
              Get involved, Take part in community discussions and keep up with
              important updates
            </h2>
          </div>
          <div className="mr-[80px] grid grid-cols-3 gap-6">
            {/* <div className="grid"> */}
            {communityBtn(TwitterIcon, TOPIA_TWITTER_LINK, 'Twitter')}
            {communityBtn(DiscordIcon, TOPIA_DISCORD_LINK, 'Discord')}
            {communityBtn(MediumIcon, TOPIA_MEDIUM_LINK, 'Medium')}
          </div>
        </div>
      </div>
      <div className="h-[90px] flex-grow rounded-[16px] bg-[#0F171A]"></div>
    </section>
  )
}
