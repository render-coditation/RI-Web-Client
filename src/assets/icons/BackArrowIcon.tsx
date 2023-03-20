import * as React from 'react'
import { SVGProps } from 'react'

const BackArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g
      clipPath='url(#a)'
      stroke='#000'
      strokeWidth={3}
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M25.335 16H6.668M16.001 25.338l-9.333-9.333 9.333-9.333' />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' transform='translate(5.334 5.336)' d='M0 0h21.333v21.333H0z' />
      </clipPath>
    </defs>
  </svg>
)

export default BackArrowIcon
