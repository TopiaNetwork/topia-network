import { SVGProps } from 'react'

export const ArrowUp = (props: SVGProps<SVGSVGElement>) => {
  return (
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   width="10"
    //   height="5"
    //   viewBox="0 0 10 5"
    //   fill="#fff"
    //   {...props}
    // >
    //   <path
    //     fillRule="evenodd"
    //     d="M863,42l-5-5h10Z"
    //     transform="translate(-858 -37)"
    //   />
    // </svg>
    <svg
      version="1.1"
      id="footer_icon"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 36 36"
      // style="enable-background:new 0 0 36 36;"
      xmlSpace="preserve"
      {...props}
    >
      <g>
        <path
          d="M18,26L18,26c-0.83,0-1.5-0.67-1.5-1.5v-13c0-0.83,0.67-1.5,1.5-1.5h0c0.83,0,1.5,0.67,1.5,1.5v13
        C19.5,25.33,18.83,26,18,26z"
        />
        <path
          d="M23.3,16.8L23.3,16.8c-0.59,0.59-1.54,0.59-2.12,0l-4.24-4.24c-0.59-0.59-0.59-1.54,0-2.12l0,0c0.59-0.59,1.54-0.59,2.12,0
        l4.24,4.24C23.89,15.27,23.89,16.22,23.3,16.8z"
        />
        <path
          d="M12.7,16.8L12.7,16.8c-0.59-0.59-0.59-1.54,0-2.12l4.24-4.24c0.59-0.59,1.54-0.59,2.12,0l0,0c0.59,0.59,0.59,1.54,0,2.12
        l-4.24,4.24C14.23,17.39,13.28,17.39,12.7,16.8z"
        />
      </g>
    </svg>
  )
}
