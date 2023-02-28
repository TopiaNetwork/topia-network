import { ArrowDropDownIcon } from '../svg/ArrowDropDownIcon'
import {
  TOPIA_DISCORD_LINK,
  TOPIA_GITHUB_LINK,
  TOPIA_MEDIUM_LINK,
  TOPIA_TWITTER_LINK,
} from '../../constants/community'
import { TopiaLogo } from '../svg/TopiaLogo'

export const RootHeader = () => {
  return (
    <div className="fixed z-10 flex h-20 w-full items-center justify-center bg-[#070A0A]">
      <div className="mx-4 flex max-w-[1120px] flex-auto items-center justify-between">
        <TopiaLogo className="w-[140px]" />
        <div className="flex items-center justify-between">
          {/*<div className="flex cursor-pointer items-center justify-between pl-12">*/}
          {/*  <p className="mr-3">Build</p>*/}
          {/*  <ArrowDropDownIcon className="w-5" />*/}
          {/*</div>*/}
          {/*<div className="flex cursor-pointer items-center justify-between pl-12">*/}
          {/*  <p className="mr-3">Learn</p>*/}
          {/*  <ArrowDropDownIcon className="w-5" />*/}
          {/*</div>*/}
          <div className="group/0 relative pl-12">
            <div className="group/1 flex cursor-pointer items-center justify-between py-3">
              <p className="mr-3 group-hover/1:text-[#96FA96]">Community</p>
              <ArrowDropDownIcon className="w-5 group-hover/1:fill-[#96FA96]" />
            </div>
            <div className="invisible absolute top-full right-0 rounded-[10px] border border-solid border-[#1A2626] bg-[#070A0A] py-2 opacity-0 transition-all group-hover/0:visible group-hover/0:opacity-100">
              <a
                className="block px-8 py-2.5 hover:text-[#96FA96]"
                href={TOPIA_TWITTER_LINK}
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>
              <a
                className="block px-8 py-2.5 hover:text-[#96FA96]"
                href={TOPIA_DISCORD_LINK}
                target="_blank"
                rel="noreferrer"
              >
                Discord
              </a>
              <a
                className="block px-8 py-2.5 hover:text-[#96FA96]"
                href={TOPIA_MEDIUM_LINK}
                target="_blank"
                rel="noreferrer"
              >
                Medium
              </a>
            </div>
          </div>
          <a
            className="pl-12 hover:text-[#96FA96]"
            href={TOPIA_GITHUB_LINK}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          {/*<div className="pl-14">About Us</div>*/}
        </div>
      </div>
    </div>
  )
}
