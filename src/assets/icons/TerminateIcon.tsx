import * as React from 'react'
import { SVGProps } from 'react'

const TerminateIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={34} height={34} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={17} cy={17} r={17} fill='red' />
    <path
      d='M17 27c5.523 0 10-4.477 10-10S22.523 7 17 7 7 11.477 7 17s4.477 10 10 10ZM9.93 9.93l14.14 14.14'
      stroke='#fff'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export default TerminateIcon
