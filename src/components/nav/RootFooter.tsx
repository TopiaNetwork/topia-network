import { TwitterIcon } from '../svg/TwitterIcon'
import { DiscordIcon } from '../svg/DiscordIcon'
import { MediumIcon } from '../svg/MediumIcon'
import {
  TOPIA_DISCORD_LINK,
  TOPIA_MEDIUM_LINK,
  TOPIA_TWITTER_LINK,
} from '../../constants/community'
import { TopiaLogo } from '../svg/TopiaLogo'

export const RootFooter = () => {
  return (
    <div className="mt-48 bg-[url('/img/bg_footer.webp')] bg-top bg-repeat-y pt-36">
      <div className="flex justify-center">
        <div className="w-[1150px] max-w-[1150px]">
          <div className="mx-4 flex justify-center">
            <span className="pr-1.5 text-[40px] font-bold text-[#33F8FF]">
              JOIN
            </span>
            <span className="px-1.5 text-[40px] font-bold">THE</span>
            <span className="px-1.5 text-[40px] font-bold">COMMUNITY</span>
          </div>
          <div className="mx-4 mt-2 max-w-[1120px] text-center text-lg tracking-wide">
            Get involved, Take part in community discussions and keep up with
            important updates
          </div>
          <div className="mx-1.5 mt-[76px] flex flex-wrap justify-between">
            <a
              className="group m-2.5 block h-[132px] w-[212px] flex-auto rounded-[10px] border border-solid border-[#17271F] bg-[#0C1414] shadow-[0_6px_9px_1px_rgba(150,250,150,0.1)] hover:bg-[#96FA96] hover:text-black"
              href={TOPIA_TWITTER_LINK}
              target="_blank"
              rel="noreferrer"
            >
              <div className="mx-8 mt-7 flex">
                <TwitterIcon className="w-[28px] group-hover:fill-black" />
                <div className="ml-3">Twitter</div>
              </div>
              <div className="ml-8 mt-5 text-sm text-[#B3B3B3] group-hover:text-black group-hover:underline">
                Follow the latest news
              </div>
            </a>
            <a
              href={TOPIA_DISCORD_LINK}
              target="_blank"
              rel="noreferrer"
              className="group m-2.5 block h-[132px] w-[212px] flex-auto rounded-[10px] border border-solid border-[#17271F] bg-[#0C1414] shadow-[0_6px_9px_1px_rgba(150,250,150,0.1)] hover:bg-[#96FA96] hover:text-black"
            >
              <div className="mx-8 mt-7 flex">
                <DiscordIcon className="w-[28px] group-hover:fill-black" />
                <div className="ml-3">Discord</div>
              </div>
              <div className="ml-9 mt-5 text-sm text-[#B3B3B3] group-hover:text-black group-hover:underline">
                Get involved
              </div>
            </a>
            <a
              href={TOPIA_MEDIUM_LINK}
              target="_blank"
              rel="noreferrer"
              className="group m-2.5 block h-[132px] w-[212px] flex-auto rounded-[10px] border border-solid border-[#17271F] bg-[#0C1414] shadow-[0_6px_9px_1px_rgba(150,250,150,0.1)] hover:bg-[#96FA96] hover:text-black"
            >
              <div className="mx-8 mt-7 flex">
                <MediumIcon className="w-[28px] group-hover:fill-black" />
                <div className="ml-3">Medium</div>
              </div>
              <div className="ml-[34px] mt-5 text-sm text-[#B3B3B3] group-hover:text-black group-hover:underline">
                Join the community
              </div>
            </a>
            {/*<div className="m-2.5 h-[132px] w-[420px] flex-auto rounded-[10px] border border-solid border-[#17271F] bg-[#0C1414] shadow-[0_6px_9px_1px_rgba(150,250,150,0.1)]">*/}
            {/*  <div className="mx-8 mt-7 flex">*/}
            {/*    <img className="w-[28px]" src="/img/icon_email.svg" alt="" />*/}
            {/*    <div className="ml-3">Email</div>*/}
            {/*  </div>*/}
            {/*  <div className="mx-8 mt-3 flex items-center">*/}
            {/*    <AppTextField*/}
            {/*      variant="outlined"*/}
            {/*      className="flex-auto placeholder:text-[#B3B3B3]"*/}
            {/*      sx={{*/}
            {/*        marginRight: 2,*/}
            {/*        '& .MuiOutlinedInput-root': {*/}
            {/*          borderRadius: '8px',*/}
            {/*          height: '38px',*/}
            {/*          fontSize: '14px',*/}
            {/*        },*/}
            {/*        '& .MuiOutlinedInput-input': {*/}
            {/*          '&::placeholder': {*/}
            {/*            color: '#B3B3B3',*/}
            {/*          },*/}
            {/*          'caret-color': 'white',*/}
            {/*          color: 'white',*/}
            {/*        },*/}
            {/*      }}*/}
            {/*      placeholder="Your email address"*/}
            {/*    />*/}
            {/*    <div className="flex items-center justify-center rounded-lg bg-[#96FA96]">*/}
            {/*      <span className="py-2 px-2.5 text-sm text-black">*/}
            {/*        Subscribe*/}
            {/*      </span>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="mx-4 mt-24 flex h-[94px] max-w-[1120px] flex-auto items-center justify-between border-t border-solid border-[rgba(150,250,150,0.1)]">
          <TopiaLogo className="w-[124px]" />
          <div className="flex items-center">
            {/*<div className="mx-1.5 rounded-full border border-solid border-[#17271F] bg-[#0C1414] px-5 py-1.5 text-sm shadow-[0_1px_3px_rgba(150,250,150,0.1)]">*/}
            {/*  Terms of use*/}
            {/*</div>*/}
            {/*<div className="ml-1.5 rounded-full border border-solid border-[#17271F] bg-[#0C1414] px-5 py-1.5 text-sm shadow-[0_1px_3px_rgba(150,250,150,0.1)]">*/}
            {/*  Privacy Policy*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    </div>
  )
}
