import { TopiaLogo } from '../svg/TopiaLogo'
import { ArrowUp } from '../svg/ArrowUp'

export const RootFooter = () => {
  return (
    <footer className="mt-48 bg-top bg-repeat-y pt-36">
      <div className="flex justify-center">
        <div className="mx-4 mt-24 flex h-[94px] max-w-[1120px] flex-auto items-center justify-between border-t border-solid border-[rgba(150,250,150,0.1)]">
          <TopiaLogo className="w-[124px]" />
          <button>
            <ArrowUp />
            Back to top
          </button>
          <div>@copyright 2023</div>
        </div>
      </div>
    </footer>
  )
}
