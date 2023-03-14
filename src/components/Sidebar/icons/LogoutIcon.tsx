import React from 'react'
import { useNavigate } from 'react-router-dom'

const LogoutIcon = () => {
  const navigate = useNavigate()

  const logOut = () => {
    navigate('/login')
  }

  return (
    <svg
      data-name='Component 205 \u2013 15'
      xmlns='http://www.w3.org/2000/svg'
      width={48}
      height={48}
      viewBox='30 0 5 45'
      onClick={() => {
        logOut()
      }}
    >
      <g data-name='Group 5881'>
        <path data-name='Path 1185' d='M12 12h24v24H12Z' fill='none' />
      </g>
      <g data-name='Group 5883'>
        <g data-name='Group 5882' fill='grey'>
          <path
            data-name='Path 1186'
            d='M17.225 17.105h7.316v-1.97h-9.406v17.729h9.406v-1.97h-7.316Z'
          />
          <path data-name='Path 1187' d='m32.864 24-4.181-4.181v3.135h-8.361v2.09h8.361v3.135Z' />
        </g>
      </g>
    </svg>
  )
}

export default LogoutIcon
