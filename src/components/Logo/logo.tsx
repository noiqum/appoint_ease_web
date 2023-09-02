import React from 'react'
import './logo.scss'
import LogoImage from '../../assets/svg/logo.svg'
function Logo() {
  return (
    <div className='Logo'>
      <img src={LogoImage} alt='AppointEaseLogo' />
    </div>
  )
}

export default Logo
