import React from 'react'
import './logo.scss'
import LogoImage from '../../assets/svg/logo.svg'

const Logo = React.memo(function Logo() {
  return (
    <div className='Logo'>
      <img src={LogoImage} alt='AppointEaseLogo' />
    </div>
  )
})

export default Logo
