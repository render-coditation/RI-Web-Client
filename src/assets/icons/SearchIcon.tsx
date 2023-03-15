import * as React from 'react'
import { SVGProps } from 'react'

const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g
      clipPath='url(#a)'
      stroke='#B9B8B8'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16ZM19 18.998l-4.35-4.35' />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h20v20H0z' />
      </clipPath>
    </defs>
  </svg>
)

export default SearchIcon
