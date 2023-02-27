import { SVGProps } from 'react'

export const UniverseBg1 = (props: SVGProps<SVGSVGElement>) => {
  return (
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   viewBox="0 0 24 24"
    //   fill="currentColor"
    //   {...props}
    // >
    //   <path
    //     fillRule="evenodd"
    //     d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z"
    //     clipRule="evenodd"
    //   />
    // </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="1920"
      height="1920"
      viewBox="0 0 1920 1920"
      {...props}
    >
      <defs>
        <clipPath id="clip-path">
          <rect x="-0.5" y="-123" width="1920" height="1962" />
        </clipPath>
        <filter
          id="filter"
          x="68.5"
          y="80"
          width="1783"
          height="1783"
          filterUnits="userSpaceOnUse"
        >
          <feGaussianBlur
            result="blur"
            stdDeviation="83.333"
            in="SourceAlpha"
          />
          <feComposite result="composite" />
          <feComposite result="composite-2" />
          <feComposite result="composite-3" />
          <feFlood result="flood" floodColor="#00f7ff" floodOpacity="0.3" />
          <feComposite result="composite-4" operator="in" in2="composite-3" />
          <feBlend result="blend" mode="screen" in2="SourceGraphic" />
          <feBlend result="blend-2" in="SourceGraphic" />
        </filter>
      </defs>
      <g clipPath="url(#clip-path)">
        <g id="icon_bg">
          <g fill="#070a0a" filter="url(#filter)">
            <circle
              id="oval_01_copy"
              data-name="oval_01 copy"
              fill="inherit"
              stroke="inherit"
              strokeLinejoin="round"
              strokeWidth="2px"
              filter="none"
              cx="959.5"
              cy="971"
              r="640"
            />
            <image
              xmlns="http://www.w3.org/2000/svg"
              x="319"
              y="331"
              width="1280"
              height="1280"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xlinkHref="/img/section1_bg_inner.webp"
            />
          </g>
          <use xlinkHref="#oval_01_copy" stroke="#96fa96" fill="none" />
        </g>
      </g>
    </svg>
  )
}
