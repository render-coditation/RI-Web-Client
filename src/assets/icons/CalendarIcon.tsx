import * as React from 'react'
import { SVGProps } from 'react'

const CalendarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={20} height={22} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#a)'>
      <path
        d='M10 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm5 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0-4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-5 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm7-12h-1V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H3a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3Zm1 17a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-9h16v9Zm0-11H2V5a1 1 0 0 1 1-1h1v1a1 1 0 0 0 2 0V4h8v1a1 1 0 0 0 2 0V4h1a1 1 0 0 1 1 1v3ZM5 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z'
        fill='#3C82F5'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h20v22H0z' />
      </clipPath>
    </defs>
  </svg>
)

export default CalendarIcon
