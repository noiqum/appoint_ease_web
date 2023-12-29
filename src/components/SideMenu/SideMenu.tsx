import React from 'react'
import Logo from '../Logo/logo'
import './SideMenu.scss'
import SideMenuLink, { PathEnum } from '../SideMenuLink/SideMenuLink'
import Profile from '../Profile/Profile'
interface ISideMenuProps {
  isOpen: boolean
}

function SideMenu({ isOpen }: ISideMenuProps) {
  return (
    <div className={`SideMenu ${isOpen ? 'open' : 'close'}`}>
      <div className='SideMenu__content'>
        <div className='SideMenu__logo'>
          <div className='SideMenu__logo__wrapper'>
            <Logo></Logo>
          </div>
          <div className='SideMenu__logo__company'>Appointment Ease</div>
        </div>
        <div className='SideMenu__links'>
          <SideMenuLink path={PathEnum.appointment}></SideMenuLink>
          <SideMenuLink path={PathEnum.calendar}></SideMenuLink>
          <SideMenuLink path={PathEnum.settings}></SideMenuLink>
        </div>
      </div>

      <Profile></Profile>
    </div>
  )
}

export default SideMenu
