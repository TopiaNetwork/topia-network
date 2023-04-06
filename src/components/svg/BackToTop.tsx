import { SVGProps } from 'react'

export const BackToTop = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      version="1.1"
      x="0"
      y="0"
      viewBox="0 0 98 98"
      xmlSpace="preserve"
      enableBackground="new 0 0 98 98"
      {...props}
    >
      <style>
        {`.backtoupst0{opacity:0.6;stroke:#6EFF89;stroke-width:2;stroke-miterlimit:10}.st1{fill:#6EFF89}`}
      </style>
      <circle className="backtoupst0" cx="49" cy="49" r="48" />

      <g>
        <path
          className="st1"
          d="M49.42 79.29a2.5 2.5 0 0 1-2.5-2.5v-31a2.5 2.5 0 0 1 5 0v31a2.5 2.5 0 0 1-2.5 2.5z"
        />

        <path
          className="st1"
          d="M58.97 55.33c-.98.98-2.56.98-3.54 0l-7.78-7.78c-.98-.98-.98-2.56 0-3.54s2.56-.98 3.54 0l7.78 7.78c.98.98.98 2.57 0 3.54z"
        />

        <path
          className="st1"
          d="M39.88 55.33c-.98-.98-.98-2.56 0-3.54l7.78-7.78c.98-.98 2.56-.98 3.54 0s.98 2.56 0 3.54l-7.78 7.78c-.98.98-2.57.98-3.54 0z"
        />
      </g>
      <path
        className="st1"
        d="M61 36.47H37c-1.1 0-2-.9-2-2s.9-2 2-2h24a2 2 0 1 1 0 4z"
      />
    </svg>
  )
}
