import { TwitterIcon } from '../../svg/TwitterIcon'
import { DiscordIcon } from '../../svg/DiscordIcon'
import { MediumIcon } from '../../svg/MediumIcon'
import { TopiaIcon } from '../../svg/TopiaIcon'
import {
  TOPIA_DISCORD_LINK,
  TOPIA_MEDIUM_LINK,
  TOPIA_TWITTER_LINK,
} from '../../../constants/community'

export const RootFooterPhone = () => {
  const communityBtn = (
    Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
    href: string
  ) => {
    return (
      <div className="group flex flex-col items-center">
        <a
          href={href}
          className="flex flex-col items-center justify-center"
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex h-[32px] w-[32px] items-center justify-center rounded-[5px] bg-white">
            <div className="flex h-full w-full items-center justify-center rounded-[5px]">
              <Icon width={28} height={28} className="fill-black" />
            </div>
          </div>
        </a>
      </div>
    )
  }
  return (
    <section className="relative z-10 mt-[100px] flex h-[600px] w-full flex-col items-center justify-center md:hidden">
      {/* <div className="flex flex-col items-center justify-center rounded-[16px] bg-[#070B0C] pb-[26px]">
      </div> */}
      <TopiaIcon className="h-[80px]" />
      <h1 className="mt-[24px] flex items-center justify-center space-x-2 text-[28px] tracking-[2px] sm:text-[35px] md:text-[57px]">
        <b className="text-[#6eff89]">Join</b>
        <span>the</span>
        <span>Community</span>
      </h1>
      <h2 className="text-center text-[15px] font-thin">
        <p>Get involved, take part in community</p>
        <p>discussions and keep up with</p>
        <p>important updates</p>
      </h2>
      <div className="mt-[45px] grid grid-cols-3 gap-x-[17px]">
        {/* <div className="grid"> */}
        {communityBtn(TwitterIcon, TOPIA_TWITTER_LINK)}
        {communityBtn(DiscordIcon, TOPIA_DISCORD_LINK)}
        {communityBtn(MediumIcon, TOPIA_MEDIUM_LINK)}
      </div>
      <p className="absolute bottom-[30px] text-[12px] font-thin">
        © 2023 Topia
      </p>
    </section>
  )
}
