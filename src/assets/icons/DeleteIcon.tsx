import * as React from 'react'
import { SVGProps } from 'react'

const DeleteIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={34} height={34} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={17} cy={17} r={17} fill='#FFE2E2' />
    <path
      d='M8 11h18M24 11v14a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2V11m3 0V9a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M15 16v6M19 16v6'
      stroke='#FE3D3C'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export default DeleteIcon
