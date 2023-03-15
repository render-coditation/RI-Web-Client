import * as React from 'react'
import { SVGProps } from 'react'

const EditIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={34} height={34} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={17} cy={17} r={17} fill='#3C82F5' fillOpacity={0.15} />
    <g clipPath='url(#a)'>
      <path
        d='M21.091 9.635a2.314 2.314 0 1 1 3.273 3.273L13.318 23.953l-4.5 1.227 1.228-4.5L21.09 9.635Z'
        fill='#3C82F5'
        stroke='#3C82F5'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' transform='translate(8 8)' d='M0 0h18v18H0z' />
      </clipPath>
    </defs>
  </svg>
)

export default EditIcon
