import { TwitterIcon } from '../svg/TwitterIcon'
import { DiscordIcon } from '../svg/DiscordIcon'
import { MediumIcon } from '../svg/MediumIcon'
import {
  TOPIA_DISCORD_LINK,
  TOPIA_MEDIUM_LINK,
  TOPIA_TWITTER_LINK,
} from '../../constants/community'

export const HomeCommunity = () => {
  const communityBtn = (
    Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
    href: string,
    name: string
  ) => {
    return (
      <a
        className="group m-2.5 block h-[132px] w-[212px] flex-auto rounded-[10px] border border-solid border-[#17271F] bg-[#0C1414] shadow-[0_6px_9px_1px_rgba(150,250,150,0.1)] hover:bg-[#96FA96] hover:text-black"
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        <div className="mx-8 mt-7 flex">
          <Icon className="w-[28px] group-hover:fill-black" />
          <div className="ml-3">{name}</div>
        </div>
      </a>
    )
  }
  return (
    <section className="g-page-height w-full">
      <div></div>
      <div>
        <div>
          <h1>Join the Community</h1>
          <h2>
            Get involved, Take part in community discussions and keep up with
            important updates
          </h2>
        </div>
        <div className="mx-1.5 mt-[76px] flex flex-wrap justify-between">
          {/* <div className="grid"> */}
          {communityBtn(TwitterIcon, TOPIA_TWITTER_LINK, 'twitter')}
          {communityBtn(DiscordIcon, TOPIA_DISCORD_LINK, 'discord')}
          {communityBtn(MediumIcon, TOPIA_MEDIUM_LINK, 'medium')}
        </div>
      </div>
      <div></div>
    </section>
  )
}
