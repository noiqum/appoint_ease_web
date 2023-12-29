import React from 'react'
import { useNavigate } from 'react-router-dom'
import './SideMenuLink.scss'
import AppointmentIcon from '../../assets/svg/appointment-icon.svg'
import CalendarIcon from '../../assets/svg/side-calendar-icon.svg'
import SettingsIcon from '../../assets/svg/settings-icon.svg'
import { sideMenuActions } from '../../store/sideMenuSlice'
import { useAppDispatch } from '../../store/hooks'

export enum PathEnum {
  appointment = '/appointments',
  calendar = '/calendar',
  settings = '/settings',
}

interface ISideMenuLinkProps {
  path: PathEnum
}

interface ISideMenuLinkData {
  name: string
  icon: string
}

type TSideMenuData = {
  [key in PathEnum]: ISideMenuLinkData
}

function SideMenuLink({ path }: ISideMenuLinkProps) {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const isMenuStatusActive = () => {
    return window.location.pathname.includes(path) ? 'active' : 'not-active'
  }
  function navigateToGivenPathandCloseMenu() {
    navigate(`/dashboard${path}`)
    dispatch(sideMenuActions.setOpenStatus(false))
  }
  const sideMenuData: TSideMenuData = {
    '/appointments': {
      name: 'appointments',
      icon: AppointmentIcon,
    },
    '/calendar': {
      name: 'calendar',
      icon: CalendarIcon,
    },
    '/settings': {
      name: 'settings',
      icon: SettingsIcon,
    },
  }
  return (
    <div
      className={`SideMenuLink ${isMenuStatusActive()}`}
      onClick={navigateToGivenPathandCloseMenu}
    >
      <img src={sideMenuData[path].icon} alt='' /> <span>{sideMenuData[path].name}</span>
    </div>
  )
}

export default SideMenuLink
