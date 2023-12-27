import React from 'react'
import Logo from '../Logo/logo'
import './SideMenu.scss'

function SideMenu() {
  return (
    <div className='SideMenu'>
      <div className='SideMenu__logo'>
        <div className='SideMenu__logo__wrapper'>
          <Logo></Logo>
        </div>
        <div className='SideMenu__logo__company'>Appointment Ease</div>
      </div>
    </div>
  )
}

export default SideMenu
