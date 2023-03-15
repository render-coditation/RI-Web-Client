import * as React from 'react'
import { SVGProps } from 'react'

const ArrowDownIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#a)'>
      <path d='m12 16.414-6-6 2-2 4 4 4-4 2 2-6 6Z' fill='#ABB5BE' />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h24v24H0z' />
      </clipPath>
    </defs>
  </svg>
)

export default ArrowDownIcon
