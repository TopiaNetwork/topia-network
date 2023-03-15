'use client'
import { ArrowDropDownIcon } from '../svg/ArrowDropDownIcon'
import GitHubIcon from '@mui/icons-material/GitHub'
import {
  TOPIA_DISCORD_LINK,
  TOPIA_GITHUB_LINK,
  TOPIA_MEDIUM_LINK,
  TOPIA_TWITTER_LINK,
} from '../../constants/community'

export const HeaderButton = () => {
  const renderContent = () => {
    return (
      <nav className="flex items-center">
        {/*<div className="flex cursor-pointer items-center justify-between pl-12">*/}
        {/*  <p className="mr-3">Build</p>*/}
        {/*  <ArrowDropDownIcon className="w-5" />*/}
        {/*</div>*/}
        {/*<div className="flex cursor-pointer items-center justify-between pl-12">*/}
        {/*  <p className="mr-3">Learn</p>*/}
        {/*  <ArrowDropDownIcon className="w-5" />*/}
        {/*</div>*/}
        <div className="group/0 relative ml-12 max-sm:hidden">
          <div className="flex cursor-pointer items-center justify-between py-3">
            <p className="mr-3 group-hover/0:text-[#96FA96]">Community</p>
            <ArrowDropDownIcon className="w-5 group-hover/0:fill-[#96FA96]" />
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
          className="ml-5 hover:text-[#96FA96] max-sm:ml-0"
          href={TOPIA_GITHUB_LINK}
          target="_blank"
          rel="noreferrer"
        >
          {/* GitHub */}
          <div className="max-sm:hidden">GitHub</div>
          <div className="relative top-[-3px] hidden max-sm:block">
            <GitHubIcon />
          </div>
        </a>
        {/* <div className="pl-14">About Us</div> */}
      </nav>
    )
  }
  return renderContent()
}
